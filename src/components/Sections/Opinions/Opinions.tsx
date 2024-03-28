import Opinion from "./Opinion/Opinion";

export default function Opinions() {
  return (
    <section className="py-12 flex flex-col gap-8 px-4 bg-white md:py-40 ">
      <h2 className="text-3xl text-blue-600 font-bold text-center sm:text-4xl lg:text-5xl">What Our Customers Say</h2>
      <div className="grid gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-3">
        <Opinion />
        <Opinion />
      </div>
    </section>
  )
}
