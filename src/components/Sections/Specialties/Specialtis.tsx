import Product from "./Product/Product";

export default function Specialtis() {
  return (
    <section className="w-full py-12 md:py-36 lg:py-52 bg-red-50">
      <div className="container flex flex-col gap-8 px-4 md:px-6">
        <h2 className="text-3xl font-bold sm:text-5xl text-blue-600 text-center">Our Specialties</h2>
        <div className="grid gap-6 lg:grid-cols-3 lg:gap-12 xl:grid-cols-3 mt-8">
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </section>
  )
}
