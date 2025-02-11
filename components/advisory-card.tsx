import Image from 'next/image'
import { AdvisoryService } from '@/types/advisory'

interface AdvisoryCardProps {
  service: AdvisoryService
}

export function AdvisoryCard({ service }: AdvisoryCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/3">
          <div className="relative aspect-[4/3] md:aspect-auto md:h-full">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="w-full md:w-2/3 p-6 md:p-8 flex flex-col justify-between">
          <div className="space-y-4">
            <h3 className="text-xl text-gray-900">{service.title}</h3>
            <p className="text-gray-600 text-sm">{service.description}</p>
          </div>
          <div className="flex items-center justify-between mt-6">
            <span className="text-gray-900">{service.price.toFixed(2)}EUR</span>
            <a
              href={service.buyLink}
              target="_blank"
              className="px-6 py-2 bg-[#c17f82] text-white rounded hover:bg-[#a66d70] transition-colors"
            >
              Buy now!
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

