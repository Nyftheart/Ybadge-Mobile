import React from "react";
import Image from 'next/image'
import Link from "next/link";

export default function PageBadgesCompteSupprime() {
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

            <div className={"rounded-lg pb-8 bg-gray-200 m-8 "}>
                <Link href="/Login">
                <div className={" border-2 rounded-full p-4 text-center text-Text text-2xl pt-4 text-orange-500 mb-20"}> SUPPRIMER COMPTE</div>
                </Link>
            </div>

            <div className={"rounded-lg pb-8 bg-gray-200 m-8 "}>
                <Link href="/PageBadgesCompte">
                <div className={"p-4 text-center text-Text text-2xl pt-4 text-orange-500 mb-20"}>ANNULER</div>
                </Link>
            </div>








        </div>
    )
}
