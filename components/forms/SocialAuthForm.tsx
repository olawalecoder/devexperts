import Image from "next/image";
import React from 'react'

import { signIn } from "@/auth"
import {Button} from "@/components/ui/button";

const SocialAuthForm = () => {
    const buttonClass = "flex-1 background-dark400_light900 body-medium px-4 py-3.5 min-h-12 rounded-2 text-dark200_light800"

    return (
        <div className="mt-10 flex flex-wrap items-center gap-3">
            <Button className={buttonClass}>
                <Image
                    src="/icons/github.svg"
                    alt="github logo"
                    width={20}
                    height={20}
                    className="invert-colors mr-2 object-contain"
                />
                <span>Login with Github</span>
            </Button>
            <Button className={buttonClass}>
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
