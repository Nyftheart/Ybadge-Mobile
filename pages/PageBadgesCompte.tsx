import React from "react";
import Link from "next/link";
import Image from 'next/image'

export default function PageBadgesCompte() {
    return (

        <div className={"bg-Background min-h-screen"} >

            <div className={"text-center pt-16"}>
                <Link href="/PageBadgesProfilBadges">
                    <img
                        src='/arrow.png'
                        width={21}
                        height={14}
                        alt='logo'
                        className=' ml-6'
                    />
                </Link>
                <img
                    src='/Recherche_Logo_Ybadges.png'
                    width={125}
                    height={100}
                    alt='logo'
                    className='m-auto  pb-8'
                />
            </div>
            <div className={"text-Text text-red-600 text-3xl flex items-center justify-center mt-10"}>
                <img
                    src='/DefaultProfile.png'
                    width={51}
                    height={54}
                    alt='logo'
                    className='mr-6'
                />
                <h1 className="SemiboldChill">COMPTE</h1>

            </div>

            <div className={"text-Text text-blue-500 ml-32 mt-8 "}>
                <div className="MediumChill">GUETTA</div>
                <div className="MediumChill">David</div>
                <div className="MediumChill">Informatique M2 </div>
            </div>

            <div className={"rounded-lg pb-2 bg-gray-200 mx-20 "}>
                <Link href="/PageBadgesCompteDeco">
                <h1 className={"font-bold border rounded-full text-center text-Text text-md py-2 mt-7 font-poppins text-md"}> SE DECONNECTER</h1>
                </Link>
            </div>
            <div className={"bg-gray-200 mt-36"}>
                <Link href="/PageBadgesCompteSupprime">
                    <div className={"p-4 text-center text-Text text-md pt-4 text-orange-500 underline decoration-1 underline-offset-2 font-poppins font-medium"}> SUPPRIMER SON COMPTE</div>
                </Link>
                <div className={"rounded-lg  bg-gray-200"}>
                    <div className={"text-Text text-center text-Text text-xs font-poppins font-light underline"}>Mentions l??gales</div>
                </div>
            </div>




        </div>
    )
}
