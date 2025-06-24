import { Check } from "lucide-react"

export default function WealthManagementSection() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 leading-tight">
          Our financial experts will custom-design your wealth management plan
          <br />
          by focusing on the following.
        </h2>

        <div className="space-y-8 text-left max-w-3xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 mt-1">
              <Check className="w-5 h-5 text-orange-500" />
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              Through years of experience as Brisbane's top financial advisors, we've learned that the only way to
              successfully do this is to truly understand our clients — not just your finances, but also your day-to-day
              life.
            </p>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 mt-1">
              <Check className="w-5 h-5 text-orange-500" />
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              Unlike large corporate planners, we take the time to discover the path to your goals that will also allow
              you to live the life you want. <span className="font-semibold">Call us today at </span>
              <span className="text-orange-500 font-semibold">(07) 3621 4078</span>
              <span className="font-semibold"> to schedule your free consultation!</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
