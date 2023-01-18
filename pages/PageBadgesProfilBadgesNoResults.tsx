import React from "react";
import Image from 'next/image'

export default function PageBadgesProfilBadgesNoResults() {
    return (
        <div>

            <div className={"flex justify-end mt-4 mr-4"}>
                <Image src="/IconParametres.png" width={35} height={166} alt="badge-placeholder" className=""/>
            </div>

            <div className={"flex justify-center mt-4"}>
                <Image src="/CirclePlaceholderProfile.png" width={150} height={166} alt="badge-placeholder" className=""/>
            </div>

            <div className={"flex justify-between mb-8"}>

                <div className={"text-orange-500 m-4 "}>
                    <div>NOM :</div>
                    <div>Prénom : </div>
                    <div>Filière / Année : </div>
                </div>

                <div className={"mr-4 mt-4"}>
                   <Image src="/CirclePlaceholderProfile.png" width={100} height={166} alt="badge-placeholder" className=""/>
                </div>

            </div>



                <div className={"flex justify-between"}>
                    <div className={"text-orange-500 ml-4 underline "}>Collection:
                    </div>
                    <div className={"text-blue-600 rounded-full p-1 pl-4 pr-4 bg-gray-300 mr-4 "}> Rechercher </div>
                </div>

            <div className={"text-blue-400 text-center mt-16"}>Aucun résultats</div>

            <div className={"flex justify-around mt-5 mx-3"}>
                <Image src="/imgCircle.png" width={100} height={188} alt="badge-placeholder" className=""/>

            </div>


        </div>
    )
}
