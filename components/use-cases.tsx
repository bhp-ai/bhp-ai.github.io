"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export default function UseCases() {
  const ref = useRef(null)
  const caseStudiesRef = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const caseStudiesInView = useInView(caseStudiesRef, { once: true, amount: 0.2 })

  const useCases = [
    {
      industry: "Financial Services",
      solutions: ["SmartChat for Compliance", "Lead Generation Automation"],
      capabilities: "NLP, Predictive Analytics",
      benefits: "Faster compliance checks, higher lead quality",
    },
    {
      industry: "Manufacturing",
      solutions: ["Predictive Maintenance (CV + IoT)"],
      capabilities: "Computer Vision, IoT Integration",
      benefits: "Reduced downtime, cost savings",
    },
    {
      industry: "Retail & E-Commerce",
      solutions: ["AI Call Center", "Customer Query Automation"],
      capabilities: "Voice AI, Conversational AI",
      benefits: "24/7 customer support, reduced workload",
    },
    {
      industry: "Logistics & Transportation",
      solutions: ["OCR for Delivery Notes"],
      capabilities: "OCR, Document Parsing",
      benefits: "Faster processing, fewer errors",
    },
    {
      industry: "Government",
      solutions: ["Document Retrieval for Policy Research"],
      capabilities: "RAG (Retrieval-Augmented Gen)",
      benefits: "Efficient research, accurate info access",
    },
  ]

  const caseStudies = [
    {
      title: "DOCUMENT ANAYSIS AUTOMATION",
      challenge:
        "Manual checking of server testing documents, signature validations, and other compliance-related paperwork was time-consuming and prone to human error.",
      solution:
        "Deployed an AI Document Analysis System to automate document verification processes, ensuring faster turnaround and improved accuracy.",
      benefits: [
        "Exponentially increased document processing time",
        "Improved compliance accuracy",
        "Removed human-in-the-loop in document processing pipeline",
      ],
    },
    {
      title: "AI SALES LEAD GENERATION AGENT",
      challenge: "Difficulty in capturing and qualifying online leads efficiently for marketing campaigns.",
      solution:
        "Developed an AI Sales Lead Generation Agent that captures website inquiries, qualifies leads automatically, and nurtures them through intelligent follow-ups.",
      benefits: [
        "3x Increase in qualified leads",
        "Enhanced marketing conversion rates",
        "Streamlined sales pipeline processes",
      ],
    },
    {
      title: "TEXT-TO-SQL GRAPH GENERATION AGENT",
      challenge:
        "Business teams needed faster ways to generate reports and visualizations without relying heavily on the IT department.",
      solution:
        "Created a Text-to-SQL AI Agent capable of converting natural language queries into SQL and generating real-time business graphs and insights.",
      benefits: [
        "Reduced reporting turnaround time from days to minutes",
        "Empowered non-technical staff to self-serve insights",
        "Increased business agility and data-driven decision-making",
      ],
    },
  ]

  return (
    <section className="w-full py-16 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h4 className="text-lg uppercase font-semibold mb-2 text-emerald-400">USE CASES</h4>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white">
              Application of AI Across Industries
            </h2>
            <h3 className="text-lg sm:text-xl font-light text-gray-300">Berca Hardayaperkasa</h3>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto mt-6" />
          </motion.div>

          <div className="overflow-x-auto mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="min-w-max"
            >
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-800/50">
                    <th className="p-3 sm:p-4 text-left text-white border-b border-gray-700">Industry</th>
                    <th className="p-3 sm:p-4 text-left text-white border-b border-gray-700">Use Case</th>
                    <th className="p-3 sm:p-4 text-left text-white border-b border-gray-700">AI Capabilities</th>
                    <th className="p-3 sm:p-4 text-left text-white border-b border-gray-700">Benefits</th>
                  </tr>
                </thead>
                <tbody>
                  {useCases.map((useCase, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      className="border-b border-gray-800 hover:bg-gray-800/30 transition-colors"
                    >
                      <td className="p-3 sm:p-4 text-white">{useCase.industry}</td>
                      <td className="p-3 sm:p-4 text-gray-300">
                        <ul>
                          {useCase.solutions.map((solution, i) => (
                            <li key={i} className="mb-1 last:mb-0">
                              • {solution}
                            </li>
                          ))}
                        </ul>
                      </td>
                      <td className="p-3 sm:p-4 text-gray-300">{useCase.capabilities}</td>
                      <td className="p-3 sm:p-4 text-gray-300">{useCase.benefits}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-center mb-6"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white inline-block border-b-2 border-emerald-500 pb-1">
              AI USE CASES
            </h3>
          </motion.div>
        </div>

        <div ref={caseStudiesRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {caseStudies.map((caseStudy, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={caseStudiesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="bg-gray-900/30 border-gray-800 hover:border-emerald-500 transition-all duration-300 h-full overflow-hidden">
                <CardContent className="p-6 h-full flex flex-col">
                  <h3 className="text-base sm:text-lg font-bold mb-4 text-white">{caseStudy.title}</h3>

                  <div className="mb-4">
                    <h4 className="text-xs sm:text-sm font-semibold text-emerald-400 mb-1">Challenge:</h4>
                    <p className="text-gray-300 text-xs sm:text-sm">{caseStudy.challenge}</p>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-xs sm:text-sm font-semibold text-emerald-400 mb-1">Solution:</h4>
                    <p className="text-gray-300 text-xs sm:text-sm">{caseStudy.solution}</p>
                  </div>

                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-emerald-400 mb-1">Benefits:</h4>
                    <ul className="text-gray-300 text-xs sm:text-sm">
                      {caseStudy.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start mb-1.5 last:mb-0">
                          <CheckCircle className="text-emerald-500 min-w-[16px] w-4 h-4 mt-0.5 mr-2" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
