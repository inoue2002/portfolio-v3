import CompanySection from './top/CompanySection'
import ContactCta from './top/ContactCta'
import Hero from './top/Hero'
import Philosophy from './top/Philosophy'
import Process from './top/Process'
import ServicesGrid from './top/ServicesGrid'
import Story from './top/Story'
import WorksHighlight from './top/WorksHighlight'

export default function Top() {
  return (
    <>
      <Hero />
      <Philosophy />
      <Process />
      <ServicesGrid />
      <WorksHighlight />
      <Story />
      <CompanySection />
      <ContactCta />
    </>
  )
}
