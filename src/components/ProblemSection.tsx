import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { AlertTriangle, DollarSign, TrendingDown, Target } from 'lucide-react';

const problems = [
  {
    icon: DollarSign,
    title: 'Burning Your Facebook Ad Budget',
    description: 'Spending thousands on Meta Ads with no clear ROI? Most businesses waste 40-60% of their Facebook advertising budget on poorly targeted campaigns that never convert.',
    color: 'text-red',
  },
  {
    icon: TrendingDown,
    title: 'Declining Ad Performance & Rising CPL',
    description: 'Your Facebook campaigns used to work but now cost per lead keeps rising? Meta\'s algorithm changes require constant strategy adaptation and expert optimization.',
    color: 'text-orange',
  },
  {
    icon: Target,
    title: 'Wrong Audience, Zero Conversions',
    description: 'Getting clicks but no conversions from your Instagram ads? Vanity metrics mean nothing if your Meta Ads reach people who will never become paying customers.',
    color: 'text-purple',
  },
];

export default function ProblemSection() {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} className="py-24 relative" aria-labelledby="problem-heading">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red/[0.02] to-transparent" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red/10 border border-red/20 text-red text-sm font-semibold mb-6">
            <AlertTriangle className="w-4 h-4" aria-hidden="true" />
            Sound Familiar?
          </div>
          <h2 id="problem-heading" className="text-4xl md:text-5xl font-black mb-4">
            Tired of <span className="text-red">Wasting Money</span> on Facebook Ads
            <br />That Don't Convert?
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            You're not alone. <strong>76% of businesses fail to profit from Meta Ads</strong> because they lack
            the right Facebook advertising strategy and expert campaign management.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6" role="list">
          {problems.map((problem, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group p-8 rounded-2xl border border-border bg-bg-card hover:bg-bg-card-hover transition-all duration-500 hover:border-border-bright relative overflow-hidden"
              role="listitem"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
              <div className={`w-12 h-12 rounded-xl bg-surface flex items-center justify-center mb-5 ${problem.color}`}>
                <problem.icon className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold mb-3">{problem.title}</h3>
              <p className="text-text-secondary leading-relaxed">{problem.description}</p>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="#services"
            className="inline-flex items-center gap-2 text-accent hover:text-accent-hover font-semibold transition-colors text-lg"
          >
            See how our Meta Ads management solves these problems ↓
          </a>
        </motion.div>
      </div>
    </section>
  );
}
