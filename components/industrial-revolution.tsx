"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export default function IndustrialRevolution() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const timelineData = [
    {
      period: "2000s",
      title: "INDUSTRIAL REVOLUTION & BERCA VISIONARIES",
      description:
        "Berca helped companies establish their IT infrastructure, integrating systems and deploying networks to support their digital transformation.",
    },
    {
      period: "2010s",
      description:
        "With the rise of cloud computing and data analytics, Berca guided enterprises through digital modernization, securing assets and optimizing operations.",
    },
    {
      period: "2020s",
      description:
        "Berca expanded into AI, automation, and machine learning, enabling data-driven strategies and intelligent process automation for clients.",
    },
    {
      period: "Present",
      description:
        "We envision AI as a cornerstone in the era of the Fourth Industrial Revolution. Today, Berca fuses artificial intelligence with IoT, cloud, and secure infrastructure to empower organizations to operate smarter, faster, and more resiliently.",
    },
  ]

  return (
    <section ref={ref} className="w-full py-16 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <motion.div
              initial={{ height: 0 }}
              animate={isInView ? { height: "100%" } : { height: 0 }}
              transition={{ duration: 1.5 }}
              className="absolute left-4 md:left-1/2 md:-ml-0.5 w-0.5 bg-gradient-to-b from-emerald-500 to-cyan-500 z-10"
            />

            {timelineData.map((item, index) => (
              <div
                key={index}
                className="relative flex flex-col md:flex-row items-start md:items-center mb-16 last:mb-0"
                style={{
                  opacity: isInView ? 1 : 0,
                  transform: isInView ? 'translateX(0)' : `translateX(${index % 2 === 0 ? '-20px' : '20px'})`,
                  transition: `opacity 0.8s ease-out, transform 0.8s ease-out ${0.2 + index * 0.2}s`
                }}
              >
                <div
                  className="absolute left-4 md:left-1/2 transform -translate-x-1/2 md:translate-x-0 flex items-center justify-center w-8 h-8 rounded-full bg-black border-2 border-emerald-500 z-20"
                  style={{
                    transform: isInView ? 'translate(-50%, 0) scale(1)' : 'translate(-50%, 0) scale(0)',
                    transition: `transform 0.4s ease-out ${0.5 + index * 0.2}s`
                  }}
                >
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                </div>

                <div
                  className={`w-full md:w-1/2 ${
                    index % 2 === 0
                      ? "pl-12 md:pr-12 md:text-right"
                      : "pl-12 md:ml-auto md:pl-12"
                  }`}
                >
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-emerald-400 mb-2">{item.period}</h3>
                  {index === 0 && (
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 text-white">{item.title}</h2>
                  )}
                  <p className="text-gray-300 text-base sm:text-lg">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
