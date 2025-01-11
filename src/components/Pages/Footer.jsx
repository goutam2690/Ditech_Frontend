import React from 'react'
import { Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';


const Footer = () => {
    return (
        <div>
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
                            © Copyright 2025. All Rights Reserved. Swirl IT Solution
                        </p>
                    </div>
                </div>
            </footer>

            {/* footer section  end*/}

        </div>
    )
}

export default Footer