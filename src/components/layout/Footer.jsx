import { MapPin, Clock, Facebook, Twitter, Globe } from "lucide-react"

export default function Footer() {
  const galleryImages = [
    "/placeholder.svg?height=80&width=80",
    "/placeholder.svg?height=80&width=80",
    "/placeholder.svg?height=80&width=80",
    "/placeholder.svg?height=80&width=80",
    "/placeholder.svg?height=80&width=80",
    "/placeholder.svg?height=80&width=80",
  ]

  const mainPages = ["Health Insurance", "Car Insurance", "Home Insurance", "Health Insurance", "Farm Insurance"]

  return (
    <footer className="bg-[#1a1a1a] text-white py-16">
      <div className="container mx-auto max-w-[1440px] px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info Section */}
          <div className="space-y-6">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#2974FF] rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-[#2974FF] rounded-full"></div>
                </div>
              </div>
              <span className="text-2xl font-bold">Noxiy</span>
            </div>

            {/* Description */}
            <p className="text-[#999999] text-[16px] leading-relaxed mt-[13px]">
              Proin vitae massa neque. Sed eget urna lacinia, ultrices odio non,
            </p>

            {/* Social Media */}
            <div>
              <h6 className="text-white font-medium text-[18px] mb-4">Follow Us :</h6>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-6 h-6"/>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                  aria-label="Website"
                >
                  <Globe className="w-6 h-6"/>
                </a>
              </div>
            </div>
          </div>

          {/* Main Pages Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Main Pages</h3>
            <ul className="space-y-3">
              {mainPages.map((page, index) => (
                <li key={index}>
                  <a href="#" className="text-[#999999] hover:text-white transition-colors text-[16px] flex items-center">
                    <span className="w-2 h-2 bg-gray-600 rounded-full mr-3 flex-shrink-0"></span>
                    {page}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Official Info Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Official Info</h3>

            {/* Address */}
            <div className="flex items-start gap-3  border-b border-[#333334] pb-[18px] mb-[18px]">
              <div className="w-10 h-10 text-[#2974FF] flex-shrink-0 mt-1 border rounded-full border-[#333334] flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <p className="text-gray-400 text-[16px]">4140 Parker Rd. Allentown, New Mexico 31134</p>
            </div>

            {/* Working Hours */}
            <div>
              <div className="flex items-center gap-3 mb-3 ">
                <div className="w-10 h-10 text-[#2974FF] border rounded-full border-[#333334] flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <h4 className="text-white text-[18px] font-medium">Working Hours :</h4>
              </div>
              <div className="ml-9 space-y-1">
                <p className="text-gray-400 text-[16px]">Monday - Friday 9: AM- 5: PM</p>
                <p className="text-gray-400 text-[16px]">Sat - Sun Closed</p>
              </div>
            </div>
          </div>

          {/* Gallery Section */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Gallery</h3>
            <div className="grid grid-cols-3 gap-2">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="aspect-square bg-gray-700 overflow-hidden hover:opacity-80 transition-opacity cursor-pointer"
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-800 mt-12 pt-6">
          <p className="text-center text-gray-400 text-sm">
            Copyright 2023 <span className="text-[#2974FF] font-medium">Noxiy</span> - All Rights Reserved By{" "}
            <span className="text-[#2974FF] font-medium">ThemeOri</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
