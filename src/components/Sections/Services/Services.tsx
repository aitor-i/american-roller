
const dict = {
  title: "Servicios",
  subtitle: "Instalaciones eléctricas en general. Instalaciones de redes telegráficas, telefónicas, telefonía sin hilos y televisión.",
  services: [
    {
      title: "Instalaciones electricas",
      description: "Montamos instalaciones electricas a nivel industrial y a tambien a nivel domestico"

    }, {
      title: "Redes telegráficas",
      description: "Montamos instalaciones de redes telegráficas"

    },
    {
      title: "Redes de telefonía",
      description: "Tambien montamos redes de telefonía"

    },
    {
      title: "Telefonía sin hilos y televisión",
      description: "Somos expertos en instalaciones de telefonía sin hilos y en instalaciones de televisión"

    },
  ]
}

export default function Services() {
  return (
    <section className="w-full text-gray-800 py-12 md:py-48 bg-yellow-50 dark:bg-gray-800">
      <div className="container grid items-center gap-10 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-4">
          <h2 className="text-3xl text-green-700 font-bold tracking-tighter sm:text-4xl md:text-5xl">{dict.title}</h2>
          <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            {dict.subtitle}
          </p>
        </div>
        <ul className="grid gap-6 sm:grid-cols-2">
          {dict.services.map(service => <li key={service.title}>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-green-600">{service.title}</h3>
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
