import Image from 'next/image'

interface LocationMapProps {
  address: string
  mapUrl: string
}

export function LocationMap({ address, mapUrl }: LocationMapProps) {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`
  
  return (
    <a 
      href={googleMapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block relative h-[400px] w-full overflow-hidden rounded-lg transition-opacity hover:opacity-90"
    >
      <Image
        src={mapUrl}
        alt={`Map location for ${address}`}
        fill
        className="object-cover"
      />
    </a>
  )
}

