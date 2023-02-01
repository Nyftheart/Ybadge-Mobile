import React from "react";
import Image from 'next/image'

export default function PageBadgesProfilBadgesNoResults() {
    return (
        <div className={"bg-Background min-h-screen"}>

            <div className={"flex justify-end mr-4"}>
                <Image src="/IconParametres.png" width={35} height={166} alt="badge-placeholder" className=""/>
            </div>

            <div className={"flex justify-center mt-4"}>
                <Image src="/DefaultProfile.png" width={150} height={166} alt="badge-placeholder" className=""/>
            </div>

            <div className={"flex justify-between mb-8"}>

                <div className={"text-Text text-orange-500 m-4 "}>
                    <div>NOM :</div>
                    <div>Prénom : </div>
                    <div>Filière / Année : </div>
                </div>

                <div className={""}>
                    <img
                        src='/Recherche_Logo_Ybadges.png'
                        width={100}
                        height={100}
                        alt='logo'
                        className='m-auto mr-8'
                    />
                </div>

            </div>



            <div className={"flex justify-between"}>
                <div className={"text-Text text-orange-500 ml-4 underline "}>MA COLLECTION
                </div>
                <div className={"text-Text text-blue-600 rounded-full p-1 pl-4 pr-4 bg-gray-300 mr-4 "}>RI</div>
            </div>


            <div className={"text-Text"}>
            <div className={"p-4 text-center text-Text text-2xl pt-4 text-orange-500"}>Aucun resultats</div>
        </div>


            <div className={"bg-Background min-h-screen"} >
                <div className={"text-center"}>
                    <img
                        src='/Recherche_Logo_Ybadges.png'
                        width={105}
                        height={100}
                        alt='logo'
                        className='m-auto pt-10 pb-8'
                    />
                </div>
            </div>





        </div>
    )
}
