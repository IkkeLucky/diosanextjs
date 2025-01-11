interface PageBannerProps {
  title: string
  subtitle?: string
  backgroundImage?: string
}

export function PageBanner({ 
  title, 
  subtitle,
  backgroundImage = "/images/diosa1.webp"
}: PageBannerProps) {
  return (
    <div className="relative h-[400px] w-full">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          filter: "brightness(0.7)"
        }}
      />
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl sm:text-5xl font-light text-white mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-gray-200 text-sm sm:text-base">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  )
}

