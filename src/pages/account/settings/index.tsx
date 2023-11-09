import Link from 'next/link'

export default function PageBadgesCompte() {
  return (
    <div className={'bg-background min-h-screen'}>
      <div className={'text-center pt-16'}>
        <Link href="/PageBadgesProfilBadges">
          <img
            src="/assets/img/arrow.png"
            width={21}
            height={14}
            alt="logo"
            className="ml-6"
          />
        </Link>

        <img
          src="/assets/img/LOGO_TYPO_BLANC.png"
          width={125}
          height={100}
          alt="logo"
          className="m-auto  pb-8"
        />
      </div>

      <div
        className={
          'text-text text-red-600 text-3xl flex items-center justify-center mt-10'
        }
      >
        <img
          src="/assets/img/DefaultProfile.png"
          width={51}
          height={54}
          alt="logo"
          className="mr-6"
        />
        <h1 className="SemiboldChill">COMPTE</h1>
      </div>

      <div className={'text-text text-blue-500 ml-32 mt-8 '}>
        <div className="MediumChill">GUETTA</div>
        <div className="MediumChill">David</div>
        <div className="MediumChill">Informatique M2 </div>
      </div>

      <div className={'rounded-lg pb-2 bg-gray-200 mx-20 '}>
        <Link href="/PageBadgesCompteDeco">
          <h1
            className={
              'font-bold border rounded-full text-center text-text text-md py-2 mt-7 font-poppins text-md'
            }
          >
            {' '}
            SE DECONNECTER
          </h1>
        </Link>
      </div>
      <div className={'bg-gray-200 mt-36'}>
        <Link href="/PageBadgesCompteSupprime">
          <div
            className={
              'p-4 text-center text-text text-md pt-4 text-orange-500 underline decoration-1 underline-offset-2 font-poppins font-medium'
            }
          >
            SUPPRIMER SON COMPTE
          </div>
        </Link>
        <div className={'rounded-lg  bg-gray-200'}>
          <div
            className={'text-center text-xs font-poppins font-light underline'}
          >
            Mentions légales
          </div>
        </div>
      </div>
    </div>
  )
}
