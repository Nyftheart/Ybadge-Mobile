import React from "react";
import Image from 'next/image'

export default function PageBadgesRecherche() {
    return (
        <div>
            <div className={"text-red-600 text-center"}>ALL</div>

            <div className={"ml-8 mr-8 padding-4 mb-8 mt-6 justify-center bg-gray-400 rounded-full text-center"}>Rechercher</div>

            <div className={"rounded pb-8 bg-gray-400"}>

                <div className={"text-orange-500 ml-4 underline "}>Résultats :</div>

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
            </div>



            </div>
    )
}
