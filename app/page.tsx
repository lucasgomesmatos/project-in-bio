import { Header } from './components/landing-page/header'
import Hero from './components/landing-page/hero'

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-8">
      <Header />
      <Hero />
      {/* <Hero/>
      <VideoExplanation/>
      <Pricing/>
      <Faq/> */}
    </div>
  )
}
