import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { useCountUp } from '../hooks/useCountUp';
import { TrendingUp, ArrowUpRight, DollarSign } from 'lucide-react';

const caseStudies = [
  {
    adSpend: '$35K',
    revenue: '$785K',
    roas: '2,080%',
    roasNum: 2080,
    industry: 'E-Commerce',
    period: '6 months',
    highlight: 'Revenue',
    color: 'from-emerald to-teal-400',
    description: 'E-commerce brand scaled from $35K Facebook ad spend to $785K in revenue using targeted audience segmentation and creative testing.',
  },
  {
    adSpend: '$43K',
    revenue: '$985,950',
    roas: '2,250%',
    roasNum: 2250,
    industry: 'SaaS',
    period: '8 months',
    highlight: 'Highest Revenue',
    color: 'from-accent to-blue-400',
    description: 'SaaS company generated nearly $1M in revenue from $43K Meta Ads investment through funnel optimization and lookalike audiences.',
  },
  {
    adSpend: '$10,929',
    revenue: '$285,912',
    roas: '2,617%',
    roasNum: 2617,
    industry: 'Local Service',
    period: '4 months',
    highlight: 'Best ROAS',
    color: 'from-purple to-pink-400',
    description: 'Local service business achieved 26.2x return on ad spend with hyper-targeted Instagram and Facebook lead generation campaigns.',
  },
];

export default function Results() {
  const { ref, isInView } = useInView();
  const totalRev = useCountUp(2000000, 2000);

  return (
    <section id="results" ref={ref} className="py-24 relative" aria-labelledby="results-heading">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald/[0.02] to-transparent" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald/10 border border-emerald/20 text-emerald text-sm font-semibold mb-6">
            <TrendingUp className="w-4 h-4" aria-hidden="true" />
            Proven Meta Ads Results
          </div>
          <h2 id="results-heading" className="text-4xl md:text-5xl font-black mb-4">
            Facebook Ads Case Studies: <span className="gradient-text-emerald">Real Revenue Generated</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Don't take our word for it — these are <strong>actual results from real Meta Ads campaigns</strong> we've managed.
            Over $2M in total revenue generated for our clients.
          </p>
        </motion.div>

        <div ref={totalRev.ref} className="grid md:grid-cols-3 gap-6">
          {caseStudies.map((cs, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 50, rotateX: 10 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative rounded-2xl border border-border bg-bg-card overflow-hidden hover:border-border-bright transition-all duration-500"
              aria-label={`${cs.industry} case study: ${cs.revenue} revenue from ${cs.adSpend} ad spend`}
            >
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cs.color}`} aria-hidden="true" />
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-surface text-text-secondary">
                    {cs.industry}
                  </span>
                  <time className="text-xs text-text-muted">{cs.period}</time>
                </div>

                <div className="mb-6">
                  <div className="text-text-muted text-xs font-medium mb-1 uppercase tracking-wider">Revenue Generated</div>
                  <div className="text-4xl font-black text-emerald flex items-center gap-2">
                    {cs.revenue}
                    <ArrowUpRight className="w-6 h-6" aria-hidden="true" />
                  </div>
                </div>

                <p className="text-text-muted text-xs leading-relaxed mb-6">{cs.description}</p>

                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-border">
                  <div>
                    <div className="text-text-muted text-xs font-medium mb-1">Ad Spend</div>
                    <div className="text-lg font-bold text-text-primary flex items-center gap-1">
                      <DollarSign className="w-4 h-4 text-text-muted" aria-hidden="true" />
                      {cs.adSpend.replace('$', '')}
                    </div>
                  </div>
                  <div>
                    <div className="text-text-muted text-xs font-medium mb-1">ROAS</div>
                    <div className="text-lg font-bold text-accent">{cs.roas}+</div>
                  </div>
                </div>
              </div>

              <div className={`h-1 bg-gradient-to-r ${cs.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} aria-hidden="true" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
