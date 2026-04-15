import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { ArrowRight, CheckCircle2, Shield, Clock, Zap, Loader2, Send } from 'lucide-react';

const benefits = [
  'Free 15-minute Meta Ads strategy call',
  'Custom Facebook campaign audit report',
  'Actionable growth roadmap for your business',
  'No commitment required — 100% free',
];

export default function CTASection() {
  const { ref, isInView } = useInView();
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', business: '', spend: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');
    setTimeout(() => setFormState('success'), 1500);
  };

  return (
    <section id="book" ref={ref} className="py-24 relative" aria-labelledby="cta-heading">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border-bright to-transparent" aria-hidden="true" />
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-accent/5 blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald/10 border border-emerald/20 text-emerald text-sm font-semibold mb-6">
              <Zap className="w-4 h-4" aria-hidden="true" />
              Limited Availability
            </div>
            <h2 id="cta-heading" className="text-4xl md:text-5xl font-black mb-6">
              Get Your Free
              <br />
              <span className="gradient-text">Meta Ads Audit</span>
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-8">
              In just 15 minutes, I'll show you exactly where you're leaving money on the table
              with your <strong>Facebook and Instagram advertising</strong> and give you a custom roadmap to
              scale your revenue with <strong>data-driven Meta Ads strategies</strong>.
            </p>

            <ul className="space-y-4 mb-8">
              {benefits.map((b, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald shrink-0" aria-hidden="true" />
                  <span className="text-text-secondary">{b}</span>
                </motion.li>
              ))}
            </ul>

            <div className="flex items-center gap-6 text-sm text-text-muted">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" aria-hidden="true" />
                100% Free
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" aria-hidden="true" />
                15 min call
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {formState === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-10 rounded-2xl border border-emerald/30 bg-emerald/5 text-center"
                role="alert"
              >
                <div className="w-16 h-16 rounded-full bg-emerald/20 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8 text-emerald" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-bold mb-3">You're In! 🎉</h3>
                <p className="text-text-secondary">
                  Check your inbox — I'll send you a calendar link within 24 hours to book your free Meta Ads audit call.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-8 rounded-2xl border border-border bg-bg-card space-y-5"
                aria-label="Book your free Meta Ads audit"
              >
                <h3 className="text-xl font-bold mb-2">Book Your Free Facebook Ads Audit</h3>
                <p className="text-text-muted text-sm mb-6">Fill in your details and I'll reach out within 24 hours with your custom audit.</p>

                <div>
                  <label htmlFor="audit-name" className="block text-sm font-medium text-text-secondary mb-2">Your Name</label>
                  <input
                    id="audit-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-bg focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent text-text-primary placeholder:text-text-muted transition-colors"
                    placeholder="John Smith"
                    autoComplete="name"
                  />
                </div>

                <div>
                  <label htmlFor="audit-email" className="block text-sm font-medium text-text-secondary mb-2">Email Address</label>
                  <input
                    id="audit-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-bg focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent text-text-primary placeholder:text-text-muted transition-colors"
                    placeholder="john@company.com"
                    autoComplete="email"
                  />
                </div>

                <div>
                  <label htmlFor="audit-business" className="block text-sm font-medium text-text-secondary mb-2">Business Type</label>
                  <input
                    id="audit-business"
                    type="text"
                    required
                    value={formData.business}
                    onChange={e => setFormData({ ...formData, business: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-bg focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent text-text-primary placeholder:text-text-muted transition-colors"
                    placeholder="E-commerce, SaaS, Local Business..."
                    autoComplete="organization"
                  />
                </div>

                <div>
                  <label htmlFor="audit-budget" className="block text-sm font-medium text-text-secondary mb-2">Monthly Ad Budget</label>
                  <select
                    id="audit-budget"
                    required
                    value={formData.spend}
                    onChange={e => setFormData({ ...formData, spend: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-bg focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent text-text-primary transition-colors"
                  >
                    <option value="">Select your budget</option>
                    <option value="<2k">Less than $2,000/mo</option>
                    <option value="2k-5k">$2,000 - $5,000/mo</option>
                    <option value="5k-10k">$5,000 - $10,000/mo</option>
                    <option value="10k+">$10,000+/mo</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={formState === 'loading'}
                  className="w-full glow-button bg-gradient-to-r from-accent to-purple text-white py-4 rounded-xl font-bold text-lg transition-all hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {formState === 'loading' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" aria-hidden="true" />
                      Get My Free Meta Ads Audit
                      <ArrowRight className="w-5 h-5" aria-hidden="true" />
                    </>
                  )}
                </button>

                <p className="text-xs text-text-muted text-center">
                  🔒 Your information is 100% secure and will never be shared.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
