import Link from "next/link"
import Image from "next/image"

import image from '@/../public/home-page.webp'

const dict = {
  title: "Pastelería American Roller",
  subtitle: "Pastelería americana casera | Próxima apertura en Pamplona",
  button: "Siguenos!",
  buttonLink: "https://www.instagram.com/american.roller/"
}

export default function Presentation() {
  return (
    <section className="w-full pt-48 bg-white py-6 md:py-64 md:pt-72 ">
      <div className="container flex flex-col items-center gap-4 px-4 text-center md:gap-10 lg:gap-16 lg:flex-row lg:items-start lg:justify-center xl:gap-20">
        <Image
          alt="Plumber"
          className="mx-auto aspect-square overflow-hidden rounded-full object-cover border-4 border-gray-100 lg:w-96 xl:w-120 "
          height="400"
          src={image}
          width="400"
        />
        <div className="space-y-4">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">{dict.title}</h1>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
              {dict.subtitle}
            </p>
          </div>
          <div className="flex items-center justify-center flex-col gap-2 min-[400px]:flex-row lg:gap-4">
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md border border-blue-700 bg-blue-700 px-8 text-sm font-medium shadow-sm transition-colors hover:bg-blue-600 text-gray-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 "
              href={dict.buttonLink}
            >
              {dict.button}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
