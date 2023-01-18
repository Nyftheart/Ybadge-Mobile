import React from "react";
import Image from 'next/image'
import Link from "next/link";

export default function PageBadgesCompteDeco() {
    return (
        <div>
            <div className={"text-center m-10 text-red-600 text-3xl"}> COMPTE </div>

            <div className={"rounded-lg pb-8 bg-gray-200 m-8 "}>
                <div className={"text-center text-2xl pt-4 text-orange-500 mb-20"}> SE DECONNECTER </div>
                <Link href="/Login">
                <div className={"text-center rounded-full text-blue-800 bg-gray-400 p-2 w-48 justify-center ml-20"}> DECONNEXION </div>
                </Link>
            </div>

            <div className={"text-center text-lg text-blue-800"}> DECONNEXION </div>








        </div>
    )
}
