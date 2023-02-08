import React from "react";
import Image from 'next/image'
import Link from "next/link";

export default function PageBadgesProfilBadgdes() {
    return (
        <div className={"bg-Background min-h-screen justify-center"}>

            <div className={"flex justify-end mr-14"}>
                <Link href="/PageBadgesCompte">
                <Image src="/IconParametres.png" width={20} height={20} alt="badge-placeholder" className="pt-14 absolute"/>
                </Link>
            </div>
            <div className="bg-Menu fixed h-20 -bottom-1 z-0 w-full  flex justify-around items-center">
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
                        src='/DefaultProfile.png'
                        width={28}
                        height={40}
                        alt='logo'
                        className='m-auto'
                    />
                </Link>

            </div>

            <div className={"flex justify-center mt-20"}>
                <Image src="/DefaultProfile.png" width={51} height={54} alt="badge-placeholder" className=""/>
            </div>

            <div className={"flex items-center justify-between mb-8 mt-10"}>

                <div className={"text-Text text-orange-500 ml-6 "}>
                    <div className={"text-Text text-orange-500 MediumChill border-b w-44 mr-10 mb-3 pb-2"}>GUETTA</div>
                    <div className={"text-Text text-orange-500 MediumChill border-b w-44 mr-10 mb-3 pb-2"}>David</div>
                    <div className={"text-Text text-orange-500 MediumChill border-b w-44 mr-10 pb-2"}>Inforamtique M2</div>
                </div>

                <div className={""}>
                    <img
                        src='/Recherche_Logo_Ybadges.png'
                        width={100}
                        height={100}
                        alt='logo'
                        className='m-auto mr-8 pt-6'
                    />
                </div>

            </div>



                <div className={"flex justify-between items-center"}>
                    <div className={"text-Text text-orange-500 ml-6 MediumChill"}>MA COLLECTION
                    </div>
                    <div className="flex bg-Search rounded-2xl px-4 py-2 ml-14 mr-6  justify-items-start">
                        <img
                            src='/Search.png'
                            width={14}
                            height={15}
                            alt='logo'
                            className='my-auto'
                        />
                        <p className="text-unselect ml-3 font-light font-poppins mr-9 font-poppins text-xs">Recherche</p>
                    </div>
                </div>


            <div className={"flex justify-around mt-5 mx-3"}>
                <Image src="/CirclePlaceholderProfile.png" width={58} height={58} alt="badge-placeholder" className=""/>
                <Image src="/CirclePlaceholderProfile.png" width={58} height={58} alt="badge-placeholder" className=""/>
                <Image src="/CirclePlaceholderProfile.png" width={58} height={58} alt="badge-placeholder" className=""/>
                <Image src="/CirclePlaceholderProfile.png" width={58} height={58} alt="badge-placeholder" className=""/>
                <Image src="/CirclePlaceholderProfile.png" width={58} height={58} alt="badge-placeholder" className=""/>
            </div>

            <div className={"flex justify-around mt-3 mx-3"}>
                <Image src="/CirclePlaceholderProfile.png" width={58} height={58} alt="badge-placeholder" className=""/>
                <Image src="/CirclePlaceholderProfile.png" width={58} height={58} alt="badge-placeholder" className=""/>
                <Image src="/CirclePlaceholderProfile.png" width={58} height={58} alt="badge-placeholder" className=""/>
                <Image src="/CirclePlaceholderProfile.png" width={58} height={58} alt="badge-placeholder" className=""/>
                <Image src="/CirclePlaceholderProfile.png" width={58} height={58} alt="badge-placeholder" className=""/>
            </div>

            <div className={"flex justify-around mt-3 mx-3"}>
                <Image src="/CirclePlaceholderProfile.png" width={58} height={58} alt="badge-placeholder" className=""/>
                <Image src="/CirclePlaceholderProfile.png" width={58} height={58} alt="badge-placeholder" className=""/>
                <Image src="/CirclePlaceholderProfile.png" width={58} height={58} alt="badge-placeholder" className=""/>
                <Image src="/CirclePlaceholderProfile.png" width={58} height={58} alt="badge-placeholder" className=""/>
                <Image src="/CirclePlaceholderProfile.png" width={58} height={58} alt="badge-placeholder" className=""/>
            </div>

            <div className={"flex justify-around mt-3 mx-3"}>
                <Image src="/CirclePlaceholderProfile.png" width={58} height={58} alt="badge-placeholder" className=""/>
                <Image src="/CirclePlaceholderProfile.png" width={58} height={58} alt="badge-placeholder" className=""/>
                <Image src="/CirclePlaceholderProfile.png" width={58} height={58} alt="badge-placeholder" className=""/>
                <Image src="/CirclePlaceholderProfile.png" width={58} height={58} alt="badge-placeholder" className=""/>
                <Image src="/CirclePlaceholderProfile.png" width={58} height={58} alt="badge-placeholder" className=""/>
            </div>

            <div className={"flex justify-around mt-3 mx-3 mb-4"}>
                <Image src="/CirclePlaceholderProfile.png" width={58} height={58} alt="badge-placeholder" className=""/>
                <Image src="/CirclePlaceholderProfile.png" width={58} height={58} alt="badge-placeholder" className=""/>
                <Image src="/CirclePlaceholderProfile.png" width={58} height={58} alt="badge-placeholder" className=""/>
                <Image src="/CirclePlaceholderProfile.png" width={58} height={58} alt="badge-placeholder" className=""/>
                <Image src="/CirclePlaceholderProfile.png" width={58} height={58} alt="badge-placeholder" className=""/>
            </div>
        </div>
    )
}
