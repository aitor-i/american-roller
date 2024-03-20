import Link from "next/link"

export default function Presentation() {
  return (
    <section className="w-full py-6 md:py-12 lg:py-16 xl:py-24">
      <div className="container flex flex-col items-center gap-4 px-4 text-center md:gap-10 lg:gap-16 lg:flex-row lg:items-start lg:justify-center xl:gap-20">
        <img
          alt="Plumber"
          className="mx-auto aspect-square overflow-hidden rounded-full object-cover border-4 border-gray-100 lg:w-96 xl:w-120 dark:border-gray-800"
          height="400"
          src="/placeholder.svg"
          width="400"
        />
        <div className="space-y-4">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Your Local Plumber</h1>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Providing reliable plumbing services to your community. We fix leaks, clear clogs, and keep your water
              running.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row lg:gap-4">
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 dark:border-gray-800"
              href="#"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
