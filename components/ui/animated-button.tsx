"use client"

import { motion } from "framer-motion"
import { Button } from "./button"
import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface AnimatedButtonProps {
  children: ReactNode
  className?: string
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "gradient" | "glow"
  size?: "default" | "sm" | "lg" | "icon"
  onClick?: () => void
  disabled?: boolean
  type?: "button" | "submit" | "reset"
}

export function AnimatedButton({
  children,
  className,
  variant = "default",
  size = "default",
  onClick,
  disabled = false,
  type = "button",
  ...props
}: AnimatedButtonProps) {
  const getVariantClasses = () => {
    switch (variant) {
      case "gradient":
        return "bg-gradient-to-r from-purple-600 to-lime-400 text-white border-0 hover:from-purple-700 hover:to-lime-500"
      case "glow":
        return "bg-lime-400 text-purple-900 border-0 hover:bg-lime-500 shadow-lg hover:shadow-lime-400/50"
      default:
        return ""
    }
  }

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <Button
        className={cn(
          "relative overflow-hidden transition-all duration-300",
          getVariantClasses(),
          className
        )}
        variant={variant === "gradient" || variant === "glow" ? "default" : variant}
        size={size}
        onClick={onClick}
        disabled={disabled}
        type={type}
        {...props}
      >
        <motion.span
          className="relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.span>
        
        {/* Efeito de brilho */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%" }}
          transition={{ duration: 0.6 }}
        />
      </Button>
    </motion.div>
  )
}