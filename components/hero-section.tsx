"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 py-16">
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black" />

      <div className="container mx-auto z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <Image
            src="/logo.png"
            alt="Berca Logo"
            width={400}
            height={200}
            className="mx-auto"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-cyan-300"
        >
          BERCA AI
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6"
        >
          Transforming Ideas into Intelligent Solutions
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-gray-300 max-w-3xl mx-auto mb-10 text-base sm:text-lg"
        >
          Berca Hardayaperkasa delivers cutting-edge AI solutions to help businesses harness the power of artificial
          intelligence for digital transformation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white px-6 py-5 text-base sm:text-lg rounded-md w-full sm:w-auto">
            Explore Our Solutions
          </Button>
          <Button
            variant="outline"
            className="border-emerald-500 text-emerald-400 hover:bg-emerald-500/10 px-6 py-5 text-base sm:text-lg rounded-md w-full sm:w-auto"
          >
            Contact Us
          </Button>
        </motion.div>
      </div>

      <div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 left-0 right-0 px-4"
        >
          <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4 text-xs sm:text-sm text-gray-400 text-center">
            <span>www.berca.co.id</span>
            <span className="hidden sm:inline">|</span>
            <span>ananto.joyoadikusumo@berca.co.id</span>
            <span className="hidden sm:inline">|</span>
            <span>Jl. Abdul Muis Indonesia. 62, Kecamatan Gambir, Indonesia</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
