import React from 'react'
import OurTeams from '../Pages/OurTeams'
import OurGoals from '../Pages/OurGoals'
import OurMission from '../Pages/OurMission'

const Teams = () => {
  return (
    <div>
      <div className="relative w-full bg-transparent h-[40vh]">
        {/* Background Image Container */}
        <div
          className="absolute inset-0 w-full h-full bg-black/50"
          style={{
            backgroundImage: `url('/api/placeholder/1920/300')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        {/* Content Container */}
        <div className="relative h-full w-full">
          <div className="absolute inset-0 bg-[url('/assets/person2.jpg')] bg-cover bg-center opacity-70 pointer-events-none -z-10"></div>
          <div className="flex flex-col justify-center items-center h-full">
            {/* Main Title */}
            <h1 className="text-5xl md:text-8xl font-bold text-white mb-4 text-center">
              <span className="text-[#00FBF4]">Our</span>{" Team"}
            </h1>

            {/* Breadcrumb Navigation */}
            <nav className="text-white text-center">
              <span>Home</span>
              <span className="mx-2">-</span>
              <span className="text-[#00FBF4]">Our Team</span>
            </nav>
          </div>
        </div>
      </div>

      <OurTeams />
      <OurGoals />
      <OurMission />
    </div>
  )
}

export default Teams