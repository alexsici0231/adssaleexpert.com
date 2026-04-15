import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Shield, Lock, Award, Clock } from 'lucide-react';

const badges = [
  { icon: Shield, text: 'Meta Business Partner', sub: 'Certified Expert' },
  { icon: Lock, text: '100% Confidential', sub: 'NDA Available' },
  { icon: Award, text: '$2M+ Generated', sub: 'Proven Track Record' },
  { icon: Clock, text: '24h Response', sub: 'Always Available' },
];

export default function TrustBadges() {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {badges.map((badge, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3 p-4 rounded-xl border border-border bg-bg-card/50"
            >
              <badge.icon className="w-8 h-8 text-accent shrink-0" />
              <div>
                <div className="text-sm font-bold">{badge.text}</div>
                <div className="text-xs text-text-muted">{badge.sub}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
