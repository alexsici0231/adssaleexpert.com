import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'E-Commerce Owner',
    text: 'Alex completely transformed our Meta Ads strategy. We went from losing money on Facebook advertising to a 2,080% ROAS in just 6 months. The ROI from our Instagram and Facebook ads has been absolutely incredible.',
    rating: 5,
    result: '2,080% ROAS',
  },
  {
    name: 'Daniel Roberts',
    role: 'SaaS Founder',
    text: 'Before working with Alex, our cost per lead from Meta Ads was unsustainable. Now we\'re generating qualified leads at 60% lower cost with Facebook ad campaigns that actually scale profitably.',
    rating: 5,
    result: '-60% CPL',
  },
  {
    name: 'Michael Turner',
    role: 'Agency Director',
    text: 'The clarity and structure Alex brought to our Facebook advertising campaigns was a game-changer. Weekly reports, clear Meta Ads strategy, and most importantly — real results that impact our bottom line.',
    rating: 5,
    result: '26x ROAS',
  },
];

export default function Testimonials() {
  const { ref, isInView } = useInView();

  return (
    <section id="testimonials" ref={ref} className="py-24 relative" aria-labelledby="testimonials-heading">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border-bright to-transparent" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple/[0.02] to-transparent" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange/10 border border-orange/20 text-orange text-sm font-semibold mb-6">
            <Star className="w-4 h-4 fill-current" aria-hidden="true" />
            Client Testimonials
          </div>
          <h2 id="testimonials-heading" className="text-4xl md:text-5xl font-black mb-4">
            What Our <span className="gradient-text">Meta Ads Clients</span> Say
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Real feedback from real clients who've seen <strong>real results from our Facebook advertising management</strong>.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group p-8 rounded-2xl border border-border bg-bg-card hover:bg-bg-card-hover transition-all duration-500 hover:border-border-bright relative"
            >
              <Quote className="w-8 h-8 text-border-bright mb-4" aria-hidden="true" />
              <div className="flex items-center gap-1 mb-4" role="img" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-orange fill-orange" aria-hidden="true" />
                ))}
              </div>
              <p className="text-text-secondary leading-relaxed mb-6">"{t.text}"</p>
              <footer className="flex items-center justify-between pt-6 border-t border-border">
                <cite className="not-italic">
                  <div className="font-bold text-sm">{t.name}</div>
                  <div className="text-xs text-text-muted">{t.role}</div>
                </cite>
                <div className="text-xs font-mono font-bold text-emerald bg-emerald/10 px-3 py-1 rounded-full">
                  {t.result}
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
