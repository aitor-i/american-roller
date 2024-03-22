
const dict = {
  title: "Testimonials",
  subtitle: "Don't just take our word for it. Here's what our customers have to say about our services.",
  testimonies: [{
    title: "Professional Service 1",
    description: "The plumber arrived on time and was very professional. He quickly identified the issue with my pipes and made the necessary repairs. My plumbing has been working perfectly ever since. I highly recommend their services.",
    from: "John Smith"
  },
  {
    title: "Professional Service 2",
    description: "The plumber arrived on time and was very professional. He quickly identified the issue with my pipes and made the necessary repairs. My plumbing has been working perfectly ever since. I highly recommend their services.",
    from: "John Smith"
  }]
}

export default function Testimonial() {
  return (
    <section className="w-full text-blue-500 bg-white py-12 md:py-44">
      <div className="container grid items-center gap-10 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{dict.title}</h2>
          <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            {dict.subtitle}
          </p>
        </div>
        <div className="grid gap-4 md:gap-20 sm:gap-6">
          {dict.testimonies.map(testimony => <div key={testimony.title} className="space-y-2">
            <h3 className="text-2xl font-semibold">{testimony.title}</h3>
            <p className="text-gray-500 dark:text-gray-400">
              {testimony.description}
            </p>
            <i className="text-gray-500 text-sm">{testimony.from}</i>
          </div>
          )}
        </div>
      </div>
    </section>
  )
}
