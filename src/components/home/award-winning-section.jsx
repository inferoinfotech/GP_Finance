import { Check, Shield } from "lucide-react"

export default function AwardWinningSection() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="container mx-auto max-w-[1320px] px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative overflow-hidden">
              <img
                src="../images/about-3.jpg"
                alt="Professional insurance consultation"
                className="w-full h-[400px] object-cover"
              />

              {/* Blue Overlay Box */}
              <div className="absolute bottom-1 left-6 bg-blue-600 text-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl font-bold mb-1">25+</div>
                <div className="text-sm">
                  <div>Years Experience</div>
                  <div>on Insurance</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">
              <Shield className="w-4 h-4" />
              Company Insight
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Top Award-Winning Insurance Companies
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-lg leading-relaxed">
              Ultimately, the goal of an award-winning insurance company is to provide its customers with peace of mind
              and financial protection in the face of unexpected events.
            </p>

            {/* Features List */}
            <div className="space-y-4">
              {["Top-Rated Insurance Firms", "Elite Insurance Providers", "Top Insurers Ranked"].map(
                (feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ),
              )}
            </div>

            {/* Bottom Section */}
            <div className="flex items-center justify-between pt-6">
              {/* Read More Button */}
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300">
                Read More
              </button>

              {/* Award Stats */}
              <div className="text-right relative bg-[#f8f8f8] rounded-xl  px-6 w-40 h-40 shadow-sm border-t-4 border-[#2974FF]">
                <div className="text-4xl font-bold text-black mt-4 ">194+</div>
                <div className="mt-2 text-gray-800 font-medium leading-tight">
                  <div>Get International</div>
                  <div>Award</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
