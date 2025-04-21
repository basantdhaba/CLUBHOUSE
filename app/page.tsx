"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Share2, Send, Building } from "lucide-react"
import Link from "next/link"
import BenefitSection from "@/components/benefit-section"
import LanguageSelector from "@/components/language-selector"
import { translations } from "@/lib/translations"

export default function Home() {
  const [language, setLanguage] = useState("english")
  const [clubName, setClubName] = useState("")
  const [position, setPosition] = useState("")
  const [whatsappNumber, setWhatsappNumber] = useState("")
  const [isFormValid, setIsFormValid] = useState(false)
  const t = translations[language]

  useEffect(() => {
    setIsFormValid(!!clubName && !!position && whatsappNumber.length >= 10)
  }, [clubName, position, whatsappNumber])

  const handleSubmit = (e) => {
    e.preventDefault()

    // Format the message for WhatsApp
    const message = encodeURIComponent(
      `Club Name: ${clubName}\nPosition: ${position}\nWhatsApp Number: ${whatsappNumber}`,
    )

    // Open WhatsApp with the admin's number and pre-filled message
    window.open(`https://wa.me/919804122966?text=${message}`, "_blank")
  }

  const handleShare = () => {
    // For mobile devices that support the WhatsApp URI scheme
    if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
      window.location.href = `whatsapp://send?text=${encodeURIComponent(t.shareMessage + " " + window.location.href)}`
    } else {
      // Fallback for desktop or unsupported devices
      window.open(`https://wa.me/?text=${encodeURIComponent(t.shareMessage + " " + window.location.href)}`, "_blank")
    }
  }

  return (
    <main className="min-h-screen">
      <div className="bg-gradient-to-r from-[#1976D2] to-[#00BCD4] text-white">
        <div className="container mx-auto px-4 py-8">
          {/* Header with Language Selector */}
          <header className="flex justify-between items-center mb-8">
            <div className="flex items-center">
              <h1 className="text-2xl md:text-3xl font-bold">{t.pageTitle}</h1>
              <Link href="/property-owners" className="ml-4 flex items-center text-white/90 hover:text-white">
                <Building className="h-4 w-4 mr-1" />
                <span>For Property Owners</span>
              </Link>
            </div>
            <LanguageSelector language={language} setLanguage={setLanguage} />
          </header>

          {/* Hero Section */}
          <section className="py-12 md:py-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.heroTitle}</h2>
            <p className="text-lg max-w-2xl mx-auto opacity-90">{t.heroDescription}</p>
          </section>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Benefits Section */}
        <BenefitSection language={language} />

        {/* Form Section */}
        <section className="mt-16 max-w-md mx-auto">
          <Card className="border-[#1976D2]/20 shadow-lg">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4 text-center">{t.formTitle}</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="club-name">{t.clubNameLabel}</Label>
                  <Input
                    id="club-name"
                    type="text"
                    placeholder="Enter your club name"
                    value={clubName}
                    onChange={(e) => setClubName(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="position">{t.positionLabel}</Label>
                  <Select value={position} onValueChange={setPosition}>
                    <SelectTrigger id="position">
                      <SelectValue placeholder="Select your position" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="secretary">Club Secretary</SelectItem>
                      <SelectItem value="president">Club President</SelectItem>
                      <SelectItem value="member">Club Member</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="whatsapp">{t.whatsappLabel}</Label>
                  <Input
                    id="whatsapp"
                    type="tel"
                    placeholder="Enter your WhatsApp number"
                    value={whatsappNumber}
                    onChange={(e) => setWhatsappNumber(e.target.value)}
                  />
                </div>

                <div className="flex gap-2 pt-2">
                  <Button type="submit" className="flex-1 bg-[#1976D2] hover:bg-[#1565C0]" disabled={!isFormValid}>
                    <Send className="mr-2 h-4 w-4" /> Submit
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleShare}
                    className="flex-1 border-[#1976D2] text-[#1976D2]"
                  >
                    <Share2 className="mr-2 h-4 w-4" /> Share
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}

