import React from 'react';
import { motion, useTransform, useSpring } from 'framer-motion';
import { Smartphone, TrendingUp, Zap, Server, Shield, Activity, Lock, Users, BarChart3, PieChart, Layers, Code, Cpu, Globe, Wifi } from 'lucide-react';

const HeroVisuals = ({ type, mouseX, mouseY }) => {
    // Optimized Mouse Movement with Spring - smoother, less jittery
    const springConfig = { damping: 20, stiffness: 100, mass: 0.5 };
    const rotateX = useSpring(useTransform(mouseY, [0, 1], [10, -10]), springConfig);
    const rotateY = useSpring(useTransform(mouseX, [0, 1], [-10, 10]), springConfig);

    // Parallax layers for background elements
    const layer1X = useSpring(useTransform(mouseX, [0, 1], [20, -20]), springConfig);
    const layer1Y = useSpring(useTransform(mouseY, [0, 1], [20, -20]), springConfig);
    const layer2X = useSpring(useTransform(mouseX, [0, 1], [40, -40]), springConfig);
    const layer2Y = useSpring(useTransform(mouseY, [0, 1], [40, -40]), springConfig);

    // Common 3D Card Container
    const Card3D = ({ children, className = "" }) => (
        <motion.div
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`relative ${className}`}
        >
            {children}
        </motion.div>
    );

    // Slide 1: Transformation (Holographic Code Editor)
    if (type === 'transformation') {
        return (
            <div className="relative w-full h-[500px] flex items-center justify-center perspective-1200 will-change-transform">
                {/* Background Glow - CSS Animation instead of JS for perf */}
                <div className="absolute inset-0 bg-primary/5 blur-[100px] rounded-full animate-pulse-slow pointer-events-none" />

                <Card3D className="w-full max-w-lg glass-panel rounded-2xl p-6 shadow-2xl border border-white/10 bg-[#0d1117]/80 backdrop-blur-xl">
                    {/* Layer 0: Window Frame */}
                    <div className="absolute inset-0 rounded-2xl border border-white/5 pointer-events-none" />

                    {/* Layer 1: Header (Generic Z) */}
                    <div className="flex justify-between items-center mb-6 pb-4 border-b border-white/5" style={{ transform: "translateZ(20px)" }}>
                        <div className="flex gap-4 text-xs">
                            <span className="text-secondary font-bold flex items-center gap-2 bg-secondary/10 px-2 py-1 rounded border border-secondary/20">
                                <Code className="w-3 h-3" /> core_logic.ts
                            </span>
                        </div>
                        <div className="flex gap-1.5 opacity-50">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                        </div>
                    </div>

                    {/* Layer 2: Code Content (High Z) */}
                    <div className="space-y-1 relative font-mono text-xs sm:text-sm" style={{ transform: "translateZ(30px)" }}>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent skew-x-12 opacity-20 pointer-events-none" />
                        {[
                            { l: 1, c: <><span className="text-pink-400">import</span> {'{'} <span className="text-primary">NeuralCore</span> {'}'} <span className="text-pink-400">from</span> <span className="text-yellow-400">'@locy/ai'</span>;</> },
                            { l: 2, c: <><span className="text-pink-400">const</span> <span className="text-yellow-300">initSystem</span> = <span className="text-pink-400">async</span> () ={'>'} {'{'}</> },
                            { l: 3, c: <span className="text-gray-500 pl-4">// Establishing secure connection...</span> },
                            { l: 4, c: <p className="pl-4"><span className="text-pink-400">await</span> <span className="text-primary">NeuralCore</span>.<span className="text-blue-400">connect</span>({'{'}</p> },
                            { l: 5, c: <p className="pl-8">mode: <span className="text-orange-400">'HYPER_THREAD'</span>,</p> },
                            { l: 6, c: <p className="pl-8">latency: <span className="text-yellow-400">'0ms'</span>,</p> },
                            { l: 7, c: <p className="pl-4">{'}'});</p> },
                            { l: 8, c: <p className="pl-4"><span className="text-pink-400">return</span> <span className="text-yellow-400">true</span>;</p> },
                            { l: 9, c: <p>{'}'}</p> }
                        ].map((line, i) => (
                            <div key={i} className="flex hover:bg-white/5 rounded px-2 transition-colors duration-200">
                                <span className="w-6 text-gray-700 text-right mr-4 select-none">{line.l}</span>
                                <div>{line.c}</div>
                            </div>
                        ))}
                    </div>

                    {/* Layer 3: Floating Badge (Max Z) */}
                    <motion.div
                        style={{ x: layer2X, y: layer2Y, transform: "translateZ(60px)" }}
                        className="absolute bottom-10 -right-4 bg-darkblue border border-primary/40 p-3 rounded-lg flex items-center gap-3 shadow-[0_10px_40px_rgba(0,0,0,0.5)] z-20"
                    >
                        <div className="relative flex items-center justify-center w-8 h-8 bg-yellow-500/10 rounded-full border border-yellow-500/30">
                            <Cpu className="text-yellow-400 w-4 h-4" />
                            <div className="absolute inset-0 bg-yellow-400/20 rounded-full animate-ping" />
                        </div>
                        <div>
                            <div className="text-[9px] font-bold text-gray-400 tracking-wider">STATUS</div>
                            <div className="text-xs font-bold text-white">OPTIMIZED</div>
                        </div>
                    </motion.div>
                </Card3D>
            </div>
        );
    }

    // Slide 2: Design (Levitating Phone with Depth)
    if (type === 'design') {
        return (
            <div className="relative w-full h-[550px] flex items-center justify-center perspective-1200 will-change-transform">
                {/* Background Particles optimized */}
                <motion.div style={{ x: layer1X, y: layer1Y }} className="absolute -left-10 top-20 text-primary/30 z-0">
                    <Wifi size={48} />
                </motion.div>
                <motion.div style={{ x: layer2X, y: layer2Y }} className="absolute -right-4 bottom-40 text-secondary/30 z-0">
                    <Shield size={64} />
                </motion.div>

                <Card3D className="w-[300px] h-[600px] rounded-[3.5rem] bg-[#050510] border-[6px] border-[#1f2937] shadow-2xl relative">
                    {/* Screen Content */}
                    <div className="w-full h-full rounded-[3rem] overflow-hidden bg-darkblue relative flex flex-col">
                        {/* 3D Reflection Glare */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-50 pointer-events-none z-30 rounded-[3rem]" />

                        {/* Layer 1: Header */}
                        <div className="px-6 pt-10 pb-6 relative z-10" style={{ transform: "translateZ(20px)" }}>
                            <div className="flex justify-between items-center text-white/80 mb-6">
                                <span className="text-xs font-medium">9:41</span>
                                <div className="flex gap-1"><div className="w-4 h-2.5 border border-white/50 rounded-[2px]" /></div>
                            </div>
                            <h2 className="text-gray-400 text-xs font-medium uppercase tracking-wider">Total Balance</h2>
                            <h1 className="text-4xl font-bold text-white mt-1 relative inline-block">
                                $24,500
                                <span className="absolute -top-1 -right-3 w-2 h-2 bg-primary rounded-full" />
                            </h1>
                        </div>

                        {/* Layer 2: Floating Card */}
                        <motion.div
                            style={{ transform: "translateZ(40px)" }}
                            className="mx-6 p-5 rounded-2xl bg-gradient-to-br from-[#1e293b] to-[#0f172a] border border-white/10 shadow-lg relative overflow-hidden group mb-6"
                        >
                            <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl group-hover:bg-primary/30 transition-all" />
                            <div className="relative z-10">
                                <Zap className="text-primary w-6 h-6 mb-4" />
                                <div className="flex justify-between items-end">
                                    <div className="text-xs text-gray-400 tracking-[0.2em]">PLATINUM</div>
                                    <div className="text-lg font-mono text-white">**** 4829</div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Layer 3: Activity List */}
                        <div className="flex-1 px-6 space-y-3" style={{ transform: "translateZ(30px)" }}>
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm hover:translate-z-2 transition-all">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center bg-white/5 ${i === 1 ? 'text-primary' : 'text-secondary'}`}>
                                        {i === 1 ? <Smartphone size={18} /> : i === 2 ? <Globe size={18} /> : <Code size={18} />}
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-xs text-white font-bold">Transaction</div>
                                        <div className="text-[10px] text-gray-500">Processing...</div>
                                    </div>
                                    <span className="text-xs font-bold text-white">+$1,200</span>
                                </div>
                            ))}
                        </div>

                        {/* Layer 4: Floating Nav */}
                        <div className="absolute bottom-6 left-6 right-6 h-14 bg-white/10 backdrop-blur-md rounded-full flex justify-around items-center border border-white/10 shadow-lg z-20" style={{ transform: "translateZ(50px)" }}>
                            <Activity className="text-primary w-5 h-5" />
                            <PieChart className="text-white/40 w-5 h-5" />
                            <Users className="text-white/40 w-5 h-5" />
                        </div>
                    </div>
                </Card3D>
            </div>
        );
    }

    // Slide 3: Results (Layered HUD)
    if (type === 'results') {
        const stats = [
            { label: 'Growth', size: '150%', val: '+24%', color: 'from-blue-500 to-cyan-400' },
            { label: 'Revenue', size: '100%', val: '$85k', color: 'from-yellow-400 to-amber-500' },
            { label: 'User Base', size: '200%', val: '12k', color: 'from-purple-500 to-pink-400' },
        ];

        return (
            <div className="relative w-full h-[500px] flex items-center justify-center perspective-1200 will-change-transform">
                <Card3D className="w-full max-w-2xl bg-[#0a192f]/90 relative rounded-2xl border border-white/10 p-8 shadow-2xl backdrop-blur-md">
                    {/* Background Grid (Hidden in Light Mode to match clean aesthetic) */}
                    <div className="absolute inset-0 bg-grid-pattern opacity-0 dark:opacity-10 rounded-2xl pointer-events-none transition-opacity duration-300" />

                    {/* Layer 1: Header */}
                    <div className="flex justify-between items-start mb-10" style={{ transform: "translateZ(30px)" }}>
                        <div>
                            <span className="text-xs text-primary font-bold tracking-[0.3em] uppercase block mb-1">Analytics</span>
                            <h2 className="text-2xl font-bold text-white">Command Center</h2>
                        </div>
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                        </div>
                    </div>

                    {/* Layer 2: Main Content Grid */}
                    <div className="grid grid-cols-12 gap-6 relative">
                        {/* Chart Area */}
                        <div className="col-span-8 p-4 rounded-xl bg-white/5 border border-white/5 relative overflow-hidden" style={{ transform: "translateZ(50px)" }}>
                            <div className="absolute bottom-0 left-0 right-0 h-32 flex items-end gap-2 px-4 pb-0">
                                {[40, 70, 50, 90, 60, 80, 50, 95].map((h, i) => (
                                    <div
                                        key={i}
                                        style={{ height: `${h}%`, transitionDelay: `${i * 50}ms` }}
                                        className="flex-1 bg-gradient-to-t from-primary/20 to-primary rounded-t-sm transition-all duration-1000 ease-out hover:opacity-100 opacity-60"
                                    />
                                ))}
                            </div>
                            <div className="absolute top-4 left-4 text-xs font-bold text-white/50">LIVE TRAFFIC</div>
                        </div>

                        {/* Stats Column */}
                        <div className="col-span-4 space-y-4" style={{ transform: "translateZ(70px)" }}>
                            {stats.map((stat, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ scale: 1.05, x: 5 }}
                                    className="p-3 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm"
                                >
                                    <div className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">{stat.label}</div>
                                    <div className={`text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${stat.color}`}>
                                        {stat.val}
                                    </div>
                                    <div className="w-full h-1 bg-white/10 rounded-full mt-2 overflow-hidden">
                                        <div className={`h-full bg-gradient-to-r ${stat.color}`} style={{ width: '70%' }} />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Layer 3: Floating Status Orb */}
                    <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-transparent blur-xl animate-pulse-slow pointer-events-none" style={{ transform: "translateZ(20px)" }} />
                </Card3D>
            </div>
        );
    }

    return null;
};

export default HeroVisuals;
