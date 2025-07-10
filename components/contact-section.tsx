"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className="w-full py-16 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white">
            Your Journey with <span className="text-emerald-400">AI</span> Starts <span className="text-cyan-400">Here</span>
            </h2>
          <h3 className="text-lg sm:text-xl font-light text-gray-300">We’re here to empower your ideas with intelligent solutions.</h3>
          {/* <p className="text-gray-400 mt-2">By Berca AI</p>
          <p className="text-gray-400">for your time and attention</p> */}
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 bg-gray-900/30 rounded-lg p-6 sm:p-8 border border-gray-800"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-white">Get In Touch</h3>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    className="bg-gray-800/50 border-gray-700 focus:border-emerald-500 text-white"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="bg-gray-800/50 border-gray-700 focus:border-emerald-500 text-white"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="How can we help you?"
                  className="bg-gray-800/50 border-gray-700 focus:border-emerald-500 text-white"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message..."
                  rows={5}
                  className="bg-gray-800/50 border-gray-700 focus:border-emerald-500 text-white"
                />
              </div>

              <Button className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white px-6 py-5 h-auto text-base sm:text-lg w-full md:w-auto">
                Send Message
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gray-900/30 rounded-lg p-6 sm:p-8 border border-gray-800"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-white">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 flex items-center justify-center mr-4 flex-shrink-0">
                  <Mail className="text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Email</h4>
                  <p className="text-gray-300 text-sm sm:text-base break-all">ananto.joyoadikusumo@berca.co.id</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 flex items-center justify-center mr-4 flex-shrink-0">
                  <Phone className="text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Phone</h4>
                  <p className="text-gray-300 text-sm sm:text-base">+62 123 456 7890</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 flex items-center justify-center mr-4 flex-shrink-0">
                  <MapPin className="text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Address</h4>
                  <p className="text-gray-300 text-sm sm:text-base">
                    Jl. Abdul Muis Indonesia. 62, Kecamatan Gambir, Indonesia
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-6xl mx-auto mt-8 text-center"
        >
          <p className="text-gray-400 text-xs sm:text-sm">
            www.berca.co.id | ananto.joyoadikusumo@berca.co.id | Jl. Abdul Muis Indonesia. 62, Kecamatan Gambir,
            Indonesia
          </p>
        </motion.div>
      </div>
    </section>
  )
}
