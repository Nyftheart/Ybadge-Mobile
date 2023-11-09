import Link from 'next/link'

export default function Navbar() {
  return (
    <div className="bg-menu fixed h-20 -bottom-1 z-0 max-w-md w-full flex justify-around items-center">
      <Link href="/home">
        <img
          src="/assets/img/Recherche_Logo_Ybadges.png"
          width={40}
          height={40}
          alt="logo"
          className="m-auto"
        />
      </Link>

      <Link href="/account">
        <img
          src="/assets/img/DefaultProfile.png"
          width={28}
          height={40}
          alt="logo"
          className="m-auto opacity-30"
        />
      </Link>
    </div>
  )
}
