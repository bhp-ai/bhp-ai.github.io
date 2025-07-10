"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function Partners() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const partners = [
    {
      name: "IBM WATSONX",
      description:
        "Cutting-edge AI platform designed for advanced analytics and automation, can help you support your business",
      image: "/ibm.png",
    },
    {
      name: "LAZARUS NLP",
      description:
      "A research group striving to revitalize Indonesia's endangered languages through advanced AI and language technologies.",
      image: "/lazarus.png",
    },
    {
      name: "SENTIENT.IO",
      description:
      "Singapore-based AI company, providing solutions that bring intuitive, human-like capabilities to AI systems.",
      image: "/sentient.png",
    },
    {
      name: "CLOUDRAIL AI",
      description: "Indonesia's leading Sovereign AI Compute and Software Provider",
      image: "/cloudrail.png",
    },
  ]

  return (
    <section ref={ref} className="w-full py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-cyan-300">
            OUR PARTNERS IN AI
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >

              <Card className="bg-gray-800/50 border-gray-700 hover:border-emerald-500 transition-all duration-300 h-full overflow-hidden group">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="w-16 h-16 mx-auto mb-5 bg-black/50 rounded-lg flex items-center justify-center overflow-hidden border border-gray-700 group-hover:border-emerald-500 transition-all duration-300">
                    <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-md transform group-hover:scale-110 transition-all duration-300" >
                      <Image
                        src={partner.image || ''}
                        alt={`${partner.name} Logo`}
                        width={400}
                        height={200}
                        className="mx-auto"
                      />
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold mb-3 text-white text-center">{partner.name}</h3>
                  <p className="text-gray-300 text-center text-sm sm:text-base flex-grow">{partner.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
