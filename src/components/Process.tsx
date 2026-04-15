import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Phone, Search, Rocket, BarChart3, ArrowRight } from 'lucide-react';

const steps = [
  {
    num: '01',
    icon: Phone,
    title: 'Free Strategy Call',
    description: 'We analyze your current Facebook advertising situation, business goals, and identify the biggest growth opportunities for your Meta Ads campaigns.',
    duration: '15 min',
  },
  {
    num: '02',
    icon: Search,
    title: 'Meta Ads Audit & Strategy',
    description: 'Deep dive into your existing Facebook campaigns (or market research for new ones) to build a custom growth roadmap with clear KPIs.',
    duration: '2-3 days',
  },
  {
    num: '03',
    icon: Rocket,
    title: 'Campaign Setup & Launch',
    description: 'We build, launch, and manage your Facebook and Instagram ad campaigns with proven frameworks that deliver leads from day one.',
    duration: 'Week 1',
  },
  {
    num: '04',
    icon: BarChart3,
    title: 'Optimize, Report & Scale',
    description: 'Continuous Meta Ads optimization, weekly reporting, A/B testing, and scaling to maximize your ROAS and grow revenue month over month.',
    duration: 'Ongoing',
  },
];

export default function Process() {
  const { ref, isInView } = useInView();

  return (
    <section id="process" ref={ref} className="py-24 relative" aria-labelledby="process-heading">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border-bright to-transparent" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple/10 border border-purple/20 text-purple text-sm font-semibold mb-6">
            Our Meta Ads Process
          </div>
          <h2 id="process-heading" className="text-4xl md:text-5xl font-black mb-4">
            How Our <span className="gradient-text">Facebook Ads Management</span> Works
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            A proven, repeatable 4-step process that's generated over <strong>$2M in revenue</strong> for our Meta Ads clients.
            From strategy call to scaling — we handle everything.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-accent via-purple to-emerald opacity-20" aria-hidden="true" />

          <ol className="grid md:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative group"
              >
                <div className="p-6 rounded-2xl border border-border bg-bg-card hover:bg-bg-card-hover transition-all duration-500 hover:border-border-bright h-full">
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-5xl font-black text-surface group-hover:text-border-bright transition-colors" aria-hidden="true">{step.num}</span>
                    <span className="text-xs font-mono text-text-muted bg-surface px-2 py-1 rounded">{step.duration}</span>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-purple/20 flex items-center justify-center mb-4">
                    <step.icon className="w-6 h-6 text-accent" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Step {step.num}: {step.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{step.description}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10" aria-hidden="true">
                    <ArrowRight className="w-6 h-6 text-border-bright" />
                  </div>
                )}
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
