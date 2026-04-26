import React from 'react'
import Hero from '../components/home/Hero'
import Testimonials from '@/components/home/Testimonials'
import Features from '@/components/home/Features'
import Products from '@/components/home/Products'
import Banner from '@/components/home/Banner'

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Products/>
      <Testimonials />
      <Banner/>
    </div>
  )
}

export default HomePage