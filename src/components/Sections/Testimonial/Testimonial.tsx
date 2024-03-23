
const dict = {
  "title": "Valoraciones",
  "subtitle": "No es solo nuestra palabra... nuestros clientes también nos avalan",
  "testimonies": [
    {
      "title": "Servicio Ejemplar",
      "description": "El electricista llegó a tiempo y fue muy profesional. Identificó rápidamente el problema con mi instalación eléctrica y realizó las reparaciones necesarias. Mi sistema eléctrico ha estado funcionando perfectamente desde entonces. Recomiendo ampliamente sus servicios.",
      "from": "John Smith"
    },
    {
      "title": "Servicio Profesional",
      "description": "El electricista no solo solucionó el problema por el que fue llamado, sino que también revisó el sistema para asegurar su correcto funcionamiento a largo plazo. Su atención al detalle y el cuidado en su trabajo me dejaron completamente satisfecho. Es evidente su compromiso con la calidad y el servicio al cliente.",
      "from": "John Smith"
    }
  ]
}

export default function Testimonial() {
  return (
    <section className="w-full text-green-600 bg-white py-12 md:py-44">
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
