import React from "react";

const tags = [
    { id: 1, name: "Reactjs", questions: 0 },
    { id: 2, name: "mongoose", questions: 1 },
    { id: 3, name: "mongodb", questions: 1 },
    { id: 4, name: "javascript", questions: 7 },
    { id: 5, name: "nextjs", questions: 2 },
    { id: 6, name: "redux", questions: 1 },
    { id: 7, name: "react.js", questions: 1 },
    { id: 8, name: "es6", questions: 1 },
    { id: 9, name: "next.js", questions: 1 },
    { id: 10, name: "express", questions: 1 },
];

const Tags = () => {
    return (
        <div className="min-h-screen text-white">
            <div className="container mx-auto px-4 py-10">

                <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {tags.map((tag) => (
                        <div
                            key={tag.id}
                            className="shadow-md background-light900_dark200 light-border flex flex-col items-start rounded-lg p-6"
                        >

                            <h2 className="mb-2 text-lg font-bold">{tag.name}</h2>


                            <p className="text-sm text-gray-400">
                                <span className="font-bold text-orange-500">{tag.questions}+</span> Questions
                            </p>
                        </div>
                    ))}
                </div>


                <div className="flex items-center justify-center space-x-4">
                    <button
                        className="rounded-md bg-gray-800 px-4 py-2 text-white hover:bg-gray-700 disabled:opacity-50"
                        disabled
                    >
                        Prev
                    </button>
                    <button className="rounded-md bg-orange-500 px-4 py-2 font-bold text-white">
                        1
                    </button>
                    <button className="rounded-md bg-gray-800 px-4 py-2 text-white hover:bg-gray-700">
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Tags;
