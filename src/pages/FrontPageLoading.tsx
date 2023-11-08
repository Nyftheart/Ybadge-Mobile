import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function FrontPageLoading() {
  return (
    <div className="bg-[#131313]">
      <Image
        src="/assets/img/imgLogo.png"
        width={223}
        height={166}
        alt="logo"
        className="m-auto"
      />
    </div>
  )
}
