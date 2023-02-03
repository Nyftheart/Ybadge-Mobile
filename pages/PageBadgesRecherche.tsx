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
                className='m-auto pt-10 pb-8'
            />
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
            <div className={"text-red-600 text-center"}>ALL</div>

            <div className={" text-Text mx-7 ml-8 mr-8 padding-4 mb-8 mt-6 justify-center bg-gray-400 rounded-full text-center"}>Rechercher</div>

            <div className={"rounded pb-8 bg-gray-400"}>

                <div className={"text-Text mx-7 ml-4 underline "}>Résultats :</div>

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
