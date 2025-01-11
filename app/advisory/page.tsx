import { Nav } from '@/components/nav'
import { PageBanner } from '@/components/page-banner'
import { AdvisoryCard } from '@/components/advisory-card'
import { Footer } from '@/components/footer'
import { advisoryServices } from '@/data/advisory-services'

export default function AdvisoryPage() {
  return (
    <main className="min-h-screen bg-[#382a41]">
      <Nav />
      
      <PageBanner 
        title="Advisory by Diosa" 
        subtitle="Optimize your purchases"
        backgroundImage="/images/shopping.jpg"
      />
      
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="space-y-8">
          {advisoryServices.map((service) => (
            <AdvisoryCard key={service.id} service={service} />
          ))}
        </div>
      </div>

      <Footer />
    </main>
  )
}

