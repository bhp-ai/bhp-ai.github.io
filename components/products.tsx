"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export default function Products() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const products = [
    {
      name: "AIDA",
      subtitle: "AI DOCUMENT ASSISTANT",
      description: "Upload documents and chat with them like a human expert",
      details: "Built with Retrieval-Augmented Generation (RAG)",
      useCases: "Used in compliance, policy research, legal document review",
      features: [
        "Automates information retrieval",
        "Supports PDFs, Word, scanned images",
        "Scalable across industries (government, banking, legal)",
      ],
    },
    {
      name: "SMARTCHAT",
      subtitle: "BY SENTIENT.IO",
      description: "Customizable chatbots trained on your internal knowledge",
      details: "Integrated with your website, CRM, ticketing, and support systems",
      useCases: "Private AI solution for on-premise or on-cloud deployments",
      features: [
        "Ensures data privacy and security",
        "Streamlines workflows, improves decision-making",
        "Integrated into enterprise database and data warehouse",
      ],
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
          <h4 className="text-lg uppercase font-semibold mb-2 text-emerald-400">PRODUCTS</h4>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white">
            A brief Showcase of our AI Catalogue
          </h2>
          <h3 className="text-lg sm:text-xl font-light text-gray-300">Berca Hardayaperkasa</h3>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="bg-gray-800/50 border-gray-700 hover:border-emerald-500 transition-all duration-300 h-full overflow-hidden group">
                <CardContent className="p-6 sm:p-8 h-full flex flex-col">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: "3rem" } : { width: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                    className="h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mb-4"
                  />

                  <h3 className="text-xl sm:text-2xl font-bold mb-1 text-white">{product.name}</h3>
                  <h4 className="text-base sm:text-lg font-semibold mb-4 text-emerald-400">{product.subtitle}</h4>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
                    className="bg-black/30 p-4 rounded-lg mb-6"
                  >
                    <p className="text-white font-medium mb-2 text-sm sm:text-base">{product.description}</p>
                    <p className="text-gray-300 text-xs sm:text-sm">{product.details}</p>
                    <p className="text-gray-300 text-xs sm:text-sm mt-2">{product.useCases}</p>
                  </motion.div>

                  <ul className="text-gray-300 text-sm sm:text-base">
                    {product.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                        transition={{ duration: 0.5, delay: 0.5 + index * 0.2 + i * 0.1 }}
                        className="flex items-start mb-3 last:mb-0"
                      >
                        <CheckCircle className="text-emerald-500 min-w-[20px] w-5 h-5 mt-0.5 mr-2" />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
