"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { BarChart3, FileSearch, Clock, Settings } from "lucide-react"

export default function WhyAI() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const reasons = [
    {
      title: "Accelerate Decision-Making",
      description:
        "Businesses struggle to process and analyze massive amounts of data, leading to missed insights and slower decision-making.",
      icon: BarChart3,
    },
    {
      title: "Enhance Information Management",
      description:
        "Difficulty in accessing the right information quickly, leading to delays in response time and reduced efficiency.",
      icon: FileSearch,
    },
    {
      title: "Increase Operational Efficiency",
      description:
        "Repetitive tasks like document management, scheduling, and communication drain resources and reduce productivity",
      icon: Clock,
    },
    {
      title: "Scalable Tailored Solutions",
      description:
        "Off-the-shelf solutions are often inadequate, requiring businesses to seek customized, scalable AI solutions to meet their specific needs",
      icon: Settings,
    },
  ]

  return (
    <section ref={ref} className="w-full py-16 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-cyan-300">
            WHY BUSINESSES NEED AI SOLUTIONS
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="bg-gray-900/30 border-gray-800 hover:border-emerald-500 transition-all duration-300 h-full overflow-hidden group">
                <CardContent className="p-6 h-full flex flex-col">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="w-12 h-12 mb-4 rounded-lg flex items-center justify-center bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 text-emerald-400"
                  >
                    <reason.icon size={28} />
                  </motion.div>

                  <h3 className="text-lg sm:text-xl font-bold mb-3 text-white group-hover:text-emerald-400 transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base">{reason.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
