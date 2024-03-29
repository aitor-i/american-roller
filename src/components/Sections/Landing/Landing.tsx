import Image from "next/image"
import image from "@/../public/DALL·E 2024-03-28 14.54.34 - A charming bakery scene in widescreen aspect ratio, vividly adorned with red, white, and blue. The facade of the bakery is painted in these patriotic .webp"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const dict = {
  titulo: "Pastelería American Roller",
  subtitle: "Pastelería americana casera | Próxima apertura en Pamplona"
}

export default function Landing() {
  return (
    <header className="relative h-screen">
      <Image
        alt="Freshly baked goods"
        className="absolute inset-0 object-cover w-full h-full blur-sm"
        height="600"
        placeholder="blur"
        src={image}
        style={{
          aspectRatio: "1200/600",
          objectFit: "cover",
        }}
        width="1200"
      />
      <div className="relative z-10 flex flex-col items-center pt-40 h-full px-4 text-center text-white photo-overlay ">
        <h1 className="text-4xl font-bold sm:text-5xl lg:text-8xl opacity-100 text-white">{dict.titulo}</h1>
        <p className="mt-4 mb-32 text-lg sm:text-xl lg:text-2xl max-w-2xl opacity-100">
          {dict.subtitle}
        </p>
        <Link href={"#"} >
          <Button className="bg-blue-600 tracking-wide hover:bg-blue-500 text-lg font-light">Siguenos</Button>
        </Link>
      </div>
    </header>
  )
}
