import React from "react";

const users = [
    {
        id: 1,
        name: "Rakib Hasan",
        username: "@rakib123",
        tags: ["JAVASCRIPT", "TAILWINDCSS", "HTML"],
        image: "/images/user1.png",
    },
    {
        id: 2,
        name: "Rakib Hasan",
        username: "@prodevRakib",
        tags: ["JAVASCRIPT", "TAILWINDCSS", "HTML"],
        image: "/images/user2.png",
    },
    {
        id: 3,
        name: "hypertutorial1",
        username: "@leeadel",
        tags: [],
        image: "",
    },
    {
        id: 4,
        name: "Steve",
        username: "@blingo",
        tags: [],
        image: "/images/user3.png",
    },
    {
        id: 5,
        name: "Te Stone",
        username: "@shani_00",
        tags: [],
        image: "",
    },
];

const Community = () => {
    return (
        <div className="min-h-screen text-white">

            <div className="container mx-auto px-4 py-10">

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {users.map((user) => (
                        <div
                            key={user.id}
                            className="shadow-md background-light900_dark200 light-border flex flex-col items-center rounded-lg p-6"
                        >
                            {/* Avatar */}
                            <div className="mb-4 flex size-16 items-center justify-center rounded-full bg-gray-700">
                                {user.image ? (
                                    <img
                                        src={user.image}
                                        alt={user.name}
                                        className="rounded-full object-cover"
                                    />
                                ) : (
                                    <span className="text-2xl font-bold text-gray-500">
                                        {user.name[0].toUpperCase()}
                                    </span>
                                )}
                            </div>

                            {/* User Details */}
                            <h2 className="truncate text-lg font-bold">{user.name}</h2>
                            <p className="mb-4 text-gray-400">{user.username}</p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2">
                                {user.tags.length > 0 ? (
                                    user.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="background-light800_dark300 text-light400_light500 rounded-lg px-1 py-0.5 text-xs"
                                        >
                                            {tag}
                                        </span>
                                    ))
                                ) : (
                                    <p className="text-sm text-gray-500">No tags yet</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Community;
