import Link from "next/link"
import Image from "next/image"

import image from '@/../public/home-page.webp'

const dict = {
  title: "Irati electricidad",
  subtitle: "Instalaciones eléctricas en general. Instalaciones de redes telegráficas, telefónicas, telefonía sin hilos y televisión.",
  button: "Contactanos",
  buttonLink: "#"
}

export default function Presentation() {
  return (
    <section className="w-full pt-48 bg-white py-6 md:py-52 ">
      <div className="container flex flex-col items-center gap-4 px-4 text-center md:gap-10 lg:gap-16 lg:flex-row lg:items-start lg:justify-center xl:gap-20">
        <Image
          alt="Plumber"
          className="mx-auto aspect-square overflow-hidden rounded-full object-cover border-4 border-gray-100 lg:w-96 xl:w-120 dark:border-gray-800"
          height="400"
          src={image}
          width="400"
        />
        <div className="space-y-4">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">{dict.title}</h1>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              {dict.subtitle}
            </p>
          </div>
          <div className="flex items-center justify-center flex-col gap-2 min-[400px]:flex-row lg:gap-4">
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md border border-green-700 bg-green-700 px-8 text-sm font-medium shadow-sm transition-colors hover:bg-blue-600 text-gray-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 dark:border-gray-800"
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
