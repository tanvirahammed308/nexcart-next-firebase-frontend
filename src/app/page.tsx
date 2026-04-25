import React from 'react'
import Hero from '../components/home/Hero'
import Testimonials from '@/components/home/Testimonials'
import Features from '@/components/home/Features'
import Products from '@/components/home/Products'

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Products/>
      <Testimonials/>
    </div>
  )
}

export default HomePage