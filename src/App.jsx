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

function App() {

  return (
    <div>
      <NavBar />
      <Hero />
      <AboutAmity />
      <CourseGrid />
      <FeesTableSimple />
      <ProgramBenefits />
      <CertificateSection />
      <AdmissionSteps />
    </div>
  )
}

export default App
