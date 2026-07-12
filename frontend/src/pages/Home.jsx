import { Suspense, lazy } from 'react';
import Hero from '../components/Hero/Hero';
import Features from '../components/Features/Features';
import Stats from '../components/Stats/Stats';
import Courses from '../components/Courses/Courses';
import Mentorship from '../components/Mentorship/Mentorship';
import About from '../components/About/About';
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs';
import Testimonials from '../components/Testimonials/Testimonials';
import FAQ from '../components/FAQ/FAQ';
import CTA from '../components/CTA/CTA';
import Contact from '../components/Contact/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <Stats />
      <Courses />
      <Mentorship />
      <About />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <CTA />
      <Contact />
    </>
  );
};

export default Home;
