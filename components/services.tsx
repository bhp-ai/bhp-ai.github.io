"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, Settings2, Server, MonitorCheck } from "lucide-react"

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const services = [
    {
      title: "AI Strategy and Advisory",
      description:
        "Helping organizations craft a clear AI vision, align initiatives with business objectives, and identify high-impact opportunities.",
      icon: Brain,
    },
    {
      title: "AI Model Customization",
      description:
        "Designing and training models tailored to specific use cases across Natural Language Processing (NLP), Computer Vision (CV), Predictive Analytics, and Generative AI.",
      icon: Settings2,
    },
    {
      title: "AI Integration and Deployment",
      description:
        "Embedding AI seamlessly into your existing technology stack, ensuring reliable performance and smooth operational adoption.",
      icon: Server,
    },
    {
      title: "Managed AI Services",
      description:
        "Providing ongoing support, monitoring, and optimization to ensure your AI systems evolve with your business and scale effectively.",
      icon: MonitorCheck,
    },
  ]

  return (
    <section ref={ref} className="w-full py-16 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h4 className="text-lg uppercase font-semibold mb-2 text-emerald-400">SERVICES</h4>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white">
            How We Help Businesses Harness AI
          </h2>
          <h3 className="text-lg sm:text-xl font-light text-gray-300">Berca Hardayaperkasa</h3>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="bg-gray-900/30 border-gray-800 hover:border-emerald-500 transition-all duration-300 h-full overflow-hidden group">
                <CardContent className="p-6 sm:p-8 h-full flex flex-col">
                  <div className="mb-6 flex items-center">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center bg-gradient-to-br from-emerald-500/20 to-cyan-500/20"
                    >
                      <service.icon size={28} className="text-emerald-400" />
                    </motion.div>
                    <div className="ml-4">
                      <h5 className="uppercase font-medium text-xs sm:text-sm text-emerald-400">
                        {/* OUR CONSULTING SERVICE */}
                      </h5>
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold mb-3 text-white group-hover:text-emerald-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
