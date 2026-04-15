import { Zap, Mail, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-border py-16" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <a href="/" className="flex items-center gap-2 mb-4" aria-label="LeadGen Ads — Home">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-accent to-purple flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" aria-hidden="true" />
              </div>
              <span className="text-xl font-bold">
                Lead<span className="gradient-text">Gen</span>
              </span>
            </a>
            <p className="text-text-secondary text-sm leading-relaxed max-w-sm mb-6">
              Expert <strong>Meta Ads management agency</strong> specializing in Facebook and Instagram advertising
              that generates qualified leads. Data-driven strategies that turn your ad spend into predictable, scalable revenue.
              Average <strong>20x ROAS</strong> across all managed campaigns.
            </p>
            <a
              href="mailto:hello@leadgenads.com"
              className="inline-flex items-center gap-2 text-accent hover:text-accent-hover transition-colors text-sm font-medium"
              aria-label="Email us at hello@leadgenads.com"
            >
              <Mail className="w-4 h-4" aria-hidden="true" />
              hello@leadgenads.com
            </a>
          </div>

          <nav aria-label="Quick links">
            <h4 className="font-bold text-sm mb-4 text-text-primary">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'Meta Ads Services', href: '#services' },
                { label: 'Case Studies & Results', href: '#results' },
                { label: 'Our Process', href: '#process' },
                { label: 'About Alex', href: '#about' },
                { label: 'Client Testimonials', href: '#testimonials' },
                { label: 'FAQ', href: '#faq' },
              ].map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="block text-sm text-text-secondary hover:text-text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Resources">
            <h4 className="font-bold text-sm mb-4 text-text-primary">Resources</h4>
            <ul className="space-y-3">
              {[
                { label: 'Free Meta Ads Audit', href: '#book' },
                { label: 'Facebook Ads Case Studies', href: '#results' },
                { label: 'Meta Business Suite', href: 'https://business.facebook.com', external: true },
                { label: 'Facebook Ads Manager', href: 'https://www.facebook.com/adsmanager', external: true },
              ].map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="flex items-center gap-1 text-sm text-text-secondary hover:text-text-primary transition-colors"
                    {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    {link.label}
                    {link.external && <ArrowUpRight className="w-3 h-3" aria-hidden="true" />}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* SEO-rich footer content */}
        <div className="py-8 border-t border-border mb-8">
          <p className="text-xs text-text-muted leading-relaxed max-w-4xl">
            <strong>LeadGen Ads</strong> is a professional Meta Ads management agency offering expert Facebook advertising
            and Instagram ad campaign services. We specialize in lead generation, conversion optimization, audience research,
            ad creative testing, and campaign scaling for e-commerce, SaaS, and local service businesses.
            Our data-driven approach to Meta Ads has generated over $2M in revenue for clients with an average 20x ROAS.
            Services include Facebook Ads management, Instagram Ads management, Meta pixel setup, conversion tracking,
            retargeting campaigns, lookalike audience creation, and comprehensive performance reporting.
          </p>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted">
            © {new Date().getFullYear()} LeadGen Ads — Meta Ads Management Agency. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-text-muted hover:text-text-secondary transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-text-muted hover:text-text-secondary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
