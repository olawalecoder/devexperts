import Image from "next/image";
import Link from "next/link";
import React from 'react';

interface Props {
    imgUrl: string;
    alt: string;
    value: string | number;
    title: string;
    href?: string;
    textStyles: string;
    imgStyles?: string;
    isAuthor?: boolean;
    authorInitials?: string;
}

const Metric = ({ imgUrl, alt, value, title, href, textStyles, imgStyles, isAuthor, authorInitials }: Props) => {

    const metricContent = (
        <>
            {imgUrl ? (
                <Image
                    src={imgUrl}
                    width={16}
                    height={16}
                    alt={alt}
                    className={`rounded-full object-contain ${imgStyles}`}
                />
            ) : (
                <div className={`primary-gradient flex size-[16] items-center justify-center rounded-full font-space-grotesk text-[12px] font-bold tracking-wider text-white`}>
                    {authorInitials}
                </div>
            )}

            <p className={`${textStyles} flex items-center gap-1`}>
                {value}

                <span
                    className={`small-regular line-clamp-1 ${isAuthor ? "max-sm:hidden" : ""}`}
                >
                    {title}
                </span>
            </p>
        </>
    );

    return href ? (
        <Link href={href} className="flex-center gap-1">
            {metricContent}
        </Link>
    ) : (
        <div className="flex-center gap-1">{metricContent}</div>
    );
};

export default Metric;
