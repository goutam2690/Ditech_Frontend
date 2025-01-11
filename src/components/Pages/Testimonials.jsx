import React, { useEffect, useState } from 'react'

const Testimonials = () => {

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


    return (
        <div>
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
        </div>
    )
}

export default Testimonials