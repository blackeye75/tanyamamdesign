import React from 'react'
import HeroEnquiryForm from './HeroEnquiryForm'
import BadgeBar from './BadgeBar'
import badges from '/download.jpeg'
import CourseGrid from './CourseGrid'

const Hero = () => {
  return (
    <div className='bg-[url("/building.jpg")] flex-col bg-no-repeat flex justify-end items-end bg-cover w-full h-screen px-24 pb-4 rounded-3xl' >
      <HeroEnquiryForm />
      <div className="mt-6 "> {/* adjust -mt-20 to control overlap amount */}
        <BadgeBar src="./download.jpeg" />
      </div>
    </div>
  )
}

export default Hero