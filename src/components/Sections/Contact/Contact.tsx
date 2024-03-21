import dynamic from 'next/dynamic'

const ContactForm = dynamic(() => import('@/components/ContactForm/ContactForm'), { ssr: false })

const dict = {
  title: "Contact Us",
  description: "Ready to experience the best plumbing services in town? Contact us to schedule an appointment or request a quote."
}

export default function Contact() {
  return (
    <section className="w-full bg-blue-50 py-12 md:py-24">
      <div className="container grid items-center gap-10 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{dict.title}</h2>
          <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            {dict.description}
          </p>
        </div>
        <div className="mx-auto w-full max-w-sm space-y-2">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
