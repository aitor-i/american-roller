import Image from "next/image"
import donut from "@/../public/donut.webp"

export default function Product() {
  return (
    <div className="flex flex-col justify-center space-y-4">
      <Image
        alt="Artisanal Bread"
        className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
        height="200"
        src={donut}
        width="350"
      />
      <h3 className="text-2xl font-bold text-blue-500  sm:text-3xl text-center">Artisanal Donut</h3>
      <p className="max-w-[600px] text-gray-700 md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed  text-center">
        Freshly baked every morning using traditional methods.
      </p>
    </div>
  )
}
