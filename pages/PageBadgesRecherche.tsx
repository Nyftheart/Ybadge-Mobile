import React from "react";
import Image from 'next/image'
import Link from "next/link";

export default function PageBadgesRecherche() {
    return (
        <div className={"bg-Background min-h-screen"}>

            <img
                src='/Recherche_Logo_Ybadges.png'
                width={125}
                height={80}
                alt='logo'
                className='m-auto pt-16 pb-8'
            />
            <div className="bg-Menu fixed h-20 -bottom-1 z-0 w-full flex justify-around items-center">
                <Link href="/PageBadges">
                    <img
                        src='/Recherche_Logo_Ybadges.png'
                        width={40}
                        height={40}
                        alt='logo'
                        className='m-auto'
                    />
                </Link>
                <Link href="/PageBadgesProfilBadges">
                    <img
                        src='/User.png'
                        width={40}
                        height={40}
                        alt='logo'
                        className='m-auto'
                    />
                </Link>

            </div>

            <div className="flex items-center mb-10">
                <Link href="/PageBadges">
                    <img
                        src='/arrow.png'
                        width={21}
                        height={14}
                        alt='logo'
                        className='m-auto ml-6'
                    />
                </Link>
                <div className="flex bg-Search rounded-2xl px-3 py-1 ml-14 mr-6 w-full justify-items-start">
                    <img
                        src='/Search.png'
                        width={14}
                        height={15}
                        alt='logo'
                        className='my-auto'
                    />
                    <p className="text-Text ml-3">la</p>
                    <img
                        src='/cross.png'
                        width={11}
                        height={11}
                        alt='logo'
                        className='my-auto ml-56 '
                    />
                </div>

            </div>

            <div className={"rounded pb-8 bg-gray-400"}>

                <div className={"text-Text mx-7 ml-6 underline "}>Résultats :</div>

                <div className={"flex justify-around mt-5 mx-3"}>
                    <Image src="/imgBadgeSlotNormal.png" width={57} height={80} alt="badge-placeholder" className=""/>
                    <Image src="/imgBadgeSlotAltered.png" width={57} height={80} alt="badge-placeholder" className=""/>
                    <Image src="/imgBadgeSlotAltered.png" width={57} height={80} alt="badge-placeholder" className=""/>
                    <Image src="/imgBadgeSlotNormal.png" width={57} height={80} alt="badge-placeholder" className=""/>
                    <Image src="/imgBadgeSlotNormal.png" width={57} height={80} alt="badge-placeholder" className=""/>
                </div>

                <div className={"flex justify-around mt-3 mx-3"}>
                    <Image src="/imgBadgeSlotNormal.png" width={57} height={80} alt="badge-placeholder" className=""/>
                    <Image src="/imgBadgeSlotAltered.png" width={57} height={80} alt="badge-placeholder" className=""/>
                    <Image src="/imgBadgeSlotAltered.png" width={57} height={80} alt="badge-placeholder" className=""/>
                    <Image src="/imgBadgeSlotNormal.png" width={57} height={80} alt="badge-placeholder" className=""/>
                    <Image src="/imgBadgeSlotNormal.png" width={57} height={80} alt="badge-placeholder" className=""/>
                </div>
            </div>



            </div>
    )
}
