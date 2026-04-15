import { motion } from 'framer-motion';
import { ArrowRight, Play, Shield, TrendingUp, Users } from 'lucide-react';
import { useCountUp } from '../hooks/useCountUp';

const badges = [
  { icon: Shield, text: 'Meta Business Partner' },
  { icon: TrendingUp, text: '2,000%+ Avg ROAS' },
  { icon: Users, text: '20+ Campaigns Managed' },
];

export default function Hero() {
  const revenue = useCountUp(2, 2500);

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background effects */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-purple/5 blur-[120px]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" aria-hidden="true" style={{
        backgroundImage: 'linear-gradient(var(--color-accent) 1px, transparent 1px), linear-gradient(90deg, var(--color-accent) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-8"
          role="list"
          aria-label="Trust indicators"
        >
          {badges.map((badge, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-bg-card/50 text-text-secondary text-xs font-medium"
              role="listitem"
            >
              <badge.icon className="w-3.5 h-3.5 text-accent" aria-hidden="true" />
              {badge.text}
            </motion.div>
          ))}
        </motion.div>

        {/* Main headline — H1 for SEO */}
        <motion.h1
          id="hero-heading"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight mb-6"
        >
          Meta Ads That
          <br />
          <span className="gradient-text">Generate Qualified Leads</span>
          <br />
          Not Just Clicks
        </motion.h1>

        {/* Subheadline with keyword-rich copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Data-driven <strong>Facebook &amp; Instagram ad management</strong> that cuts your cost per lead
          and scales your revenue. Our average client sees{' '}
          <span className="text-emerald font-semibold">20x ROAS</span> within 90 days with our
          proven <strong>Meta Ads strategies</strong>.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="#book"
            className="glow-button group bg-gradient-to-r from-accent to-purple text-white px-8 py-4 rounded-xl text-lg font-bold transition-all hover:scale-105 flex items-center gap-3"
            aria-label="Get your free Meta Ads audit — no commitment required"
          >
            Get Free Meta Ads Audit
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </a>
          <a
            href="#results"
            className="group flex items-center gap-3 px-6 py-4 rounded-xl border border-border hover:border-border-bright text-text-secondary hover:text-text-primary transition-all"
            aria-label="View our Meta Ads case studies and client results"
          >
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
              <Play className="w-4 h-4 text-accent ml-0.5" aria-hidden="true" />
            </div>
            See Our Results
          </a>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          ref={revenue.ref}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="glass rounded-2xl p-6 md:p-8 max-w-4xl mx-auto"
          role="region"
          aria-label="Key performance metrics"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { value: `$${revenue.count}M+`, label: 'Client Revenue Generated', color: 'text-emerald' },
              { value: '20x', label: 'Average ROAS', color: 'text-accent' },
              { value: '$150K+', label: 'Ad Spend Managed', color: 'text-purple' },
              { value: '5+', label: 'Years of Meta Ads Experience', color: 'text-orange' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className={`text-3xl md:text-4xl font-black ${stat.color} mb-1`} aria-label={`${stat.label}: ${stat.value}`}>{stat.value}</div>
                <div className="text-text-muted text-xs md:text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-border-bright flex items-start justify-center p-1.5"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
