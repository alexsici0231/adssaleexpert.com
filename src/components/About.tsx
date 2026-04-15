import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Award, Clock, Target, Zap } from 'lucide-react';

const stats = [
  { icon: Clock, value: '5+', label: 'Years Meta Ads Experience' },
  { icon: Target, value: '20+', label: 'Campaigns Managed' },
  { icon: Award, value: '$2M+', label: 'Revenue Generated' },
  { icon: Zap, value: '20x', label: 'Average ROAS' },
];

export default function About() {
  const { ref, isInView } = useInView();

  return (
    <section id="about" ref={ref} className="py-24 relative" aria-labelledby="about-heading">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border-bright to-transparent" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <figure className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-border">
                <img
                  src="/images/alex-portrait.jpg"
                  alt="Alex — Meta Ads Strategist and Facebook Advertising Expert with 5+ years of experience managing over $150K in ad spend"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width="600"
                  height="750"
                />
              </div>
              {/* Floating card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4 }}
                className="absolute -bottom-6 -right-6 glass rounded-xl p-4 shadow-2xl shadow-black/30"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald/20 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-emerald" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="text-sm font-bold">$150K+</div>
                    <div className="text-xs text-text-muted">Ad Spend Managed</div>
                  </div>
                </div>
              </motion.div>
            </figure>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-semibold mb-6">
              Meet Your Meta Ads Strategist
            </div>
            <h2 id="about-heading" className="text-4xl md:text-5xl font-black mb-6">
              Hi, I'm <span className="gradient-text">Alex</span> — Your Facebook Ads Expert
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-6">
              For the past <strong>5+ years</strong>, I've been obsessed with one thing: turning <strong>Meta Ads
              into predictable revenue machines</strong> for businesses like yours. I specialize in
              Facebook and Instagram advertising that generates qualified leads, not vanity metrics.
            </p>
            <p className="text-text-secondary leading-relaxed mb-8">
              I've managed over <strong>$150K in ad spend</strong> and generated <strong>$2M+ in revenue</strong> for my clients
              across e-commerce, SaaS, and local service industries.
              My approach is simple — data-driven Meta Ads strategy, relentless creative testing, and a focus on
              the metrics that actually matter: <em>revenue and profit</em>.
            </p>
            <p className="text-text-secondary leading-relaxed mb-8">
              I don't do vanity metrics. I don't do "brand awareness" campaigns that burn your Facebook advertising budget.
              Every dollar you spend with me is tracked, optimized, and accountable to real business results.
            </p>

            <div className="grid grid-cols-2 gap-4" role="list" aria-label="Alex's key achievements">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="p-4 rounded-xl border border-border bg-bg-card flex items-center gap-3"
                  role="listitem"
                >
                  <stat.icon className="w-5 h-5 text-accent" aria-hidden="true" />
                  <div>
                    <div className="font-bold text-lg">{stat.value}</div>
                    <div className="text-xs text-text-muted">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
