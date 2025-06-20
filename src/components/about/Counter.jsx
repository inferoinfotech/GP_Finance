import { BrainCircuit, Handshake, Trophy, Users } from "lucide-react";
import React from "react";

function Counter() {
  return (
    // Counter Area Start
    <section className="bg-white pt-0 pb-20">
      <div className="container mx-auto px-4">
        <div className="border-t border-gray-200 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Counter Item 1 */}
          <div className="flex items-center justify-center gap-5">
            <div className="flex items-center justify-center w-24 h-24 rounded-full bg-blue-100 text-blue-600 text-4xl">
              <Users />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                <span className="counter">259</span>+
              </h2>
              <h6 className="text-gray-600 font-normal">Expert Team</h6>
            </div>
          </div>

          {/* Counter Item 2 */}
          <div className="flex items-center justify-center gap-5">
            <div className="flex items-center justify-center w-24 h-24 rounded-full bg-blue-100 text-blue-600 text-4xl">
              <Trophy />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                <span className="counter">259</span>+
              </h2>
              <h6 className="text-gray-600 font-normal">National Award</h6>
            </div>
          </div>

          {/* Counter Item 3 */}
          <div className="flex items-center justify-center gap-5">
            <div className="flex items-center justify-center w-24 h-24 rounded-full bg-blue-100 text-blue-600 text-4xl">
              <BrainCircuit />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                <span className="counter">259</span>+
              </h2>
              <h6 className="text-gray-600 font-normal">Project Completed</h6>
            </div>
          </div>

          {/* Counter Item 4 */}
          <div className="flex items-center justify-center gap-5">
            <div className="flex items-center justify-center w-24 h-24 rounded-full bg-blue-100 text-blue-600 text-4xl">
              <Handshake />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                <span className="counter">259</span>+
              </h2>
              <h6 className="text-gray-600 font-normal">Happy Client</h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Counter;
