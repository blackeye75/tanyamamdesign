import { useState } from 'react'
import './App.css'
import NavBar from './component/NavBar'
import Hero from './component/Hero'
import AboutAmity from './component/AboutAmity'
import CourseGrid from './component/CourseGrid'
import FeesTableSimple from './component/FeesTableSimple'
import ProgramBenefits from './component/ProgramBenefits'
import CertificateSection from './component/CertificateSection'
import AdmissionSteps from './component/AdmissionSteps'
import OpportunitySection from './component/OpportunitySection'
import HiringPartners from './component/HiringPartners'
import FAQSection from './component/FAQSection'
import HighlightSection from './component/HighlightSection'
import FooterWithMotion from './component/FooterWithMotion'

function App() {

  return (
    <div className="App bg-[#F9FAFB]  ">
      <NavBar />
      <Hero />
      <AboutAmity />
      <CourseGrid />
      <FeesTableSimple />
      <ProgramBenefits />
      <CertificateSection />
      <AdmissionSteps />
      <OpportunitySection />
      <HiringPartners />
      <FAQSection />
      <HighlightSection />
      <FooterWithMotion />
    </div >
  )
}

export default App
