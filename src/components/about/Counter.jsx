import React from "react";
import { BrainCircuit, Handshake, Trophy, Users } from "lucide-react";

const counterData = [
  {
    icon: Users,
    count: 259,
    title: "Expert Team",
  },
  {
    icon: Trophy,
    count: 259,
    title: "National Award",
  },
  {
    icon: BrainCircuit,
    count: 259,
    title: "Project Completed",
  },
  {
    icon: Handshake,
    count: 259,
    title: "Happy Client",
  },
];

function Counter() {
  return (
    <section className="bg-white pt-0 pb-20">
      <div className="container mx-auto px-4">
        <div className="border-t border-gray-200 py-16 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {counterData.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center text-center space-y-4"
              >
                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 text-blue-600 text-4xl">
                  <Icon />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    <span className="counter">{item.count}</span>+
                  </h2>
                  <h6 className="text-gray-600 font-normal">{item.title}</h6>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Counter;
