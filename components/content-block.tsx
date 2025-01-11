'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface ContentBlockProps {
  title: string
  description: string
  fullContent: string
  image: string
  imageAlt: string
  reverse?: boolean
}

export function ContentBlock({ 
  title, 
  description, 
  fullContent,
  image, 
  imageAlt,
  reverse = false 
}: ContentBlockProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className={`flex flex-col gap-8 ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
      <div className="w-full md:w-1/2">
        <div className="relative aspect-[4/3] w-full">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <h2 className="text-3xl font-light text-white mb-4">{title}</h2>
        <p className="text-gray-300 mb-6">{description}</p>
        <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-[1000px]' : 'max-h-0'}`}>
          <p className="text-gray-300 mb-6">{fullContent}</p>
        </div>
        <Button 
          variant="secondary" 
          className="w-fit flex items-center gap-2"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? 'Read less' : 'Read more'}
          {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </Button>
      </div>
    </div>
  )
}

