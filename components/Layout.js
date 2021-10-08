import { InView } from "react-intersection-observer"
import Hero from './Hero'
import Offer from './Offer'
import Projects from './Projects'
import Benefits from './Benefits'
import Contact from './Contact'

const Section = ({ name, setActive, children }) => (
  <InView as="section" name={name} className="md:scroll-margin" rootMargin="-50%" onChange={(inView, entry) => inView && setActive(entry.target.getAttribute("name"))}>
    {children}
  </InView>
)

export const Layout = ({ setActive }) => (
  <>
    <Section name="Hero" setActive={setActive}>
      <Hero />
    </Section>
    <Section name="Oferta" setActive={setActive}>
      <Offer />
    </Section>
    <Section name="Realizacje" setActive={setActive}>
      <Projects />
    </Section>
    <Section name="Korzyści" setActive={setActive}>
      <Benefits />
    </Section>
    <Section name="Kontakt" setActive={setActive}>
      <Contact />
    </Section>
  </>
)

