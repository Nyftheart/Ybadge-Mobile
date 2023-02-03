import React from "react";
import Image from 'next/image'
import Link from "next/link";

export default function PageBadgesProfilBadgdes() {
    return (
        <div className={"bg-Background min-h-screen"}>

            <div className={"flex justify-end mr-4"}>
                <Link href="/PageBadgesCompte">
                <Image src="/IconParametres.png" width={35} height={166} alt="badge-placeholder" className="color"/>
                </Link>
            </div>
            <div className="bg-Menu fixed h-20 -bottom-1 z-0 w-full rounded-t-xl flex justify-around items-center">
                <Link href="/PageBadges">
                    <img
                        src='/Recherche_Logo_Ybadges.png'
                        width={40}
                        height={40}
                        alt='logo'
                        className='m-auto'
                    />
                </Link>
                <Link href="#">
                    <img
                        src='/User.png'
                        width={40}
                        height={40}
                        alt='logo'
                        className='m-auto'
                    />
                </Link>

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
                    <div className={"text-Text text-blue-600 rounded-full p-1 pl-4 pr-4 bg-gray-300 mr-4 "}> RECHERCHER</div>
                </div>


            <div className={"flex justify-around mt-5 mx-3"}>
                <Image src="/CirclePlaceholderProfile.png" width={70} height={166} alt="badge-placeholder" className=""/>
                <Image src="/CirclePlaceholderProfile.png" width={70} height={166} alt="badge-placeholder" className=""/>
                <Image src="/CirclePlaceholderProfile.png" width={70} height={166} alt="badge-placeholder" className=""/>
                <Image src="/CirclePlaceholderProfile.png" width={70} height={166} alt="badge-placeholder" className=""/>
                <Image src="/CirclePlaceholderProfile.png" width={70} height={166} alt="badge-placeholder" className=""/>
            </div>

            <div className={"flex justify-around mt-3 mx-3"}>
                <Image src="/CirclePlaceholderProfile.png" width={70} height={166} alt="badge-placeholder" className=""/>
                <Image src="/CirclePlaceholderProfile.png" width={70} height={166} alt="badge-placeholder" className=""/>
                <Image src="/CirclePlaceholderProfile.png" width={70} height={166} alt="badge-placeholder" className=""/>
                <Image src="/CirclePlaceholderProfile.png" width={70} height={166} alt="badge-placeholder" className=""/>
                <Image src="/CirclePlaceholderProfile.png" width={70} height={166} alt="badge-placeholder" className=""/>
            </div>

            <div className={"flex justify-around mt-3 mx-3"}>
                <Image src="/CirclePlaceholderProfile.png" width={70} height={166} alt="badge-placeholder" className=""/>
                <Image src="/CirclePlaceholderProfile.png" width={70} height={166} alt="badge-placeholder" className=""/>
                <Image src="/CirclePlaceholderProfile.png" width={70} height={166} alt="badge-placeholder" className=""/>
                <Image src="/CirclePlaceholderProfile.png" width={70} height={166} alt="badge-placeholder" className=""/>
                <Image src="/CirclePlaceholderProfile.png" width={70} height={166} alt="badge-placeholder" className=""/>
            </div>

            <div className={"flex justify-around mt-3 mx-3"}>
                <Image src="/CirclePlaceholderProfile.png" width={70} height={166} alt="badge-placeholder" className=""/>
                <Image src="/CirclePlaceholderProfile.png" width={70} height={166} alt="badge-placeholder" className=""/>
                <Image src="/CirclePlaceholderProfile.png" width={70} height={166} alt="badge-placeholder" className=""/>
                <Image src="/CirclePlaceholderProfile.png" width={70} height={166} alt="badge-placeholder" className=""/>
                <Image src="/CirclePlaceholderProfile.png" width={70} height={166} alt="badge-placeholder" className=""/>
            </div>

            <div className={"flex justify-around mt-3 mx-3"}>
                <Image src="/CirclePlaceholderProfile.png" width={70} height={166} alt="badge-placeholder" className=""/>
                <Image src="/CirclePlaceholderProfile.png" width={70} height={166} alt="badge-placeholder" className=""/>
                <Image src="/CirclePlaceholderProfile.png" width={70} height={166} alt="badge-placeholder" className=""/>
                <Image src="/CirclePlaceholderProfile.png" width={70} height={166} alt="badge-placeholder" className=""/>
                <Image src="/CirclePlaceholderProfile.png" width={70} height={166} alt="badge-placeholder" className=""/>
            </div>
        </div>
    )
}
