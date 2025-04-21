"use client"

import { Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface LanguageSelectorProps {
  language: string
  setLanguage: (language: string) => void
}

export default function LanguageSelector({ language, setLanguage }: LanguageSelectorProps) {
  const languages = {
    english: "English",
    bangla: "বাংলা",
    hindi: "हिंदी",
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="flex items-center gap-2 bg-white/20 text-white border-white/30 hover:bg-white/30"
        >
          <Globe className="h-4 w-4" />
          <span>{languages[language]}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setLanguage("english")}>English</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("bangla")}>বাংলা</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("hindi")}>हिंदी</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

