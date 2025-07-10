"use client"

import { ChevronDown } from "lucide-react"
import Link from "next/link"
import HeroSection from "@/components/hero-section"
import IndustrialRevolution from "@/components/industrial-revolution"
import Partners from "@/components/partners"
import WhyAI from "@/components/why-ai"
import Services from "@/components/services"
import Lifecycle from "@/components/lifecycle"
import Capabilities from "@/components/capabilities"
import UseCases from "@/components/use-cases"
import Products from "@/components/products"
import ValueROI from "@/components/value-roi"
import ContactSection from "@/components/contact-section"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-black text-white overflow-hidden">
      <HeroSection />

      <motion.div
        className="absolute top-[85vh] left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 1.5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          repeatDelay: 0.5,
        }}
      >
        <ChevronDown size={36} className="text-emerald-400" />
      </motion.div>

      <IndustrialRevolution />
      <Partners />
      <WhyAI />
      <Services />
      <Lifecycle />
      <Capabilities />
      <UseCases />
      <Products />
      <ValueROI />
      <ContactSection />

      <footer className="w-full bg-black border-t border-gray-800 py-6 text-center">
        <div className="container mx-auto">
          <p className="text-gray-400 mb-2">© 2025 Berca Hardayaperkasa. All rights reserved.</p>
          <div className="flex justify-center space-x-6">
            <Link href="#" className="text-gray-400 hover:text-emerald-400 transition">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-emerald-400 transition">
              Terms of Service
            </Link>
            <Link href="#" className="text-gray-400 hover:text-emerald-400 transition">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
