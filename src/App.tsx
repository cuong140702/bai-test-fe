import { useState } from 'react'
import { Header } from '~/components/common'
import {
  AnimatedFooter,
  ArtistPages,
  DemoPages,
  Discography,
  EasyPage,
  FeaturesSection,
  Hero,
  HomePages,
  InnerPages,
  MusicThemeHero,
  PremiumPluginsSection,
  Social,
  WooCommerce
} from '~/components/module'

function App() {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
      <Header />
      <Hero />
      <HomePages />
      <Social />
      <Discography />
      <DemoPages />
      <ArtistPages />
      <EasyPage />
      <WooCommerce />
      <InnerPages />
      <FeaturesSection />
      <MusicThemeHero />
      <PremiumPluginsSection />
      <AnimatedFooter />
    </main>
  )
}

export default App
