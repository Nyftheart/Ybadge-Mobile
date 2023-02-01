import React from "react";
import Image from 'next/image'

export default function PageBadgesCompte() {
    return (

        <div className={"bg-Background min-h-screen"} >
            <div className={"text-center"}>
                <img
                    src='/Recherche_Logo_Ybadges.png'
                    width={150}
                    height={100}
                    alt='logo'
                    className='m-auto pt-10 pb-8'
                />
            </div>
            <div className={"text-Text text-center m-4 text-red-600 text-3xl"}> COMPTE </div>

            <div className={"text-Text text-blue-500 ml-24 mt-8"}>
                <div>NOM :</div>
                <div>Prénom : </div>
                <div>Adresse mail : </div>
            </div>

            <div className={"rounded-lg pb-2 bg-gray-200 m-8 "}>
                <div className={" border-2 rounded-full p-4 text-center text-Text text-2xl pt-4 text-orange-500"}> DECONNEXION</div>
            </div>

            <div className={"rounded-lg  bg-gray-200 m-8 "}>
                <div className={"text-Text text-center text-Text text-2xl text-orange-500 "}>ANNULER</div>
            </div>

            <div className={"rounded-lg  bg-gray-200"}>
                <div className={"text-Text text-center text-Text text-xs text-orange-500 "}>Mentions légales</div>
            </div>

        </div>
    )
}
