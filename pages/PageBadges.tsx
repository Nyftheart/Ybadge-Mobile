import React from "react";
import Image from 'next/image'
import Link from "next/link";
import PageBadgesCompte from "./PageBadgesCompte";

export default function PageBadges() {
    return (
        <div className=' bg-Background min-h-screen '>

            <img
                src='/Recherche_Logo_Ybadges.png'
                width={125}
                height={80}
                alt='logo'
                className='m-auto pt-16 pb-8'
            />
            <div className=" items-center mx-6 mb-11">
                <form className=" flex items-center text-left justify-end">
                    <h1 className=" absolute text-Text left-7  text-2xl font-semibold SemiboldChill">ALL COLLECTION</h1>
                    <Link href="PageBadgesRecherche">
                        <img
                            src='/Search.png'
                            width={22}
                            height={23}
                            alt='logo'
                            className='m-auto'
                        />
                    </Link>
                </form>
            </div>

            <div className="bg-Menu fixed h-20 -bottom-1 z-0 w-full  flex justify-around items-center">
                <Link href="#">
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
                    src='/DefaultProfile.png'
                    width={28}
                    height={40}
                    alt='logo'
                    className='m-auto'
                />
                </Link>

            </div>
            <div>
            <div className={"text-Text mx-7 MediumChill"}>Badges Classiques</div>
                <Link href="/PageBadgesDefinition">
                <div className={"flex justify-between mt-6 mx-7"}>
                    <Image src="/imgBadgeSlotNormal.png" width={57} height={80} alt="badge-placeholder" className=""/>
                    <Image src="/imgBadgeSlotAltered.png" width={57} height={80} alt="badge-placeholder" className=""/>
                    <Image src="/imgBadgeSlotAltered.png" width={57} height={80} alt="badge-placeholder" className=""/>
                    <Image src="/imgBadgeSlotNormal.png" width={57} height={80} alt="badge-placeholder" className=""/>
                    <Image src="/imgBadgeSlotNormal.png" width={57} height={80} alt="badge-placeholder" className=""/>
                </div>
                </Link>
                <Link href="/PageBadgesDefinition">
                <div className={"flex justify-between mt-4 mx-7"}>
                    <Image src="/imgBadgeSlotNormal.png" width={57} height={80} alt="badge-placeholder" className=""/>
                    <Image src="/imgBadgeSlotAltered.png" width={57} height={80} alt="badge-placeholder" className=""/>
                    <Image src="/imgBadgeSlotNormal.png" width={57} height={80} alt="badge-placeholder" className=""/>
                    <Image src="/imgBadgeSlotNormal.png" width={57} height={80} alt="badge-placeholder" className=""/>
                    <Image src="/imgBadgeSlotAltered.png" width={57} height={80} alt="badge-placeholder" className=""/>
                </div>
                </Link>
            </div>
            <div>
                <div className={"text-Text mx-7 mt-12 MediumChill"}>Badges Classiques</div>
                <Link href="/PageBadgesDefinition">
                <div className={"flex justify-between mt-6 mx-7"}>
                    <Image src="/imgBadgeSlotAltered.png" width={57} height={80} alt="badge-placeholder" className=""/>
                    <Image src="/imgBadgeSlotNormal.png" width={57} height={80} alt="badge-placeholder" className=""/>
                    <Image src="/imgBadgeSlotAltered.png" width={57} height={80} alt="badge-placeholder" className=""/>
                    <Image src="/imgBadgeSlotAltered.png" width={57} height={80} alt="badge-placeholder" className=""/>
                    <Image src="/imgBadgeSlotNormal.png" width={57} height={80} alt="badge-placeholder" className=""/>
                </div>
                </Link>
                <Link href="/PageBadgesDefinition">
                <div className={"flex justify-between mt-4 mx-7"}>
                    <Image src="/imgBadgeSlotNormal.png" width={57} height={80} alt="badge-placeholder" className=""/>
                    <Image src="/imgBadgeSlotNormal.png" width={57} height={80} alt="badge-placeholder" className=""/>
                    <Image src="/imgBadgeSlotNormal.png" width={57} height={80} alt="badge-placeholder" className=""/>
                    <Image src="/imgBadgeSlotNormal.png" width={57} height={80} alt="badge-placeholder" className=""/>
                    <Image src="/imgBadgeSlotNormal.png" width={57} height={80} alt="badge-placeholder" className=""/>
                </div>
                </Link>
            </div>
            <div>
                <div className={"text-Text mx-7 mt-12 MediumChill"}>Badges Classiques</div>
                <Link href="/PageBadgesDefinition">
                <div className={"flex justify-between mt-6 mx-7"}>
                    <Image src="/imgBadgeSlotNormal.png" width={57} height={80} alt="badge-placeholder" className=""/>
                    <Image src="/imgBadgeSlotAltered.png" width={57} height={80} alt="badge-placeholder" className=""/>
                    <Image src="/imgBadgeSlotNormal.png" width={57} height={80} alt="badge-placeholder" className=""/>
                    <Image src="/imgBadgeSlotAltered.png" width={57} height={80} alt="badge-placeholder" className=""/>
                    <Image src="/imgBadgeSlotNormal.png" width={57} height={80} alt="badge-placeholder" className=""/>
                </div>
                </Link>
                <Link href="/PageBadgesDefinition">
                <div className={"flex justify-between mt-4 mx-7"}>
                    <Image src="/imgBadgeSlotNormal.png" width={57} height={80} alt="badge-placeholder" className=""/>
                    <Image src="/imgBadgeSlotNormal.png" width={57} height={80} alt="badge-placeholder" className=""/>
                    <Image src="/imgBadgeSlotNormal.png" width={57} height={80} alt="badge-placeholder" className=""/>
                    <Image src="/imgBadgeSlotNormal.png" width={57} height={80} alt="badge-placeholder" className=""/>
                    <Image src="/imgBadgeSlotNormal.png" width={57} height={80} alt="badge-placeholder" className=""/>
                </div>
                </Link>
            </div>
            <div className="pb-20">
                <div className={"text-Text mx-7 mt-12 MediumChill"}>Badges Classiques</div>
                <Link href="/PageBadgesDefinition">
                <div className={"flex justify-between mt-6 mx-7"}>
                    <Image src="/imgBadgeSlotAltered.png" width={57} height={80} alt="badge-placeholder" className=""/>
                    <Image src="/imgBadgeSlotNormal.png" width={57} height={80} alt="badge-placeholder" className=""/>
                    <Image src="/imgBadgeSlotNormal.png" width={57} height={80} alt="badge-placeholder" className=""/>
                    <Image src="/imgBadgeSlotAltered.png" width={57} height={80} alt="badge-placeholder" className=""/>
                    <Image src="/imgBadgeSlotNormal.png" width={57} height={80} alt="badge-placeholder" className=""/>
                </div>
                </Link>
                <Link href="/PageBadgesDefinition">
                <div className={"flex justify-between my-4 mx-7"}>
                    <Image src="/imgBadgeSlotNormal.png" width={57} height={80} alt="badge-placeholder" className=""/>
                    <Image src="/imgBadgeSlotNormal.png" width={57} height={80} alt="badge-placeholder" className=""/>
                    <Image src="/imgBadgeSlotNormal.png" width={57} height={80} alt="badge-placeholder" className=""/>
                    <Image src="/imgBadgeSlotAltered.png" width={57} height={80} alt="badge-placeholder" className=""/>
                    <Image src="/imgBadgeSlotNormal.png" width={57} height={80} alt="badge-placeholder" className=""/>
                </div>
                </Link>
            </div>


        </div>
    )
}
