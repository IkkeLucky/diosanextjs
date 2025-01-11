import Image from 'next/image'
import { Product } from '@/types/product'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden">
      <div className="relative aspect-square">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover"
        />
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

