import { Header } from './components/landing-page/header'
import Hero from './components/landing-page/hero'
import { Pricing } from './components/landing-page/pricing'
import { VideoExplanation } from './components/landing-page/video-explanation'

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-8">
      <Header />
      <Hero />
      <VideoExplanation />
      <Pricing />
      {/* <Hero/>
      <VideoExplanation/>
      <Pricing/>
      <Faq/> */}
    </div>
  )
}
