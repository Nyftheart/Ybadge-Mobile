import React from "react";
import Image from 'next/image'
import Link from "next/link";

export default function PageBadgesCompteDeco() {
    return (

        <div className={"bg-Background min-h-screen"} >
            <div className={"text-center"}>
                <img
                    src='/Recherche_Logo_Ybadges.png'
                    width={175}
                    height={100}
                    alt='logo'
                    className='m-auto pt-10 pb-8'
                />
            </div>

            <div className={"rounded-lg pb-8 bg-gray-200 mx-28 mt-10 "}>
                <Link href="/Login">
                <div className={" border-2 rounded-full text-center text-Text text-md py-1.5  text-orange-500 mb-20"}> DECONNEXION</div>
                </Link>
            </div>

            <div className={"rounded-lg  bg-gray-200 mt-44"}>
                <Link href="/PageBadgesCompte">
                <div className={"p-4 text-center text-Text text-md pt-4 text-orange-500 mb-20 underline decoration-1 underline-offset-2"}>ANNULER</div>
                </Link>
            </div>








        </div>
    )
}
