import Image from "next/image"
import jane from "@/../public/jane-doe.webp"

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
      <p className="mt-4 font-light text-blue-500">"The best homemade bakery in town! Their bread is my absolute favorite."</p>
      <cite className="mt-2 text-blue-500">- Jane Doe</cite>
    </blockquote>
  )
}
