import { Nav } from '@/components/nav'
import { PageBanner } from '@/components/page-banner'
import { VideoPlayer } from '@/components/video-player'
import { ContentBlock } from '@/components/content-block'
import { ProductCard } from '@/components/product-card'
import { Collaborators } from '@/components/collaborators'
import { Footer } from '@/components/footer'
import { featuredProducts } from '@/data/products'

const contentBlocks = [
  {
    title: "¿Who is La Diosa?",
    description: "THE GODDESS IS THE PERSONAL BRAND OF THE DESIGNER / IMAGE CONSULTANT SARAH NATHALIE FELICIANI.",
    fullContent: "Sarah Nathalie FELICIANI Professional Review: Graduated in Business Sciences with a Specialty in Advertising, Marketing, and Fashion Business Management! She has been the manager of several brands such as AVON, GATO PRETO, Amanda Secret, and creator of the visual image of others such as Arabik and Holotronic Miami. With over 15 years of experience in the fashion industry, Sarah brings a unique blend of creativity and business acumen to every project she undertakes.",
    image: "/images/sarah.jpg",
    imageAlt: "La Diosa portrait"
  },
  {
    title: "Who are we?",
    description: "WE ARE A CREATIVE AND DESIGNER BUSINESS PLATFORM, taking into account fashion and its tendencies as a base.",
    fullContent: "We want to continually rise the buying experience of our guests throughout interactivity and personalization as a service. Our team of expert designers and consultants work tirelessly to bring the latest fashion trends to life, while also providing personalized styling advice to each of our clients. We believe that fashion is not just about clothing, but about expressing one's unique personality and style.",
    image: "/images/sarah2.jpg",
    imageAlt: "Creative business platform"
  },
  {
    title: "Essence of the brand",
    description: "The SOUL of PASSARELLADIOSA. We are a brand that gives to the people that uses it, through personal designs, customizations and personal articles.",
    fullContent: "We provide support and ITEMS OF VALUE; objects and tools that give value to their lives. Our brand essence is rooted in empowering individuals to express their true selves through fashion. We believe that every person has a unique story to tell, and our designs are created to help them tell that story in the most stylish and confident way possible.",
    image: "/images/sarah3.jpg",
    imageAlt: "Brand essence"
  }
]

const collaborators = [
  {
    name: "Mabel Arqueros",
    logo: "/images/arqueros.jpeg",
    link: "#"
  },
  {
    name: "Lookea foto y video",
    logo: "/images/lookea.jpeg",
    link: "#"
  },
  {
    name: "SwiftTech Programming",
    logo: "/images/swifttech.jpg",
    link: "#"
  },
  {
    name: "Cli Bienestar y liderazgo",
    logo: "/images/cli.jpeg",
    link: "#"
  },
  {
    name: "Jose Luis Gomez boutique",
    logo: "/images/gomezboutique.jpeg",
    link: "#"
  }
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#382a41]">
      <Nav />
      
      <PageBanner 
        title="PassarellaDiosa" 
        subtitle="FASHION, CREATIVE DESIGN, VISUAL MERCHANDISING, IMAGE CONSULTANCY/ADVISING, CUSTOM FASHION"
        backgroundImage="/images/indexbanner.png"
      />
      
      {/* Video Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <VideoPlayer src="/video-placeholder.mp4" />
      </section>
      
      {/* Content Blocks */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="space-y-24">
          {contentBlocks.map((block, index) => (
            <ContentBlock
              key={block.title}
              {...block}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>
      </section>
      
      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {featuredProducts.slice(0, 5).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
      
      {/* Collaborators */}
      <section className="max-w-7xl mx-auto px-4">
        <Collaborators collaborators={collaborators} />
      </section>

      <Footer />
    </main>
  )
}

