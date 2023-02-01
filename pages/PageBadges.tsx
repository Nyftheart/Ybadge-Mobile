import React from "react";
import Image from 'next/image'

export default function PageBadges() {
    return (
        <div className='pt-5 bg-Background min-h-screen '>

            <img
                src='/Recherche_Logo_Ybadges.png'
                width={125}
                height={80}
                alt='logo'
                className='m-auto pt-10 pb-8'
            />
            <div className=" items-center mx-6 mb-11">
                <form className=" flex items-center text-left justify-end">
                    <h1 className=" absolute text-Text left-7 underline decoration-0 underline-offset-4  font-bold text-2xl">ALL COLLECTION</h1>
                    <input type="text" name="search" placeholder="" className=" bg-Search px-6 py-3 w-0 text-Text border-0 rounded-full focus:outline-0 focus:w-full duration-500 z-0"/>
                </form>
            </div>

            <div className="bg-Menu fixed h-20 -bottom-1 z-0 w-full rounded-t-xl flex justify-around items-center">
                <img
                    src='/Recherche_Logo_Ybadges.png'
                    width={40}
                    height={40}
                    alt='logo'
                    className='m-auto'
                />
                <img
                    src='/User.png'
                    width={40}
                    height={40}
                    alt='logo'
                    className='m-auto'
                />

            </div>
            <div>
            <div className={"text-Text mx-7"}>Badges Classiques</div>
                <div className={"flex justify-between mt-6 mx-7"}>
                    <Image src="/imgBadgeSlotNormal.png" width={57} height={80} alt="badge-placeholder" className=""/>
                    <Image src="/imgBadgeSlotAltered.png" width={57} height={80} alt="badge-placeholder" className=""/>
                    <Image src="/imgBadgeSlotAltered.png" width={57} height={80} alt="badge-placeholder" className=""/>
                    <Image src="/imgBadgeSlotNormal.png" width={57} height={80} alt="badge-placeholder" className=""/>
                    <Image src="/imgBadgeSlotNormal.png" width={57} height={80} alt="badge-placeholder" className=""/>

                </div>
                <div className={"flex justify-between mt-4 mx-7"}>
                    <Image src="/imgBadgeSlotNormal.png" width={57} height={80} alt="badge-placeholder" className=""/>
                    <Image src="/imgBadgeSlotAltered.png" width={57} height={80} alt="badge-placeholder" className=""/>
                    <Image src="/imgBadgeSlotNormal.png" width={57} height={80} alt="badge-placeholder" className=""/>
                    <Image src="/imgBadgeSlotNormal.png" width={57} height={80} alt="badge-placeholder" className=""/>
                    <Image src="/imgBadgeSlotAltered.png" width={57} height={80} alt="badge-placeholder" className=""/>
                </div>
            </div>
            <div>
                <div className={"text-Text mx-7 mt-12"}>Badges Classiques</div>
                <div className={"flex justify-between mt-6 mx-7"}>
                    <Image src="/imgBadgeSlotAltered.png" width={57} height={80} alt="badge-placeholder" className=""/>
                    <Image src="/imgBadgeSlotNormal.png" width={57} height={80} alt="badge-placeholder" className=""/>
                    <Image src="/imgBadgeSlotAltered.png" width={57} height={80} alt="badge-placeholder" className=""/>
                    <Image src="/imgBadgeSlotAltered.png" width={57} height={80} alt="badge-placeholder" className=""/>
                    <Image src="/imgBadgeSlotNormal.png" width={57} height={80} alt="badge-placeholder" className=""/>
                </div>
                <div className={"flex justify-between mt-4 mx-7"}>
                    <Image src="/imgBadgeSlotNormal.png" width={57} height={80} alt="badge-placeholder" className=""/>
                    <Image src="/imgBadgeSlotNormal.png" width={57} height={80} alt="badge-placeholder" className=""/>
                    <Image src="/imgBadgeSlotNormal.png" width={57} height={80} alt="badge-placeholder" className=""/>
                    <Image src="/imgBadgeSlotNormal.png" width={57} height={80} alt="badge-placeholder" className=""/>
                    <Image src="/imgBadgeSlotNormal.png" width={57} height={80} alt="badge-placeholder" className=""/>
                </div>
            </div>
            <div>
                <div className={"text-Text mx-7 mt-12"}>Badges Classiques</div>
                <div className={"flex justify-between mt-6 mx-7"}>
                    <Image src="/imgBadgeSlotNormal.png" width={57} height={80} alt="badge-placeholder" className=""/>
                    <Image src="/imgBadgeSlotAltered.png" width={57} height={80} alt="badge-placeholder" className=""/>
                    <Image src="/imgBadgeSlotNormal.png" width={57} height={80} alt="badge-placeholder" className=""/>
                    <Image src="/imgBadgeSlotAltered.png" width={57} height={80} alt="badge-placeholder" className=""/>
                    <Image src="/imgBadgeSlotNormal.png" width={57} height={80} alt="badge-placeholder" className=""/>
                </div>
                <div className={"flex justify-between mt-4 mx-7"}>
                    <Image src="/imgBadgeSlotNormal.png" width={57} height={80} alt="badge-placeholder" className=""/>
                    <Image src="/imgBadgeSlotNormal.png" width={57} height={80} alt="badge-placeholder" className=""/>
                    <Image src="/imgBadgeSlotNormal.png" width={57} height={80} alt="badge-placeholder" className=""/>
                    <Image src="/imgBadgeSlotNormal.png" width={57} height={80} alt="badge-placeholder" className=""/>
                    <Image src="/imgBadgeSlotNormal.png" width={57} height={80} alt="badge-placeholder" className=""/>
                </div>
            </div>
            <div className="pb-20">
                <div className={"text-Text mx-7 mt-12"}>Badges Classiques</div>
                <div className={"flex justify-between mt-6 mx-7"}>
                    <Image src="/imgBadgeSlotAltered.png" width={57} height={80} alt="badge-placeholder" className=""/>
                    <Image src="/imgBadgeSlotNormal.png" width={57} height={80} alt="badge-placeholder" className=""/>
                    <Image src="/imgBadgeSlotNormal.png" width={57} height={80} alt="badge-placeholder" className=""/>
                    <Image src="/imgBadgeSlotAltered.png" width={57} height={80} alt="badge-placeholder" className=""/>
                    <Image src="/imgBadgeSlotNormal.png" width={57} height={80} alt="badge-placeholder" className=""/>
                </div>
                <div className={"flex justify-between my-4 mx-7"}>
                    <Image src="/imgBadgeSlotNormal.png" width={57} height={80} alt="badge-placeholder" className=""/>
                    <Image src="/imgBadgeSlotNormal.png" width={57} height={80} alt="badge-placeholder" className=""/>
                    <Image src="/imgBadgeSlotNormal.png" width={57} height={80} alt="badge-placeholder" className=""/>
                    <Image src="/imgBadgeSlotAltered.png" width={57} height={80} alt="badge-placeholder" className=""/>
                    <Image src="/imgBadgeSlotNormal.png" width={57} height={80} alt="badge-placeholder" className=""/>
                </div>
            </div>


        </div>
    )
}
