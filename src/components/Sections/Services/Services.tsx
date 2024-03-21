
const dict = {
  title: "Our Services",
  subtitle: "We offer a wide range of plumbing services to meet your needs. Let us help you with your next project or repair.",
  services: [
    {
      title: "Pipe Repair",
      description: "We can fix leaks and repair damaged pipes to ensure your plumbing system is working properly."

    }, {
      title: "Pipe Repair2",
      description: "We can fix leaks and repair damaged pipes to ensure your plumbing system is working properly."

    },
    {
      title: "Pipe Repair3",
      description: "We can fix leaks and repair damaged pipes to ensure your plumbing system is working properly."

    },
    {
      title: "Pipe Repair4",
      description: "We can fix leaks and repair damaged pipes to ensure your plumbing system is working properly."

    },
  ]
}

export default function Services() {
  return (
    <section className="w-full text-gray-800 py-12 md:py-48 bg-blue-50 dark:bg-gray-800">
      <div className="container grid items-center gap-10 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{dict.title}</h2>
          <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            {dict.subtitle}
          </p>
        </div>
        <ul className="grid gap-6 sm:grid-cols-2">
          {dict.services.map(service => <li key={service.title}>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">{service.title}</h3>
              <p className="text-gray-500 dark:text-gray-400">
                {service.description}
              </p>
            </div>
          </li>
          )}
        </ul>
      </div>
    </section>
  )
}
