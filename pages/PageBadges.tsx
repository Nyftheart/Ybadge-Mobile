import React from "react";
import Image from 'next/image'
import Link from "next/link";

export default function PageBadges() {
    return (
        <div>
            <div className={"text-red-600 text-center"}>ALL</div>
            <Link href="/PageBadgesRecherche">
                <div className={" ml-8 mr-8 padding-4 mb-8 mt-6 justify-center bg-gray-400 rounded-full text-center"}>Rechercher</div>
            </Link>
            <Link href="/PageBadgesNoResults">
                <div className={" ml-8 mr-8 padding-4 mb-8 mt-6 justify-center bg-gray-400 rounded-full text-center"}>Rechercher no result</div>
            </Link>
            <div className={"text-orange-500 ml-4 underline "}>Badges Classiques :</div>



            <Link href="/PageBadgesHowToGet">
            <div className={"flex justify-around mt-5 mx-3 "}>
                <Image src="/BadgePlaceholder.png" width={70} height={166} alt="badge-placeholder" className=""/>
                <Image src="/BadgePlaceholder.png" width={70} height={166} alt="badge-placeholder" className=""/>
                <Image src="/BadgePlaceholder.png" width={70} height={166} alt="badge-placeholder" className=""/>
                <Image src="/BadgePlaceholder.png" width={70} height={166} alt="badge-placeholder" className=""/>
                <Image src="/BadgePlaceholder.png" width={70} height={166} alt="badge-placeholder" className=""/>
            </div>

            <div className={"flex justify-around mt-3 mx-3"}>
                <Image src="/BadgePlaceholder.png" width={70} height={166} alt="badge-placeholder" className=""/>
                <Image src="/BadgePlaceholder.png" width={70} height={166} alt="badge-placeholder" className=""/>
                <Image src="/BadgePlaceholder.png" width={70} height={166} alt="badge-placeholder" className=""/>
                <Image src="/BadgePlaceholder.png" width={70} height={166} alt="badge-placeholder" className=""/>
                <Image src="/BadgePlaceholder.png" width={70} height={166} alt="badge-placeholder" className=""/>
            </div>

            <div className={"text-orange-500 mt-5 ml-4 underline "}>Badges Classiques :</div>

            <div className={"flex justify-around mt-5 mx-3"}>
                <Image src="/BadgePlaceholder.png" width={70} height={166} alt="badge-placeholder" className=""/>
                <Image src="/BadgePlaceholder.png" width={70} height={166} alt="badge-placeholder" className=""/>
                <Image src="/BadgePlaceholder.png" width={70} height={166} alt="badge-placeholder" className=""/>
                <Image src="/BadgePlaceholder.png" width={70} height={166} alt="badge-placeholder" className=""/>
                <Image src="/BadgePlaceholder.png" width={70} height={166} alt="badge-placeholder" className=""/>
            </div>

            <div className={"flex justify-around mt-3 mx-3"}>
                <Image src="/BadgePlaceholder.png" width={70} height={166} alt="badge-placeholder" className=""/>
                <Image src="/BadgePlaceholder.png" width={70} height={166} alt="badge-placeholder" className=""/>
                <Image src="/BadgePlaceholder.png" width={70} height={166} alt="badge-placeholder" className=""/>
                <Image src="/BadgePlaceholder.png" width={70} height={166} alt="badge-placeholder" className=""/>
                <Image src="/BadgePlaceholder.png" width={70} height={166} alt="badge-placeholder" className=""/>
            </div>
            </Link>
                <div className="bg-black h-20 z-1 fixed w-full mt-36 text-amber-50 flex justify-around pt-5">
                    <p>Badge</p>
                    <Link href="/PageBadgesCompte">
                    <p>Compte</p>
                    </Link>
                </div>
            <div className={"text-orange-500 mt-5 ml-4 underline "}>Badges Classiques :</div>
            <Link href="/PageBadgesHowToGet">
            <div className={"flex justify-around mt-5 mx-3"}>
                <Image src="/BadgePlaceholder.png" width={70} height={166} alt="badge-placeholder" className=""/>
                <Image src="/BadgePlaceholder.png" width={70} height={166} alt="badge-placeholder" className=""/>
                <Image src="/BadgePlaceholder.png" width={70} height={166} alt="badge-placeholder" className=""/>
                <Image src="/BadgePlaceholder.png" width={70} height={166} alt="badge-placeholder" className=""/>
                <Image src="/BadgePlaceholder.png" width={70} height={166} alt="badge-placeholder" className=""/>
            </div>

            <div className={"flex justify-around mt-3 mx-3"}>
                <Image src="/BadgePlaceholder.png" width={70} height={166} alt="badge-placeholder" className=""/>
                <Image src="/BadgePlaceholder.png" width={70} height={166} alt="badge-placeholder" className=""/>
                <Image src="/BadgePlaceholder.png" width={70} height={166} alt="badge-placeholder" className=""/>
                <Image src="/BadgePlaceholder.png" width={70} height={166} alt="badge-placeholder" className=""/>
                <Image src="/BadgePlaceholder.png" width={70} height={166} alt="badge-placeholder" className=""/>
            </div>

            <div className={"text-orange-500 mt-5 ml-4 underline "}>Badges Classiques :</div>

            <div className={"flex justify-around mt-5 mx-3"}>
                <Image src="/BadgePlaceholder.png" width={70} height={166} alt="badge-placeholder" className=""/>
                <Image src="/BadgePlaceholder.png" width={70} height={166} alt="badge-placeholder" className=""/>
                <Image src="/BadgePlaceholder.png" width={70} height={166} alt="badge-placeholder" className=""/>
                <Image src="/BadgePlaceholder.png" width={70} height={166} alt="badge-placeholder" className=""/>
                <Image src="/BadgePlaceholder.png" width={70} height={166} alt="badge-placeholder" className=""/>
            </div>

            <div className={"flex justify-around mt-3 mx-3 pb-20"}>
                <Image src="/BadgePlaceholder.png" width={70} height={166} alt="badge-placeholder" className=""/>
                <Image src="/BadgePlaceholder.png" width={70} height={166} alt="badge-placeholder" className=""/>
                <Image src="/BadgePlaceholder.png" width={70} height={166} alt="badge-placeholder" className=""/>
                <Image src="/BadgePlaceholder.png" width={70} height={166} alt="badge-placeholder" className=""/>
                <Image src="/BadgePlaceholder.png" width={70} height={166} alt="badge-placeholder" className=""/>
            </div>
            </Link>
        </div>
    )
}
