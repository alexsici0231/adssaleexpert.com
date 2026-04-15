import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Search, Palette, BarChart3, Rocket, ArrowRight, CheckCircle2 } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Meta Ads Strategy & Audience Research',
    description: 'Deep audience research, competitor ad analysis, and conversion-focused campaign architecture tailored for Facebook and Instagram advertising.',
    features: ['Facebook Audience Research & Segmentation', 'Competitor Ad Spy & Analysis', 'Conversion Funnel Design & Mapping', 'Custom Campaign Structure'],
    gradient: 'from-accent to-blue-400',
  },
  {
    icon: Palette,
    title: 'Ad Creative Testing & Optimization',
    description: 'Data-driven ad creative development and copy testing to find your winning combinations on Meta platforms.',
    features: ['Facebook Ad Creative Development', 'A/B Copy & Headline Testing', 'Visual Hook Optimization', 'Audience-Creative Matching'],
    gradient: 'from-purple to-pink-400',
  },
  {
    icon: BarChart3,
    title: 'Campaign Optimization & Reporting',
    description: 'Continuous performance monitoring and weekly optimization of your Facebook and Instagram ad campaigns for maximum ROI.',
    features: ['Weekly Performance Reports', 'Bid Strategy Optimization', 'Budget Reallocation', 'Conversion Rate Improvement'],
    gradient: 'from-emerald to-teal-400',
  },
  {
    icon: Rocket,
    title: 'Campaign Scaling & Growth',
    description: 'Proven frameworks to scale your profitable Meta Ads campaigns without losing efficiency or increasing cost per lead.',
    features: ['Horizontal & Vertical Scaling', 'Lookalike Audience Expansion', 'New Market Testing', 'Profit Margin Protection'],
    gradient: 'from-orange to-yellow-400',
  },
];

export default function Services() {
  const { ref, isInView } = useInView();

  return (
    <section id="services" ref={ref} className="py-24 relative" aria-labelledby="services-heading">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border-bright to-transparent" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-semibold mb-6">
            Our Meta Ads Services
          </div>
          <h2 id="services-heading" className="text-4xl md:text-5xl font-black mb-4">
            Full-Stack <span className="gradient-text">Facebook &amp; Instagram Ads</span> Management
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            From strategy to scaling — everything you need to turn <strong>Meta Ads into your #1 lead generation channel</strong>.
            Expert Facebook advertising management that delivers measurable ROI.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-8 rounded-2xl border border-border bg-bg-card hover:bg-bg-card-hover transition-all duration-500 hover:border-border-bright relative overflow-hidden"
            >
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} aria-hidden="true" />
              <div className="flex items-start gap-5">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shrink-0 opacity-80 group-hover:opacity-100 transition-opacity`}>
                  <service.icon className="w-7 h-7 text-white" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-text-secondary mb-5 leading-relaxed">{service.description}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-text-secondary">
                        <CheckCircle2 className="w-4 h-4 text-emerald shrink-0" aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
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
            href="#book"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-xl font-bold transition-all hover:shadow-lg hover:shadow-accent-glow group"
            aria-label="Book a free Meta Ads strategy call to start growing your business"
          >
            Start Growing Today
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
