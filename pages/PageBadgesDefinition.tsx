import React from "react";
import Image from 'next/image'
import Link from "next/link";

export default function PageBadgesDefinition() {
    return (
        <div className={"bg-Background min-h-screen pt-20"} >
            <Link href="/PageBadges">
                <img
                    src='/arrow.png'
                    width={21}
                    height={14}
                    alt='logo'
                    className='ml-6'
                />
            </Link>
            <div className={"text-center"}>
                <img
                    src='/Recherche_Logo_Ybadges.png'
                    width={275}
                    height={100}
                    alt='logo'
                    className='m-auto pt-10 pb-8'
                />
            </div>

            <div className={"text-Text text-center text-red-600 text-2xl p-8 w-full SemiboldChill"}>Badge TEST</div>

            <p className={"text-Text text-center text-orange-500  p-8 w-full text-sm font-light font-poppins"}> Ce badge correspond à ta filière. </p>








        </div>
    )
}
