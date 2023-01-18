import React from "react";
import Image from 'next/image'

export default function PageBadgesCompte() {
    return (
        <div>
            <div className={"text-center m-10 text-red-600 text-3xl"}> COMPTE </div>

            <div className={"text-blue-500 ml-24 mt-8"}>
                <div>NOM :</div>
                <div>Prénom : </div>
                <div>Adresse mail : </div>
            </div>

            <div className={" mt-10 text-center rounded-full text-blue-800 bg-gray-200 p-1 w-64 justify-center ml-20"}> SE DECONNECTER </div>

            <div className={" mt-80 text-center text-blue-800 bg-gray-200 p-1 w-64 justify-center ml-20"}> SUPPRIMER MON COMPTE</div>

        </div>
    )
}
