'use client';

import React from 'react';
import { motion } from 'motion/react';
import { 
  CloudSun, 
  ShieldAlert, 
  Terminal, 
  Cpu, 
  Layers, 
  Network, 
  Server, 
  HardDrive 
} from 'lucide-react';

const IT_SOLUTIONS = [
  {
    icon: CloudSun,
    title: "Cloud & Virtualization",
    description: "Designing resilient, scalable multi-cloud architectures. Migration, container orchestration, and continuous state optimization."
  },
  {
    icon: ShieldAlert,
    title: "Zero-Trust Cybersecurity",
    description: "End-to-end threat vector mitigation, real-time active response systems, and comprehensive compliance auditing."
  },
  {
    icon: Network,
    title: "Enterprise Networking & SD-WAN",
    description: "Architecting software-defined enterprise channels with maximum throughput, redundant failover, and millisecond routing."
  },
  {
    icon: HardDrive,
    title: "Managed Infrastructure",
    description: "24/7 autonomous telemetry, proactive maintenance, database clustering, and state-of-the-art disaster mitigation pipelines."
  }
];

export default function Home() {
  return (
    <div id="it-solutions-landing" className="relative min-h-screen flex flex-col justify-between items-center px-6 py-12 md:py-16 overflow-hidden bg-[#030407]">
      {/* Dynamic ambient dark background blobs */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-10%,rgba(99,102,241,0.14),rgba(0,0,0,0))]" />
      <div className="absolute top-[40%] left-[-10%] w-[350px] h-[350px] bg-indigo-500/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[350px] h-[350px] bg-cyan-500/5 rounded-full filter blur-[100px] pointer-events-none" />

      {/* Top Header: Brand Identity */}
      <header id="header-brand-layer" className="relative z-10 w-full max-w-5xl flex justify-between items-center border-b border-gray-900/40 pb-6">
        <motion.div 
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-2.5"
        >
          <span className="h-7 w-7 rounded-lg bg-gradient-to-tr from-indigo-600 via-violet-500 to-cyan-400 flex items-center justify-center p-[1px]">
            <span className="w-full h-full bg-[#030407] rounded-[7px] flex items-center justify-center font-mono font-bold text-[11px] tracking-tighter text-cyan-400">
              Z4
            </span>
          </span>
          <span className="font-display font-medium tracking-wider text-sm uppercase text-gray-200">
            Z4X <span className="text-gray-500 font-light font-sans">Labs</span>
          </span>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-2 text-[10px] font-mono text-gray-500 tracking-wider uppercase"
        >
          <span className="w-2 h-2 rounded-full bg-indigo-550 animate-pulse" />
          <span>System Integrator Status: Active</span>
        </motion.div>
      </header>

      {/* Main Core Section */}
      <main id="main-content-canvas" className="relative z-10 my-auto text-center max-w-5xl px-4 py-8 flex flex-col items-center">
        
        {/* Subtle top indicator bar */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 bg-indigo-500/10 border border-indigo-500/20 px-3.5 py-1 rounded-full text-[10px] text-indigo-300 font-mono tracking-widest uppercase mb-6"
        >
          <span>Complete Enterprise IT Solutions</span>
        </motion.div>

        {/* Hero Title */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1] max-w-4xl text-transparent bg-clip-text bg-gradient-to-b from-white via-[#f1f3f9] to-[#a4a9c2]"
        >
          Engineering Resiliency <br />For Modern Enterprise Workloads
        </motion.h1>

        {/* Support Description */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="font-sans text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mt-6 font-light leading-relaxed"
        >
          Z4X Labs architects, scales, and manages end-to-end cloud networks, zero-trust perimeter security environments, and elite custom software integrations for mission-critical digital pipelines.
        </motion.p>

        {/* Decorative Grid of complete IT Solutions */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-16 text-left w-full max-w-4xl"
        >
          {IT_SOLUTIONS.map((solution, i) => {
            const Icon = solution.icon;
            return (
              <div 
                key={i} 
                className="bg-gradient-to-br from-[#090b11] to-[#040509] border border-gray-900 rounded-xl p-5 hover:border-indigo-500/20 transition-all duration-300"
              >
                <div className="flex items-center space-x-3.5 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-indigo-950/30 border border-indigo-500/10 flex items-center justify-center text-indigo-400">
                    <Icon className="w-4.5 h-4.5" />
                  </div>
                  <h3 className="font-display font-medium text-white text-sm tracking-wide">
                    {solution.title}
                  </h3>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed font-light">
                  {solution.description}
                </p>
              </div>
            );
          })}
        </motion.div>

        {/* Coming soon launch block */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-14 font-mono text-[10px] sm:text-[11px] font-medium tracking-[0.3em] uppercase text-cyan-400 bg-cyan-950/20 border border-cyan-500/10 rounded-lg px-6 py-2.5"
        >
          Sovereign Operations Gateway Launch • Q3 2026
        </motion.div>

      </main>

      {/* Footer Details */}
      <footer id="footer-branding-system" className="relative z-10 w-full max-w-5xl text-center">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[9.5px] text-gray-650 font-mono tracking-wider uppercase border-t border-gray-900/40 pt-6"
        >
          <div className="flex items-center space-x-1.5 text-gray-500">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>Telemetry Status: Perfect Sync</span>
          </div>
          <span className="text-gray-600">Enterprise Service Integrations &copy; {new Date().getFullYear()} Z4X Labs</span>
        </motion.div>
      </footer>
    </div>
  );
}
