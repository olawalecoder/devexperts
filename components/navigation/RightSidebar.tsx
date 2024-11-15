import React from 'react'
import NavLinks from "@/components/navigation/navbar/NavLinks";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import ROUTES from "@/constants/routes";
import TagCard from "@/components/cards/TagCard";

const RightSidebar = () => {
    const hotQuestions = [
        { _id: "1", title: "How to create a custom hook in React?" },
        { _id: "2", title: "How to use React Query?" },
        { _id: "3", title: "How to use Redux?" },
        { _id: "4", title: "How to use React Router?" },
        { _id: "5", title: "How to use React Context?" },
    ];

    const popularTags = [
        { _id: "1", name: "react", questions: 100 },
        { _id: "2", name: "javascript", questions: 200 },
        { _id: "3", name: "typescript", questions: 150 },
        { _id: "4", name: "nextjs", questions: 50 },
        { _id: "5", name: "react-query", questions: 75 },
    ];

    return (
        <section
            className="pt-36 custom-scrollbar background-light900_dark200 light-border sticky right-0 top-0 flex h-screen w-[350px] flex-col gap-6 overflow-y-auto border-l p-6 shadow-light-300 dark:shadow-none max-xl:hidden">
            <div>
                <h3 className="h3-bold text-dark200_light900">
                    Top Questions
                </h3>
                <div className="flex flex-col gap-[30px] w-full mt-7">
                    {hotQuestions.map(({_id, title}) => (
                        <Link key={_id} href={ROUTES.PROFILE(_id)}
                              className="flex justify-between items-center gap-7 cursor-pointer">
                            <p className="body-medium text-dark500_light700">{title}</p>
                            <Image
                                src="/icons/chevron-right.svg"
                                alt="chevron-right"
                                width={20}
                                height={20}
                                className="invert-colors"
                            />
                        </Link>
                    ))}
                </div>
            </div>

            <div className="mt-16">
                <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>

                <div className="mt-7 flex flex-col gap-4">
                    {popularTags.map(({_id, name, questions}) => (
                        <TagCard
                            key={_id}
                            _id={_id}
                            name={name}
                            questions={questions}
                            showCount
                            compact
                        />
                    ))}
                </div>
            </div>

        </section>
    )
}
export default RightSidebar
