import React from 'react';
import { motion } from 'framer-motion';

export const BackgroundVisuals: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden bg-background">
      {/* Mesh Gradients - Slate/Navy Theme */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 50, 0],
          y: [0, -30, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-[10%] -left-[10%] w-[70%] h-[70%] bg-slate-200/50 blur-[120px] rounded-full mix-blend-multiply"
      />

      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.4, 0.3],
          x: [0, -30, 0],
          y: [0, 50, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-[20%] -right-[20%] w-[60%] h-[60%] bg-blue-100/40 blur-[130px] rounded-full mix-blend-multiply"
      />

      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[0%] left-[20%] w-[50%] h-[50%] bg-indigo-100/30 blur-[100px] rounded-full mix-blend-multiply"
      />

      {/* Noise Texture for Texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.4] mix-blend-overlay"></div>
    </div>
  );
};