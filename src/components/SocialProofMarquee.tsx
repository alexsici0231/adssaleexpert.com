import { Star } from 'lucide-react';

const logos = [
  '⚡ 2,080% ROAS', '🔥 $785K Revenue', '📈 26.2x Return',
  '💰 $985K Generated', '🎯 -62% Cost Per Lead', '🚀 3x Scaling',
  '⚡ 2,080% ROAS', '🔥 $785K Revenue', '📈 26.2x Return',
  '💰 $985K Generated', '🎯 -62% Cost Per Lead', '🚀 3x Scaling',
];

export default function SocialProofMarquee() {
  return (
    <section className="py-6 border-y border-border overflow-hidden relative" aria-label="Client results highlights" role="marquee">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-bg to-transparent z-10" aria-hidden="true" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-bg to-transparent z-10" aria-hidden="true" />
      <div className="marquee-track">
        {logos.map((item, i) => (
          <div key={i} className="flex items-center gap-3 px-8 shrink-0">
            <Star className="w-4 h-4 text-orange fill-orange" />
            <span className="text-text-secondary font-semibold text-sm whitespace-nowrap">{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
