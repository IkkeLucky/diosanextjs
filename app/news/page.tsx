import { PageBanner } from '@/components/page-banner'
import { NewsItemCard } from '@/components/news-item'
import { Footer } from '@/components/footer'
import { newsItems } from '@/data/news'
import { Nav } from '@/components/nav'

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-[#382a41]">
      <Nav />
      <PageBanner 
        title="PassarellaDiosa" 
        subtitle="Latest News and Updates"
        backgroundImage="/images/diosa3.jpg"
      />
      
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="space-y-16">
          {newsItems.map((item) => (
            <NewsItemCard key={item.id} item={item} />
          ))}
        </div>
      </div>

      <Footer />
    </main>
  )
}

