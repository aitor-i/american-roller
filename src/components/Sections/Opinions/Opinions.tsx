import Image from "next/image"
export default function Opinions() {
  return (
    <section className="py-12 px-4 bg-white md:py-40 ">
      <h2 className="text-3xl text-blue-600 font-bold text-center sm:text-4xl lg:text-5xl">What Our Customers Say</h2>
      <div className="grid gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-3">
        <blockquote className="flex flex-col items-center text-center">
          <Image
            alt="Customer"
            className="w-24 h-24 rounded-full object-cover"
            height="100"
            src="/placeholder.svg"
            style={{
              aspectRatio: "100/100",
              objectFit: "cover",
            }}
            width="100"
          />
          <p className="mt-4 font-light text-blue-500">"The best homemade bakery in town! Their bread is my absolute favorite."</p>
          <cite className="mt-2 text-blue-500">- Jane Doe</cite>
        </blockquote>
      </div>
    </section>
  )
}
