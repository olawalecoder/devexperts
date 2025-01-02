import React from "react";

const FindJobs = () => {
    const jobs = [
        {
            id: 1,
            title: "Frontend Developer",
            company: "TechCorp",
            location: "Remote",
            description: "Build and maintain web applications using React and TailwindCSS.",
        },
        {
            id: 2,
            title: "Backend Engineer",
            company: "Innovatech",
            location: "New York, NY",
            description: "Develop and optimize server-side applications with Node.js.",
        },
        {
            id: 3,
            title: "UI/UX Designer",
            company: "Designly",
            location: "Remote",
            description: "Craft user-centric designs for web and mobile applications.",
        },
    ];

    return (
        <div className="min-h-screen text-white">
            <div className="container mx-auto px-4 py-10">

                <h1 className="mb-6 text-3xl font-bold">Jobs</h1>


                <div className="mb-8 flex flex-col items-center gap-4 sm:flex-row">

                    <div className="background-light900_dark200 light-border flex w-full items-center rounded-lg px-4 py-2 sm:w-2/3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="size-5 text-gray-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-4.35-4.35M16.65 10.65A6 6 0 1110.65 4a6 6 0 016 6z"
                            />
                        </svg>
                        <input
                            type="text"
                            placeholder="Job Title, Company, or Keywords"
                            className="ml-2 w-full bg-transparent text-sm focus:outline-none"
                        />
                    </div>


                    <button className="background-light900_dark200 light-border flex w-full items-center justify-between rounded-lg px-4 py-2 text-sm sm:w-auto">
                        Select Location
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="ml-2 size-5 text-gray-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </button>
                </div>


                <div className="space-y-6">
                    {jobs.length === 0 ? (
                        <div className="text-center text-gray-400">
                            Oops! We couldn’t find any jobs at the moment. Please try again
                            later.
                        </div>
                    ) : (
                        jobs.map((job) => (
                            <div
                                key={job.id}
                                className="shadow-md background-light900_dark200 light-border rounded-lg p-6"
                            >
                                <h2 className="text-xl font-bold">{job.title}</h2>
                                <p className="text-gray-400">{job.company}</p>
                                <p className="text-sm text-gray-400">{job.location}</p>
                                <p className="mt-4 text-sm text-gray-300">{job.description}</p>
                                <button className="primary-gradient mt-4 rounded-lg px-4 py-2 text-sm hover:bg-purple-700">
                                    Apply Now
                                </button>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default FindJobs;
