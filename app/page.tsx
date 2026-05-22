'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CloudSun, 
  ShieldCheck, 
  Terminal, 
  Cpu, 
  Layers, 
  Network, 
  Server, 
  HardDrive,
  CheckCircle,
  Database,
  ArrowRight,
  TrendingUp,
  Workflow,
  Sparkles
} from 'lucide-react';
import { Z4XLogo, Z4XSparkle } from '@/components/z4x-logo';

const IT_SOLUTIONS = [
  {
    icon: CloudSun,
    title: "Enterprise Multi-Cloud & DevOps",
    metrics: "99.999% SLA Architectures",
    description: "Orchestrating resilient public/private cloud environments utilizing Kubernetes, Terraform state control, and modern container orchestration channels.",
    capabilities: ["Sovereign Infrastructure", "Automatic Horizontal Scaling", "Terraform Multi-State Delivery"]
  },
  {
    icon: ShieldCheck,
    title: "Zero-Trust Perimeter Security",
    metrics: "Continuous SOC-2 Audits",
    description: "Establishing military-grade permission boundaries, identity proxies, and real-time active intrusion threat vector mitigation systems.",
    capabilities: ["Tailscale Mesh Gateways", "Encrypted Tunneling Layers", "Proactive Vector Isolation"]
  },
  {
    icon: Network,
    title: "SD-WAN & Routing Architectures",
    metrics: "Sub-10ms Global Latency",
    description: "Designing high-availability multi-region backbones optimized for high-bandwidth telemetry and state replication.",
    capabilities: ["Traffic Priority Shaping", "Redundant VPN Tunnels", "Anycast Geo Route Delivery"]
  },
  {
    icon: HardDrive,
    title: "Managed Infrastructure & Data Engine",
    metrics: "Zero Data Leak Storage",
    description: "End-to-end telemetry auditing, automated maintenance schedules, database clustering, and state-of-the-art disaster mitigation.",
    capabilities: ["Proactive Storage Sharding", "Automated Daily Replications", "Cluster State Rebalancing"]
  }
];

