import Image from 'next/image'
import Link from 'next/link'
import { NewsItem } from '@/types/news'

interface NewsItemProps {
  item: NewsItem
}

export function NewsItemCard({ item }: NewsItemProps) {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-12">
      <div className="relative w-full md:w-2/5">
        {/* Date overlay */}
        <div className="absolute top-4 left-4 z-10 text-white text-xl font-light">
          {item.date}
        </div>
        
        {/* Image */}
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover"
          />
        </div>
      </div>
      
      <div className="flex flex-col justify-center w-full md:w-3/5 space-y-4">
        <h2 className="text-2xl font-light text-white">
          {item.title}
        </h2>
        <p className="text-gray-300 text-sm leading-relaxed">
          {item.description}
        </p>
        <Link 
          href={item.link}
          className="inline-flex items-center text-white hover:text-gray-300 transition-colors group w-fit"
        >
          <span className="border-b border-current">CONTINUE READING</span>
        </Link>
      </div>
    </div>
  )
}

