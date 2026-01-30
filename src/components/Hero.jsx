import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade, Navigation } from 'swiper/modules';
import { motion, useMotionValue, useSpring } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import '../styles/hero-stars.css';

const Hero = () => {
    // Mouse Parallax State
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springX = useSpring(mouseX, { damping: 50, stiffness: 400 });
    const springY = useSpring(mouseY, { damping: 50, stiffness: 400 });

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        const x = (clientX / innerWidth) - 0.5;
        const y = (clientY / innerHeight) - 0.5;
        mouseX.set(x * 30);
        mouseY.set(y * 30);
    };

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    // Animation Variants
    const slideVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.3 }
        }
    };

    const fadeInUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <section id="hero" className="hero-section relative w-full h-[100dvh] min-h-[800px] overflow-hidden bg-[#050505] text-white">
            {/* Global Background & Stars */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-[#04293F] to-[#050505]"></div>
                <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
            </div>
            <div className="hero-stars-wrapper pointer-events-none absolute inset-0 z-0">
                <div className="star-background">
                    <div id="stars" />
                    <div id="stars2" />
                    <div id="stars3" />
                </div>
            </div>
            <Swiper
                modules={[Autoplay, Pagination, EffectFade, Navigation]}
                effect={'fade'}
                fadeEffect={{ crossFade: true }}
                speed={1200}
                autoplay={{ delay: 8000, disableOnInteraction: false }}
                pagination={{
                    clickable: true,
                    renderBullet: (index, className) => {
                        return '<span class="' + className + ' group relative"><span class="absolute -top-4 left-1/2 -translate-x-1/2 text-[10px] font-mono opacity-0 group-hover:opacity-100 transition-opacity text-primary">0' + (index + 1) + '</span></span>';
                    }
                }}
                navigation={true}
                loop={true}
                className="hero-swiper w-full h-full"
            >
                {/* -----------------------------------------------------------------------
                    SLIDE 1: Terminal + Analytics
                   ----------------------------------------------------------------------- */}
                <SwiperSlide>
                    {({ isActive }) => (
                        <div className="w-full h-full flex items-center relative overflow-hidden font-display">
                            {/* Background Layer */}
                            <div className="absolute inset-0 z-0 pointer-events-none">
                                {/* Global Background Moved to Parent */}
                                <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen"></div>
                                <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] mix-blend-screen"></div>
                            </div>

                            <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center h-full">
                                {/* Left Column */}
                                <motion.div
                                    className="flex flex-col gap-6 text-left max-w-xl mx-auto lg:mx-0"
                                    initial="hidden"
                                    animate={isActive ? "visible" : "hidden"}
                                    variants={slideVariants}
                                >
                                    <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 w-fit">
                                        <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                                        <span className="text-xs font-medium text-primary tracking-wide uppercase">Variante 2.0 Live</span>
                                    </motion.div>
                                    <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-white">
                                        Desenvolvimento <br />
                                        <span className="text-gradient-animated">Next-Gen</span>
                                    </motion.h1>
                                    <motion.p variants={fadeInUp} className="text-gray-400 text-lg sm:text-xl font-light leading-relaxed max-w-lg">
                                        Nós arquitetamos soluções digitais escaláveis, seguras e de alto desempenho sob medida para o crescimento empresarial.
                                    </motion.p>
                                    {/* Buttons Removed */}
                                </motion.div>

                                {/* Right Column: Terminal */}
                                <motion.div
                                    className="relative lg:h-[600px] flex items-center justify-center perspective-1000 hidden lg:flex"
                                    style={{ x: springX, y: springY }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-3xl transform translate-x-12 translate-y-12"></div>
                                    <div className="relative w-full max-w-lg glass-panel rounded-xl overflow-hidden code-glow transform lg:rotate-y-[-10deg] lg:rotate-x-[5deg] transition-transform hover:rotate-0 duration-700 ease-out animate-float z-20">
                                        <div className="flex items-center justify-between px-4 py-3 bg-black/40 border-b border-white/5">
                                            <div className="flex items-center gap-2">
                                                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                                                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                                            </div>
                                            <div className="text-xs text-gray-500 font-mono">main.py — locy-engine</div>
                                            <div className="w-4"></div>
                                        </div>
                                        <div className="p-6 font-mono text-sm leading-relaxed overflow-hidden bg-[#0A1116]/80 min-h-[320px]">
                                            <div className="flex gap-4">
                                                <div className="flex flex-col text-right text-gray-600 select-none">
                                                    {Array.from({ length: 11 }, (_, i) => <span key={i}>{i + 1}</span>)}
                                                </div>
                                                <div className="flex flex-col text-gray-300">
                                                    <div><span className="text-purple-400">import</span> <span className="text-yellow-200">LocyAnalytics</span> <span className="text-purple-400">from</span> <span className="text-green-400">'@core/engine'</span></div>
                                                    <div className="h-5"></div>
                                                    <div><span className="text-gray-500"># Initialize the AI prediction model</span></div>
                                                    <div><span className="text-blue-400">class</span> <span className="text-yellow-200">GrowthEngine</span>:</div>
                                                    <div className="pl-4"><span className="text-purple-400">def</span> <span className="text-blue-400">__init__</span>(<span className="text-orange-300">self</span>, <span className="text-orange-300">config</span>):</div>
                                                    <div className="pl-8"><span className="text-orange-300">self</span>.scale = config.get(<span className="text-green-400">'enterprise'</span>)</div>
                                                    <div className="pl-8"><span className="text-orange-300">self</span>.speed = <span className="text-blue-300">True</span></div>
                                                    <div className="h-5"></div>
                                                    <div className="pl-4"><span className="text-purple-400">async def</span> <span className="text-blue-400">optimize</span>(<span className="text-orange-300">self</span>):</div>
                                                    <div className="pl-8"><span className="text-purple-400">await</span> <span className="text-orange-300">self</span>.deploy(<span className="text-green-400">"Global"</span>)</div>
                                                    <div className="pl-8"><span className="text-purple-400">return</span> <span className="text-green-400">"Efficiency +300%"</span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Analytics Card */}
                                    <div className="absolute -bottom-6 -left-6 lg:bottom-10 lg:-left-12 glass-panel p-5 rounded-xl z-30 animate-[float_5s_ease-in-out_infinite_1s] w-64 shadow-2xl border-t border-white/20">
                                        <div className="flex items-center justify-between mb-4">
                                            <div>
                                                <h3 className="text-white text-sm font-semibold">Carga do Sistema</h3>
                                                <p className="text-xs text-gray-400">Métricas em tempo real</p>
                                            </div>
                                            <span className="flex h-2 w-2 relative">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                            </span>
                                        </div>
                                        <div className="flex items-end gap-2 h-24 mb-2">
                                            {[40, 65, 50, 85, 100].map((h, i) => (
                                                <div key={i} className="w-full bg-primary/10 rounded-sm relative group" style={{ height: `${h}%` }}>
                                                    <div className="absolute bottom-0 w-full bg-primary/40 h-0 group-hover:h-full transition-all duration-500" style={{ transitionDelay: `${i * 75}ms` }}></div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="flex justify-between items-center text-xs">
                                            <span className="text-gray-400">Servidor A1</span>
                                            <span className="text-primary font-mono font-bold">98.4%</span>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    )}
                </SwiperSlide>

                {/* -----------------------------------------------------------------------
                    SLIDE 2: Dashboard UI (Replaced Laptop)
                   ----------------------------------------------------------------------- */}
                <SwiperSlide>
                    {({ isActive }) => (
                        <div className="w-full h-full flex items-center relative overflow-hidden font-display">
                            {/* Background */}
                            <div className="absolute inset-0 z-0 pointer-events-none">
                                {/* Global Background Moved to Parent */}
                                <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] mix-blend-screen"></div>
                            </div>

                            <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center h-full">
                                <motion.div
                                    className="flex flex-col gap-6 text-left max-w-xl mx-auto lg:mx-0"
                                    initial="hidden"
                                    animate={isActive ? "visible" : "hidden"}
                                    variants={slideVariants}
                                >
                                    <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 w-fit">
                                        <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                                        <span className="text-xs font-medium text-primary tracking-wide uppercase font-mono">System: Online</span>
                                    </motion.div>
                                    <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-white mb-4">
                                        Venda Mais <br />
                                        Com Sites e <br />
                                        <span className="font-mono font-semibold tracking-tighter text-gradient-animated">Sistemas_</span>
                                    </motion.h1>
                                    <motion.p variants={fadeInUp} className="text-gray-400 text-lg sm:text-xl font-light leading-relaxed max-w-lg font-display">
                                        Transforme seu negócio com soluções digitais de alta performance. Desenvolvemos sites e plataformas que convertem visitantes em clientes reais.
                                    </motion.p>

                                    {/* Buttons Removed as requested */}
                                </motion.div>

                                {/* Visual - Dashboard UI */}
                                <motion.div
                                    className="relative lg:h-[600px] flex items-center justify-center perspective-1000 hidden lg:flex"
                                    style={{ x: springX, y: springY }}
                                >
                                    <div className="relative w-full max-w-2xl transform transition-transform duration-700 hover:scale-[1.01] z-20">
                                        <div className="relative bg-[#1a1c20] rounded-t-xl rounded-b-[2px] p-[2px] shadow-2xl ring-1 ring-white/10">
                                            <div className="absolute inset-0 rounded-t-xl rounded-b-[2px] bg-gradient-to-b from-gray-700 via-gray-800 to-gray-900 -z-10"></div>
                                            <div className="bg-black rounded-t-[10px] p-[3px] relative overflow-hidden aspect-[16/10]">
                                                <div className="absolute top-[2px] left-1/2 -translate-x-1/2 w-16 h-3 bg-black z-20 rounded-b-md flex items-center justify-center">
                                                    <div className="w-1 h-1 rounded-full bg-gray-800 border border-gray-700"></div>
                                                </div>
                                                <div className="w-full h-full bg-[#0a0f18] rounded-md overflow-hidden relative dashboard-grid">
                                                    <div className="h-8 border-b border-white/5 flex items-center justify-between px-4 bg-[#0f1420]">
                                                        <div className="flex gap-1.5">
                                                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                                                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                                                            <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                                                        </div>
                                                        <div className="text-[10px] text-slate-500 font-mono">dashboard_v2.1.exe</div>
                                                    </div>
                                                    <div className="p-4 grid grid-cols-12 gap-3 h-[calc(100%-2rem)]">
                                                        {/* Sidebar */}
                                                        <div className="col-span-2 hidden sm:flex flex-col gap-3 border-r border-white/5 pr-3">
                                                            <div className="h-8 w-full bg-blue-500/10 rounded border border-blue-500/20"></div>
                                                            <div className="h-4 w-2/3 bg-white/5 rounded"></div>
                                                            <div className="h-4 w-3/4 bg-white/5 rounded"></div>
                                                            <div className="h-4 w-1/2 bg-white/5 rounded"></div>
                                                            <div className="mt-auto h-16 w-full bg-gradient-to-tr from-purple-500/10 to-blue-500/10 rounded border border-white/5"></div>
                                                        </div>

                                                        {/* Main Grid */}
                                                        <div className="col-span-12 sm:col-span-10 grid grid-cols-2 gap-3 content-start">
                                                            {/* Live Feed Graph */}
                                                            <div className="col-span-2 h-32 bg-[#131825] rounded border border-white/5 p-3 relative overflow-hidden group">
                                                                <div className="absolute top-0 right-0 p-3">
                                                                    <div className="flex gap-1">
                                                                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                                                                        <div className="text-[8px] text-blue-400 font-mono">TRANSMISSÃO</div>
                                                                    </div>
                                                                </div>
                                                                <div className="flex items-end justify-between h-full pt-4 gap-1">
                                                                    <div className="w-full bg-blue-500/20 h-[30%] rounded-sm relative"><div className="absolute bottom-0 w-full bg-blue-500 h-1/2 opacity-60"></div></div>
                                                                    <div className="w-full bg-blue-500/20 h-[50%] rounded-sm relative"><div className="absolute bottom-0 w-full bg-blue-500 h-1/2 opacity-60"></div></div>
                                                                    <div className="w-full bg-blue-500/20 h-[40%] rounded-sm relative"><div className="absolute bottom-0 w-full bg-blue-500 h-1/2 opacity-60"></div></div>
                                                                    <div className="w-full bg-blue-500/20 h-[70%] rounded-sm relative"><div className="absolute bottom-0 w-full bg-blue-500 h-1/2 opacity-60"></div></div>
                                                                    <div className="w-full bg-blue-500/20 h-[60%] rounded-sm relative"><div className="absolute bottom-0 w-full bg-blue-500 h-1/2 opacity-60"></div></div>
                                                                    <div className="w-full bg-blue-500/20 h-[85%] rounded-sm relative"><div className="absolute bottom-0 w-full bg-blue-500 h-1/2 opacity-60"></div></div>
                                                                    <div className="w-full bg-blue-500/20 h-[65%] rounded-sm relative"><div className="absolute bottom-0 w-full bg-blue-500 h-1/2 opacity-60"></div></div>
                                                                    <div className="w-full bg-blue-500/20 h-[95%] rounded-sm relative shadow-[0_0_15px_rgba(59,130,246,0.5)]"><div className="absolute bottom-0 w-full bg-blue-400 h-1/2"></div></div>
                                                                </div>
                                                            </div>

                                                            {/* Stats Cards */}
                                                            <div className="h-24 bg-[#131825] rounded border border-white/5 p-3 flex flex-col justify-between relative overflow-hidden">
                                                                <div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Tráfego de Rede</div>
                                                                <div className="text-2xl font-display font-bold text-white relative z-10">2.4<span className="text-sm text-slate-500">PB</span></div>
                                                                <div className="absolute bottom-0 right-0 p-2 opacity-20">
                                                                    <span className="material-icons text-4xl text-purple-500">globe</span>
                                                                </div>
                                                                <div className="h-1 w-full bg-slate-800 rounded-full mt-2 overflow-hidden">
                                                                    <div className="h-full bg-purple-500 w-[75%] shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
                                                                </div>
                                                            </div>
                                                            <div className="h-24 bg-[#131825] rounded border border-white/5 p-3 flex flex-col justify-between relative overflow-hidden">
                                                                <div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Ameaças Bloqueadas</div>
                                                                <div className="text-2xl font-display font-bold text-white relative z-10">0<span className="text-sm text-emerald-400 ml-1">Seguro</span></div>
                                                                <div className="absolute bottom-0 right-0 p-2 opacity-20">
                                                                    <span className="material-icons text-4xl text-emerald-500">security</span>
                                                                </div>
                                                                <div className="h-1 w-full bg-slate-800 rounded-full mt-2 overflow-hidden">
                                                                    <div className="h-full bg-emerald-500 w-[100%] shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                                                                </div>
                                                            </div>

                                                            {/* Bottom Code Snippet */}
                                                            <div className="col-span-2 h-20 bg-[#0d1119] rounded border border-white/5 p-3 font-mono text-[10px] text-slate-400 overflow-hidden leading-relaxed relative">
                                                                <div className="absolute top-0 right-0 w-8 h-full bg-gradient-to-l from-[#0d1119] to-transparent"></div>
                                                                <div><span className="text-pink-400">const</span> <span className="text-blue-300">initProtocol</span> = <span className="text-yellow-300">async</span> () =&gt; {'{'}</div>
                                                                <div className="pl-4"><span className="text-pink-400">await</span> <span className="text-green-300">systemCheck</span>();</div>
                                                                <div className="pl-4 text-slate-600">// Establishing secure connection</div>
                                                                <div className="pl-4"><span className="text-blue-300">connect</span>(<span className="text-orange-300">SERVER_MAIN</span>);</div>
                                                                <div>{'}'}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Screen Gloss */}
                                                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-purple-500/10 pointer-events-none mix-blend-overlay"></div>
                                                <div className="absolute top-0 right-0 w-[40%] h-full bg-gradient-to-l from-white/5 to-transparent skew-x-12 opacity-30 pointer-events-none"></div>
                                            </div>
                                        </div>

                                        {/* Floating Elements */}
                                        <div className="absolute -top-6 -right-4 md:-right-12 z-30 w-48 glass-panel p-4 rounded-xl shadow-2xl floating-anim border border-white/10 backdrop-blur-xl">
                                            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
                                            <div className="flex items-center gap-3 mb-2 relative z-10">
                                                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
                                                    <span className="material-icons text-[18px]">bolt</span>
                                                </div>
                                                <span className="text-sm font-medium text-slate-200">Status do Sistema</span>
                                            </div>
                                            <div className="flex items-end justify-between relative z-10">
                                                <span className="text-2xl font-bold text-white font-display tracking-tight">99.9%</span>
                                                <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-[10px] text-emerald-400 font-bold border border-emerald-500/20">ESTÁVEL</span>
                                            </div>
                                        </div>

                                        <div className="absolute -bottom-4 -left-4 md:-left-12 z-30 w-60 glass-panel p-5 rounded-xl shadow-2xl floating-anim-delayed border border-white/10 backdrop-blur-xl">
                                            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
                                            <div className="flex justify-between items-start mb-4 relative z-10">
                                                <div>
                                                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Crescimento ROI</p>
                                                    <div className="flex items-baseline gap-2">
                                                        <p className="text-3xl font-bold text-white font-display tracking-tight">+45%</p>
                                                        <span className="text-xs text-emerald-400 font-medium">↑ 12%</span>
                                                    </div>
                                                </div>
                                                <div className="p-1.5 rounded bg-primary/20 text-primary border border-primary/20">
                                                    <span className="material-icons text-[20px]">trending_up</span>
                                                </div>
                                            </div>
                                            <div className="flex items-end gap-1.5 h-12 w-full relative z-10">
                                                <div className="w-full bg-primary/10 rounded-[2px] h-[30%] border-t border-primary/30"></div>
                                                <div className="w-full bg-primary/20 rounded-[2px] h-[50%] border-t border-primary/40"></div>
                                                <div className="w-full bg-primary/30 rounded-[2px] h-[40%] border-t border-primary/50"></div>
                                                <div className="w-full bg-primary/40 rounded-[2px] h-[70%] border-t border-primary/60"></div>
                                                <div className="w-full bg-primary rounded-[2px] h-[90%] shadow-[0_0_20px_rgba(59,130,246,0.4)] relative overflow-hidden">
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="absolute inset-0 bg-primary/15 blur-[120px] -z-10 rounded-full opacity-70"></div>
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/5 blur-[80px] -z-20 rounded-full"></div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    )}
                </SwiperSlide>

                {/* -----------------------------------------------------------------------
                    SLIDE 3: Mobile Wireframe 3D
                   ----------------------------------------------------------------------- */}
                <SwiperSlide>
                    {({ isActive }) => (
                        <div className="w-full h-full flex items-center relative overflow-hidden font-display">
                            <div className="absolute inset-0 z-0 pointer-events-none">
                                {/* Global Background Moved to Parent */}
                                <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen"></div>
                            </div>

                            <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center h-full">
                                <motion.div
                                    className="flex flex-col gap-6 text-left max-w-xl mx-auto lg:mx-0"
                                    initial="hidden"
                                    animate={isActive ? "visible" : "hidden"}
                                    variants={slideVariants}
                                >
                                    <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 w-fit">
                                        <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                                        <span className="text-xs font-medium text-primary tracking-wide uppercase">Variante 2.0 Live</span>
                                    </motion.div>
                                    <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-white">
                                        Desenvolvimento <br />
                                        <span className="text-gradient-animated">Next-Gen</span>
                                    </motion.h1>
                                    <motion.p variants={fadeInUp} className="text-gray-400 text-lg sm:text-xl font-light leading-relaxed max-w-lg">
                                        Nós arquitetamos soluções digitais escaláveis, seguras e de alto desempenho sob medida para o crescimento empresarial.
                                    </motion.p>
                                    {/* Buttons Removed */}
                                </motion.div>

                                {/* Visual: Mobile Wireframe 3D */}
                                <motion.div
                                    className="relative lg:h-[700px] w-full flex items-center justify-center perspective-[2000px] hidden lg:flex"
                                    style={{ x: springX, y: springY }}
                                >
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[80px] pointer-events-none mix-blend-screen animate-pulse"></div>
                                    <div className="relative w-[300px] md:w-[320px] h-[640px] transform-style-3d [transform:rotateY(-20deg)_rotateX(10deg)] transition-transform duration-700 ease-out hover:[transform:rotateY(-10deg)_rotateX(5deg)] z-20">
                                        {/* Phone Body */}
                                        <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-b from-[#1E293B] via-[#050505] to-[#050505] border-2 border-[#0DB9F2]/30 backdrop-blur-xl shadow-[0_0_50px_rgba(13,185,242,0.15)] overflow-hidden">
                                            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#0DB9F2]/5 to-transparent pointer-events-none z-20"></div>

                                            {/* Screen Content */}
                                            <div className="relative z-10 h-full flex flex-col p-5">
                                                {/* Status Bar */}
                                                <div className="flex justify-between items-center mb-6 opacity-60">
                                                    <div className="text-[10px] font-mono text-white">09:41</div>
                                                    <div className="w-10 h-3 bg-black/50 rounded-full border border-white/10"></div>
                                                </div>

                                                {/* Main App Content */}
                                                <div className="flex-1 flex flex-col gap-5">
                                                    {/* Hero Card */}
                                                    <div className="h-44 rounded-3xl border border-[#0DB9F2]/20 bg-gradient-to-br from-[#04293F]/50 to-transparent flex items-center justify-center relative overflow-hidden group">
                                                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(13,185,242,0.15),transparent_60%)]"></div>
                                                        <div className="w-20 h-20 border border-[#0DB9F2]/50 rotate-45 group-hover:rotate-90 transition-transform duration-1000 shadow-[0_0_30px_rgba(13,185,242,0.2)]"></div>
                                                    </div>

                                                    {/* List Items */}
                                                    <div className="space-y-3 mt-2">
                                                        {[1, 2, 3].map((item, i) => (
                                                            <div key={i} className={`flex items-center gap-3 p-3.5 rounded-2xl border border-white/5 bg-white/[0.03] ${i > 0 ? 'opacity-60' : ''}`}>
                                                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-white/10 to-transparent border border-white/5"></div>
                                                                <div className="flex flex-col gap-2 w-full">
                                                                    <div className="w-2/3 h-1.5 rounded-full bg-white/10"></div>
                                                                    <div className="w-1/3 h-1.5 rounded-full bg-white/5"></div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Bottom Nav */}
                                                <div className="mt-auto h-20 border-t border-white/5 flex justify-around items-center opacity-80 -mx-5 px-5 bg-[#050505]/50">
                                                    <div className="w-6 h-6 rounded-lg bg-white/10"></div>
                                                    <div className="w-12 h-12 rounded-full bg-[#0DB9F2] shadow-[0_0_20px_rgba(13,185,242,0.4)] flex items-center justify-center text-black">
                                                        <span className="material-icons text-lg">add</span>
                                                    </div>
                                                    <div className="w-6 h-6 rounded-lg bg-white/10"></div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Floating Elements */}
                                        <div className="absolute top-20 -right-16 w-56 p-4 rounded-xl border border-[#0DB9F2]/30 bg-[#050505]/80 backdrop-blur-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8)] animate-[float_4s_ease-in-out_infinite_0.5s]">
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className="material-icons text-primary text-sm">architecture</span>
                                                <span className="text-xs text-white font-medium tracking-wide">Renderização</span>
                                            </div>
                                            <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                                                <div className="h-full w-3/4 bg-primary shadow-[0_0_10px_#0DB9F2]"></div>
                                            </div>
                                            <div className="mt-2 flex justify-between text-[10px] font-mono">
                                                <span className="text-gray-400">Processando...</span>
                                                <span className="text-primary">75%</span>
                                            </div>
                                        </div>

                                        <div className="absolute bottom-32 -left-20 w-72 p-5 rounded-xl border-t border-l border-white/10 bg-[#04293F]/40 backdrop-blur-xl shadow-2xl animate-[float_5s_ease-in-out_infinite_1s]">
                                            <div className="flex items-center justify-between mb-4">
                                                <div>
                                                    <h3 className="text-white text-sm font-semibold tracking-wide">Carga do Sistema</h3>
                                                    <p className="text-xs text-[#0DB9F2]">Métricas em tempo real</p>
                                                </div>
                                                <div className="flex gap-1">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                                                    <span className="w-1.5 h-1.5 rounded-full bg-primary/30"></span>
                                                </div>
                                            </div>
                                            <div className="flex items-end gap-2 h-20 mb-2">
                                                {[40, 65, 50, 85, 100].map((h, i) => (
                                                    <div key={i} className="w-full bg-white/5 rounded-sm relative group overflow-hidden" style={{ height: `${h}%` }}>
                                                        <div className="absolute bottom-0 w-full bg-gradient-to-t from-primary to-primary/20 h-full opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="flex justify-between items-center text-xs border-t border-white/5 pt-2">
                                                <span className="text-gray-400 font-mono">Server-01</span>
                                                <span className="text-primary font-mono font-bold">99.9%</span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    )}
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Hero;
