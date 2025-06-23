"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Star, Heart, Eye, TrendingUp } from "lucide-react"
import { useState } from "react"

const cardData = [
    {
        title: "Travels Insurance",
        description: "Travel insurance policies may also include other benefits such as coverage for,",
        stats: [
            { label: "Performance", value: 90 },
            { label: "Reliability", value: 85 },
            { label: "Satisfaction", value: 88 },
        ],
    },
    {
        title: "Marine Insurance",
        description: "Cargo insurance provides coverage for loss or damage to goods being transported,",
        stats: [
            { label: "Performance", value: 87 },
            { label: "Reliability", value: 92 },
            { label: "Satisfaction", value: 90 },
        ],
    },
    {
        title: "Auto Insurance",
        description: "Auto insurance policies typically include different types of coverage such as,",
        stats: [
            { label: "Performance", value: 91 },
            { label: "Reliability", value: 89 },
            { label: "Satisfaction", value: 86 },
        ],
    },
    {
        title: "Farm Insurance",
        description: "This type of coverage helps protect the farm's physical assets such as buildings,",
        stats: [
            { label: "Performance", value: 88 },
            { label: "Reliability", value: 90 },
            { label: "Satisfaction", value: 87 },
        ],
    },
]

export default function InsuranceSolutions() {
    const [isHovered, setIsHovered] = useState(false)
    const [isLiked, setIsLiked] = useState(false)
    const [liked, setLiked] = useState(Array(cardData.length).fill(false))

    const toggleLike = (index) => {
        setLiked((prev) => {
            const updated = [...prev]
            updated[index] = !updated[index]
            return updated
        })
    }
    return (
        <section>
            <div className="py-24">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1320px] mx-auto">
                    {cardData.map((item, index) => (
                        <Card
                            key={index}
                            className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-primary-2" >
                            {/* Background pattern */}
                            <div className="absolute inset-0 opacity-5">
                                <div
                                    className="w-full h-full"
                                    style={{
                                        backgroundImage: `radial-gradient(circle at 25% 25%, #2974FF 2px, transparent 2px)`,
                                        backgroundSize: "24px 24px",
                                        animation: "float 6s ease-in-out infinite",
                                    }}
                                />
                            </div>

                            <CardHeader className="relative z-10 pb-4">
                                <div className="relative mb-4">
                                    <div
                                        className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-all duration-300"
                                        style={{
                                            backgroundColor: "#2974FF",
                                            boxShadow: `0 0 30px rgba(41, 116, 255, 0.3)`,
                                        }}
                                    >
                                        <Heart
                                            className={`w-8 h-8 text-white transition-all duration-300 ${liked[index] ? "fill-current scale-125" : ""}`}
                                            onClick={() => toggleLike(index)}
                                        />
                                    </div>
                                    
                                </div>
                                <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
                                    {item.title}
                                </CardTitle>
                                <CardDescription className="text-gray-600 text-base">
                                    {item.description}
                                </CardDescription>
                            </CardHeader>
                            <CardFooter className="relative z-10 pt-6">
                                <Button
                                    variant="outline"
                                    className="w-full border-2 hover:text-white transition-all duration-300 transform hover:scale-105"
                                    style={{
                                        borderColor: "#2974FF",
                                        
                                    }}
                                    onMouseEnter={(e) => (e.target.style.backgroundColor = "#2974FF")}
                                    onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}>
                                    Explore Features
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                {/* Custom Animations */}
                <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
            </div>
        </section >

    )
}
