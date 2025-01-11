import React from 'react';

const OurTeams = () => {
  const teamMembers = [
    {
      name: 'Anita Zelovska',
      role: 'IT Manager',
      imgUrl: '/assets/team3.png'
    },
    {
      name: 'Daniel Abraham',
      role: 'Cloud Specialist',
      imgUrl: '/assets/team4.png'
    },
    {
      name: 'Takashi Jiro',
      role: 'Malware Expert',
      imgUrl: '/assets/team5.png'
    },
    {
      name: 'Takashi Jiro',
      role: 'Malware Expert',
      imgUrl: '/assets/team6.png'
    },
    {
      name: 'Takashi Jiro',
      role: 'Malware Expert',
      imgUrl: '/assets/team7.png'
    },
    {
      name: 'Takashi Jiro',
      role: 'Malware Expert',
      imgUrl: '/assets/team8.png'
    }
  ];

  return (
    <div className="bg-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <p className="text-[#00FBF4] text-lg mb-2">Our Team</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Meet The <span className="text-[#00FBF4]">Genius Team</span>
          </h2>
        </div>

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="relative group">
              {/* Card Background with Hover Effect */}
              <div className="relative h-[500px] bg-[#00FBF4] rounded-lg overflow-hidden">
                {/* Globe Background Pattern */}
                <div className="absolute inset-0 opacity-65">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="white" strokeWidth="0.5" />
                    <path d="M10,50 Q50,0 90,50 Q50,100 10,50" fill="none" stroke="white" strokeWidth="0.5" />
                    <path d="M10,50 Q50,20 90,50 Q50,80 10,50" fill="none" stroke="white" strokeWidth="0.5" />
                  </svg>
                </div>

                {/* Member Image */}
                <div className="absolute inset-0">
                  <img
                    src={member.imgUrl}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale"
                  />
                </div>

                {/* Text Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[#00FBF4]">
                    {member.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeams;