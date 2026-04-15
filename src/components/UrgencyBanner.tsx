import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, Zap } from 'lucide-react';

export default function UrgencyBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const [spots, setSpots] = useState(3);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (spots > 1) setSpots(s => s - 1);
    }, 45000);
    return () => clearTimeout(timer);
  }, [spots]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          className="urgency-bar text-white text-sm font-semibold py-2 px-4 flex items-center justify-center gap-3 relative z-50"
        >
          <Zap className="w-4 h-4" />
          <span className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5" />
            Only <span className="font-black underline">{spots} spots left</span> for free Meta Ads audit this month
          </span>
          <a
            href="#book"
            className="bg-white text-red-600 px-3 py-0.5 rounded-full text-xs font-bold hover:bg-red-50 transition-colors ml-2"
          >
            Claim Now
          </a>
          <button
            onClick={() => setIsVisible(false)}
            className="absolute right-3 top-1/2 -translate-y-1/2 hover:opacity-70 transition-opacity"
          >
            <X className="w-4 h-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
