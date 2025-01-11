import { ArrowRight } from 'lucide-react';
import React from 'react';

const OurGoals = () => {
  return (
    <div>
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

    </div>
  )
}

export default OurGoals