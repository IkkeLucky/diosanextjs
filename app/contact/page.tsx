import { PageBanner } from '@/components/page-banner'
import { LocationMap } from '@/components/location-map'
import { ContactForm } from '@/components/contact-form'
import { Footer } from '@/components/footer'
import { Nav } from '@/components/nav'

export default function ContactPage() {
  return (
    <main>
      <Nav />
      <PageBanner 
        title="PassarellaDiosa" 
        subtitle="Let's talk! Leave us a message"
        backgroundImage="/images/diosa5.jpg"
      />
      
      <div className="bg-[#382a41]">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Location Information */}
            <div className="space-y-6">
              <h2 className="text-2xl font-light text-white">GET IN TOUCH</h2>
              <p className="text-gray-300">Visit one of our locations or contact us today</p>
              
              <div className="space-y-4">
                <h3 className="text-xl text-white">Head Office</h3>
                <p className="text-gray-300">Hohe Bleichen 8, 20354 Hamburg</p>
                <p className="text-[#c17f82]">Follow us on Instagram</p>
                <p className="text-gray-300">Only Whatsapp Messages</p>
                <p className="text-gray-300">Monday to Saturday: 9:00am to 16:00pm</p>
                <p className="text-[#c17f82]">Our Cowork</p>
              </div>
            </div>

            {/* Map */}
            <LocationMap 
              address="Hohe Bleichen 8, 20354 Hamburg"
              mapUrl="/images/diosalocation.png"
            />
          </div>
        </div>

        {/* Contact Form */}
        <ContactForm />

        {/* Footer */}
        <Footer />
      </div>
    </main>
  )
}

