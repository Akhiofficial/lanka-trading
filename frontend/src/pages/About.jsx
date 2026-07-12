import { motion } from 'framer-motion';
import About from '../components/About/About';
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs';
import Stats from '../components/Stats/Stats';

const AboutPage = () => {
  return (
    <>
      <section className="pt-36 pb-16 relative overflow-hidden bg-[#020617]">
        <div className="absolute inset-0 bg-gradient-to-b from-green-950/20 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-semibold px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              About Us
            </span>
            <h1
              className="text-5xl md:text-6xl font-black text-white mb-4"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Our <span className="gradient-text">Story</span>
            </h1>
            <p className="text-slate-400 text-xl max-w-xl mx-auto">
              From passionate traders to India's most trusted trading academy.
            </p>
          </motion.div>
        </div>
      </section>
      <About />
      <Stats />
      <WhyChooseUs />
    </>
  );
};

export default AboutPage;
