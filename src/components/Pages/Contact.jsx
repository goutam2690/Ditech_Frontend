import React from 'react'
import { motion } from "framer-motion";
import { Check } from 'lucide-react';

const Contact = () => {


    const features = [
        "We are committed to providing quality IT Services",
        "Really know the true needs and expectations of customers",
        "Provided by experts to help challenge critical activities",
        "Processes of achieving the excellence improvements"
    ];


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

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div>
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

        </div>
    )
}

export default Contact