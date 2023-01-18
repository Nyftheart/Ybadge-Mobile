import React from "react";
import Image from 'next/image'

export default function PageBadgesHowToGet() {
    return (
        <div>
            <div className={"text-center mt-10 ml-16"}>
                <Image src="/CirclePlaceholderProfile.png" width={280} height={166} alt="badge-placeholder" className=""/>
            </div>

            <div className={"text-center text-red-600 text-2xl p-8 w-full"}> Nom</div>

            <div className={"text-center text-orange-500 text-xl p-8 w-full"}> Comment l avoir </div>








        </div>
    )
}
