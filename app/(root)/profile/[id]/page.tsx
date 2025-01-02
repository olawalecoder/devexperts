import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";

import { auth } from "@/auth";
import UserAvatar from "@/components/UserAvatar";
import ROUTES from "@/constants/routes";

const Profile = async () => {
    const session = await auth();

    if (!session) return redirect(ROUTES.SIGN_IN);

    const user = {
        name: session.user.name || "Anonymous",
        username: session.user.name || "N/A",
        avatar: session.user?.image || "",
        joinedDate: "October 2024",
        stats: {
            questions: 2,
            answers: 0,
            goldBadges: 0,
            silverBadges: 0,
            bronzeBadges: 0,
        },
    };

    return (
        <div className="min-h-screen text-white">
            {session?.user?.id && (
                <>
                    <div className="container mx-auto px-4 py-10">

                        <div className="mb-10 flex flex-col items-center justify-between sm:flex-row">
                            <div className="flex items-center gap-6">

                                <div className="flex size-[110px] items-center  justify-center overflow-hidden rounded-full">
                                    <UserAvatar
                                        id={session.user.id}
                                        name={session.user.name!}
                                        imageUrl={session.user?.image}
                                    />
                                </div>


                                <div>
                                    <h1 className="text-2xl font-bold">{user.name}</h1>
                                    <p className="text-gray-400">{user.username}</p>
                                    <p className="flex items-center text-gray-400">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="mr-2 size-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M8 7V3m8 4V3m-9 4h10M6 21h12M4 11h16M4 15h16"
                                            />
                                        </svg>
                                        {user.joinedDate}
                                    </p>
                                </div>
                            </div>


                            <button className="rounded-md bg-gray-800 px-4 py-2 hover:bg-gray-700">
                                Edit Profile
                            </button>
                        </div>


                        <div className="mb-10">
                            <h2 className="mb-4 text-xl font-bold">Stats - 0</h2>
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                                {Object.entries(user.stats).map(([key, value], index) => (
                                    <div
                                        key={index}
                                        className="background-light900_dark200 flex flex-col items-center rounded-lg p-4"
                                    >
                                        <p className="text-2xl font-bold">{value}</p>
                                        <p className="capitalize text-gray-400">
                                            {key.replace(/([A-Z])/g, " $1")}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>


                        <div className="flex gap-4">
                            <button className="rounded-md bg-orange-500 px-4 py-2 font-bold text-white">
                                Top Posts
                            </button>
                            <button className="rounded-md bg-gray-800 px-4 py-2 text-gray-400 hover:bg-gray-700">
                                Answers
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Profile;
