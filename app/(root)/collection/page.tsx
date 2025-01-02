import Image from "next/image";
import Link from "next/link";
import React from 'react'


import {Button} from "@/components/ui/button";
import ROUTES from "@/constants/routes";



const Collections = () => {

    return (
        <div className="mt-16 flex w-full flex-col items-center justify-center sm:mt-36">
            <>
                <Image
                    src="/images/dark-illustration.png"
                    alt="Empty state illustration"
                    width={270}
                    height={200}
                    className="hidden object-contain dark:block"
                />
                <Image
                    src="/images/light-illustration.png"
                    alt="Empty state illustration"
                    width={270}
                    height={200}
                    className="block object-contain dark:hidden"
                />
            </>

            <h2 className="h2-bold text-dark200_light900 mt-8">There is no saved quesiton to show</h2>
            <p className="body-regular text-dark500_light700 my-3.5 max-w-md text-center">
                Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion. our query could be the next big thing others learn from. Get involved! 💡
            </p>
                <Link href={ROUTES.ASK_QUESTION}>
                    <Button
                        className="paragraph-medium mt-5 min-h-[46px] rounded-lg bg-primary-500 px-4 py-3 text-light-900 hover:bg-primary-500">
                        Ask A Question
                    </Button>
                </Link>

        </div>
    )
}
export default Collections



