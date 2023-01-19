import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Login() {


  return (
    <div className='pt-5 bg-Background min-h-screen'>
      <img
        src='/Recherche_Logo_Ybadges.png'
        width={125}
        height={166}
        alt='logo'
        className='m-auto py-20'
      />
      <div className=' sm:flex sm:flex-row'>
          <div className="justify-around text-Text flex mx-10">
              <Link href="/Register">
                <p className="">INSCRIVEZ-VOUS</p>
              </Link>
              <p className="underline font-bold">SE CONNECTER</p>
          </div>
          <div className="relative z-0 mx-16 mt-8">
              <input type="text" name=""
                     className="peer block w-full appearance-none rounded-b-none border-0 border-b border-Text bg-transparent py-2.5 px-0 text-sm text-Text focus:outline-none focus:ring-0"
                     placeholder=" "/>
              <label
                  className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-Text duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 ">
                  Adresse mail (Ynov)</label>
          </div>
          <div className="relative z-0 mx-16 mt-8">
              <input type="text" name=""
                     className="peer block w-full appearance-none rounded-b-none border-0 border-b border-Text bg-transparent py-2.5 px-0 text-sm text-Text focus:outline-none focus:ring-0"
                     placeholder=" "/>
              <label
                  className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-Text duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 ">
                  Mot de passe
              </label>
          </div>
          <Link href="/PageBadges">
              <div>
                  <button type="submit" className="flex mt-10 rounded-full bg-Background border border-Text px-14 py-2 text-Text font-bold mx-auto">CONNECTION</button>
              </div>
          </Link>

      </div>

    </div>
  )
}
