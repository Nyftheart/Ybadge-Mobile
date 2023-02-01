import React from "react";
import Image from 'next/image'

export default function PageBadgesDefinition() {
    return (
        <div className={"bg-Background min-h-screen"} >
            <div className={"text-center"}>
                <img
                    src='/Recherche_Logo_Ybadges.png'
                    width={275}
                    height={100}
                    alt='logo'
                    className='m-auto pt-10 pb-8'
                />
            </div>

            <div className={"text-Text text-center text-red-600 text-2xl p-8 w-full"}> NOM</div>

            <div className={"text-Text text-center text-orange-500 text-xl p-8 w-full"}> Ce badge correspond à ta filière. </div>








        </div>
    )
}
