import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { servicesData } from "../../../components/data/services-data.jsx"
import PageBanner from "../../../components/layout/PageBanner.jsx"

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.id,
  }))
}

export default function ServiceDetailPage({ params }) {
  const service = servicesData.find((s) => s.id === params.slug)

  if (!service) {
    notFound()
  }

  return (
    <>
      <PageBanner title={service.title} />

      {/* Hero Section */}
      <div className="bg-white py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1D2330] mb-4 sm:mb-6">
                {service.title}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                {service.shortDescription}
              </p>
              <Link
                href="/contact"
                className="inline-block bg-[#D9982C] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-md font-semibold text-base sm:text-lg transition-all duration-300 hover:bg-[#c8871f] hover:shadow-lg transform hover:scale-105"
              >
                Get Started Today
              </Link>
            </div>
            <div className="order-1 lg:order-2">
              <div className="w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto">
                <div className="rounded-full overflow-hidden bg-white ">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sections Rendering */}
      {service.sections?.map((section, index) => (
        <div
          key={index}
          className={`py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 ${
            index % 2 === 0 ? "bg-[#f9f9f9]" : "bg-white"
          }`}
        >
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {index % 2 === 0 ? (
              <>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#1D2330] mb-4">{section.title}</h2>
                  <p className="text-gray-700 text-base sm:text-lg">{section.description}</p>
                </div>
                <div>
                  <Image
                    src={section.image || "/placeholder.svg"}
                    alt={section.title}
                    width={600}
                    height={400}
                    className="rounded-lg shadow-md w-full object-cover"
                  />
                </div>
              </>
            ) : (
              <>
                <div className="order-2 lg:order-1">
                  <Image
                    src={section.image || "/placeholder.svg"}
                    alt={section.title}
                    width={600}
                    height={400}
                    className="rounded-lg shadow-md w-full object-cover"
                  />
                </div>
                <div className="order-1 lg:order-2">
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#1D2330] mb-4">{section.title}</h2>
                  <p className="text-gray-700 text-base sm:text-lg">{section.description}</p>
                </div>
              </>
            )}
          </div>
        </div>
      ))}

      {/* CTA Section */}
      <div className="bg-[#1D2330] py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
            Ready to Get Started with {service.title}?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8">
            Contact us today to schedule your free consultation and learn how we can help you achieve your financial
            goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-[#D9982C] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-md font-semibold text-base sm:text-lg transition-all duration-300 hover:bg-[#c8871f] hover:shadow-lg transform hover:scale-105"
            >
              Schedule Consultation
            </Link>
            <Link
              href="/services"
              className="inline-block border-2 border-white text-white px-6 sm:px-8 py-2 sm:py-3 rounded-md font-semibold text-base sm:text-lg transition-all duration-300 hover:bg-white hover:text-[#1D2330]"
            >
              View All Services
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
