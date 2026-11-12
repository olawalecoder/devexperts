"use server"

import {Session} from "next-auth";
import {ZodError, ZodSchema} from "zod";

import {auth} from "@/auth";
import {RequestError, UnauthorizedError, ValidationError} from "@/lib/http-errors";
import dbConnect from "@/lib/mongoose";

type ActionOptions<T> = {
    params?: T;
    schema?: ZodSchema<T>;
    authorize?: boolean;
}

async function action<T>({
    params, schema, authorize = false,} : ActionOptions<T>) {
    if (schema && params) {
        try {
            schema.parse(params)
        } catch (error) {
            if (error instanceof ZodError){
                return new ValidationError(
                    error.flatten().fieldErrors as Record<string, string[]>
                );
            } else {
                return new Error("Schema validation failed");
            }
        }
    }

    let session : Session | null = null;

    if (authorize) {
        session = await auth()

        if (!session) {
            return new UnauthorizedError();
        }
    }
    try {
        await dbConnect();
    } catch {
        // Action callers already render Error results. Do not crash the whole RSC page
        // or expose connection details when Atlas is temporarily unavailable.
        return new RequestError(503, "We couldn’t load the data. Please try again shortly.");
    }

    return {params, session}
}

export default action;
