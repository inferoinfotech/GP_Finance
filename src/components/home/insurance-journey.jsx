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
                            <div className="work__area-item relative z-[1] text-center px-[30px]">
                                <div className="work__area-item-icon inline-flex relative z-[1] w-[120px] h-[120px] items-center justify-center mb-[15px]">
                                    <i
                                        className={`${item.iconClass} before:content-[''] before:text-[50px] before:leading-[50px] before:text-[#FF7235] before:bg-[#F8F5FF] before:w-[90px] before:h-[90px] before:flex before:items-center before:justify-center before:rounded-full before:transition-all before:duration-400 before:ease-[ease]`}
                                    ></i>
                                    <span className="absolute right-[-30px] top-0 bg-[#2974FF] w-[30px] h-[30px] leading-[30px] text-white font-bold text-[14px] rounded-full">
                                        {item.step}
                                        <span className="absolute left-[3px] bottom-[-3px] block z-[-1] w-0 h-0 border-l-[24px] border-l-[#2974FF] border-t-[15px] border-t-transparent border-b-[12px] border-b-transparent rotate-[21deg]"></span>
                                    </span>
                                    <span className="absolute top-0 w-[120px] h-[120px] left-0 border border-[#2974FF] border-opacity-10 rounded-full"></span>
                                </div>

                                <div className="work__area-item-content">
                                    <h5 className="text-[22px] font-bold mb-[5px]">{item.title}</h5>
                                    <p className="m-0 mt-[5px]">{item.description}</p>
                                </div>

                                {item.backgroundImage && (
                                    <span
                                        className="absolute left-[85%] top-[35px] w-[120px] h-[55px] opacity-20 z-[-1] bg-no-repeat bg-contain"
                                        style={{ backgroundImage: `url('${item.backgroundImage}')` }}
                                    ></span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
