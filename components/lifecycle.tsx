"use client"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export default function Lifecycle() {
  const ref = useRef(null)
  // This will trigger animations when the section comes into view
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  
  const lifecycle = [
    {
      step: "1. Business Understanding",
      description:
        "Defining the business goals, understanding the problem context, and setting clear KPIs and success metrics to guide the AI initiative.",
    },
    {
      step: "2. Data Understanding",
      description:
        "Identifying, gathering, and exploring relevant data sources to assess quality, structure, and potential for training effective AI models.",
    },
    {
      step: "3. Solution Design",
      description:
        "Crafting the technical architecture, selecting appropriate algorithms, and mapping out how AI components interact within the overall system.",
    },
    {
      step: "4. Development & Training",
      description:
        "Building, training, and iteratively refining AI models using the latest techniques to ensure accuracy, robustness, and efficiency.",
    },
    {
      step: "5. Deployment",
      description:
        "Integrating the solution by embedding it into existing workflows and infrastructure, ensuring a seamless handover from development to production.",
    },
    {
      step: "6. Continuous Monitoring and Maintenance",
      description:
        "Regularly tracking model performance, retraining as needed, and maintaining the system to ensure smooth usage",
    },
  ]

  // Animation variants
  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8 }
    }
  }
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: i * 0.1 }
    })
  }
  
  const circleVariants = {
    hidden: { scale: 0, rotate: -90 },
    visible: i => ({
      scale: 1,
      rotate: 0,
      transition: { duration: 0.5, delay: 0.3 + i * 0.1 }
    })
  }

  return (
    <section ref={ref} className="w-full py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={headerVariants}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white">
            AI PROJECT <span className="text-emerald-400">LIFECYCLE</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto" />
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {lifecycle.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={itemVariants}
              className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 hover:border-emerald-500 group"
            >
              <div className="flex items-center mb-4">
                <motion.div
                  custom={index}
                  variants={circleVariants}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center font-bold text-black flex-shrink-0 mt-0.5"
                >
                  {index + 1}
                </motion.div>
                <h3 className="ml-3 text-base sm:text-xl font-bold text-white break-words">
                  {item.step.split(". ")[1]}
                </h3>
              </div>
              <p className="text-gray-300 text-sm sm:text-base">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}