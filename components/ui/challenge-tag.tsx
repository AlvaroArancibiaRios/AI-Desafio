"use client"

import { useState } from "react"

interface ChallengeTagProps {
  mainText?: string
  hoverText?: string
  onClick?: () => void
}

export function ChallengeTag({
  mainText = "Reto 21 Días",
  hoverText = "Comenzar Ahora",
  onClick
}: ChallengeTagProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex items-center gap-5 rounded-full border-2 border-white/[0.12] bg-white/[0.03] px-16 py-6 transition-all duration-500 ease-out hover:border-[#98e024]/40 hover:bg-white/[0.06] hover:shadow-[0_0_30px_rgba(152,224,36,0.15)]"
    >
      {/* Live pulse indicator */}
      <div className="relative flex items-center justify-center pl-3 pr-2">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#98e024] opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-[#98e024]" />
        </span>
      </div>

      {/* Text content */}
      <div className="relative flex items-center justify-center overflow-hidden min-w-[220px]">
        <span
          className="text-lg font-semibold text-white uppercase tracking-wider transition-all duration-500 whitespace-nowrap"
          style={{
            transform: isHovered ? "translateY(-100%)" : "translateY(0)",
            opacity: isHovered ? 0 : 1,
          }}
        >
          {mainText}
        </span>

        <span
          className="absolute inset-0 flex items-center justify-center text-lg font-semibold text-[#98e024] uppercase tracking-wider transition-all duration-500 whitespace-nowrap"
          style={{
            transform: isHovered ? "translateY(0)" : "translateY(100%)",
            opacity: isHovered ? 1 : 0,
          }}
        >
          {hoverText}
        </span>
      </div>

      {/* Arrow indicator */}
      <div className="pl-2 pr-3">
        <svg
          className="h-4 w-4 text-white/60 transition-all duration-300"
          style={{
            transform: isHovered ? "translateX(2px) rotate(-45deg)" : "translateX(0) rotate(0)",
            opacity: isHovered ? 1 : 0.5,
          }}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
        </svg>
      </div>
    </button>
  )
}
