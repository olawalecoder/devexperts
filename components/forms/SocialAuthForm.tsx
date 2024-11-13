"use client"

import Image from "next/image";
import {signIn} from "next-auth/react";
import React from 'react'

import {Button} from "@/components/ui/button";
import {toast} from "@/hooks/use-toast";
import ROUTES from "@/constants/routes";


const SocialAuthForm = () => {
    const buttonClass = "flex-1 background-dark400_light900 body-medium px-4 py-3.5 min-h-12 rounded-2 text-dark200_light800"

    const handleSignIn = async (provider: "github" | "google" ) => {
        try {
            await signIn(provider, {
                callbackUrl: ROUTES.HOME,
                redirectUrl: false
            });
        } catch (error) {
            console.log(error);

            toast({
                variant: "destructive",
                title: "Sign-in Failed",
                description: error instanceof Error ? error.message : "An error occurred during sign-in"
            })
        }
    }

    return (
        <div className="mt-10 flex flex-wrap items-center gap-3">
            <Button className={buttonClass} onClick={() => handleSignIn("github")}>
                <Image
                    src="/icons/github.svg"
                    alt="github logo"
                    width={20}
                    height={20}
                    className="invert-colors mr-2 object-contain"
                />
                <span>Login with Github</span>
            </Button>
            <Button className={buttonClass} onClick={() => handleSignIn("google")}>
                        <Image
                    src="/icons/google.svg"
                    alt="github logo"
                    width={20}
                    height={20}
                    className="mr-2 object-contain"
                />
                <span>Login with Google</span>
            </Button>

        </div>
    )
}
export default SocialAuthForm
