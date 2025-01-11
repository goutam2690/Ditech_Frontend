import React from 'react'
import { motion } from "framer-motion";

const OurBlog = () => {

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
    <div>
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
    </div>
  )
}

export default OurBlog