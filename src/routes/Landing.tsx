import AppFooter from '@/components/AppFooter'
import Header from '@/components/landing/Header'
import Hero from '@/components/landing/Hero'

export default function Landing() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
      </main>
      <footer>
        <AppFooter />
      </footer>
    </div>
  )
}
