import React from 'react'
import Link from 'next/link'

export default function PageBadgesCompteSupprime() {
  return (
    <div className={'bg-background min-h-screen'}>
      <div className={'text-center'}>
        <img
          src="/assets/img/LOGO_TYPO_BLANC.png"
          width={125}
          height={100}
          alt="logo"
          className="m-auto pt-20 pb-8"
        />
      </div>
      <div className={'rounded-lg pb-8 bg-gray-200 mx-20 mt-10 '}>
        <Link href="/Login">
          <div
            className={
              'border rounded-full text-center text-text text-md py-2 text-orange-500 mb-20 font-poppins font-bold'
            }
          >
            {' '}
            SUPPRIMER COMPTE
          </div>
        </Link>
      </div>

      <div className={'rounded-lg  bg-gray-200 mt-56'}>
        <Link href="/PageBadgesCompte">
          <div
            className={
              'p-4 text-center text-text text-md pt-4 text-orange-500 mb-20 underline decoration-1 underline-offset-2 font-poppins font-medium'
            }
          >
            ANNULER
          </div>
        </Link>
      </div>
    </div>
  )
}
