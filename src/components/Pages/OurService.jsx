import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import React from "react";

const OurService = () => {
    // Services Section
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
            <div className="py-16 p-16 bg-black">
                <div className="container mx-auto px-6">
                    <motion.h2
                        className="text-4xl font-semibold text-center text-white mb-12"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        Our Services
                    </motion.h2>

                    <motion.div
                        className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                        variants={containerVariants}
                    >
                        {[
                            { imgSrc: "/assets/Icon3.png", title: "Data Center" },
                            { imgSrc: "/assets/Icon2.png", title: "Cloud Services" },
                            { imgSrc: "/assets/Icon4.png", title: "IT Management" },
                            { imgSrc: "/assets/Icon5.png", title: "Cyber Security" },
                        ].map((service, index) => (
                            <motion.div
                                key={index}
                                className="bg-black p-6 bg-transparent border hover:scale-105 hover:border-2 hover:border-[#00FBF4] transition-all duration-300 flex flex-col justify-between"
                                variants={cardVariants}
                            >
                                <motion.div
                                    className="text-[#00FBF4] pb-6 flex justify-center"
                                    whileHover={{ scale: 1.2 }}
                                    transition={{ type: "spring", stiffness: 200 }}
                                >
                                    <img
                                        src={service.imgSrc}
                                        alt={service.title}
                                        className="w-20 h-20"
                                    />
                                </motion.div>
                                <h3 className="text-xl font-medium text-white mb-2 text-center pt-5">
                                    {service.title}
                                </h3>
                                <p className="text-gray-400 mb-4 text-center">
                                    Comprehensive solutions tailored to your business needs.
                                </p>
                                <motion.div
                                    className="text-4xl text-white flex justify-center pb-4 pt-4 cursor-pointer"
                                    whileHover={{ color: "#00FBF4" }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ArrowRight />
                                </motion.div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default OurService;
