'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { 
  Cloud, 
  ShieldCheck, 
  Network, 
  Cpu, 
  CheckCircle2, 
  ArrowRight, 
  Zap,
  Activity,
  Terminal,
  Globe
} from 'lucide-react';
import { Z4XLogo, Z4XSparkle } from '@/components/z4x-logo';

const CLOUD_SERVICES = [
  {
    icon: Cloud,
    tag: "Orchestration",
    title: "Sovereign Multi-Cloud Clusters",
    description: "Deploy robust, isolated cloud compute networks across AWS, GCP, and private bare-metal using Kubernetes. Out-of-the-box auto-healing, multi-zone recovery plans, and zero-downtime rolling updates.",
    capabilities: ["Sovereign Private Deployments", "Global Kubernetes Pod Autoscale", "Automated Multi-Zone Disaster Recovery"]
  },
  {
    icon: ShieldCheck,
    tag: "Perimeter",
    title: "Zero-Trust Mesh Protection",
    description: "Safeguard proprietary microservices and sensitive databases. We establish military-grade access proxies, encrypted wireguard tunneling, and active malicious vector containment systems.",
    capabilities: ["Continuous SOC-2 Auditing Framework", "Identity-Aware Access Gateways", "Encrypted Anycast Tunnel Channels"]
  },
  {
    icon: Network,
    tag: "Throughput",
    title: "SD-WAN Anycast Routing",
    description: "Eliminate connection bottlenecks and optimize server-to-server data exchange. Deploy sub-10ms priority routing tables delivering global content synchronization efficiently.",
    capabilities: ["Autonomous Layer-4 Traffic Shaping", "Redundant Virtual Private Tunnels", "Geo-Proximity Content Balancing"]
  },
  {
    icon: Cpu,
    tag: "Automation",
    title: "High-Velocity GitOps & IaC",
    description: "Achieve extreme corporate release velocity. We structure clean, unified configuration states via Terraform, allowing your teams to provision new staging environments safely.",
    capabilities: ["State-Controlled IaC Pipelines", "Pre-Deployment Static Security Scans", "One-Click Region Redundancy"]
  }
];

