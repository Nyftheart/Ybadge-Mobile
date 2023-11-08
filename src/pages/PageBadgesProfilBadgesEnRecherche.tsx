import React from 'react'
import Image from 'next/image'

export default function PageBadgesProfilBadgdesEnRecherche() {
  return (
    <div className={'bg-Background min-h-screen'}>
      <div className={'flex justify-end mr-4'}>
        <Image
          src="/assets/img/IconParametres.png"
          width={35}
          height={166}
          alt="badge-placeholder"
          className=""
        />
      </div>

      <div className={'flex justify-center mt-4'}>
        <Image
          src="/assets/img/DefaultProfile.png"
          width={150}
          height={166}
          alt="badge-placeholder"
          className=""
        />
      </div>

      <div className={'flex justify-between mb-8'}>
        <div className={'text-Text text-orange-500 m-4 '}>
          <div>NOM :</div>
          <div>Prénom : </div>
          <div>Filière / Année : </div>
        </div>

        <div className={''}>
          <img
            src="/assets/img/Recherche_Logo_Ybadges.png"
            width={100}
            height={100}
            alt="logo"
            className="m-auto mr-8"
          />
        </div>
      </div>

      <div className={'flex justify-between'}>
        <div className={'text-Text text-orange-500 ml-4 underline '}>
          MA COLLECTION
        </div>
        <div
          className={
            'text-Text text-blue-600 rounded-full p-1 pl-4 pr-4 bg-gray-300 mr-4 '
          }
        >
          RI
        </div>
      </div>

      <div className={'flex justify-around mt-5 mx-3'}>
        <Image
          src="/assets/img/CirclePlaceholderProfile.png"
          width={70}
          height={166}
          alt="badge-placeholder"
          className=""
        />
        <Image
          src="/assets/img/CirclePlaceholderProfile.png"
          width={70}
          height={166}
          alt="badge-placeholder"
          className=""
        />
        <Image
          src="/assets/img/CirclePlaceholderProfile.png"
          width={70}
          height={166}
          alt="badge-placeholder"
          className=""
        />
        <Image
          src="/assets/img/CirclePlaceholderProfile.png"
          width={70}
          height={166}
          alt="badge-placeholder"
          className=""
        />
        <Image
          src="/assets/img/CirclePlaceholderProfile.png"
          width={70}
          height={166}
          alt="badge-placeholder"
          className=""
        />
      </div>
    </div>
  )
}
