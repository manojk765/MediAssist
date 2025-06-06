"use client"

import { motion } from "framer-motion"
import { SymptomsInput } from "@/components/symptoms-input"

export default function SymptomInputPage() {
  return (
      <motion.div
      initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6,
        ease: "easeOut"
      }}
      className="container max-w-4xl mx-auto px-4 py-8"
    >
      <SymptomsInput />
      </motion.div>
  )
}