export default function Home() {
  // Simulator State for modern IT service system
  const [activeTunnelCount, setActiveTunnelCount] = useState(4);
  const [networkLatency, setNetworkLatency] = useState(12.4);
  const [incomingPackets, setIncomingPackets] = useState(157402);
  const [activeTab, setActiveTab] = useState<'monitor' | 'threats' | 'pipelines'>('monitor');
  const [simulationLogs, setSimulationLogs] = useState<string[]>([
    "[CORE-ROUTE-01] Anycast multi-state routing table synchronized across 12 region zones.",
    "[SECURE-VPN] Secure WireGuard Handshake established with European peer node z4x-edge-03.",
    "[METRIC-DAEMON] Horizontal Pod Autoscaler triggered: scaled production API replications to 14."
  ]);

  // Keep simulator ticking
  useEffect(() => {
    const timer = setInterval(() => {
      setNetworkLatency(prev => {
        const delta = (Math.random() - 0.5) * 0.4;
        return parseFloat(Math.max(8.0, Math.min(18.0, prev + delta)).toFixed(2));
      });
      setIncomingPackets(prev => prev + Math.floor(Math.random() * 8) + 1);

      // Random logs
      if (Math.random() > 0.75) {
        setSimulationLogs(prev => {
          const events = [
            "[CORE-ROUTE-02] Balanced geo-session route: Tokyo edge forwarded to Osaka storage unit.",
            "[KUBE-PROXY] Outbound API call latency within nominal bounds: 4.8ms.",
            "[HEALTH-DAEMON] All cluster nodes report green (0 issues found across all microservices).",
            "[TRAFFIC-SHAPER] Dynamic load allocation completed for client tunnel session 1022."
          ];
          const newEvent = events[Math.floor(Math.random() * events.length)];
          return [newEvent, ...prev.slice(0, 4)];
        });
      }
    }, 2800);

    return () => clearInterval(timer);
  }, []);

  return (
    <div id="landing-container" className="relative min-h-screen flex flex-col justify-between items-center overflow-x-hidden bg-[#030407] select-none text-[#f1f3f9]">
      
      {/* Background visual graphics - exactly matches the look of the uploaded image */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_90%_90%_at_50%_-20%,rgba(99,102,241,0.12),rgba(0,0,0,0))]" />
      <div className="absolute top-[35%] left-[-15%] w-[450px] h-[450px] bg-indigo-500/5 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-15%] w-[450px] h-[450px] bg-purple-500/5 rounded-full filter blur-[120px] pointer-events-none" />
      
      {/* Exquisite design curves overlay in backgrounds */}
      <svg className="absolute top-0 left-0 w-full h-[600px] opacity-15 pointer-events-none z-0">
        <path d="M-100 100 Q 300 350 700 120 T 1600 250" fill="none" stroke="#6366f1" strokeWidth="1" />
        <path d="M-50 200 Q 400 100 900 300 T 1700 100" fill="none" stroke="#8b5cf6" strokeWidth="0.8" strokeDasharray="5 5" />
      </svg>

      {/* Tiny sparkles matched from image bottom corner & header */}
      <div className="absolute bottom-10 right-10 opacity-30 text-white animate-pulse pointer-events-none z-0">
        <Z4XSparkle size={32} />
      </div>
      <div className="absolute top-[40%] right-[10%] opacity-20 text-white animate-pulse pointer-events-none z-0">
        <Z4XSparkle size={18} />
      </div>

      {/* STICKY HEADER */}
      <header id="site-header" className="sticky top-0 z-50 w-full backdrop-blur-md border-b border-gray-900/40 bg-[#030407]/60">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {/* Split emblem from words */}
            <Z4XLogo size={28} className="text-[#f1f3f9] hover:text-[#a5b4fc] transition-colors" />
            <div className="flex flex-col text-left">
              <span className="font-display font-medium tracking-wider text-xs uppercase text-white leading-none">
                Z4XLabs<span className="text-gray-500 font-light font-sans inline-block ml-0.5">.com</span>
              </span>
              <span className="text-[8.5px] text-gray-500 font-mono uppercase tracking-[0.2em] mt-0.5">innovate. build. scale.</span>
            </div>
          </div>

          <nav id="navbar-links" className="hidden md:flex items-center space-x-8 text-xs font-mono uppercase tracking-wider text-gray-400">
            <a href="#hero-main" className="hover:text-white transition-all">Home</a>
            <a href="#it-solutions" className="hover:text-white transition-all">Cloud Solutions</a>
            <a href="#sandbox" className="hover:text-white transition-all">Edge Simulator</a>
          </nav>

          <div id="header-status" className="flex items-center space-x-2 text-[10px] font-mono text-gray-500 tracking-wider uppercase bg-gray-950/70 border border-gray-900 px-3 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>SLA ACTIVE</span>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section id="hero-main" className="relative z-10 w-full max-w-5xl px-6 pt-16 pb-16 md:pt-28 md:pb-24 flex flex-col items-center text-center">
        
        {/* Large Centered Separated Hexagonal Emblem */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative mb-10 flex cursor-pointer focus:outline-none"
        >
          {/* Breathing ambient drop shadow circle behind */}
          <div className="absolute inset-0 m-4 rounded-full bg-indigo-500/10 filter blur-3xl animate-pulse" />
          <div className="absolute -inset-1 rounded-full border border-indigo-500/5 animate-ping-slow pointer-events-none" />
          
          <Z4XLogo size={140} className="text-white hover:scale-[1.03] active:scale-[0.98] transition-transform duration-300 relative z-10" />
        </motion.div>

        {/* Separated Wordings matched from upload asset */}
        <div className="space-y-1">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white leading-none"
          >
            z4xlabs.com
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="font-sans text-gray-500 text-xs sm:text-sm md:text-base tracking-[0.35em] uppercase"
          >
            innovate. build. scale.
          </motion.p>
        </div>

        {/* Catchy dynamic descriptive hero body */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-sans text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mt-8 font-light leading-relaxed text-center"
        >
          Engineering comprehensive cloud software integrations, enterprise perimeter protection algorithms, and reliable high-availability DevOps pipelines for next-generation digital products.
        </motion.p>

        {/* Subtitle Badge */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 font-mono text-[10px] tracking-[0.3em] uppercase text-indigo-400 bg-indigo-950/20 border border-indigo-500/15 rounded-md px-5 py-2 flex items-center space-x-2"
        >
          <Workflow className="w-3.5 h-3.5 text-indigo-400" />
          <span>Full-Spectrum System Integrations</span>
        </motion.div>

      </section>

      {/* IT SOLUTIONS MAP SECTION */}
      <section id="it-solutions" className="relative z-10 w-full max-w-5xl px-6 py-20 border-t border-gray-900/60 scroll-mt-10">
        
        <div className="text-left mb-12 sm:mb-16">
          <span className="text-[10px] uppercase font-mono tracking-widest text-indigo-400 block font-semibold">
            Enterprise Offerings
          </span>
          <h2 className="font-display tracking-tight text-3xl sm:text-4xl font-semibold text-white mt-2">
            Complete IT Service Suite
          </h2>
          <p className="font-sans text-gray-400 mt-3 font-light text-sm sm:text-base max-w-2xl">
            We deliver state-of-the-art software systems and cloud governance mechanisms designed to ensure scale limits do not restrict your corporate velocity.
          </p>
        </div>

        {/* Detailed Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {IT_SOLUTIONS.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={index}
                whileHover={{ y: -3 }}
                className="bg-gradient-to-br from-[#080a0f] via-[#04050a] to-[#030407] border border-gray-900/70 hover:border-indigo-500/25 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 relative overflow-hidden group"
              >
                {/* Accent decoration */}
                <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-indigo-500/5 filter blur-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                
                <div>
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-indigo-950/30 border border-indigo-500/15 flex items-center justify-center text-indigo-400 group-hover:text-indigo-350 group-hover:border-indigo-500/30 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono text-indigo-400/80 bg-indigo-950/20 border border-indigo-500/10 rounded px-2 py-0.5">
                      {item.metrics}
                    </span>
                  </div>

                  <h3 className="font-display font-medium text-white text-base mt-5 tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-400 mt-2.5 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-900/60 flex flex-col space-y-2">
                  <span className="text-[9.5px] uppercase font-mono tracking-wider font-bold text-gray-550 block">Operational Pillars</span>
                  <div className="flex flex-wrap gap-1.5">
                    {item.capabilities.map((pill, idx) => (
                      <span key={idx} className="text-[9px] font-sans text-gray-405 bg-[#07090f] border border-gray-900 px-2.5 py-0.5 rounded">
                        • {pill}
                      </span>
                    ))}
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </section>

      {/* OPERATIONS SANDBOX AND LOGS DEMONSTRATION */}
      <section id="sandbox" className="relative z-10 w-full max-w-5xl px-6 py-20 border-t border-gray-900/60 scroll-mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          <div className="lg:col-span-5 flex flex-col justify-between text-left">
            <div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#f39c12] block font-semibold">
                Autonomous Diagnostics
              </span>
              <h2 className="font-display tracking-tight text-3xl sm:text-4xl font-semibold text-white mt-2">
                Operational Telemetry
              </h2>
              <p className="font-sans text-gray-400 mt-4 font-light text-sm sm:text-base leading-relaxed">
                Review system stability status parameters updated autonomously directly by our container networks. Experience the real-time routing mechanisms running underneath the hood.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#05060b] border border-gray-900 p-4 rounded-xl">
                  <span className="text-gray-500 text-[10px] uppercase tracking-wider font-bold font-mono">Anycast Latency</span>
                  <span className="font-mono text-xl font-bold text-white mt-1 block">
                    {networkLatency} ms
                  </span>
                </div>
                <div className="bg-[#05060b] border border-gray-900 p-4 rounded-xl">
                  <span className="text-gray-500 text-[10px] uppercase tracking-wider font-bold font-mono">Packets Evaluated</span>
                  <span className="font-mono text-xl font-bold text-indigo-400 mt-1 block">
                    {incomingPackets.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Incremental simulator button to interact */}
              <button 
                onClick={() => {
                  setIncomingPackets(prev => prev + 1240);
                  setSimulationLogs(prev => [
                    `[CLIENT-TRIGGER] Manually rebalancing DNS weights. Dispatched routing packet successfully.`,
                    ...prev.slice(0, 4)
                  ]);
                }}
                className="w-full bg-[#070910] hover:bg-[#0a0d18] border border-indigo-500/10 hover:border-indigo-500/25 text-white font-mono tracking-wide font-medium px-4 py-3 rounded-xl text-xs transition-all flex items-center justify-center space-x-2"
              >
                <Cpu className="w-3.5 h-3.5 text-indigo-400" />
                <span>Trigger Router Flush Test</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-[#04050a] border border-gray-900 rounded-2xl p-5 font-mono text-xs flex flex-col justify-between h-[340px] shadow-2xl relative text-left">
              
              <div className="border-b border-gray-900 pb-3 flex items-center justify-between text-gray-500 text-[9px] uppercase font-bold tracking-wider">
                <span>Core Integrals Monitor</span>
                <span className="text-emerald-400 animate-pulse flex items-center space-x-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1" />
                  <span>Daemon Synchronized</span>
                </span>
              </div>

              {/* Logs Stream */}
              <div className="flex-grow overflow-y-auto mt-4 space-y-2 pr-2 custom-log-scroll scroll-smooth text-[10.5px]">
                <AnimatePresence>
                  {simulationLogs.map((log, index) => {
                    let colorClass = 'text-gray-400';
                    if (log.includes('[CLIENT-TRIGGER]')) colorClass = 'text-purple-400 font-bold';
                    if (log.includes('[HEALTH-DAEMON]')) colorClass = 'text-emerald-400';
                    if (log.includes('[CORE-ROUTE')) colorClass = 'text-cyan-400';

                    return (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, x: -5 }}
                        animate={{ opacity: 1, x: 0 }}
                        className={`${colorClass} font-mono leading-relaxed border-l-2 border-gray-900 pl-3 py-0.5`}
                      >
                        {log}
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>

              <div className="mt-4 pt-3 border-t border-gray-900/60 text-gray-500 text-[10px] flex items-center justify-between uppercase">
                <span>Secure SSL Gateway v3</span>
                <span>Port 3000 Secured</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer id="it-landing-footer" className="relative z-10 w-full max-w-5xl px-6 border-t border-gray-900/40 mt-16 pt-8 pb-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-3 text-left">
            <Z4XLogo size={24} className="text-gray-400" />
            <div className="flex flex-col">
              <span className="font-display font-medium tracking-wider text-xs uppercase text-gray-300">
                Z4XLabs<span className="text-gray-600 font-light font-sans inline-block ml-0.5">.com</span>
              </span>
              <span className="text-[8px] text-gray-600 font-mono uppercase tracking-widest mt-0.5">innovate. build. scale.</span>
            </div>
          </div>

          <div className="text-[10px] text-gray-600 font-mono uppercase tracking-wider">
            &copy; {new Date().getFullYear()} Z4X Labs. All infrastructure elements synchronized.
          </div>
        </div>
      </footer>

    </div>
  );
}
