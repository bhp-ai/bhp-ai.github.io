"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts"
import { Card, CardContent } from "@/components/ui/card"

const adoptionData = [
  { name: "No Adoption", value: 24, color: "#0f172a" }, // Keeping dark slate color for "No Adoption"
  { name: "Early Stage", value: 30, color: "#b32c2c" }, // Red-700
  { name: "Advanced Stage", value: 40, color: "#e63e3e" }, // Red-500
  { name: "Full Adoption", value: 6, color: "#ff8080" }, // Red-400
]

const RADIAN = Math.PI / 180
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, name }: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)

  return (
    <text
      x={x}
      y={y}
      fill="#ffffff"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
      fontSize={12}
      fontWeight="bold"
    >
      {`${name}: ${(percent * 100).toFixed(0)}%`}
    </text>
  )
}

export default function ValueROI() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className="w-full py-16 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-cyan-300">
            VALUE & ROI OF AI ADOPTION
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="h-54 sm:h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={adoptionData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    animationBegin={500}
                    animationDuration={1500}
                  >
                    {adoptionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value, name) => [`${value}%`, name]}
                    contentStyle={{
                      backgroundColor: "#1f2937",
                      border: "1px solid #374151",
                      borderRadius: "0.5rem",
                      color: "#f3f4f6",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-center"
            >
              
              <blockquote className="text-gray-200 text-sm sm:text-base italic px-4 py-2 border-l-4 border-emerald-400 bg-gray-900/40 mx-auto max-w-xl mb-3">
                AI adoption helps businesses improve operations, enhance customer experiences, and streamline website creation.<br /><br />
                While many are in the early stages, advanced adopters are leveraging tools like chatbots and AI assistants, with <span className="text-emerald-300 font-semibold">58% of companies</span> planning to increase investments.
              </blockquote>
              <p className="text-white text-xs sm:text-sm mb-1 italic">AI adoption stages in Businesses (Hostinger, 2024)</p>
              <div className="flex flex-wrap justify-center mt-4 gap-2 sm:gap-4">
                {adoptionData.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 5 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 5 }}
                    transition={{ duration: 0.3, delay: 1 + index * 0.1 }}
                    className="flex items-center"
                  >
                    <div className={`w-3 h-3 rounded-full bg-[${item.color}] mr-2`} />
                    
                    {/* <span className="text-gray-300 text-xs sm:text-sm">
                      {index === 0 && "A. 24% No Adoption"}
                      {index === 1 && "B. 30% Experimenting and piloting AI solutions"}
                      {index === 2 && "C. 40% Implement and integrated AI across multiple functions"}
                      {index === 3 && "D. 6% AI central to operations"}
                    </span> */}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="bg-gray-900/30 border-gray-800 h-full">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl font-bold mb-6 text-white">The Business Value of AI</h3>

                <ul className="space-y-4 sm:space-y-6">
                  {[
                    {
                      highlight: "74% of early adopters",
                      text: "report substantial ROI from AI investments (Forbes 2024).",
                    },
                    {
                      text: "AI leads to measurable cost reductions and increased revenues.",
                    },
                    {
                      highlight: "65% of organizations",
                      text: "are now using Generative AI regularly across business functions (McKinsey 2024).",
                    },
                    {
                      highlight: "Key to success:",
                      text: "Thoughtful integration aligned with business objectives.",
                      divider: true,
                    },
                    {
                      text: "Applying AI to the right business problems is crucial for success and maximizing ROI.",
                    },
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      className={`text-gray-300 text-sm sm:text-base ${
                        item.divider ? "border-t border-gray-700 pt-4 mt-4" : ""
                      }`}
                    >
                      {item.highlight && (
                        <span className="text-emerald-400 font-bold block mb-1">{item.highlight}</span>
                      )}
                      <span
                        className={item.highlight === "Key to success:" ? "text-white font-semibold block mb-2" : ""}
                      >
                        {item.text}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
