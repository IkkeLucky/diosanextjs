import { Nav } from '@/components/nav'
import { PageBanner } from '@/components/page-banner'
import { ProductCard } from '@/components/product-card'
import { ProductCardWithCarousel } from '@/components/product-card-with-carousel'
import { Footer } from '@/components/footer'
import { featuredProducts, outletProducts } from '@/data/products'

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-[#382a41]">
      <Nav />
      
      <PageBanner 
        title="PassarellaDiosa" 
        subtitle="Winter Sales: Up to 60% off"
        backgroundImage="/images/diosa4.jpg"
      />
      
      {/* Featured Products Grid */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Outlet Banner */}
      <div className="bg-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-light mb-4">OUTLET DIOSA</h2>
          <p className="text-lg">Products ready to go! Special offers</p>
        </div>
      </div>

      {/* Outlet Products Grid with Image Carousels */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {outletProducts.map((product) => (
            <ProductCardWithCarousel key={product.id} product={product} />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}

