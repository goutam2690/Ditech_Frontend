import { ArrowRight, Plus } from 'lucide-react';
import React, { useEffect, useState } from 'react';
// import bannerImage from 'assets/banner.jpg';


import { motion } from "framer-motion";
import Contact from './Contact';
import OurMission from './OurMission';
import OurPlans from './OurPlans';
import OurService from './OurService';
import Stats from './Stats';
import OurGoals from './OurGoals';
import Testimonials from './Testimonials';
import OurBlog from './OurBlog';


const Home = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const logos = [
        {
            id: 1,
            src: "/assets/Logo-Youseo-10.png",
            alt: "DIGIOUS",
        },
        {
            id: 2,
            src: "/assets/Logo-Digious.png",
            alt: "yousec",
        },
        {
            id: 3,
            src: "/assets/Digit-Logo.png",
            alt: "JUMPKINS",
        },
        {
            id: 4,
            src: "/assets/Digit-Logo.png",
            alt: "DIGIT",
        },
        {
            id: 5,
            src: "/assets/Logo-Youseo-10.png",
            alt: "SkyCloud",
        },
        {
            id: 6,
            src: "/assets/Logo-Digious.png",
            alt: "BOOSTER",
        }
    ];

    // Auto slide every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex + 3 >= logos.length ? 0 : prevIndex + 3
            );
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    // Get current visible logos
    const visibleLogos = logos.slice(currentIndex, currentIndex + 3);


    const showcaseItems = [
        {
            id: 1,
            title: "IT Management",
            image: "/assets/person.jpg",
            altText: "Person working on computer with multiple screens"
        },
        {
            id: 2,
            title: "Cloud Solutions",
            image: "/assets/person2.jpg",
            altText: "Person working in server room"
        },
        {
            id: 3,
            title: "IT Consulting",
            image: "/assets/person3.jpg",
            altText: "Two people discussing over laptop"
        }
    ];

    //trusted by section
    const containerVariant = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, staggerChildren: 0.2 },
        },
    };

    const logoVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
    };

    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };
    //trusted by section end


    //latest showcase section 
    const containerVariants1 = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, staggerChildren: 0.3 },
        },
    };

    const cardVariant = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
    };

    const hoverVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.3 } },
    };
    //latest showcase section end


    return (
        <div className='relative'>
            {/* Fixed Background Image */}
            <div className="fixed inset-0 bg-[url('/assets/Background-21.png')] bg-cover bg-center opacity-35 pointer-events-none z-0"></div>

            <div className="min-h-screen bg-black text-white">

                {/* Hero Section */}
                <div className="relative w-full h-screen flex items-center">
                    {/* Background Image */}
                    <div
                        className="absolute inset-0 bg-cover bg-center opacity-65"
                        style={{
                            backgroundImage: "url('/assets/Banner.jpg')",
                        }}
                    ></div>

                    {/* Second Image (Highlighted) */}
                    <div
                        className="absolute inset-0 bg-cover bg-center z-0"
                        style={{
                            backgroundImage: "url('/assets/Background-6.png')",
                        }}
                    ></div>

                    {/* Bottom Blur Effect */}
                    <div
                        className="absolute inset-0 z-5"
                        style={{
                            background: "linear-gradient(to bottom, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 90%)",
                        }}
                    ></div>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

                    {/* Content */}
                    <div className="relative z-20 text-left px-6 lg:px-20">
                        <h1 className="text-5xl md:text-8xl font-bold text-white leading-tight mb-6">
                            Creating a Better
                            <br />
                            <span className="text-[#00FBF4]">IT Solutions.</span>
                        </h1>
                        <p className="text-gray-300 text-sm md:text-lg max-w-xl mb-8">
                            Delivering innovative IT solutions to help businesses thrive in the digital age.
                        </p>
                        <button className="hidden md:block px-6 py-2 border border-[#00FBF4] text-[#00FBF4] hover:bg-[#fff] hover:text-gray-900 font-bold">
                            Contact Us
                        </button>
                    </div>
                </div>
                {/*Hero End*/}

                <Stats />

                <OurService />

                {/* Trusted by */}
                <div className="relativ py-16 overflow-hidden p-16">
                    <div className="container mx-auto px-6 relative z-10">
                        <motion.div
                            className="grid lg:grid-cols-2 gap-12 items-center"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.2 }} // Animation plays on scroll in/out
                            variants={containerVariant}
                        >
                            {/* Logos Slider */}
                            <div className="space-y-8">
                                <motion.div
                                    className="grid grid-cols-3 gap-8 transition-all duration-500 ease-in-out"
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.2 }} // Ensures logos only animate once
                                    variants={containerVariant}
                                >
                                    {visibleLogos.map((logo) => (
                                        <motion.div
                                            key={logo.id}
                                            className="flex items-center justify-center"
                                            initial="hidden"
                                            animate="visible"
                                            variants={logoVariants}
                                        >
                                            <img
                                                src={logo.src}
                                                alt={logo.alt}
                                                className="max-w-full h-auto object-contain"
                                            />
                                        </motion.div>
                                    ))}
                                </motion.div>

                                {/* Navigation dots */}
                                <motion.div
                                    className="flex justify-center space-x-2"
                                    initial="hidden"
                                    animate="visible"
                                    variants={containerVariant}
                                >
                                    {Array.from({ length: Math.ceil(logos.length / 3) }).map((_, idx) => (
                                        <motion.button
                                            key={idx}
                                            onClick={() => setCurrentIndex(idx * 3)}
                                            className={`w-2 h-2 rounded-full transition-colors ${currentIndex === idx * 3
                                                ? "bg-[#00FBF4]"
                                                : "bg-gray-500"
                                                }`}
                                            aria-label={`Go to slide ${idx + 1}`}
                                            whileHover={{ scale: 1.3 }}
                                            transition={{ type: "spring", stiffness: 200 }}
                                        />
                                    ))}
                                </motion.div>
                            </div>

                            {/* Text Content */}
                            <motion.div
                                className="text-center"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                variants={textVariants}
                            >
                                <h2 className="text-4xl md:text-4xl lg:text-4xl font-bold text-white mb-4">
                                    <div className="mb-2">
                                        Trusted By <span className="text-[#00FBF4]">1,790+</span>
                                    </div>
                                    <div className="mb-2">World's Leading</div>
                                    <div>
                                        <span className="text-[#00FBF4]">IT Companies.</span>
                                    </div>
                                </h2>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
                {/* Trusted by End */}

            </div>

            <OurGoals />

            {/* latest showcase  */}
            <div className="bg-black min-h-screen py-16 relative p-16">
                <div className="container mx-auto px-4">
                    {/* Section Header */}
                    <motion.div
                        className="text-center mb-12"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                        variants={containerVariant}
                    >
                        <p className="text-[#00FBF4] text-sm mb-4">Case Studies</p>
                        <motion.h2
                            className="text-4xl md:text-5xl font-bold text-white mb-6"
                            variants={containerVariant}
                        >
                            Latest <span className="text-[#00FBF4]">Showcase & Solutions</span> to
                            <br className="hidden md:block" />
                            <span className="text-[#00FBF4]">IT Solutions</span>
                        </motion.h2>
                    </motion.div>

                    {/* Cards Grid */}
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                        variants={containerVariants1}
                    >
                        {showcaseItems.map((item) => (
                            <motion.div
                                key={item.id}
                                className="group relative overflow-hidden rounded-lg"
                                variants={cardVariant}
                            >
                                {/* Card Image */}
                                <motion.img
                                    src={item.image}
                                    alt={item.altText}
                                    className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110 opacity-80"
                                    initial={{ scale: 1 }}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                />

                                {/* Hover Overlay */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    variants={hoverVariants}
                                >
                                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                        <div className="flex items-center justify-between mb-4">
                                            <h3 className="text-white text-xl font-semibold">{item.title}</h3>
                                            <span className="bg-[#00FBF4]/20 p-2 rounded-full">
                                                <Plus className="w-6 h-6 text-[#00FBF4]" />
                                            </span>
                                        </div>
                                        <motion.button
                                            className="text-white border border-[#00FBF4] px-6 py-2 rounded hover:bg-[#00FBF4] hover:text-black transition-colors duration-300"
                                            whileHover={{ scale: 1.1 }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                        >
                                            Read More
                                        </motion.button>
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
            {/* latest showcase  End*/}


            <OurMission />

            <Contact />


            <OurPlans />


            <Testimonials />
            
            <OurBlog />

        </div>

    )
}

export default Home