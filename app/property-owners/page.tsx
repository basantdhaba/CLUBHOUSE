"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Share2, Send, ArrowLeft, TrendingUp, Calendar, UserCheck } from "lucide-react"
import Link from "next/link"
import LanguageSelector from "@/components/language-selector"

export default function PropertyOwnerPage() {
  const [language, setLanguage] = useState("english")
  const [propertyType, setPropertyType] = useState("")
  const [propertyAddress, setPropertyAddress] = useState("")
  const [ownerName, setOwnerName] = useState("")
  const [whatsappNumber, setWhatsappNumber] = useState("")
  const [isFormValid, setIsFormValid] = useState(false)

  useEffect(() => {
    setIsFormValid(!!propertyType && !!propertyAddress && !!ownerName && whatsappNumber.length >= 10)
  }, [propertyType, propertyAddress, ownerName, whatsappNumber])

  const handleSubmit = (e) => {
    e.preventDefault()

    // Format the message for WhatsApp
    const message = encodeURIComponent(
      `Property Type: ${propertyType}\nProperty Address: ${propertyAddress}\nOwner Name: ${ownerName}\nWhatsApp Number: ${whatsappNumber}`,
    )

    // Open WhatsApp with the admin's number and pre-filled message
    window.open(`https://wa.me/919804122966?text=${message}`, "_blank")
  }

  const handleShare = () => {
    // For mobile devices that support the WhatsApp URI scheme
    if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
      window.location.href = `whatsapp://send?text=${encodeURIComponent("Check out this amazing property listing program for property owners! " + window.location.href)}`
    } else {
      // Fallback for desktop or unsupported devices
      window.open(
        `https://wa.me/?text=${encodeURIComponent("Check out this amazing property listing program for property owners! " + window.location.href)}`,
        "_blank",
      )
    }
  }

  const titles = {
    english: "Property Owner Program",
    bangla: "সম্পত্তি মালিক প্রোগ্রাম",
    hindi: "संपत्ति मालिक कार्यक्रम",
  }

  const backLinks = {
    english: "Back to Club Initiative",
    bangla: "ক্লাব উদ্যোগে ফিরে যান",
    hindi: "क्लब पहल पर वापस जाएं",
  }

  const heroTitles = {
    english: "Maximize Your Rental Income with Our Smart Listing Program!",
    bangla: "আমাদের স্মার্ট লিস্টিং প্রোগ্রামের সাথে আপনার ভাড়া আয় সর্বাধিক করুন!",
    hindi: "हमारे स्मार्ट लिस्टिंग प्रोग्राम के साथ अपनी किराया आय को अधिकतम करें!",
  }

  const heroDescriptions = {
    english:
      "Are you a property owner looking to rent out your property quickly and efficiently? Our platform ensures that you maximize your returns by minimizing the time your property remains vacant.",
    bangla:
      "আপনি কি একজন সম্পত্তি মালিক যিনি দ্রুত এবং দক্ষতার সাথে আপনার সম্পত্তি ভাড়া দিতে চান? আমাদের প্ল্যাটফর্ম নিশ্চিত করে যে আপনি আপনার সম্পত্তি খালি থাকার সময় কমিয়ে আপনার রিটার্ন সর্বাধিক করেন।",
    hindi:
      "क्या आप एक संपत्ति मालिक हैं जो अपनी संपत्ति को जल्दी और कुशलता से किराए पर देना चाहते हैं? हमारा प्लेटफॉर्म यह सुनिश्चित करता है कि आप अपनी संपत्ति के खाली रहने के समय को कम करके अपने रिटर्न को अधिकतम करें।",
  }

  const formTitles = {
    english: "List Your Property Today",
    bangla: "আজই আপনার সম্পত্তি তালিকাভুক্ত করুন",
    hindi: "आज ही अपनी संपत्ति सूचीबद्ध करें",
  }

  const labels = {
    english: {
      propertyType: "Property Type",
      propertyAddress: "Property Address",
      ownerName: "Owner Name",
      whatsapp: "WhatsApp Number",
      submit: "Submit",
      share: "Share",
    },
    bangla: {
      propertyType: "সম্পত্তির ধরন",
      propertyAddress: "সম্পত্তির ঠিকানা",
      ownerName: "মালিকের নাম",
      whatsapp: "হোয়াটসঅ্যাপ নম্বর",
      submit: "জমা দিন",
      share: "শেয়ার করুন",
    },
    hindi: {
      propertyType: "संपत्ति का प्रकार",
      propertyAddress: "संपत्ति का पता",
      ownerName: "मालिक का नाम",
      whatsapp: "व्हाट्सएप नंबर",
      submit: "जमा करें",
      share: "शेयर करें",
    },
  }

  const placeholders = {
    english: {
      propertyType: "e.g., Apartment, House, Commercial Space",
      propertyAddress: "Enter your property address",
      ownerName: "Enter your full name",
      whatsapp: "Enter your WhatsApp number",
    },
    bangla: {
      propertyType: "যেমন, অ্যাপার্টমেন্ট, বাড়ি, বাণিজ্যিক স্থান",
      propertyAddress: "আপনার সম্পত্তির ঠিকানা লিখুন",
      ownerName: "আপনার পুরো নাম লিখুন",
      whatsapp: "আপনার হোয়াটসঅ্যাপ নম্বর লিখুন",
    },
    hindi: {
      propertyType: "जैसे, अपार्टमेंट, मकान, वाणिज्यिक स्थान",
      propertyAddress: "अपनी संपत्ति का पता दर्ज करें",
      ownerName: "अपना पूरा नाम दर्ज करें",
      whatsapp: "अपना व्हाट्सएप नंबर दर्ज करें",
    },
  }

  return (
    <main className="min-h-screen">
      <div className="bg-gradient-to-r from-[#1976D2] to-[#00BCD4] text-white">
        <div className="container mx-auto px-4 py-8">
          {/* Header with Language Selector */}
          <header className="flex justify-between items-center mb-8">
            <div className="flex items-center">
              <Link href="/" className="flex items-center mr-4 hover:underline">
                <ArrowLeft className="h-4 w-4 mr-1" />
                <span>{backLinks[language]}</span>
              </Link>
              <h1 className="text-2xl md:text-3xl font-bold">{titles[language]}</h1>
            </div>
            <LanguageSelector language={language} setLanguage={setLanguage} />
          </header>

          {/* Hero Section */}
          <section className="py-12 md:py-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{heroTitles[language]}</h2>
            <p className="text-lg max-w-2xl mx-auto opacity-90">{heroDescriptions[language]}</p>
          </section>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Benefits Section */}
        <section className="py-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-[#1976D2]">
            {language === "english"
              ? "Why List Your Property with Us?"
              : language === "bangla"
                ? "আমাদের সাথে আপনার সম্পত্তি তালিকাভুক্ত করবেন কেন?"
                : "हमारे साथ अपनी संपत्ति को सूचीबद्ध क्यों करें?"}
          </h2>

          <div className="space-y-4">
            <Card className="border-[#1976D2]/20 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="p-3 bg-[#1976D2]/10 rounded-full mr-4 flex-shrink-0">
                    <TrendingUp className="h-8 w-8 text-[#1976D2]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">
                      {language === "english"
                        ? "Get Maximum Returns"
                        : language === "bangla"
                          ? "সর্বাধিক রিটার্ন পান"
                          : "अधिकतम रिटर्न प्राप्त करें"}
                    </h3>
                    <p className="text-muted-foreground mt-1">
                      {language === "english"
                        ? "If your property's annual rental is ₹1,20,000 (₹10,000/month), but it remains vacant for 2 months, your yearly earnings drop to ₹1,00,000, reducing your actual monthly rent to ₹8,333. We help you avoid such losses!"
                        : language === "bangla"
                          ? "যদি আপনার সম্পত্তির বার্ষিক ভাড়া ₹1,20,000 (₹10,000/মাস) হয়, কিন্তু এটি 2 মাস খালি থাকে, আপনার বার্ষিক আয় ₹1,00,000-এ নেমে যায়। আমরা আপনাকে এই ধরনের ক্ষতি এড়াতে সাহায্য করি!"
                          : "यदि आपकी संपत्ति का वार्षिक किराया ₹1,20,000 (₹10,000/माह) है, लेकिन यह 2 महीने के लिए खाली रहती है, तो आपकी वार्षिक कमाई ₹1,00,000 तक गिर जाती है। हम आपको ऐसे नुकसान से बचने में मदद करते हैं!"}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-[#1976D2]/20 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="p-3 bg-[#1976D2]/10 rounded-full mr-4 flex-shrink-0">
                    <Calendar className="h-8 w-8 text-[#1976D2]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">
                      {language === "english"
                        ? "Vacancy Date Feature"
                        : language === "bangla"
                          ? "খালি তারিখ বৈশিষ্ট্য"
                          : "रिक्तता तिथि सुविधा"}
                    </h3>
                    <p className="text-muted-foreground mt-1">
                      {language === "english"
                        ? "Our platform allows you to list the exact date your property will be available, so potential tenants can express interest beforehand. This ensures zero or minimal vacancy periods."
                        : language === "bangla"
                          ? "আমাদের প্ল্যাটফর্ম আপনাকে আপনার সম্পত্তি উপলব্ধ হবে সেই সঠিক তারিখ তালিকাভুক্ত করতে দেয়, যাতে সম্ভাব্য ভাড়াটেরা আগে থেকেই আগ্রহ প্রকাশ করতে পারে। এটি শূন্য বা সর্বনিম্ন খালি সময়কাল নিশ্চিত করে।"
                          : "हमारा प्लेटफॉर्म आपको अपनी संपत्ति के उपलब्ध होने की सटीक तिथि को सूचीबद्ध करने की अनुमति देता है, ताकि संभावित किरायेदार पहले से ही रुचि व्यक्त कर सकें। यह शून्य या न्यूनतम रिक्तता अवधि सुनिश्चित करता है।"}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-[#1976D2]/20 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="p-3 bg-[#1976D2]/10 rounded-full mr-4 flex-shrink-0">
                    <UserCheck className="h-8 w-8 text-[#1976D2]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">
                      {language === "english"
                        ? "Verified & Interested Tenants"
                        : language === "bangla"
                          ? "যাচাইকৃত এবং আগ্রহী ভাড়াটে"
                          : "सत्यापित और इच्छुक किरायेदार"}
                    </h3>
                    <p className="text-muted-foreground mt-1">
                      {language === "english"
                        ? "We connect you with genuine and verified tenants, reducing the hassle of unqualified inquiries."
                        : language === "bangla"
                          ? "আমরা আপনাকে প্রকৃত এবং যাচাইকৃত ভাড়াটেদের সাথে সংযোগ করি, অযোগ্য অনুসন্ধানের ঝামেলা কমিয়ে।"
                          : "हम आपको वास्तविक और सत्यापित किरायेदारों से जोड़ते हैं, जिससे अयोग्य पूछताछ की परेशानी कम होती है।"}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Form Section */}
        <section className="mt-16 max-w-md mx-auto">
          <Card className="border-[#1976D2]/20 shadow-lg">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4 text-center">{formTitles[language]}</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="property-type">{labels[language].propertyType}</Label>
                  <Input
                    id="property-type"
                    type="text"
                    placeholder={placeholders[language].propertyType}
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="property-address">{labels[language].propertyAddress}</Label>
                  <Input
                    id="property-address"
                    type="text"
                    placeholder={placeholders[language].propertyAddress}
                    value={propertyAddress}
                    onChange={(e) => setPropertyAddress(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="owner-name">{labels[language].ownerName}</Label>
                  <Input
                    id="owner-name"
                    type="text"
                    placeholder={placeholders[language].ownerName}
                    value={ownerName}
                    onChange={(e) => setOwnerName(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="whatsapp">{labels[language].whatsapp}</Label>
                  <Input
                    id="whatsapp"
                    type="tel"
                    placeholder={placeholders[language].whatsapp}
                    value={whatsappNumber}
                    onChange={(e) => setWhatsappNumber(e.target.value)}
                  />
                </div>

                <div className="flex gap-2 pt-2">
                  <Button type="submit" className="flex-1 bg-[#1976D2] hover:bg-[#1565C0]" disabled={!isFormValid}>
                    <Send className="mr-2 h-4 w-4" /> {labels[language].submit}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleShare}
                    className="flex-1 border-[#1976D2] text-[#1976D2]"
                  >
                    <Share2 className="mr-2 h-4 w-4" /> {labels[language].share}
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

