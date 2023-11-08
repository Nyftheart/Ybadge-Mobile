import React from 'react'
import Image from 'next/image'

export default function FrontPageLoading() {
  return (
    <div className="bg-background">
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
