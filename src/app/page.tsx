
import Navbar from '@/components/Navbar'

import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import AboutUs from '@/components/AboutUs'
import FeaturedProperty from '@/components/FeaturedProperty'
import Services from '@/components/Services'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <FeaturedProperty/>
    <Services/>
    <AboutUs/>
    
    <Footer/>

    </>
  )
}

export default Home