import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { HelpCircle, ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'How much does Meta Ads management cost?',
    answer: 'Our Meta Ads management pricing depends on your ad spend and campaign complexity. We offer a free 15-minute audit to assess your needs and provide a custom quote. Most clients invest between $2,000-$10,000/month in ad spend with management fees on top. Every campaign is custom-built to maximize your ROI.',
  },
  {
    question: 'What ROAS can I expect from Facebook Ads?',
    answer: 'Our average client achieves a 20x ROAS (Return on Ad Spend). Results vary by industry and offer, but our case studies show returns ranging from 2,080% to 2,617% ROAS. We\'ve generated over $2M in revenue from $150K+ in managed Meta ad spend across e-commerce, SaaS, and local service businesses.',
  },
  {
    question: 'How long does it take to see results from Meta Ads?',
    answer: 'Most clients start seeing measurable results within the first 2-4 weeks. Our process includes a strategy phase (2-3 days), campaign launch (week 1), and ongoing optimization. Significant scaling typically begins within 60-90 days as we identify and double down on winning audiences, creatives, and offers.',
  },
  {
    question: 'Do you offer a free Facebook Ads audit?',
    answer: 'Yes! We offer a completely free 15-minute Meta Ads audit where we analyze your current campaigns (or market opportunity if you\'re starting fresh), identify growth opportunities, and provide an actionable roadmap. There\'s no commitment required — just valuable insights you can use immediately to improve your Facebook advertising.',
  },
  {
    question: 'What industries do you work with for Meta Ads?',
    answer: 'We work with e-commerce brands, SaaS companies, local service businesses, coaches, consultants, and agencies. Our data-driven approach to Facebook and Instagram advertising adapts to any industry. Our case studies include e-commerce ($35K spend → $785K revenue), SaaS ($43K → $985K), and local services ($10.9K → $285K).',
  },
  {
    question: 'What\'s included in your Meta Ads management service?',
    answer: 'Our full-stack Facebook & Instagram Ads management includes: audience research & segmentation, competitor ad analysis, funnel design, ad creative development, A/B copy testing, campaign setup & launch, daily monitoring, weekly optimization, bid strategy management, budget reallocation, scaling strategies, and detailed performance reporting with clear ROI metrics.',
  },
  {
    question: 'How is your Meta Ads agency different from others?',
    answer: 'Three things set us apart: First, we focus exclusively on Meta Ads (Facebook & Instagram), so we\'re specialists — not generalists. Second, we\'re obsessed with revenue metrics, not vanity metrics like impressions and clicks. Third, every campaign gets a custom strategy — no cookie-cutter templates. Our 20x average ROAS speaks for itself.',
  },
  {
    question: 'Do you manage both Facebook and Instagram Ads?',
    answer: 'Yes! We manage campaigns across the entire Meta ecosystem including Facebook News Feed, Instagram Feed, Instagram Stories, Instagram Reels, Facebook Marketplace, Audience Network, and Messenger. We optimize placements based on where your target audience converts best to maximize your return on ad spend.',
  },
];

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-border rounded-xl overflow-hidden bg-bg-card hover:border-border-bright transition-colors">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left gap-4"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
      >
        <h3 className="text-lg font-semibold text-text-primary pr-4">{faq.question}</h3>
        <ChevronDown
          className={`w-5 h-5 text-text-muted shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>
      <div
        id={`faq-answer-${index}`}
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
        role="region"
        aria-labelledby={`faq-question-${index}`}
      >
        <p className="px-6 pb-6 text-text-secondary leading-relaxed">
          {faq.answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const { ref, isInView } = useInView();

  return (
    <section id="faq" ref={ref} className="py-24 relative" aria-labelledby="faq-heading">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border-bright to-transparent" aria-hidden="true" />
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-semibold mb-6">
            <HelpCircle className="w-4 h-4" aria-hidden="true" />
            Frequently Asked Questions
          </div>
          <h2 id="faq-heading" className="text-4xl md:text-5xl font-black mb-4">
            Common Questions About <span className="gradient-text">Meta Ads Management</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Everything you need to know about our <strong>Facebook and Instagram advertising services</strong>.
            Can't find your answer? <a href="#book" className="text-accent hover:text-accent-hover underline">Book a free call</a> and ask us directly.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08 }}
            >
              <FAQItem faq={faq} index={i} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
