"use client";

import { motion } from "framer-motion";

export function HeroGraphic() {
  return (
    <div 
      className="hidden lg:block absolute right-[5%] top-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
      style={{ perspective: 1000 }}
      aria-hidden="true"
    >
      {/* Background glow base */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: "radial-gradient(circle at 50% 50%, var(--accent-indigo) 0%, transparent 60%)",
          filter: "blur(60px)",
          opacity: 0.15,
        }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main rotating glass orb */}
      <motion.div
        className="absolute inset-20 rounded-full"
        style={{
          background: "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.0) 100%)",
          border: "1px solid var(--border-accent)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          boxShadow: "inset 0 0 40px rgba(99,102,241,0.08), 0 0 60px rgba(99,102,241,0.1)",
        }}
        animate={{
          rotateX: [0, 20, 0, -20, 0],
          rotateY: [0, 360],
          y: [-15, 15, -15],
        }}
        transition={{ 
          rotateX: { duration: 15, repeat: Infinity, ease: "easeInOut" },
          rotateY: { duration: 25, repeat: Infinity, ease: "linear" },
          y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        {/* Inner geometric accent inside the orb */}
        <div 
          className="absolute inset-8 rounded-full border border-dashed opacity-40 hover:opacity-60 transition-opacity" 
          style={{ borderColor: 'var(--accent-indigo)' }} 
        />
      </motion.div>
      
      {/* Abstract floating blob 1 (Amber) */}
      <motion.div
        className="absolute bottom-1/4 left-10 w-24 h-24 rounded-full"
        style={{ 
          background: "linear-gradient(135deg, var(--accent-amber), transparent)", 
          filter: "blur(16px)",
          opacity: 0.35
        }}
        animate={{ 
          y: [0, -30, 0], 
          x: [0, 20, 0],
          scale: [1, 1.2, 1] 
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Abstract floating blob 2 (Indigo) */}
      <motion.div
        className="absolute top-1/4 right-10 w-32 h-32 rounded-full"
        style={{ 
          background: "linear-gradient(135deg, var(--accent-violet), transparent)", 
          filter: "blur(20px)",
          opacity: 0.3
        }}
        animate={{ 
          y: [0, 40, 0], 
          x: [0, -30, 0],
          scale: [1, 1.1, 1] 
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
