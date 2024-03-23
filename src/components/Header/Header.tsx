import React from 'react'
import Link from 'next/link'
import { LightningIcon, PhoneCallIcon, RayIcon, WrenchIcon } from '../Icons/Icons'

export default function Header() {
  return (
    <header className="flex bg-yellow-400 items-center text-gray-950  justify-center h-24 gap-4 px-4 text-sm md:gap-6 lg:px-6">
      <div className="flex items-center gap-2">
        <LightningIcon className="h-6 w-6" />
        <span className="font-semibold md:text-xl">Irati Electricidad</span>
      </div>
      <div className="ml-auto flex items-center gap-2">
        <PhoneCallIcon className="h-4 w-4 " />
        <span className="hidden md:inline">LLamanos: </span>
        <Link href={"tel:+34948257429"} className="font-semibold">948 25 74 29</Link>
      </div>
    </header>
  )
}
