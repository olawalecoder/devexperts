import React from 'react'
import {Button} from "@/components/ui/button";
import Image from "next/image";

const SocialAuthForm = () => {
    const buttonClass = "flex-1 background-dark400_light900 body-medium px-4 py-3.5 min-h-12 rounded-2 text-dark200_light800"

    return (
        <div className="mt-10 flex flex-wrap gap-3 items-center">
            <Button className={buttonClass}>
                <Image
                    src="/icons/github.svg"
                    alt="github logo"
                    width={20}
                    height={20}
                    className="invert-colors object-contain mr-2"
                />
                <span>Login with Github</span>
            </Button>
            <Button className={buttonClass}>
                        <Image
                    src="/icons/google.svg"
                    alt="github logo"
                    width={20}
                    height={20}
                    className="object-contain mr-2"
                />
                <span>Login with Google</span>
            </Button>

        </div>
    )
}
export default SocialAuthForm
