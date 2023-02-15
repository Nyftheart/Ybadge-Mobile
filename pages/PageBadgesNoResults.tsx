import React from "react";
import Image from 'next/image'

export default function PageBadgesNoResults() {
    return (
        <div className={"bg-Background min-h-screen"} >



            <div className={" text-Text ml-8 mr-8 padding-4 mb-8 justify-center bg-gray-400 rounded-full text-center"}>Rechercher</div>

            <div className={"rounded pb-8 bg-gray-400"}>

                <div className={"text-Text text-orange-500 ml-4 underline "}>Résultats :</div>

                <div className={"text-Text text-center"}>Pas de résultats
                    <div className={"m-auto"}>

                        <img
                            src='/Recherche_Logo_Ybadges.png'
                            width={125}
                            height={80}
                            alt='logo'
                            className='m-auto pt-10 pb-8'
                        />
                    </div>
                </div>


            </div>



            </div>
    )
}
