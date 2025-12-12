import { useEffect, useState } from 'react'
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
import Lenis from "lenis";
// import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

function App() {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", (e) => {
      // console.log(e);
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });
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
