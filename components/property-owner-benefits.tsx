"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { propertyOwnerTranslations } from "@/lib/property-owner-translations"
import { Home, TrendingUp, Calendar, Clock, UserCheck, Globe, ChevronDown, ChevronUp } from "lucide-react"

interface PropertyOwnerBenefitsProps {
  language: string
}

export default function PropertyOwnerBenefits({ language }: PropertyOwnerBenefitsProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
  const t = propertyOwnerTranslations[language]

  const benefits = [
    {
      icon: <TrendingUp className="h-8 w-8 text-[#1976D2]" />,
      title: t.benefit1Title,
      description: t.benefit1Description,
      details: t.benefit1Details,
    },
    {
      icon: <Calendar className="h-8 w-8 text-[#1976D2]" />,
      title: t.benefit2Title,
      description: t.benefit2Description,
      details: t.benefit2Details,
    },
    {
      icon: <Clock className="h-8 w-8 text-[#1976D2]" />,
      title: t.benefit3Title,
      description: t.benefit3Description,
      details: t.benefit3Details,
    },
    {
      icon: <UserCheck className="h-8 w-8 text-[#1976D2]" />,
      title: t.benefit4Title,
      description: t.benefit4Description,
      details: t.benefit4Details,
    },
    {
      icon: <Globe className="h-8 w-8 text-[#1976D2]" />,
      title: t.benefit5Title,
      description: t.benefit5Description,
      details: t.benefit5Details,
    },
    {
      icon: <Home className="h-8 w-8 text-[#1976D2]" />,
      title: t.benefit6Title,
      description: t.benefit6Description,
      details: t.benefit6Details,
    },
  ]

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <section className="py-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-[#1976D2]">{t.benefitsTitle}</h2>

      <div className="space-y-4">
        {benefits.map((benefit, index) => (
          <Card
            key={index}
            className={`border-[#1976D2]/20 shadow-md transition-all duration-300 ${
              expandedIndex === index ? "ring-2 ring-[#1976D2]/30" : ""
            }`}
          >
            <CardContent className="p-6">
              <div className="flex items-start cursor-pointer" onClick={() => toggleExpand(index)}>
                <div className="p-3 bg-[#1976D2]/10 rounded-full mr-4 flex-shrink-0">{benefit.icon}</div>
                <div className="flex-grow">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">{benefit.title}</h3>
                    {expandedIndex === index ? (
                      <ChevronUp className="h-5 w-5 text-[#1976D2]" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-[#1976D2]" />
                    )}
                  </div>
                  <p className="text-muted-foreground mt-1">{benefit.description}</p>
                </div>
              </div>

              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 pt-4 border-t border-[#1976D2]/10"
                  >
                    <p className="text-muted-foreground whitespace-pre-line">{benefit.details}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

