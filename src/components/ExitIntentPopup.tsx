import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Gift, ArrowRight } from 'lucide-react';

export default function ExitIntentPopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let triggered = false;
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY < 10 && !triggered) {
        triggered = true;
        setShow(true);
      }
    };

    const timer = setTimeout(() => {
      document.addEventListener('mouseout', handleMouseLeave);
    }, 5000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseout', handleMouseLeave);
    };
  }, []);

  if (!show) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-6"
        onClick={() => setShow(false)}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 40 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative max-w-md w-full rounded-2xl border border-border bg-bg-card p-8 text-center shadow-2xl"
          onClick={e => e.stopPropagation()}
        >
          <button
            onClick={() => setShow(false)}
            className="absolute top-4 right-4 text-text-muted hover:text-text-primary transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-purple flex items-center justify-center mx-auto mb-6">
            <Gift className="w-8 h-8 text-white" />
          </div>

          <h3 className="text-2xl font-black mb-3">
            Wait! Don't Leave <span className="gradient-text">Empty-Handed</span>
          </h3>
          <p className="text-text-secondary mb-6">
            Get a free Meta Ads audit worth $500 — discover exactly where your campaigns 
            are leaking money and how to fix it.
          </p>

          <a
            href="#book"
            onClick={() => setShow(false)}
            className="glow-button inline-flex items-center gap-2 bg-gradient-to-r from-accent to-purple text-white px-8 py-4 rounded-xl font-bold transition-all hover:scale-105 w-full justify-center"
          >
            Claim My Free Audit
            <ArrowRight className="w-5 h-5" />
          </a>

          <p className="text-xs text-text-muted mt-4">No spam. No commitment. Just actionable insights.</p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
