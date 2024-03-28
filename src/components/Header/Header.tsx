import React from 'react'
import Link from 'next/link'
import { SunIcon, PhoneCallIcon, InstagramIcon } from '../Icons/Icons'

export default function Header() {
  return (
    <header className="flex w-full fixed bg-red-500 text-gray-50 items-center font-bold justify-center h-24 gap-4 px-4 text-sm md:gap-6 lg:px-6">
      <div className="flex items-center gap-2">
        <span className="font-semibold md:text-2xl lg:text-3xl">American Roller</span>
      </div>
      <div className="ml-auto flex items-center gap-2">
        <InstagramIcon className="h-4 w-4 text-gray-50 " />
        <Link href={"tel:+34948257429"} className="font-semibold">@american.roller</Link>
      </div>
    </header>
  )
}
