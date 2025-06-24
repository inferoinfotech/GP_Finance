import React from "react";
import { Umbrella, Briefcase, BarChart2, ListChecks, LineChart, CreditCard } from "lucide-react";

const services = [
  {
    icon: Umbrella,
    title: "Audit & Assurance",
    description:
      "Senectus accumsan malesuada cursus dapibus sem primis cubilia, per potenti fermentu massa pulvinar turpis taciti, pellentesque.",
  },
  {
    icon: Briefcase,
    title: "Financial Consulting",
    description:
      "Justo luctus mus ultricies habitasse dictumst senectus habitant, primis erat mauris odio faucibus cras non interdum purus sociis.",
  },
  {
    icon: BarChart2,
    title: "Trades & Stocks",
    description:
      "Risus aenean ultricies integer purus sociis luctus tristique, sodales fusce ante maecenas massa cum est, ligula hac cursus.",
  },
  {
    icon: ListChecks,
    title: "Strategic Planning",
    description:
      "Mus leo mauris nec erat ullamcorper orci nascetur, est faucibus auctor natoque tempus eu, eros condimentum et taciti rhoncus.",
  },
  {
    icon: LineChart,
    title: "Financial Projections",
    description:
      "Varius scelerisque tristique condimentum habitant dui euismod auctor lacinia maecenas cubilia eleifend erat, purus malesuada.",
  },
  {
    icon: CreditCard,
    title: "Bonds & Commodities",
    description:
      "Dis vel quam parturient et molestie at morbi vehicula mus phasellus senectus congue lacinia pulvinar turpis taciti, pellentesque.",
  },
];

export default function OurServices() {
  return (
    <section className="bg-primary-2 py-16 relative overflow-hidden">

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-[1170px] mx-auto text-center">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div className="text-left w-full md:w-auto mb-6 md:mb-0">
              <h6 className="text-[14px] md:text-[16px] font-semibold text-primary-1 tracking-wide uppercase">
                Our Services
              </h6>
              <h2 className="text-[28px] sm:text-[32px] md:text-[38px] lg:text-[42px] font-bold text-primary-3">
                What we bring to you
              </h2>
            </div>
            <div className="w-full md:w-auto text-right">
              <a href="services.html" className="text-sm font-medium text-primary-4 hover:underline">
                All services
              </a>
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, description }, index) => (
              <div
                key={index}
                className="group bg-primary-2 p-6 rounded shadow h-full text-left transition-all duration-300 hover:bg-primary-1"
              >
                <div className="transition-all duration-300">
                  <Icon className="text-primary-1 w-7 h-7 mb-4 group-hover:text-primary-3 transition-colors duration-300" />
                  <h4 className="text-[18px] font-bold text-primary-5 mb-2 group-hover:text-primary-2 transition-colors duration-300">
                    {title}
                  </h4>
                  <p className="text-[14px] text-primary-4 mb-4 group-hover:text-primary-2 transition-colors duration-300">
                    {description}
                  </p>
                  <a
                    href="service-detail.html"
                    className="text-sm font-medium text-primary-3 hover:underline group-hover:text-primary-5 transition-colors duration-300"
                  >
                    Read more
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
