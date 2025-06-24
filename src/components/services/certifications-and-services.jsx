import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function CertificationsAndServices() {
  return (
    <div className="bg-white">
      {/* Certifications Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-12">
            We are certified and licensed under:
          </h3>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <div className="flex items-center justify-center h-16">
              <Image
                src="/placeholder.svg?height=64&width=160"
                alt="BrightScope"
                width={160}
                height={64}
                className="max-h-16 w-auto object-contain"
              />
            </div>
            <div className="flex items-center justify-center h-16">
              <Image
                src="/placeholder.svg?height=64&width=120"
                alt="ifaaa"
                width={120}
                height={64}
                className="max-h-16 w-auto object-contain"
              />
            </div>
            <div className="flex items-center justify-center h-16">
              <Image
                src="/placeholder.svg?height=64&width=120"
                alt="CKA"
                width={120}
                height={64}
                className="max-h-16 w-auto object-contain"
              />
            </div>
            <div className="flex items-center justify-center h-16">
              <Image
                src="/placeholder.svg?height=64&width=120"
                alt="FPA"
                width={120}
                height={64}
                className="max-h-16 w-auto object-contain"
              />
            </div>
            <div className="flex items-center justify-center h-16">
              <Image
                src="/placeholder.svg?height=64&width=120"
                alt="CFP"
                width={120}
                height={64}
                className="max-h-16 w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Financial Planning Process & Investment Approach */}
      <section className="grid md:grid-cols-2">
        {/* Financial Planning Process */}
        <div className="bg-gray-200 py-16 px-8 flex flex-col justify-center">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Financial Planning Process</h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              One size doesn't fit all, so the better we understand your situation, the better your plan will fit you.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-orange-500 font-semibold hover:text-orange-600 transition-colors"
            >
              Learn more
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Investment Approach */}
        <div className="bg-slate-600 py-16 px-8 flex flex-col justify-center">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Investment Approach</h3>
            <p className="text-gray-200 text-lg leading-relaxed mb-8">
              We offer customized strategies to meet the diverse investment objectives of our clients.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-orange-400 font-semibold hover:text-orange-300 transition-colors"
            >
              Learn more
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
