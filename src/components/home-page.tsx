import Header from "./Header/Header"
import Presentation from "./Sections/Presentation/Presentation"
import Services from "./Sections/Services/Services"
import Testimonial from "./Sections/Testimonial/Testimonial"
import Contact from "./Sections/Contact/Contact"
import Footer from "./Footer/Footer"
import Map from "./Sections/MapSection/Map"
import Landing from "./Sections/Landing/Landing"
import Specialtis from "./Sections/Specialties/Specialtis"
import Opinions from "./Sections/Opinions/Opinions"

export function HomePage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <Header />
        <Landing />
        <Specialtis />
        <Opinions />
      </main>
      <Footer />
    </div>
  )
}



