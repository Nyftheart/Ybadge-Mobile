import React from 'react'
import Image from 'next/image'
import Badge from '../components/Badge'

export default function PageBadgesProfilBadgesNoResults() {
  return (
    <div className={'bg-background min-h-screen'}>
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
        <div className={'text-text text-orange-500 m-4 '}>
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
        <div className={'text-text text-orange-500 ml-4 underline '}>
          MA COLLECTION
        </div>
        <div
          className={
            'text-text text-blue-600 rounded-full p-1 pl-4 pr-4 bg-gray-300 mr-4 '
          }
        >
          RI
        </div>
      </div>

      <div className={'text-text'}>
        <div
          className={'p-4 text-center text-text text-2xl pt-4 text-orange-500'}
        >
          Aucun résultat
        </div>
      </div>

      <Badge
        badgeScale={0.5}
        displayText={false}
        initialPosition={[0, 0, 0]}
        objectFolderPath={'/assets/three/badges/logo'}
      />
    </div>
  )
}
