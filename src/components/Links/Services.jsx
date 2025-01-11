import React from 'react'
import OurService from '../Pages/OurService'
import { motion } from "framer-motion";
import { ArrowRight } from 'lucide-react';
import OurMission from '../Pages/OurMission';
import OurPlans from '../Pages/OurPlans';
import Contact from '../Pages/Contact';


const Services = () => {

    const containerVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { staggerChildren: 0.2 },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <div>
            <div className="relative w-full bg-transparent h-[40vh]">
                {/* Background Image Container */}
                <div
                    className="absolute inset-0 w-full h-full bg-black/50"
                    style={{
                        backgroundImage: `url('/api/placeholder/1920/300')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                ></div>

                {/* Content Container */}
                <div className="relative h-full w-full">
                    <div className="absolute inset-0 bg-[url('/assets/person2.jpg')] bg-cover bg-center opacity-70 pointer-events-none -z-10"></div>
                    <div className="flex flex-col justify-center items-center h-full">
                        {/* Main Title */}
                        <h1 className="text-5xl md:text-8xl font-bold text-white mb-4 text-center">
                            <span className="text-[#00FBF4]">Service</span>s
                        </h1>

                        {/* Breadcrumb Navigation */}
                        <nav className="text-white text-center">
                            <span>Home</span>
                            <span className="mx-2">-</span>
                            <span className="text-[#00FBF4]">Services</span>
                        </nav>
                    </div>
                </div>
            </div>

            <div className="py-16 md:p-14 lg:p-14 bg-black">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 mt-5 -mb-32">
                    {/* Left Column (Text) */}
                    <div className="text-white">
                        <motion.h2
                            className="text-md font-semibold mb-12 text-left text-[#00FBF4]"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                        >
                            Our Services
                        </motion.h2>

                        <motion.h3 className="text:5xl md:text-7xl font-semibold mb-6">
                            Our <span className='text-[#00FBF4]'>Solutions</span> & <span className='text-[#00FBF4]'>Focus Area</span>
                        </motion.h3>
                        <p className="text-gray-400 text-lg mb-6">
                            Cras a tincidunt nulla. In eget nibh quis ligula blandit accumsan sed et felis. Fusce ac dignissim sapien, id molestie nunc. Ut ante turpis, auctor vel leo a, lacinia gravida quam. Curabitur laoreet massa vel velit euismod, dictum posuere sem porttitor. Sed quis sagittis lorem. Proin lobortis vitae nisl eget consectetur. Curabitur at leo placerat purus posuere iaculis sed quis lorem. Integer tellus felis, dictum sit amet.
                        </p>
                    </div>

                    {/* Right Column (Cards) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {[
                            { imgSrc: "/assets/Icon3.png", title: "Data Center" },
                            { imgSrc: "/assets/Icon2.png", title: "Cloud Services" },
                        ].map((service, index) => (
                            <motion.div
                                key={index}
                                className="p-6 bg-transparent border hover:scale-105 hover:border-2 hover:border-[#00FBF4] transition-all duration-300 h-80 flex flex-col justify-between"
                                variants={cardVariants}
                            >
                                <motion.div
                                    className="text-[#00FBF4] mb-4 flex justify-center"
                                    whileHover={{ scale: 1.2 }}
                                    transition={{ type: "spring", stiffness: 200 }}
                                >
                                    <img src={service.imgSrc} alt={service.title} className="w-20 h-20" />
                                </motion.div>
                                <h3 className="text-xl font-medium text-white mb-2 text-center">
                                    {service.title}
                                </h3>
                                <p className="text-gray-400 mb-4 text-center">
                                    Comprehensive solutions tailored to your business needs.
                                </p>
                                <div className="flex justify-center">
                                    <motion.div
                                        className="text-white w-10 h-10"
                                        whileHover={{ rotate: 90 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <ArrowRight />
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>


            <OurService />

            <OurMission />

            <OurPlans />

            <Contact />

        </div>
    )
}

export default Services