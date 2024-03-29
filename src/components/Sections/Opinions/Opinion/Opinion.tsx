import Image from "next/image"
import jane from "@/../public/jane-doe.webp"

const dict = {
  opinion: "The best homemade bakery in town! Their bread is my absolute favorite.",
  client: "- Jane Doe"
}

export default function Opinion() {
  return (
    <blockquote className="flex flex-col items-center text-center">
      <Image
        alt="Customer"
        className="w-32 h-32 rounded-full object-cover"
        height="150"
        src={jane}
        style={{
          aspectRatio: "100/100",
          objectFit: "cover",
        }}
        width="150"
      />
      <p className="mt-4 font-light text-blue-500">{dict.opinion}</p>
      <cite className="mt-2 text-blue-500">{dict.client}</cite>
    </blockquote>
  )
}
