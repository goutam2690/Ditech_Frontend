import React from 'react'
import { motion } from "framer-motion";

const OurMission = () => {

    //mission section 
    const containerVariants2 = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, staggerChildren: 0.3 },
        },
    };

    const textVariants1 = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    };

    const imageVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    };
    //mission section end


    return (
        <div>
            {/* mission section  */}
            <div className="relative bg-black overflow-hidden min-h-[500px] flex items-center">
                <div className="container mx-auto ml-10 relative z-10">
                    <motion.div
                        className="grid lg:grid-cols-2 gap-8 items-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                        variants={containerVariants2}
                    >
                        {/* Text Content */}
                        <motion.div
                            className="space-y-6"
                            variants={textVariants1}
                        >
                            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white leading-tight">
                                <span className="text-[#00FBF4]">Mission</span> is to{' '}
                                <span className="text-[#00FBF4]">Protect</span> Your
                                <br />
                                Businesses & Much More
                            </h1>
                            <motion.button
                                className="inline-flex items-center px-8 py-3 border-2 border-[#00FBF4] text-[#00FBF4] hover:bg-[#00FBF4] hover:text-black transition-colors duration-300 text-lg font-medium"
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                Discover More
                            </motion.button>
                        </motion.div>

                        {/* Image */}
                        <motion.div
                            className="relative h-full flex justify-end"
                            variants={imageVariants}
                        >
                            <div className="relative w-full h-[500px] flex items-center justify-center">
                                <img
                                    src="/assets/person4.png"
                                    alt="IT Professional"
                                    className="object-cover h-full rounded-lg"
                                />
                                {/* Cyan overlay/glow effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#00FBF4] opacity-20 rounded-lg"></div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/95 to-transparent pointer-events-none"></div>
            </div>
            {/* mission section end  */}
        </div>
    )
}

export default OurMission