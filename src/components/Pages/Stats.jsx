import React, { useEffect, useState } from 'react'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";


const Stats = () => {

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

    return (
        <div className='bg-black'>
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
            {/* stats End */}
        </div>
    )
}

export default Stats