"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { translations } from "@/lib/translations"
import { Home, Users, DollarSign, Shield, TrendingUp, ChevronDown, ChevronUp } from "lucide-react"

interface BenefitSectionProps {
  language: string
}

export default function BenefitSection({ language }: BenefitSectionProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
  const t = translations[language]

  const benefits = [
    {
      icon: <Users className="h-8 w-8 text-[#1976D2]" />,
      title: t.benefit1Title,
      description: t.benefit1Description,
    },
    {
      icon: <Home className="h-8 w-8 text-[#1976D2]" />,
      title: t.benefit2Title,
      description: t.benefit2Description,
    },
    {
      icon: <DollarSign className="h-8 w-8 text-[#1976D2]" />,
      title: t.benefit3Title,
      description: t.benefit3Description,
    },
    {
      icon: <Shield className="h-8 w-8 text-[#1976D2]" />,
      title: t.benefit4Title,
      description: t.benefit4Description,
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-[#1976D2]" />,
      title: t.benefit5Title,
      description: t.benefit5Description,
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

              {expandedIndex === index && (
                <div className="mt-4 pt-4 border-t border-[#1976D2]/10 overflow-hidden">
                  <p className="text-muted-foreground whitespace-pre-line">
                    {index === 0 &&
                      "By enrolling in our initiative, your club will gain access to a sustainable income stream that requires minimal management. This program is designed specifically for local clubs looking to expand their financial resources while providing a valuable service to their community."}
                    {index === 1 &&
                      "Our housing program ensures that properties associated with your club will prioritize club members as tenants. This creates a trusted community of renters and landlords who share common values and connections."}
                    {index === 2 &&
                      "The brokerage fees collected through our program are strategically reinvested into your club's cultural initiatives and activities. This creates a self-sustaining cycle of community enrichment."}
                    {index === 3 &&
                      "Our system maintains comprehensive records of all tenants placed through the club initiative. This transparency helps prevent antisocial activities and enhances community safety."}
                    {index === 4 &&
                      "Once established, our program generates passive income for your club year after year with minimal ongoing effort. This reliable revenue stream can transform your club's financial outlook."}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

