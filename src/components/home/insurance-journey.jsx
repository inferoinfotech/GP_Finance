"use client"

import Image from 'next/image';

const workSteps = [
    {
        id: 1,
        iconClass: "flaticon-select",
        step: "01",
        title: "Get Started",
        description: "Insurance is a contract between an individual entity",
        backgroundImage: "/images/work-2.png",
    },
    {
        id: 2,
        iconClass: "flaticon-meeting",
        step: "02",
        title: "Enter Details",
        description: "During the meeting, the insurance agent or broker will",
        backgroundImage: "/images/work-2.png",
    },
    {
        id: 3,
        iconClass: "flaticon-house",
        step: "03",
        title: "Review Quote",
        description: "After the meeting, the insurance agent will provide",
        backgroundImage: "/images/work-2.png",
    },
    {
        id: 4,
        iconClass: "flaticon-protection-1",
        step: "04",
        title: "Purchase Policy",
        description: "If the individual or business decides to proceed with",
        backgroundImage: "/images/work-2.png",
    },
];

export default function InsuranceJourney() {
    return (
        <div className="work__area relative z-[1] py-[120px]">
            <Image
                src="/images/work.png"
                alt="work-shape"
                className="absolute left-0 top-0 z-[-1]"
                width={500} // Set appropriate width
                height={500} // Set appropriate height
            />

            <div className="container mx-auto px-4">
                <div className="row mb-[60px]">
                    <div className="col-xl-12">
                        <div className="work__area-title text-center">
                            <span className="subtitle-two text-[#2974FF] text-[18px] font-bold uppercase tracking-[2px] mb-[15px] inline-block">
                                How it Work
                            </span>
                            <h2 className="text-[48px] font-bold leading-[1.2]">The Insurance Journey</h2>
                        </div>
                    </div>
                </div>

                <div className="row work-n flex flex-wrap">
    {workSteps.map((item) => (
        <div
            key={item.id}
            className={`col-xl-3 col-lg-4 col-md-6 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 ${item.id === 1 || item.id === 3 ? 'xl:mt-[30px]' : ''
                }`}
        >
            <div className="work__area-item relative z-[1] text-center px-[30px] group cursor-pointer transition-all duration-500 ease-out hover:transform hover:-translate-y-4 hover:scale-105 rounded-xl  py-6">                
                <div className="work__area-item-icon inline-flex relative z-[1] w-[120px] h-[120px] items-center justify-center mb-[15px] group-hover:scale-110 transition-all duration-500 ease-out">
                    <i
                        className={`${item.iconClass} before:content-[''] before:text-[50px] before:leading-[50px] before:text-[#2974FF] group-hover:before:text-white before:bg-[#F8F5FF] group-hover:before:bg-[#2974FF] before:w-[90px] before:h-[90px] before:flex before:items-center before:justify-center before:rounded-full before:transition-all before:duration-500 before:ease-out before:shadow-lg group-hover:before:shadow-2xl group-hover:before:shadow-blue-500/30`}
                    ></i>
                    
                    {/* Step Number Badge */}
                    <span className="absolute right-[-30px] top-0 bg-[#2974FF] group-hover:bg-[#1e5fff] w-[30px] h-[30px] leading-[30px] text-white font-bold text-[14px] rounded-full transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                        {item.step}
                        <span className="absolute left-[3px] bottom-[-3px] block z-[-1] w-0 h-0 border-l-[24px] border-l-[#2974FF] group-hover:border-l-[#1e5fff] border-t-[15px] border-t-transparent border-b-[12px] border-b-transparent rotate-[21deg] transition-all duration-300"></span>
                        
                        {/* Pulse Ring Effect */}
                        <span className="absolute inset-0 rounded-full bg-[#2974FF] opacity-0 group-hover:opacity-30 group-hover:animate-ping"></span>
                    </span>
                    
                    {/* Outer Ring */}
                    <span className="absolute top-0 w-[120px] h-[120px] left-0 border group-hover:bg-[#2974FF] group-hover:bg-opacity-10 border-[#2974FF] border-opacity-10 group-hover:border-opacity-30 rounded-full transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-500/20"></span>
                    
                    {/* Rotating Border Effect */}
                    <span className="absolute top-0 w-[120px] h-[120px] left-0 border-2 border-transparent group-hover:border-[#2974FF] group-hover:border-opacity-20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:animate-spin" style={{animationDuration: '3s'}}></span>
                </div>

                <div className="work__area-item-content relative z-10">
                    <h5 className="text-[22px] font-bold mb-[5px] group-hover:text-[#2974FF] transition-colors duration-300 group-hover:scale-105 transform">
                        {item.title}
                    </h5>
                    <p className="m-0 mt-[5px] group-hover:text-gray-700 transition-colors duration-300">
                        {item.description}
                    </p>
                    
                    {/* Animated Underline */}
                    <div className="w-0 group-hover:w-12 h-0.5 bg-[#2974FF] mx-auto mt-3 transition-all duration-500 ease-out"></div>
                </div>

                {item.backgroundImage && (
                    <span
                        className="absolute left-[85%] top-[35px] w-[120px] h-[55px] opacity-20 group-hover:opacity-30 z-[-1] bg-no-repeat bg-contain transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                        style={{ backgroundImage: `url('${item.backgroundImage}')` }}
                    ></span>
                )}
                
                {/* Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
                
                {/* Floating Particles Effect */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-[#2974FF] rounded-full opacity-0 group-hover:opacity-60 group-hover:animate-bounce transition-all duration-300"></div>
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-40 group-hover:animate-pulse transition-all duration-500 delay-200"></div>
            </div>
        </div>
    ))}
</div>
            </div>
        </div>
    )
}