export default function Home() {
  // Live Simulated Telemetry State
  const [pingGoogle, setPingGoogle] = useState(12.4);
  const [pingCF, setPingCF] = useState(8.2);
  const [pingAWS, setPingAWS] = useState(22.1);
  const [logs, setLogs] = useState<string[]>([
    "[SYSTEM] Initiating boundary telemetry...",
    "[ROUTER] Anycast BGP session established.",
    "[SECURE] Z4X Gateway active."
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPingGoogle(prev => Math.max(4, Math.min(30, prev + (Math.random() * 4 - 2))));
      setPingCF(prev => Math.max(2, Math.min(20, prev + (Math.random() * 3 - 1.5))));
      setPingAWS(prev => Math.max(10, Math.min(45, prev + (Math.random() * 5 - 2.5))));

      if (Math.random() > 0.5) {
        const events = [
          `[NODE-01] Rerouting CF edge traffic (latency threshold optimized)`,
          `[GCP-SYNC] Cross-region replication verified at ${(Math.random() * 2 + 1).toFixed(2)}s`,
          `[AWS-LINK] Packet loss detected: 0.00%`,
          `[L4-PROXY] Rebalancing load balancers for inbound port 443`,
          `[SECURITY] Threat vectors mitigated at perimeter layer`,
          `[TELEMETRY] Nominal operations matched across 12 global regions`
        ];
        setLogs(prev => [events[Math.floor(Math.random() * events.length)], ...prev].slice(0, 5));
      }
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="landing-universe" className="relative min-h-screen flex flex-col justify-between items-center overflow-x-hidden bg-[#020306] text-[#f1f3f9] selection:bg-indigo-500/30 selection:text-white">
      
      {/* Background Visual Gradients matching premium modern tech pages */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_100%_100%_at_50%_-10%,rgba(79,70,229,0.15),rgba(0,0,0,0))]" />
      <div className="absolute top-[25%] left-[-10%] w-[500px] h-[500px] bg-indigo-550/5 rounded-full filter blur-[150px] pointer-events-none" />
      <div className="absolute top-[45%] right-[-10%] w-[500px] h-[500px] bg-cyan-500/5 rounded-full filter blur-[150px] pointer-events-none" />
      
      {/* Background geometric overlay */}
      <svg className="absolute top-0 left-0 w-full h-[700px] opacity-10 pointer-events-none z-0">
        <path d="M-200 150 Q 400 450 900 150 T 2000 300" fill="none" stroke="#818cf8" strokeWidth="1" />
        <path d="M-100 250 Q 500 150 1100 400 T 2100 150" fill="none" stroke="#22d3ee" strokeWidth="0.8" strokeDasharray="6 6" />
      </svg>

      {/* Decorative Sparkles */}
      <div className="absolute bottom-12 right-12 opacity-25 text-indigo-400 animate-pulse pointer-events-none z-0 hidden md:block">
        <Z4XSparkle size={40} />
      </div>

      {/* FIXED PREMIUM NAVIGATION HEADER */}
      <header id="main-navigation" className="sticky top-0 z-50 w-full backdrop-blur-md border-b border-gray-950/40 bg-[#020306]/75">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3.5">
            {/* Split Z4X Hexagon logo & words */}
            <Z4XLogo size={30} className="text-white hover:text-indigo-400 transition-colors duration-300" />
            <div className="flex flex-col text-left">
              <span className="font-sans font-semibold tracking-wide text-sm text-white leading-none">
                Z4X Labs
              </span>
              <span className="text-[9px] text-gray-500 font-mono uppercase tracking-[0.25em] mt-0.5">
                innovate • build • scale
              </span>
            </div>
          </div>

          <nav id="nav-item-links" className="hidden sm:flex items-center space-x-8 text-xs font-mono uppercase tracking-wider text-gray-400">
            <a href="#about-platform" className="hover:text-white transition-all">Overview</a>
            <a href="#cloud-services" className="hover:text-white transition-all">Cloud Engineering</a>
          </nav>

          <div id="service-status" className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-3 text-[10px] font-mono text-gray-400 tracking-wider bg-gray-950/90 border border-gray-900 px-3.5 py-1.5 rounded-full">
            <div className="flex items-center space-x-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping-slow" />
              <span className="text-gray-300 font-semibold uppercase">Cloud SLA Active</span>
            </div>
            <div className="hidden sm:flex items-center space-x-2.5 border-l border-gray-800 pl-3">
              <span className="flex items-center gap-1"><span className="text-gray-500">GCP:</span> <span className="text-indigo-400">{pingGoogle.toFixed(1)}ms</span></span>
              <span className="flex items-center gap-1"><span className="text-gray-500">CF:</span> <span className="text-cyan-400">{pingCF.toFixed(1)}ms</span></span>
            </div>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section id="hero-block" className="relative z-10 w-full max-w-6xl px-6 pt-16 pb-12 md:pt-24 md:pb-16 flex flex-col items-center text-center">
        
        {/* Breathing brand icon centerpiece */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.0, ease: "easeOut" }}
          className="relative mb-8"
        >
          <div className="absolute inset-0 m-4 rounded-full bg-indigo-500/15 filter blur-3xl animate-pulse" />
          <Z4XLogo size={130} className="text-indigo-400 hover:text-white transition-colors duration-500 relative z-10 hover:scale-[1.02] transform transition-transform" />
        </motion.div>

        {/* Separated brand wordmark */}
        <div className="space-y-1">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-sans font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight text-white uppercase"
          >
            z4xlabs<span className="text-gray-500 font-light font-sans lowercase">.com</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="font-mono text-gray-500 text-xs sm:text-sm tracking-[0.45em] uppercase font-medium"
          >
            innovate. build. scale.
          </motion.p>
        </div>

        {/* Clear announcement header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-sans text-xl sm:text-2xl md:text-3xl max-w-3xl mt-10 font-normal leading-snug text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-gray-200 to-indigo-300"
        >
          Engineering Comprehensive Enterprise Cloud Solutions & Scalable GitOps Architectures
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-sans text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mt-5 font-light leading-relaxed"
        >
          We construct bulletproof multi-cloud infrastructures, manage Kubernetes clusters, ensure Zero-Trust networking, and automate infrastructure deployments for lightning-fast delivery teams.
        </motion.p>

        {/* Dynamic CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs font-mono"
        >
          <a
            href="#cloud-services"
            className="w-full sm:w-auto bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-medium px-6 py-3 rounded-xl transition-all duration-300 shadow-lg shadow-indigo-600/15 flex items-center justify-center space-x-2"
          >
            <span>Explore Engineering Services</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </motion.div>

      </section>

      {/* SHINING TECH IMAGE BANNER PREVIEW */}
      <section id="about-platform" className="relative z-10 w-full max-w-5xl px-6 py-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.2 }}
          className="relative bg-gradient-to-b from-[#0a0d18] to-[#04050a] border border-indigo-500/20 rounded-3xl p-3 md:p-4 shadow-2xl shadow-indigo-500/5 group"
        >
          {/* Inner ambient light overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/0 via-cyan-500/0 to-indigo-500/5 rounded-3xl pointer-events-none transition-opacity duration-700 group-hover:opacity-60" />
          
          <div className="relative overflow-hidden rounded-2xl aspect-[16/9] border border-gray-900">
            {/* The actual generated high-contrast tech background */}
            <Image 
              src="/cloud_banner.png" 
              alt="Z4X Labs Enterprise Cloud Visualizer" 
              fill
              className="object-cover scale-[1.01] hover:scale-[1.03] transition-transform duration-1000"
              referrerPolicy="no-referrer"
            />
            
            {/* Modern floating status badges layered beautifully over our actual generated visual asset */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40 flex flex-col justify-between p-4 md:p-6 text-left">
              
              {/* Top Row Indicators */}
              <div className="flex items-center justify-between">
                <div className="bg-indigo-950/80 backdrop-blur-md border border-indigo-500/20 px-3 py-1 rounded-full text-[9px] sm:text-[10px] font-mono uppercase text-indigo-300 flex items-center gap-1.5 font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
                  <span>Cloud Topology Live Engine</span>
                </div>

                <div className="bg-[#030408]/80 backdrop-blur-md border border-gray-800 px-3 py-1 rounded-full text-[9px] sm:text-[10px] font-mono text-gray-400 uppercase tracking-widest hidden sm:block">
                  Z4X Region Zone: Central Edge
                </div>
              </div>

              {/* Bottom Row Highlights */}
              <div className="space-y-2 max-w-lg">
                <h3 className="font-sans font-bold text-lg sm:text-2xl md:text-3xl text-white tracking-tight leading-tight">
                  High-Availability Cloud Backbones Constructed Specially For Enterprise Pipelines.
                </h3>
                <p className="font-sans text-xs sm:text-sm text-gray-300 leading-relaxed font-light hidden md:block">
                  Through declarative cluster definitions, zero-trust overlay meshes, and sub-10ms active payload balancing, we guarantee reliable up-times for all modern digital workloads.
                </p>
                <div className="flex flex-wrap gap-2 pt-2 text-[9px] sm:text-[10px] font-mono">
                  <span className="bg-[#030408]/80 backdrop-blur-sm border border-emerald-500/20 px-2.5 py-1 rounded text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    99.999% SLA Architectures
                  </span>
                  <span className="bg-[#030408]/80 backdrop-blur-sm border border-cyan-500/20 px-2.5 py-1 rounded text-cyan-400 flex items-center gap-1">
                    <Zap className="w-3 h-3" />
                    Multi-Zone Redundant Backups
                  </span>
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      </section>

      {/* CLOUD SERVICES SECTION */}
      <section id="cloud-services" className="relative z-10 w-full max-w-5xl px-6 py-16 md:py-24 border-t border-gray-950 scroll-mt-10">
        
        <div className="text-center md:text-left mb-14 md:mb-16">
          <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-indigo-400 font-bold block">
            CLOUD SPECIALIZATION
          </span>
          <h2 className="font-sans tracking-tight text-3xl sm:text-4xl font-extrabold text-white mt-1.5">
            Wanted Cloud Infrastructure Capabilities
          </h2>
          <p className="font-sans text-gray-400 mt-3 font-light text-sm sm:text-base max-w-2xl leading-relaxed">
            Eliminate scaling limits and manage global compute arrays autonomously. We do the heavy lifting to deliver secure, declarative cloud backbones.
          </p>
        </div>

        {/* Clear, attractive list of wanted offerings */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {CLOUD_SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ y: -3, borderColor: "rgba(99, 102, 241, 0.25)" }}
                className="bg-gradient-to-b from-[#060810] to-[#030408] border border-gray-900 rounded-2xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 relative group overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-indigo-950/40 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:text-indigo-300 transition-colors">
                      <Icon className="w-5.5 h-5.5" />
                    </div>
                    <span className="text-[9px] font-mono text-indigo-400 bg-indigo-950/20 border border-indigo-500/10 rounded-md px-2.5 py-1 uppercase tracking-wider font-semibold">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="font-sans font-bold text-white text-lg mt-6 tracking-wide group-hover:text-indigo-200 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-gray-400 mt-3.5 font-light leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Specific features list */}
                <div className="mt-8 pt-5 border-t border-gray-950 flex flex-col space-y-2.5">
                  <span className="text-[10px] uppercase font-mono tracking-wider font-bold text-gray-500">
                    Included Deliverables
                  </span>
                  <ul className="space-y-1.5">
                    {service.capabilities.map((pill, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-[11px] sm:text-xs text-gray-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                        <span>{pill}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </motion.div>
            );
          })}
        </div>

      </section>

      {/* LIVE EDGE TELEMETRY */}
      <section id="live-telemetry" className="relative z-10 w-full max-w-5xl px-6 py-12 md:py-16 border-t border-gray-950 scroll-mt-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 bg-gradient-to-br from-[#060810] to-[#020306] border border-indigo-500/10 rounded-3xl p-6 shadow-2xl relative overflow-hidden">
          
          {/* Accent decoration */}
          <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-indigo-500/5 filter blur-2xl pointer-events-none" />

          {/* Left Column: Latency Cards */}
          <div className="md:col-span-5 flex flex-col space-y-4">
            <div className="flex items-center space-x-2 text-indigo-400 mb-2">
              <Activity className="w-4 h-4" />
              <span className="text-[10px] font-mono tracking-widest font-bold uppercase">Live Global Routing</span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-[#030408] border border-gray-900 rounded-xl p-4 flex flex-col justify-between">
                <span className="text-[10px] font-mono text-gray-500 font-semibold mb-3">Google Cloud (us-central)</span>
                <div className="flex items-end justify-between">
                  <span className="font-mono text-2xl font-bold text-gray-200">{pingGoogle.toFixed(1)}</span>
                  <span className="text-[10px] font-mono text-gray-500 mb-1">ms</span>
                </div>
              </div>
              <div className="bg-[#030408] border border-gray-900 rounded-xl p-4 flex flex-col justify-between">
                <span className="text-[10px] font-mono text-gray-500 font-semibold mb-3">Cloudflare Edge (1.1.1.1)</span>
                <div className="flex items-end justify-between">
                  <span className="font-mono text-2xl font-bold text-cyan-400">{pingCF.toFixed(1)}</span>
                  <span className="text-[10px] font-mono text-gray-500 mb-1">ms</span>
                </div>
              </div>
              <div className="bg-[#030408] border border-gray-900 rounded-xl p-4 flex flex-col justify-between">
                <span className="text-[10px] font-mono text-gray-500 font-semibold mb-3">AWS Region (eu-west)</span>
                <div className="flex items-end justify-between">
                  <span className="font-mono text-2xl font-bold text-indigo-400">{pingAWS.toFixed(1)}</span>
                  <span className="text-[10px] font-mono text-gray-500 mb-1">ms</span>
                </div>
              </div>
              <div className="bg-indigo-950/20 border border-indigo-500/15 rounded-xl p-4 flex flex-col justify-between items-center text-center">
                <Globe className="w-5 h-5 text-indigo-400 mb-2 opacity-50" />
                <span className="text-[10px] font-mono text-indigo-300 font-semibold leading-tight">12 Global Regions<br/>Active & Synced</span>
              </div>
            </div>
          </div>

          {/* Right Column: Terminal Logs */}
          <div className="md:col-span-7 bg-[#020306] border border-gray-900 rounded-xl p-4 flex flex-col h-[230px]">
            <div className="flex items-center space-x-2 text-gray-500 border-b border-gray-900 pb-3 mb-3">
              <Terminal className="w-4 h-4" />
              <span className="text-[10px] font-mono uppercase tracking-wider font-semibold">Infrastructure Telemetry Stream</span>
            </div>
            <div className="flex-grow overflow-hidden relative">
              <AnimatePresence>
                {logs.map((log, i) => (
                  <motion.div
                    key={log + i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-[11px] font-mono leading-relaxed mb-2 flex space-x-2"
                  >
                    <span className="text-gray-600 min-w-16">[{new Date().toISOString().substring(11, 19)}]</span>
                    <span className={
                      log.includes('[SECURITY]') ? 'text-cyan-400' :
                      log.includes('[ROUTER]') || log.includes('[NODE') ? 'text-indigo-400' :
                      'text-gray-400'
                    }>{log}</span>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </section>

      {/* SIMPLIFIED SOPHISTICATED FOOTER */}
      <footer id="it-universe-footer" className="relative z-10 w-full max-w-5xl px-6 border-t border-gray-950 mt-12 pt-8 pb-12 text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-3.5 text-left">
            <Z4XLogo size={26} className="text-gray-400" />
            <div className="flex flex-col">
              <span className="font-sans font-semibold text-xs tracking-wider uppercase text-gray-300">
                Z4X Labs
              </span>
              <span className="text-[8.5px] text-gray-500 font-mono uppercase tracking-widest mt-0.5">
                innovate • build • scale
              </span>
            </div>
          </div>

          <div className="text-[10.5px] text-gray-500 font-mono tracking-wider">
            &copy; {new Date().getFullYear()} Z4X Labs. All enterprise operations are verified & secure.
          </div>
        </div>
      </footer>

    </div>
  );
}
