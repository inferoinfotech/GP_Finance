import Image from "next/image"
import Link from "next/link"
import PageBanner from "../layout/PageBanner"
import { servicesData } from "../data/services-data"

export default function FinancialServices() {
    return (
        <>
            <PageBanner title="Services" />
            <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl font-semibold text-[#1D2330] mb-4">
                        Every financial plan we create is different
                    </h2>
                    <p className="text-lg text-[#1D2330] mb-2">Your investment and financial plan should revolve around you.</p>
                    <p className="text-base text-[#1D2330] max-w-3xl mx-auto mb-6">
                        We strive to truly understand your financial goals and objectives, then build a highly sophisticated plan to
                        meet your needs.
                    </p>
                    <p className="text-lg font-semibold text-[#D9982C]">
                        Annuity Strategic can provide advice covering a range of areas including:
                    </p>
                </div>
            </div>
            <div className="py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                        {servicesData.map((service) => (
                            <div key={service.id} className="text-center group cursor-pointer">
                                <Link href={`/services/${service.id}`}>
                                    <div className="p-6 bg-[linear-gradient(to_bottom,_rgba(218,221,232,0.4),_rgba(218,221,232,0)_300px)] transition-all duration-300 group-hover:bg-[linear-gradient(to_bottom,_rgba(218,221,232,0.6),_rgba(218,221,232,0.1)_300px)] group-hover:shadow-lg">
                                        <div className="mb-6">
                                            <div className="w-64 h-64 mx-auto rounded-full overflow-hidden bg-white transition-transform duration-300 group-hover:scale-105 group-hover:shadow-xl">
                                                <Image
                                                    src={service.image || "/placeholder.svg"}
                                                    alt={service.title}
                                                    width={256}
                                                    height={256}
                                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                                />
                                            </div>
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-800 transition-colors duration-300 group-hover:text-[#D9982C]">
                                            {service.title}
                                        </h3>
                                    </div>
                                </Link>
                                <div className="text-gray-600 text-base leading-relaxed bg-[#f9f9f9] pt-6 pb-8 p-2 transition-all duration-300 group-hover:bg-[#f5f5f5]">
                                    <p className="mb-4">{service.shortDescription}</p>
                                    <Link
                                        href={`/services/${service.id}`}
                                        className="inline-block bg-[#D9982C] text-white px-6 py-2 rounded-md font-semibold transition-all duration-300 hover:bg-[#c8871f] hover:shadow-md transform hover:scale-105"
                                    >
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
