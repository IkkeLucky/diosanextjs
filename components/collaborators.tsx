'use client'

import { useRef, useEffect } from 'react'
import Image from 'next/image'

interface Collaborator {
  name: string
  logo: string
  link: string
}

interface CollaboratorsProps {
  collaborators: Collaborator[]
}

export function Collaborators({ collaborators }: CollaboratorsProps) {
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const carousel = carouselRef.current
    if (carousel) {
      const clone = carousel.innerHTML
      carousel.innerHTML += clone
    }
  }, [])

  return (
    <section className="py-16 relative overflow-hidden">
      <h2 className="text-3xl font-light text-center text-white mb-12">
        Nuestros colaboradores:
      </h2>
      <div className="carousel-container w-full">
        <div 
          ref={carouselRef}
          className="carousel flex animate-carousel"
        >
          {collaborators.map((collaborator) => (
            <div
              key={collaborator.name}
              className="carousel-item flex-none w-[200px] mx-4"
            >
              <a
                href={collaborator.link}
                className="flex flex-col items-center group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4 transition-transform group-hover:scale-105">
                  <Image
                    src={collaborator.logo}
                    alt={collaborator.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="text-gray-300 text-center group-hover:text-white transition-colors">
                  {collaborator.name}
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

