import { LocateIcon, MailIcon, PhoneIcon } from "@/components/Icons/Icons";
import dynamic from "next/dynamic";

const MapComponent = dynamic(() => import('./MapComponent/MapComponent'), { ssr: false })
export default function Map() {
  return (
    <section className="w-full bg-yellow-50 py-12 md:py-24">
      <div className="container grid items-center gap-10 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Encuentranos aqui</h2>
        </div>
      </div>
      <ContactInfo />
      {/* <MapComponent /> */}
    </section>

  )
}

function ContactInfo() {
  return (
    <div className="px-4 flex flex-col items-start md:flex-row py-12 text-gray-700 md:px-6  gap-8">
      <div className="flex items-center gap-2">
        <LocateIcon
          className="w-6 h-6 opacity-50" />
        <span className="text-sm leading-none">C/ RIO ALZANIA, 19 11º C. 31006, PAMPLONA/IRUÑA, NAVARRA</span>
      </div>
      <div className="flex items-center gap-2">
        <PhoneIcon className="w-6 h-6 opacity-50" />
        <span className="text-sm leading-none">948 25 74 29</span>
      </div>
      <div className="flex items-center gap-2">
        <MailIcon className="w-6 h-6 opacity-50" />
        <span className="text-sm leading-none">iratielectricidad@telefonica.net</span>
      </div>
    </div>
  )
}




