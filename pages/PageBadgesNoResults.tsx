import React from "react";
import Image from 'next/image'

export default function PageBadgesNoResults() {
    return (
        <div>
            <div className={"text-red-600 text-center"}>ALL</div>

            <div className={"ml-8 mr-8 padding-4 mb-8 mt-6 justify-center bg-gray-400 rounded-full text-center"}>Rechercher</div>

            <div className={"rounded pb-8 bg-gray-400"}>

                <div className={"text-orange-500 ml-4 underline "}>Résultats :</div>

                <div className={"text-center"}>Pas de résultats
                    <div className={"m-auto"}>
                    <Image className={""} src="/imgCircle.png" width={70} height={166} alt="badge-placeholder"/>
                    </div>
                </div>


            </div>



            </div>
    )
}
