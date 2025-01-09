import React, { useEffect, useState } from 'react'
import { Monitor, Cloud, Database, Shield, ArrowRight, Plus, Check } from 'lucide-react';
// import bannerImage from 'assets/banner.jpg';
import Slider from "react-slick";
import { Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';


import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";



const Home = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

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

    const features = [
        "We are committed to providing quality IT Services",
        "Really know the true needs and expectations of customers",
        "Provided by experts to help challenge critical activities",
        "Processes of achieving the excellence improvements"
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
    };

    const plans = [
        {
            name: "Basic",
            price: "39",
            period: "Per Month",
            features: [
                "IT Consultations",
                "Server Security",
                "Digital IT Solutions",
                "Customer Support"
            ],
            isBestseller: false
        },
        {
            name: "Premium",
            price: "99",
            period: "Per Month",
            features: [
                "IT Consultations",
                "Server Security",
                "Digital IT Solutions",
                "Customer Support"
            ],
            isBestseller: true
        },
        {
            name: "Pro",
            price: "69",
            period: "Per Month",
            features: [
                "IT Consultations",
                "Server Security",
                "Digital IT Solutions",
                "Customer Support"
            ],
            isBestseller: false
        }
    ];


    const [currentSlide, setCurrentSlide] = useState(0);

    const testimonials = [
        {
            id: 1,
            name: "Anita Guinn",
            position: "C.E.O Startup",
            image: "/assets/team.jpg",
            text: "Ut maximus, nibh sed luctus luctus, justo augue dictum justo, ut congue nisi mauris vitae eros. Donec tempor scelerisque urna ut pretium. Vestibulum non risus sed lectus elementum imperdiet. Curabitur fringilla lacus velit."
        },
        {
            id: 2,
            name: "John Smith",
            position: "Tech Director",
            image: "/assets/team1.jpg",
            text: "Suspendisse ultricies gravida luctus. In lacinia tortor vel facilisis lobortis. Vestibulum luctus diam in accumsan fermentum. Praesent non scelerisque metus. Quisque vitae augue at turpis congue pulvinar vitae eget elit."
        },
        {
            id: 3,
            name: "Sarah Johnson",
            position: "IT Manager",
            image: "/assets/team2.jpg",
            text: "Vestibulum non risus sed lectus elementum imperdiet. Curabitur fringilla lacus velit. Suspendisse ultricies gravida luctus. In lacinia tortor vel facilisis lobortis. Vestibulum luctus diam in accumsan fermentum."
        }
    ];

    // Auto advance slides
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) =>
                prev === testimonials.length - 1 ? 0 : prev + 1
            );
        }, 5000);

        return () => clearInterval(timer);
    }, []);


    const blogPosts = [
        {
            id: 1,
            title: "Digital Conference Of IT Tech Events",
            image: "/assets/person.jpg",
            description: "Digital Conference Of IT Tech Events in 2020 Home – Single Post Deka August 20, 2022 0 Comment Lorem ipsum dolor sit amet, consectetur adipisicing elit. Morbi elit arcu, posuere..."
        },
        {
            id: 2,
            title: "Data Security With Multiple Business Values",
            image: "/assets/person2.jpg",
            description: "Data Security With Multiple Business Values. Home – Single Post Deka August 20, 2022 0 Comment Lorem ipsum dolor sit amet, consectetur adipisicing elit. Morbi elit arcu, posuere eu ipsum..."
        },
        {
            id: 3,
            title: "Providing Top Quality Cleaning & Related",
            image: "/assets/person3.jpg",
            description: "Providing Top Quality Cleaning & Related Services Charms. Home – Single Post Deka August 20, 2022 0 Comment Lorem ipsum dolor sit amet, consectetur adipisicing elit. Morbi elit arcu, posuere..."
        }
    ];







    // stats section 
    const [ref, inView] = useInView({ triggerOnce: true });
    const controls = useAnimation();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    const progressVariants = {
        hidden: { width: "0%" },
        visible: (width) => ({
            width: `${width}%`,
            transition: { duration: 1 },
        }),
    };

    const countAnimation = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 1 },
        },
    };

    const [years, setYears] = useState(0);
    const [projects, setProjects] = useState(0);

    useEffect(() => {
        if (inView) {
            let yearsInterval = setInterval(() => {
                setYears((prev) => (prev < 19 ? prev + 1 : prev));
            }, 50);

            let projectsInterval = setInterval(() => {
                setProjects((prev) => (prev < 152000 ? prev + 1000 : prev));
            }, 10);

            return () => {
                clearInterval(yearsInterval);
                clearInterval(projectsInterval);
            };
        }
    }, [inView]);

    // stats section end 

    //services section
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
    //services section end

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


    //contact form
    const containerVariants3 = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, staggerChildren: 0.3 } },
    };

    const textVariants2 = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    };

    const featureVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
    };

    const formVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };
    //contact form end


    //plans section
    const containerVariants4 = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, staggerChildren: 0.3 } },
    };

    const cardVariants3 = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
    };

    const buttonVariants = {
        hover: { scale: 1.1, transition: { yoyo: Infinity, duration: 0.3 } },
    };
    //plans section end


    // blog section     
    const containerVariants5 = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, staggerChildren: 0.3 } },
    };

    const cardVariants4 = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    };

    const imageVariants1 = {
        hover: { scale: 1.1, transition: { duration: 0.3 } },
    };
    //blog section end


    return (
        <div className='relative'>
            {/* Fixed Background Image */}
            <div className="fixed inset-0 bg-[url('/assets/Background-21.png')] bg-cover bg-center opacity-65 pointer-events-none z-0"></div>

            <div className="min-h-screen bg-black text-white">
                {/* Navbar */}
                <nav className="flex items-center justify-between px-4 py-4 border-b border-gray-800">
                    {/* Logo */}
                    <div className="text-2xl font-bold">
                        <span>DI</span>
                        <span className="text-[#00FBF4]">TECH</span>
                    </div>

                    {/* Toggle Button (Hamburger Icon) */}
                    <button
                        className="md:hidden text-[#00FBF4] text-2xl"
                        onClick={toggleMenu}
                    >
                        {isMenuOpen ? "✖" : "☰"}
                    </button>

                    {/* Navbar Links */}
                    <div
                        className={`flex flex-col md:flex-row items-center gap-4 md:gap-8 absolute md:static top-16 left-0 right-0 bg-gray-900 md:bg-transparent z-10 md:z-auto p-6 md:p-0 transform ${isMenuOpen ? "translate-y-0" : "-translate-y-[200%]"
                            } md:translate-y-0 transition-transform duration-300 font-semibold`}
                    >
                        <a href="#" className="hover:text-[#00FBF4]">
                            Home
                        </a>
                        <a href="#" className="hover:text-[#00FBF4]">
                            Services
                        </a>
                        <a href="#" className="hover:text-[#00FBF4]">
                            Case Studies
                        </a>
                        <a href="#" className="hover:text-[#00FBF4]">
                            Pages
                        </a>
                        <a href="#" className="hover:text-[#00FBF4]">
                            Blog
                        </a>
                        <a href="#" className="hover:text-[#00FBF4]">
                            Contact
                        </a>
                    </div>

                    {/* Get Started Button */}
                    <button className="hidden md:block px-6 py-2 border border-[#00FBF4] text-[#00FBF4] hover:bg-[#00FBF4] hover:text-gray-900 font-bold">
                        Get Started
                    </button>
                </nav>
                {/* Navbar close**/}


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



                {/* Stats Section */}
                <div className="container mx-auto py-16 p-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        {/* Left Column: Text and Progress Bars */}
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-snug">
                                Let Us Be Your
                                <br />
                                <span className="text-[#00FBF4]">IT Partner</span>
                            </h2>
                            <p className="text-gray-400 text-sm md:text-base mb-8">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
                                quis faucibus ligula. Maecenas a purus massa. Ut elementum sem.
                            </p>
                            <div className="space-y-6" ref={ref}>
                                {/* Workflow Management */}
                                <div className="relative">
                                    <div className="text-[#00FBF4] text-sm md:text-base mb-2">
                                        Workflow Management
                                    </div>
                                    <div className="h-2 bg-gray-800 rounded">
                                        <motion.div
                                            className="h-2 bg-[#00FBF4] rounded"
                                            variants={progressVariants}
                                            custom={69}
                                            initial="hidden"
                                            animate={controls}
                                        />
                                    </div>
                                </div>
                                {/* IT Practice in Cloud */}
                                <div className="relative">
                                    <div className="text-[#00FBF4] text-sm md:text-base mb-2">
                                        IT Practice in Cloud
                                    </div>
                                    <div className="h-2 bg-gray-800 rounded">
                                        <motion.div
                                            className="h-2 bg-[#00FBF4] rounded"
                                            variants={progressVariants}
                                            custom={58}
                                            initial="hidden"
                                            animate={controls}
                                        />
                                    </div>
                                </div>
                                {/* Software For Financial */}
                                <div className="relative">
                                    <div className="text-[#00FBF4] text-sm md:text-base mb-2">
                                        Software For Financial
                                    </div>
                                    <div className="h-2 bg-gray-800 rounded">
                                        <motion.div
                                            className="h-2 bg-[#00FBF4] rounded"
                                            variants={progressVariants}
                                            custom={75}
                                            initial="hidden"
                                            animate={controls}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Stats and Video */}
                        <div className="grid grid-cols-2 gap-8">
                            {/* Stats Section */}
                            <div className="text-center">
                                <motion.div
                                    className="text-5xl font-bold text-[#00FBF4]"
                                    variants={countAnimation}
                                    initial="hidden"
                                    animate={controls}
                                >
                                    {years}+
                                </motion.div>
                                <div className="text-gray-400 text-sm md:text-base">
                                    Years of Experiences
                                </div>
                            </div>
                            <div className="text-center">
                                <motion.div
                                    className="text-5xl font-bold text-[#00FBF4]"
                                    variants={countAnimation}
                                    initial="hidden"
                                    animate={controls}
                                >
                                    {projects.toLocaleString()}
                                </motion.div>
                                <div className="text-gray-400 text-sm md:text-base">
                                    Projects Completed
                                </div>
                            </div>
                            {/* Video Section */}
                            <div className="col-span-2 flex justify-center">
                                <a
                                    href="https://www.youtube.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="relative w-48 h-48 rounded-full overflow-hidden flex items-center justify-center bg-black border-4 border-[#00FBF4]"
                                >
                                    <img
                                        src="/assets/Background-6.png"
                                        alt="Video Thumbnail"
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />
                                    <motion.div
                                        className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                                        animate={{
                                            opacity: [0.5, 1, 0.5],
                                        }}
                                        transition={{
                                            repeat: Infinity,
                                            duration: 1.5,
                                        }}
                                    >
                                        <div className="w-16 h-16 bg-[#00FBF4] rounded-full flex items-center justify-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                className="w-8 h-8 text-black"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M10.804 8L6 5.6v4.8L10.804 8z" />
                                                <path
                                                    fillRule="evenodd"
                                                    d="M3.267 1.098C3.864.941 4.683.9 6 .9h4c1.317 0 2.136.041 2.733.198.601.157 1.124.421 1.562.884.436.462.676 1.022.821 1.724C15.041 4.1 15 4.918 15 6v4c0 1.082.041 1.9-.118 2.496-.145.702-.385 1.262-.821 1.724-.438.463-.96.727-1.562.884-.597.157-1.416.198-2.733.198H6c-1.317 0-2.136-.041-2.733-.198-.601-.157-1.124-.421-1.562-.884-.436-.462-.676-1.022-.821-1.724C.959 11.9 1 11.082 1 10V6c0-1.082-.041-1.9.118-2.496.145-.702.385-1.262.821-1.724.438-.463.96-.727 1.562-.884zM6 .5h4c1.317 0 2.136.041 2.733.198.767.2 1.494.54 2.033 1.203.538.663.845 1.469.995 2.482.155 1.012.205 1.856.205 3.117v4c0 1.26-.05 2.105-.205 3.117-.15 1.013-.457 1.819-.995 2.482-.539.663-1.266 1.003-2.033 1.203C12.136 15.459 11.317 15.5 10 15.5H6c-1.317 0-2.136-.041-2.733-.198-.767-.2-1.494-.54-2.033-1.203-.538-.663-.845-1.469-.995-2.482-.155-1.012-.205-1.856-.205-3.117V6c0-1.26.05-2.105.205-3.117.15-1.013.457-1.819.995-2.482C1.733 1.041 2.46.7 3.227.5z"
                                                />
                                            </svg>
                                        </div>
                                    </motion.div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Hero End */}


                {/* Services Section */}
                <div className="py-16 p-16">
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
                                    className="p-6 bg-transparent border hover:scale-105 hover:border-2 hover:border-[#00FBF4] transition-all duration-300 h-72 flex flex-col justify-between"
                                    variants={cardVariants}
                                >
                                    <motion.div
                                        className="text-[#00FBF4] mb-4 flex justify-center"
                                        whileHover={{ scale: 1.2 }}
                                        transition={{ type: "spring", stiffness: 200 }}
                                    >
                                        <img
                                            src={service.imgSrc}
                                            alt={service.title}
                                            className="w-20 h-20"
                                        />
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
                        </motion.div>
                    </div>
                </div>
                {/* services section end  */}


                {/* Trusted by */}
                <div className="relativ py-16 overflow-hidden p-16">
                    <div className="container mx-auto px-6 relative z-10">
                        <motion.div
                            className="grid lg:grid-cols-2 gap-12 items-center"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.2 }} // Animation plays on scroll in/out
                            variants={containerVariants}
                        >
                            {/* Logos Slider */}
                            <div className="space-y-8">
                                <motion.div
                                    className="grid grid-cols-3 gap-8 transition-all duration-500 ease-in-out"
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.2 }} // Ensures logos only animate once
                                    variants={containerVariants}
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
                                    variants={containerVariants}
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

            {/* {Goals section} */}
            <div className="min-h-screen bg-black text-white p-16">
                <div className="max-w-7xl mx-auto">
                    {/* Main content container */}
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Left column - Text content */}
                        <div className="space-y-6">
                            <h2 className="text-[#00FBF4] text-xl">Why Choose Us</h2>
                            <h1 className="text-6xl font-bold leading-tight">
                                Our Goal is{' '}
                                <span className="text-[#00FBF4]">Giving the Best</span>
                                <br />
                                For <span className="text-[#00FBF4]">IT Services.</span>
                            </h1>
                            <p className="text-gray-400 leading-relaxed">
                                Aliquam in tincidunt ipsum. Quisque lobortis ultrices ex ut ullamcorper. Donec
                                vitae lacus vel ligula hendrerit viverra non non orci. Quisque sed tincidunt
                                sapien. Maecenas gravida at velit feugiat vulputate. Etiam quam orci,
                                condimentum ut justo et, consequat ultrices diam.
                            </p>
                        </div>

                        {/* Right column - Cards */}
                        <div className="grid md:grid-cols-2 gap-6">
                            {/* Database Card */}
                            <div className="bg-transparent p-6 rounded-xl space-y-4">
                                <div className="h-48 flex items-center justify-center">
                                    <img
                                        src="/assets/cpu-1.png"
                                        alt="Database servers"
                                        className="w-32 h-32 object-contain"
                                    />
                                </div>
                                <div>
                                    <p className="text-gray-400">Secure Database</p>
                                    <div className="flex items-center justify-between mt-2">
                                        <h3 className="text-[#00FBF4] text-2xl font-semibold">Data Base</h3>
                                    </div>
                                    <ArrowRight className="text-white mt-6 h-12 w-12" />

                                </div>
                            </div>

                            {/* Performance Card */}
                            <div className="bg-transparent p-6 rounded-xl space-y-4">
                                <div className="h-48 flex items-center justify-center">
                                    <img
                                        src="/assets/cpu-2.png"
                                        alt="Performance graphics"
                                        className="w-32 h-32 object-contain"
                                    />
                                </div>
                                <div>
                                    <p className="text-gray-400">Performance Speed</p>
                                    <div className="flex items-center justify-between mt-2">
                                        <h3 className="text-[#00FBF4] text-2xl font-semibold">Performance</h3>
                                    </div>
                                    <ArrowRight className="text-white h-12 w-12 mt-6" />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* {Goals section End} */}


            {/* latest showcase  */}
            <div className="bg-black min-h-screen py-16 relative p-16">
                <div className="container mx-auto px-4">
                    {/* Section Header */}
                    <motion.div
                        className="text-center mb-12"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                        variants={containerVariants}
                    >
                        <p className="text-[#00FBF4] text-sm mb-4">Case Studies</p>
                        <motion.h2
                            className="text-4xl md:text-5xl font-bold text-white mb-6"
                            variants={containerVariants}
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


            {/* mission section  */}
            <div className="relative bg-black overflow-hidden min-h-[500px] flex items-center">
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        className="grid lg:grid-cols-2 gap-8 items-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                        variants={containerVariants}
                    >
                        {/* Text Content */}
                        <motion.div
                            className="space-y-6"
                            variants={textVariants}
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


            {/* contact form section  */}
            <div className="relative bg-gray-900 py-20 overflow-hidden p-16">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="grid lg:grid-cols-2 gap-12 items-start"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                        variants={containerVariants3}
                    >
                        {/* Text Content */}
                        <motion.div
                            className="space-y-8"
                            variants={textVariants2}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                                We Are <span className="text-[#00FBF4]">Perfect Solutions</span>
                                <br />
                                For <span className="text-[#00FBF4]">Your Business</span>
                            </h2>

                            <p className="text-gray-400 text-lg">
                                Donec vitae lacus vel ligula hendrerit viverra non non orci. Quisque sed
                                tincidunt sapien. Maecenas gravida at velit feugiat vulputate.
                            </p>

                            <motion.div
                                className="space-y-4"
                                variants={featureVariants}
                            >
                                {features.map((feature, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        <div className="mt-1">
                                            <Check className="w-5 h-5 text-[#00FBF4]" />
                                        </div>
                                        <span className="text-white">{feature}</span>
                                    </div>
                                ))}
                            </motion.div>
                        </motion.div>

                        {/* Form */}
                        <motion.form
                            onSubmit={handleSubmit}
                            className="space-y-6"
                            variants={formVariants}
                        >
                            <div className="grid md:grid-cols-2 gap-6">
                                <motion.input
                                    type="text"
                                    placeholder="Your Name..."
                                    className="bg-transparent border border-gray-700 rounded p-3 text-white focus:border-[#00FBF4] focus:outline-none"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                />
                                <motion.input
                                    type="email"
                                    placeholder="Your Email..."
                                    className="bg-transparent border border-gray-700 rounded p-3 text-white focus:border-[#00FBF4] focus:outline-none"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                />
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <motion.select
                                    className="bg-transparent border border-gray-700 rounded p-3 text-gray-400 focus:border-[#00FBF4] focus:outline-none"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                >
                                    <option value="">Inquiry...</option>
                                    <option value="general">General Inquiry</option>
                                    <option value="support">Technical Support</option>
                                    <option value="sales">Sales</option>
                                </motion.select>

                                <motion.input
                                    type="tel"
                                    placeholder="Your Phone..."
                                    className="bg-transparent border border-gray-700 rounded p-3 text-white focus:border-[#00FBF4] focus:outline-none"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                />
                            </div>

                            <motion.textarea
                                placeholder="Additional Details..."
                                rows={6}
                                className="w-full bg-transparent border border-gray-700 rounded p-3 text-white focus:border-[#00FBF4] focus:outline-none"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                            ></motion.textarea>

                            <motion.button
                                type="submit"
                                className="w-full md:w-auto px-8 py-3 bg-transparent border-2 border-[#00FBF4] text-[#00FBF4] hover:bg-[#00FBF4] hover:text-black transition-colors duration-300 text-lg font-bold"
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                Submit Request
                            </motion.button>
                        </motion.form>
                    </motion.div>
                </div>
            </div>
            {/* contact form section End */}


            {/* plans section  */}
            <div className="bg-black py-20">
                <div className="container mx-auto px-4">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <p className="text-[#00FBF4] text-sm mb-4">Pricing Plan</p>
                        <h2 className="text-4xl md:text-5xl font-bold text-white">
                            Choose Your <span className="text-[#00FBF4]">Plan</span>
                        </h2>
                    </div>

                    {/* Pricing Cards */}
                    <motion.div
                        className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                        variants={containerVariants4}
                    >
                        {plans.map((plan, index) => (
                            <motion.div
                                key={index}
                                className="relative"
                                variants={cardVariants3}
                            >
                                {plan.isBestseller && (
                                    <div className="absolute -top-10 left-0 right-0 px-20">
                                        <div className="bg-[#00FBF4] text-white font-bold text-xl text-center py-2 px-4 w-32 mx-auto">
                                            Bestseller
                                        </div>
                                    </div>
                                )}

                                <motion.div
                                    className={`bg-black p-8 transition-transform duration-300 hover:-translate-y-2 relative overflow-hidden ${plan.isBestseller ? 'border border-[#00FBF4]' : ''}`}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    {/* Circuit pattern for bestseller card */}
                                    {plan.isBestseller && (
                                        <div className="absolute bottom-0 right-0 w-32 h-32 opacity-20">
                                            <svg viewBox="0 0 100 100" className="w-full h-full">
                                                <path
                                                    d="M0,50 L100,50 M50,0 L50,100"
                                                    stroke="#00FBF4"
                                                    strokeWidth="0.5"
                                                    fill="none"
                                                />
                                                <circle cx="50" cy="50" r="2" fill="#00FBF4" />
                                                <path
                                                    d="M0,0 L100,100 M0,100 L100,0"
                                                    stroke="#00FBF4"
                                                    strokeWidth="0.5"
                                                    fill="none"
                                                />
                                            </svg>
                                        </div>
                                    )}

                                    {/* Card Content */}
                                    <div className="text-center mb-8">
                                        <h3 className="text-white text-2xl font-bold mb-6">{plan.name}</h3>
                                        <div className="text-[#00FBF4] text-6xl font-bold mb-2">
                                            <span className="text-4xl">$</span>{plan.price}
                                        </div>
                                        <p className="text-gray-400">{plan.period}</p>
                                    </div>

                                    {/* Features */}
                                    <div className="space-y-4 mb-8">
                                        {plan.features.map((feature, idx) => (
                                            <div key={idx} className="text-white text-center">
                                                {feature}
                                            </div>
                                        ))}
                                    </div>

                                    {/* Button */}
                                    <div className="text-center">
                                        <motion.button
                                            className="border-2 border-[#00FBF4] text-[#00FBF4] hover:bg-[#00FBF4] hover:text-black transition-colors duration-300 px-8 py-2 rounded-sm"
                                            variants={buttonVariants}
                                            whileHover="hover"
                                        >
                                            Choose Plan
                                        </motion.button>
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
            {/* plans section End  */}


            {/* testimonial section  */}
            <div className="relative bg-black py-20 overflow-hidden">
                <div className="container mx-auto px-4 relative">
                    <div className="max-w-4xl mx-auto">
                        {/* Testimonial Slides */}
                        <div className="relative min-h-[200px]">
                            {testimonials.map((testimonial, index) => (
                                <div
                                    key={testimonial.id}
                                    className={`absolute w-full transition-opacity duration-500 ${currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
                                        }`}
                                >
                                    <div className="text-gray-300 text-lg font-semibold mb-12 leading-relaxed">
                                        {testimonial.text}
                                    </div>

                                    <div className="flex items-center space-x-4">
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="w-16 h-16 rounded-full object-cover"
                                        />
                                        <div>
                                            <h3 className="text-[#00FBF4] text-xl font-medium">
                                                {testimonial.name}
                                            </h3>
                                            <p className="text-gray-400">
                                                {testimonial.position}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Navigation Dots */}
                        <div className="flex justify-center space-x-2 mt-12">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${currentSlide === index
                                        ? 'bg-[#00FBF4] w-4'
                                        : 'bg-gray-600'
                                        }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {/* testimonial section end  */}


            {/* blog section latest news  */}
            <div className="min-h-screen bg-[#0a0a0a] p-16">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <p className="text-[#00FBF4] mb-2 font-medium">Our Blog</p>
                    <h2 className="text-4xl md:text-5xl font-bold">
                        <span className="text-white">Latest </span>
                        <span className="text-[#00FBF4]">News & Articles</span>
                    </h2>
                </div>

                {/* Blog Cards Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    variants={containerVariants5}
                >
                    {blogPosts.map((post) => (
                        <motion.div
                            key={post.id}
                            className="bg-gray-900 border border-gray-800  overflow-hidden group hover:border-cyan-400/50 transition-all duration-300"
                            variants={cardVariants4}
                        >
                            {/* Image Container */}
                            <motion.div
                                className="relative h-48 overflow-hidden"
                                whileHover="hover"
                                variants={imageVariants1}
                            >
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </motion.div>

                            {/* Content Container */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-4 line-clamp-2">
                                    {post.title}
                                </h3>
                                <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                                    {post.description}
                                </p>
                                <motion.button
                                    className="border border-cyan-400 text-[#00FBF4] px-6 py-2 hover:bg-cyan-400 hover:text-black transition-colors duration-300 text-sm font-medium"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    Learn more
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
            {/* blog section latest news end  */}



            {/* footer section  */}
            <footer className="bg-black text-white py-16 opacity-95">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Main Footer Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                        {/* Logo & Description Column */}
                        <div className="lg:col-span-1">
                            <div className="flex items-center mb-4">
                                <h2 className="text-2xl font-bold">
                                    D<span className="text-cyan-400">ITECH</span>
                                </h2>
                            </div>
                            <p className="text-gray-400 text-sm mb-6">
                                Proin velit augue, rutrum sed fringilla ac, congue id lorem. Sed feugiat sed nisl sed ultrices.
                            </p>
                            {/* Social Icons */}
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                                    <Facebook className="w-6 h-6" />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                                    <Twitter className="w-6 h-6" />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                                    <Linkedin className="w-6 h-6" />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                                    <Youtube className="w-6 h-6" />
                                </a>
                            </div>
                        </div>

                        {/* Company Column */}
                        <div>
                            <h3 className="text-lg font-semibold mb-6 text-white">Company</h3>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">About Us</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Our Team</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Services</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Pricing</a></li>
                            </ul>
                        </div>

                        {/* Solutions Column */}
                        <div>
                            <h3 className="text-lg font-semibold mb-6 text-white">Solutions</h3>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">IT Management</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Cloud Services</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Data Center</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Software Development</a></li>
                            </ul>
                        </div>

                        {/* Contact Info Column */}
                        <div>
                            <h3 className="text-lg font-semibold mb-6 text-white">Contact Info</h3>
                            <ul className="space-y-3">
                                <li className="text-gray-400 flex items-center">
                                    <span className="w-4 h-4 mr-3"></span>
                                    99, Roving St., Big City
                                </li>
                                <li className="text-gray-400 flex items-center">
                                    <span className="w-4 h-4 mr-3"></span>
                                    08:00 - 17:00 Pm
                                </li>
                                <li className="text-gray-400 flex items-center">
                                    <span className="w-4 h-4 mr-3"></span>
                                    +123-1234-1234
                                </li>
                                <li className="text-gray-400 flex items-center">
                                    <span className="w-4 h-4 mr-3"></span>
                                    hello@awesomesite.com
                                </li>
                            </ul>
                        </div>

                        {/* Subscribe Column */}
                        <div>
                            <h3 className="text-lg font-semibold mb-6 text-white">Subscribe</h3>
                            <div className="space-y-4">
                                <input
                                    type="email"
                                    placeholder="Your Email..."
                                    className="w-full px-4 py-2 bg-transparent border border-gray-700 rounded focus:border-cyan-400 focus:outline-none text-gray-300"
                                />
                                <button className="w-full px-4 py-2 bg-white text-black font-medium hover:bg-cyan-400 transition-colors duration-300">
                                    Subscribe Now
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Copyright Section */}
                    <div className="mt-16 pt-8 border-t border-gray-800">
                        <p className="text-gray-400 text-sm text-center">
                            © Copyright 2022. All Rights Reserved. Rometheme
                        </p>
                    </div>
                </div>
            </footer>

            {/* footer section  end*/}


        </div>

    )
}

export default Home