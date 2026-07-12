import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { faqData } from '../../data/faq';

const FAQ = () => {
  const [openId, setOpenId] = useState(1);

  return (
    <section id="faq" className="section-pad" style={{ background: '#0a1628' }}>
      <div className="container" style={{ maxWidth: 840 }}>
        <div className="text-center mb-48">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-badge"><span className="dot" /> FAQ</span>
            <h2 className="section-title">Common <span className="gradient-text">Questions</span></h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Everything you need to know before joining Lanka Enterprises.
            </p>
          </motion.div>
        </div>

        <div>
          {faqData.map((item) => (
            <motion.div
              key={item.id}
              className={`faq-item ${openId === item.id ? 'open' : ''}`}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <button
                className="faq-trigger"
                onClick={() => setOpenId(openId === item.id ? null : item.id)}
                aria-expanded={openId === item.id}
              >
                <span className="faq-question">{item.question}</span>
                <span className="faq-chevron">
                  <ChevronDown size={16} />
                </span>
              </button>

              <AnimatePresence>
                {openId === item.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    style={{ overflow: 'hidden' }}
                  >
                    <p className="faq-answer">{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
