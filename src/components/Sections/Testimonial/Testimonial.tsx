export default function Testimonial() {
  return (
    <section className="w-full py-12 md:py-24">
      <div className="container grid items-center gap-10 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Testimonials</h2>
          <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Don't just take our word for it. Here's what our customers have to say about our services.
          </p>
        </div>
        <div className="grid gap-4 sm:gap-6">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Professional Service</h3>
            <p className="text-gray-500 dark:text-gray-400">
              "The plumber arrived on time and was very professional. He quickly identified the issue with my pipes
              and made the necessary repairs. My plumbing has been working perfectly ever since. I highly recommend
              their services."
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Prompt Response</h3>
            <p className="text-gray-500 dark:text-gray-400">
              "I called the plumbing service when I had a leak in my bathroom, and they were at my house within the
              hour. The plumber was friendly and knowledgeable, and he fixed the issue quickly. I was very impressed
              with their prompt response and the quality of their work."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
