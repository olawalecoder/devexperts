import React from 'react';
import Link from "next/link";
import Image from "next/image";
import Theme from "@/components/navigation/navbar/Theme";

const Navbar = () => {
    return (
        <nav className="background-light900_dark200 w-full flex-between p-6 dark:shadow-none shadow-light-300 fixed z-50 gap-5 sm:px-12">
            <Link href="/" className="flex items-center gap-1">
                <Image
                    src="/images/site-logo.svg"
                    alt="DevXperts Logo"
                    width={30}
                    height={30}
                />
                <p className="font-space-grotesk h2-bold dark:text-light-900 text-dark-100 max-sm:hidden">
                    DevXperts
                </p>
            </Link>

            <p>Global Search</p>

            <div className="flex-between gap-2">
                <Theme />

            </div>


        </nav>
    )
}
export default Navbar;
