'use client'

import Image from 'next/image'
import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Product } from '@/types/product'

interface ProductCardWithCarouselProps {
  product: Product & {
    images: string[] // Additional images for the carousel
  }
}

export function ProductCardWithCarousel({ product }: ProductCardWithCarouselProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === product.images.length - 1 ? 0 : prev + 1
    )
  }

  const previousImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? product.images.length - 1 : prev - 1
    )
  }

  return (
    <div className="bg-white rounded-lg overflow-hidden">
      <div className="relative aspect-square">
        <Image
          src={product.images[currentImageIndex]}
          alt={`${product.title} - Image ${currentImageIndex + 1}`}
          fill
          className="object-cover transition-opacity duration-300"
        />
        
        {/* Navigation Buttons */}
        {product.images.length > 1 && (
          <>
            <button
              onClick={previousImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 flex items-center justify-center shadow-md hover:bg-white transition-colors z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 flex items-center justify-center shadow-md hover:bg-white transition-colors z-10"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}

        {/* Image Indicators */}
        {product.images.length > 1 && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10">
            {product.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
      <div className="p-4 space-y-2">
        <h3 className="text-gray-900 font-medium">{product.title}</h3>
        <p className="text-gray-500 text-sm">{product.description}</p>
        <div className="flex justify-between items-center pt-2">
          <span className="text-gray-900">{product.price.toFixed(2)}EUR</span>
          <a
            href={product.buyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-[#c17f82] text-white rounded hover:bg-[#a66d70] transition-colors"
          >
            Buy now!
          </a>
        </div>
      </div>
    </div>
  )
}

