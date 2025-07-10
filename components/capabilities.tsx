"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { MessageSquare, Eye, BarChart2, Bot } from "lucide-react"
import Image from "next/image"

export default function Capabilities() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const capabilities = [
    {
      title: "NATURAL LANGUAGE PROCESSING",
      description: "Sentiment analysis, Automatic Speech Recognition, Text-to-Speech",
      icon: MessageSquare,
    },
    {
      title: "COMPUTER VISION",
      description: "Optical Character Recognition, Face Recognition, Object Detection",
      icon: Eye,
    },
    {
      title: "PREDICTIVE & PRESCRIPTIVE ANALYTICS",
      description: "Fraud Detection, Forecasting, Recommendation Systems",
      icon: BarChart2,
    },
    {
      title: "GEN AI & AGENTIC AI SYSTEMS",
      description: "Chatbots, Smart Assistants, Document Understanding",
      icon: Bot,
    },
  ]

  const tools = [
    {
      name: "AI Platforms",
      image: [
        'openai.png',
        'llamaindex.png',
        'replicate.png',
        'cohere.png',
        'vertex.png',
        'antrhopic.png',
      ]
    },
    {
      name: "MLOps",
      description: "Kubeflow, MLflow, TFX",
      image: [
        'nvidia.png',
        'kubeflow.png',
        'aws_sagemaker.png',
        'neptune.png',
        'mlflow.png',
      ]
    },
    {
      name: "Frameworks",
      image: [
        'pytorch.png',
        'tensorflow.png',
        'hf.png',
        'crew_ai.png',
        'langchain.png',
        'ollama.png',

      ]
    },
    // {
    //   name: "GenAI Tools",
    //   description: "Hugging Face, OpenAI API, Anthropic Claude",
    //   image: [
    //     'ollama.png',
    //     'vllm.png',
    //     'langchain.png',
    //   ]
    // },
    {
      name: "Dev Tools & Interfaces",
      description: "Jupyter Notebooks, Streamlit, Dash",
      image: [
        'fastapi.png',
        'v0.png',
        'gradio.png',
        'kubernetes.png',
        'docker.png',
      ]
    }
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

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: i => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, delay: i * 0.1 }
    })
  }

  const iconVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: i => ({
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, delay: 0.3 + i * 0.1 }
    })
  }

  const bottomSectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.5 }
    }
  }

  const platformVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.7 + i * 0.1 }
    })
  }

  return (
    <section ref={ref} className="w-full py-16 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={headerVariants}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white">
            CAPABILITIES & <span className="text-emerald-400">EXPERTISE</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={cardVariants}
              className="bg-gray-900/30 rounded-lg p-6 border border-gray-800 hover:border-emerald-500 group"
            >
              <motion.div
                custom={index}
                variants={iconVariants}
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 flex items-center justify-center mb-6"
              >
                <capability.icon size={28} className="text-emerald-400" />
              </motion.div>
              <h3 className="text-base sm:text-lg font-bold mb-3 text-white group-hover:text-emerald-400">
                {capability.title}
              </h3>
              <p className="text-gray-300 text-sm sm:text-base">{capability.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={bottomSectionVariants}
          className="mt-12 bg-gray-900/30 rounded-lg p-6 sm:p-8 border border-gray-800 max-w-5xl mx-auto"
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-6 text-white text-center">
            WE LEVERAGE LEADING TOOLS & PLATFORMS
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {tools.map((platform, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={platformVariants}
                className="bg-gray-800/50 rounded-lg p-4 text-center"
              >
                <h4 className="text-emerald-400 font-medium mb-3 text-sm sm:text-base">
                  {platform.name}
                </h4>
                <div className="flex flex-wrap justify-center gap-3">
                  {platform.image.map((img, i) => (
                    <div
                      key={i}
                      className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-emerald-200/60 to-cyan-100/80 rounded-md p-1 flex items-center justify-center"
                    >
                      <Image
                        src={`/${img}`}
                        alt={`${platform.name} Logo ${i}`}
                        width={40}
                        height={40}
                        className="object-contain w-full h-full"
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}