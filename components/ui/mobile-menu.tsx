"use client"

import type React from "react"

import Link from "next/link"
import { Menu, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"

export function MobileMenu() {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const targetId = e.currentTarget.href.split("#")[1]
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="h-9 w-9">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <div className="flex flex-col space-y-4 mt-8">
          <SheetClose asChild>
            <Link
              onClick={handleSmoothScroll}
              href="/#home"
              className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-foreground transition-colors py-2"
            >
              Home
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              onClick={handleSmoothScroll}
              href="/#jogue"
              className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-foreground transition-colors py-2"
            >
              Jogue com a gente
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              onClick={handleSmoothScroll}
              href="/#duvidas"
              className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-foreground transition-colors py-2"
            >
              Dúvidas
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              onClick={handleSmoothScroll}
              href="/#contato"
              className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-foreground transition-colors py-2"
            >
              Contato
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              onClick={handleSmoothScroll}
              href="/#quem-somos"
              className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-foreground transition-colors py-2"
            >
              Quem somos
            </Link>
          </SheetClose>
          <div className="border-t pt-4">
            <SheetClose asChild>
              <Link
                onClick={handleSmoothScroll}
                href="/#loja"
                className="flex items-center gap-2 text-lg font-medium text-primary dark:text-primary-foreground hover:text-pink-500 dark:hover:text-pink-400 transition-colors py-2"
              >
                <ShoppingBag className="h-5 w-5" />
                Loja
              </Link>
            </SheetClose>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
