import React from "react";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";

const OurPlans = () => {
    const plans = [
        {
            name: "Basic",
            price: "39",
            period: "Per Month",
            features: [
                "IT Consultations",
                "Server Security",
                "Digital IT Solutions",
                "Customer Support",
            ],
            isBestseller: false,
        },
        {
            name: "Premium",
            price: "99",
            period: "Per Month",
            features: [
                "IT Consultations",
                "Server Security",
                "Digital IT Solutions",
                "Customer Support",
            ],
            isBestseller: true, // Bestseller Plan
        },
        {
            name: "Pro",
            price: "69",
            period: "Per Month",
            features: [
                "IT Consultations",
                "Server Security",
                "Digital IT Solutions",
                "Customer Support",
            ],
            isBestseller: false,
        },
    ];

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

    return (
        <div>
            {/* plans section */}
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
                                className={`relative group overflow-hidden  ${plan.isBestseller ? 'z-10 shadow-[0_0_15px_#00FBF4] group-hover:shadow-[0_0_15px_#00FBF4]' : ''}`}
                                variants={cardVariants3}
                            >

                                {plan.isBestseller && (
                                    <div className="text-white bg-[#00FBF4] p-4 font-bold text-center text-2xl">Best Seller</div>
                                )}

                                <motion.div
                                    className={`relative p-8 transition-all duration-500 group ${plan.isBestseller
                                        ? "bg-[#0d1b1b] text-white shadow-[0_0_15px_#00FBF4] group-hover:shadow-[0_0_15px_#00FBF4]"
                                        : "bg-[#0d1b1b]"
                                        }`}
                                >
                                    {/* Background image on hover and default for bestseller */}
                                    <div
                                        className={`absolute top-0 right-0 h-full w-full bg-no-repeat bg-cover bg-right-bottom transition-all duration-500 ${plan.isBestseller ? 'opacity-50 translate-x-0' : 'opacity-0 translate-x-full group-hover:opacity-50 group-hover:translate-x-0'
                                            }`}
                                        style={{
                                            backgroundImage: "url('/assets/Background-23.png')",
                                        }}
                                    ></div>

                                    {/* Card Content */}
                                    <div className="relative text-center mb-8">
                                        <h3 className="text-white text-2xl font-bold mb-6">
                                            {plan.name}
                                        </h3>
                                        <div className="text-[#00FBF4] text-6xl font-bold mb-2">
                                            <span className="text-4xl">$</span>
                                            {plan.price}
                                        </div>
                                        <p className="text-white font-semibold">{plan.period}</p>
                                    </div>

                                    {/* Features */}
                                    <div className="relative space-y-4 mb-8">
                                        {plan.features.map((feature, idx) => (
                                            <div key={idx} className="text-white text-center">
                                                {feature}
                                            </div>
                                        ))}
                                    </div>

                                    {/* Button */}
                                    <div className="relative text-center">
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
            {/* plans section End */}
        </div>
    );
};

export default OurPlans;
