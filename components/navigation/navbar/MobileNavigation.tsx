import React from 'react'
import { Sheet,
    SheetClose,
    SheetContent,
    SheetTitle,
    SheetTrigger} from "@/components/ui/sheet";
import {Button} from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import ROUTES from "@/constants/routes";
import NavLinks from "@/components/navigation/navbar/NavLinks";

const MobileNavigation = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Image
                src="/icons/hamburger.svg"
                alt="Menu Icon"
                width={30}
                height={30}
                className="invert-colors mr-2 sm:hidden object-contain"
                />
            </SheetTrigger>
            <SheetContent
                side="left"
                className="background-light900_dark200 border-none"
            >
                <SheetTitle className="hidden">Navigation</SheetTitle>
                    <Link href="/" className="flex items-center gap-1">
                        <Image
                            src="/images/site-logo.svg"
                            alt="DevXperts Logo"
                            width={20}
                            height={20}
                        />
                        <p className="font-space-grotesk h3-bold dark:text-light-900 text-dark-100">
                            DevXperts
                        </p>
                    </Link>
                <div className="no-scrollbar flex h-[calc(100vh-80px)] flex-col justify-between overflow-y-auto">
                    <SheetClose asChild>
                        <section className="flex h-full flex-col gap-6 pt-16">
                            <NavLinks isMobileNav />
                        </section>
                    </SheetClose>

                    <div className="flex flex-col gap-3">
                        <SheetClose asChild>
                            <Link href={ROUTES.SIGN_IN}>
                                <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                                    <span className="primary-text-gradient">Login</span>
                                </Button>
                            </Link>
                        </SheetClose>
                        <SheetClose asChild>
                            <Link href={ROUTES.SIGN_UP}>
                                <Button className="small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                                    <span>Sign Up</span>
                                </Button>
                            </Link>
                        </SheetClose>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}
export default MobileNavigation
