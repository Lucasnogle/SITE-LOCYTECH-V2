import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade, Navigation } from 'swiper/modules';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import '../styles/hero-stars.css';
import '../styles/hero-clouds.css'; // Assuming we'll create this or use inline
import WaveDivider from '../components/ui/WaveDivider';

const Hero = () => {
    const { theme } = useTheme();
    // Mouse Parallax State
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springX = useSpring(mouseX, { damping: 50, stiffness: 400 });
    const springY = useSpring(mouseY, { damping: 50, stiffness: 400 });
    // State for current theme index
    const [currentThemeIndex, setCurrentThemeIndex] = React.useState(0);

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

    // Hero Carousel Themes (Synced with Slides)
    const heroThemes = [
        theme === 'dark' ? "from-[#020617] via-[#0f172a] to-[#020617]" : "from-[#e0f2fe] via-[#f0f9ff] to-[#dbeafe]",
        theme === 'dark' ? "from-[#020617] via-[#0f172a] to-[#000000]" : "from-[#dbeafe] via-[#e0f2fe] to-[#f0f9ff]",
        theme === 'dark' ? "from-[#000000] via-[#020617] to-[#0a192f]" : "from-[#f0f9ff] via-[#dbeafe] to-[#e0f2fe]",
    ];

    const fadeInUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 1.5, ease: "easeOut" } }
    };

    return (
        <section id="hero" className="hero-section relative w-full h-[100dvh] min-h-[800px] overflow-hidden bg-white dark:bg-[#050505] text-gray-900 dark:text-white transition-colors duration-500">
            {/* Global Background & Stars/Clouds */}

            <div className="absolute inset-0 z-0 pointer-events-none transition-colors duration-1000">
                <div className={`absolute inset-0 bg-gradient-to-br ${heroThemes[currentThemeIndex]} animate-gradient-move transition-all duration-1000 opacity-90 dark:opacity-100`}></div>
                {/* Grid Pattern (Hidden in Light Mode) */}
                <div className="absolute inset-0 bg-grid-pattern opacity-0 dark:opacity-30 transition-opacity duration-500"></div>
            </div>

            <div className="hero-stars-wrapper pointer-events-none absolute inset-0 z-0">
                {/* The "onda" (star moving effect) is now completely HIDDEN in light mode, retaining it only for dark mode. */}
                <div className="star-background transition-all duration-1000 opacity-0 dark:opacity-100">
                    <div id="stars" />
                    <div id="stars2" />
                    <div id="stars3" />
                </div>
                {theme !== 'dark' && (
                    <div className="absolute inset-0 opacity-40 transition-opacity duration-1000 overflow-hidden">
                        {/* Floating Morphing Geometric Shapes for Light Mode */}
                        <svg className="absolute w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                            <g fill="none" stroke="#60a5fa" strokeWidth="1" opacity="0.4" className="animate-[spin_40s_linear_infinite] origin-center">
                                <circle cx="20%" cy="30%" r="40" strokeDasharray="5, 5" />
                                <circle cx="80%" cy="22%" r="12" strokeDasharray="3, 4" />
                            </g>
                            <g fill="none" stroke="#3b82f6" strokeWidth="2" opacity="0.3" className="animate-[float_6s_ease-in-out_infinite_reverse]">
                                <circle cx="70%" cy="60%" r="150" />
                            </g>
                            <g fill="none" stroke="#0ea5e9" strokeWidth="1" opacity="0.5" className="animate-[float_8s_ease-in-out_infinite]">
                                <circle cx="15%" cy="80%" r="18" strokeDasharray="4, 6" />
                                <circle cx="85%" cy="80%" r="20" strokeDasharray="2, 6" />
                            </g>
                        </svg>

                        {/* Soft background glows (Aurora effect enhanced) */}
                        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-200/50 rounded-full blur-[120px] mix-blend-multiply animate-[float_10s_ease-in-out_infinite]"></div>
                        <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-sky-200/50 rounded-full blur-[140px] mix-blend-multiply animate-[float_12s_ease-in-out_infinite_reverse]"></div>
                    </div>
                )}
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
                onSlideChange={(swiper) => setCurrentThemeIndex(swiper.realIndex)}
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
                                <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-cyan-300/30 dark:bg-primary/20 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen"></div>
                                <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-sky-200/40 dark:bg-blue-600/10 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen"></div>
                            </div>

                            <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center h-full">
                                {/* Left Column */}
                                <motion.div
                                    className="flex flex-col gap-6 text-left max-w-xl mx-auto lg:mx-0"
                                    initial="hidden"
                                    animate={isActive ? "visible" : "hidden"}
                                    variants={slideVariants}
                                >
                                    <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 w-fit">
                                        <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                                        <span className="text-xs font-medium text-primary tracking-wide uppercase">Variante 2.0 Live</span>
                                    </motion.div>
                                    <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-gray-900 dark:text-white">
                                        Desenvolvimento <br />
                                        <span className="text-gradient-cyan">Next-Gen</span>
                                    </motion.h1>
                                    <motion.p variants={fadeInUp} className="text-gray-600 dark:text-gray-400 text-lg sm:text-xl font-light leading-relaxed max-w-lg">
                                        Nós arquitetamos soluções digitais escaláveis, seguras e de alto desempenho sob medida para o crescimento empresarial.
                                    </motion.p>
                                    {/* Buttons Removed */}
                                </motion.div>

                                {/* Right Column: Terminal */}
                                <motion.div
                                    className="relative lg:h-[600px] flex items-center justify-center perspective-1000 hidden lg:flex"
                                    style={{ x: springX, y: springY }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-300/20 dark:from-primary/10 to-transparent rounded-full blur-3xl transform translate-x-12 translate-y-12"></div>
                                    <div className="relative w-full max-w-lg glass-panel rounded-xl overflow-hidden code-glow transform lg:rotate-y-[-10deg] lg:rotate-x-[5deg] transition-transform hover:rotate-0 duration-700 ease-out animate-float z-20">
                                        {/* Code Window Header */}
                                        <div className="flex items-center justify-between px-4 py-3 bg-[#1e293b] dark:bg-black/40 border-b border-white/10 dark:border-white/5">
                                            <div className="flex items-center gap-2">
                                                <div className="w-3 h-3 rounded-full bg-red-400 dark:bg-red-500/80"></div>
                                                <div className="w-3 h-3 rounded-full bg-amber-400 dark:bg-yellow-500/80"></div>
                                                <div className="w-3 h-3 rounded-full bg-yellow-400 dark:bg-yellow-500/80"></div>
                                            </div>
                                            <div className="text-xs text-slate-400 dark:text-gray-500 font-mono">main.py — locy-engine</div>
                                            <div className="w-4"></div>
                                        </div>
                                        {/* Code Content */}
                                        <div className="p-6 font-mono text-sm leading-relaxed overflow-hidden bg-[#0f172a] dark:bg-[#0A1116]/80 text-slate-300 min-h-[320px]">
                                            <div className="flex gap-4">
                                                <div className="flex flex-col text-right text-slate-500 dark:text-gray-600 select-none">
                                                    {Array.from({ length: 11 }, (_, i) => <span key={i}>{i + 1}</span>)}
                                                </div>
                                                <div className="flex flex-col text-slate-300">
                                                    <div><span className="text-purple-400">import</span> <span className="text-amber-200">LocyAnalytics</span> <span className="text-purple-400">from</span> <span className="text-yellow-400">'@core/engine'</span></div>
                                                    <div className="h-5"></div>
                                                    <div><span className="text-slate-500"># Initialize the AI prediction model</span></div>
                                                    <div><span className="text-blue-400">class</span> <span className="text-amber-200">GrowthEngine</span>:</div>
                                                    <div className="pl-4"><span className="text-purple-400">def</span> <span className="text-blue-400">__init__</span>(<span className="text-orange-300">self</span>, <span className="text-orange-300">config</span>):</div>
                                                    <div className="pl-8"><span className="text-orange-300">self</span>.scale = config.get(<span className="text-yellow-400">'enterprise'</span>)</div>
                                                    <div className="pl-8"><span className="text-orange-300">self</span>.speed = <span className="text-blue-300">True</span></div>
                                                    <div className="h-5"></div>
                                                    <div className="pl-4"><span className="text-purple-400">async def</span> <span className="text-blue-400">optimize</span>(<span className="text-orange-300">self</span>):</div>
                                                    <div className="pl-8"><span className="text-purple-400">await</span> <span className="text-orange-300">self</span>.deploy(<span className="text-blue-400">"Global"</span>)</div>
                                                    <div className="pl-8"><span className="text-purple-400">return</span> <span className="text-blue-400">"Efficiency +300%"</span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Analytics Card */}
                                    <div className="absolute -bottom-6 -left-6 lg:bottom-10 lg:-left-12 bg-white dark:bg-[#1a1c20] dark:backdrop-blur-xl p-5 rounded-xl z-30 animate-[float_5s_ease-in-out_infinite_1s] w-64 shadow-xl dark:shadow-2xl border border-black/5 dark:border-white/20">
                                        <div className="flex items-center justify-between mb-4">
                                            <div>
                                                <h3 className="text-gray-900 dark:text-white text-sm font-bold">Carga do Sistema</h3>
                                                <p className="text-xs text-gray-500 dark:text-gray-400">Métricas em tempo real</p>
                                            </div>
                                            <span className="flex h-2 w-2 relative">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                                            </span>
                                        </div>
                                        <div className="flex items-end gap-1 h-16 mb-2">
                                            {[40, 70, 45, 90, 60, 80, 50, 100].map((h, i) => (
                                                <div key={i} className="w-full bg-blue-50 dark:bg-white/5 rounded-sm relative group overflow-hidden" style={{ height: `${h}%` }}>
                                                    <div className="absolute bottom-0 w-full bg-blue-500 dark:bg-primary h-full opacity-90 group-hover:opacity-100 transition-opacity"></div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="flex justify-between items-center text-xs font-mono">
                                            <span className="text-gray-500 dark:text-gray-400">Servidor A1</span>
                                            <span className="text-blue-600 dark:text-primary font-bold bg-blue-50 dark:bg-blue-500/10 px-1 rounded">98.4%</span>
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
                                <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-cyan-200/40 dark:bg-primary/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen"></div>
                            </div>

                            <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center h-full">
                                <motion.div
                                    className="flex flex-col gap-6 text-left max-w-xl mx-auto lg:mx-0"
                                    initial="hidden"
                                    animate={isActive ? "visible" : "hidden"}
                                    variants={slideVariants}
                                >
                                    <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 w-fit">
                                        <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                                        <span className="text-xs font-medium text-primary tracking-wide uppercase font-mono">System: Online</span>
                                    </motion.div>
                                    <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-gray-900 dark:text-white mb-4">
                                        Venda Mais <br />
                                        Com Sites e <br />
                                        <span className="font-mono font-semibold tracking-tighter text-gradient-blue">Sistemas_</span>
                                    </motion.h1>
                                    <motion.p variants={fadeInUp} className="text-gray-600 dark:text-gray-400 text-lg sm:text-xl font-light leading-relaxed max-w-lg font-display">
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
                                        <div className="relative bg-white dark:bg-[#1a1c20] rounded-[10px] p-[2px] shadow-2xl ring-1 ring-black/10 dark:ring-white/10">
                                            <div className="absolute inset-0 rounded-[10px] bg-gradient-to-b from-gray-200 via-gray-300 to-gray-400 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 -z-10"></div>
                                            <div className="bg-white dark:bg-black rounded-lg relative overflow-hidden aspect-[16/10]">
                                                <div className="absolute top-[2px] left-1/2 -translate-x-1/2 w-16 h-3 bg-gray-100 dark:bg-black z-20 rounded-b-md flex items-center justify-center">
                                                    <div className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-800"></div>
                                                </div>
                                                <div className="w-full h-full bg-slate-50 dark:bg-[#0a0f18] rounded-md overflow-hidden relative dashboard-grid">
                                                    <div className="h-8 border-b border-black/10 dark:border-white/5 flex items-center px-4 bg-white dark:bg-[#0f1420]">
                                                        <div className="flex gap-1.5 w-full">
                                                            <div className="w-2.5 h-2.5 rounded-full bg-red-400 dark:bg-red-500/80"></div>
                                                            <div className="w-2.5 h-2.5 rounded-full bg-amber-400 dark:bg-yellow-500/80"></div>
                                                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400 dark:bg-yellow-500/80"></div>
                                                            <div className="text-[10px] text-gray-400 dark:text-slate-500 font-mono ml-auto">dashboard_v2.1.exe</div>
                                                        </div>
                                                    </div>
                                                    <div className="p-4 grid grid-cols-12 gap-3 h-[calc(100%-2rem)]">
                                                        {/* Sidebar */}
                                                        <div className="col-span-2 hidden sm:flex flex-col gap-3 border-r border-black/5 dark:border-white/5 pr-3">
                                                            <div className="h-8 w-full bg-blue-100 dark:bg-blue-500/10 rounded border border-blue-200 dark:border-blue-500/20"></div>
                                                            <div className="h-4 w-2/3 bg-gray-200 dark:bg-white/5 rounded"></div>
                                                            <div className="h-4 w-3/4 bg-gray-200 dark:bg-white/5 rounded"></div>
                                                            <div className="h-4 w-1/2 bg-gray-200 dark:bg-white/5 rounded"></div>
                                                            <div className="mt-auto h-16 w-full bg-gradient-to-tr from-cyan-100 to-blue-100 dark:from-purple-500/10 dark:to-blue-500/10 rounded border border-black/5 dark:border-white/5"></div>
                                                        </div>

                                                        {/* Main Grid */}
                                                        <div className="col-span-12 sm:col-span-10 grid grid-cols-2 gap-3 content-start">
                                                            {/* Live Feed Graph */}
                                                            <div className="col-span-2 h-32 bg-white dark:bg-[#131825] rounded border border-black/10 dark:border-white/5 p-3 relative overflow-hidden group shadow-sm">
                                                                <div className="absolute top-0 right-0 p-3">
                                                                    <div className="flex gap-1">
                                                                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                                                                        <div className="text-[8px] text-blue-600 dark:text-blue-400 font-mono font-bold">TRANSMISSÃO</div>
                                                                    </div>
                                                                </div>
                                                                <div className="flex items-end justify-between h-full pt-4 gap-1">
                                                                    <div className="w-full bg-blue-50 dark:bg-blue-500/20 h-[30%] rounded-sm relative"><div className="absolute bottom-0 w-full bg-cyan-400 dark:bg-blue-500 h-1/2 opacity-60"></div></div>
                                                                    <div className="w-full bg-blue-50 dark:bg-blue-500/20 h-[50%] rounded-sm relative"><div className="absolute bottom-0 w-full bg-cyan-400 dark:bg-blue-500 h-1/2 opacity-60"></div></div>
                                                                    <div className="w-full bg-blue-50 dark:bg-blue-500/20 h-[40%] rounded-sm relative"><div className="absolute bottom-0 w-full bg-cyan-400 dark:bg-blue-500 h-1/2 opacity-60"></div></div>
                                                                    <div className="w-full bg-blue-50 dark:bg-blue-500/20 h-[70%] rounded-sm relative"><div className="absolute bottom-0 w-full bg-blue-400 dark:bg-blue-500 h-1/2 opacity-60"></div></div>
                                                                    <div className="w-full bg-blue-50 dark:bg-blue-500/20 h-[60%] rounded-sm relative"><div className="absolute bottom-0 w-full bg-blue-400 dark:bg-blue-500 h-1/2 opacity-60"></div></div>
                                                                    <div className="w-full bg-blue-50 dark:bg-blue-500/20 h-[85%] rounded-sm relative"><div className="absolute bottom-0 w-full bg-blue-500 dark:bg-blue-500 h-1/2 opacity-60"></div></div>
                                                                    <div className="w-full bg-blue-50 dark:bg-blue-500/20 h-[65%] rounded-sm relative"><div className="absolute bottom-0 w-full bg-blue-500 dark:bg-blue-500 h-1/2 opacity-60"></div></div>
                                                                    <div className="w-full bg-blue-50 dark:bg-blue-500/20 h-[95%] rounded-sm relative shadow-lg"><div className="absolute bottom-0 w-full bg-blue-600 dark:bg-blue-400 h-1/2"></div></div>
                                                                </div>
                                                            </div>

                                                            {/* Stats Cards */}
                                                            <div className="h-24 bg-white dark:bg-[#131825] rounded border border-black/10 dark:border-white/5 p-3 flex flex-col justify-between relative overflow-hidden shadow-sm">
                                                                <div className="text-[10px] text-gray-500 dark:text-slate-400 uppercase font-bold tracking-wider">Tráfego de Rede</div>
                                                                <div className="text-2xl font-display font-bold text-gray-900 dark:text-white relative z-10">2.4<span className="text-sm text-gray-400 dark:text-slate-500">PB</span></div>
                                                                <div className="absolute bottom-0 right-0 p-2 opacity-10 dark:opacity-20">
                                                                    <span className="material-icons text-4xl text-cyan-500">globe</span>
                                                                </div>
                                                                <div className="h-1 w-full bg-gray-100 dark:bg-slate-800 rounded-full mt-2 overflow-hidden">
                                                                    <div className="h-full bg-cyan-400 w-[75%] shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
                                                                </div>
                                                            </div>
                                                            <div className="h-24 bg-white dark:bg-[#131825] rounded border border-black/10 dark:border-white/5 p-3 flex flex-col justify-between relative overflow-hidden shadow-sm">
                                                                <div className="text-[10px] text-gray-500 dark:text-slate-400 uppercase font-bold tracking-wider">Ameaças Bloqueadas</div>
                                                                <div className="text-2xl font-display font-bold text-gray-900 dark:text-white relative z-10">0<span className="text-sm text-blue-600 dark:text-blue-400 ml-1">Seguro</span></div>
                                                                <div className="absolute bottom-0 right-0 p-2 opacity-10 dark:opacity-20">
                                                                    <span className="material-icons text-4xl text-blue-500">security</span>
                                                                </div>
                                                                <div className="h-1 w-full bg-gray-200 dark:bg-slate-800 rounded-full mt-2 overflow-hidden">
                                                                    <div className="h-full bg-blue-500 w-[100%] shadow-[0_0_10px_rgba(59,130,246,0.3)] dark:shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                                                                </div>
                                                            </div>

                                                            {/* Bottom Code Snippet */}
                                                            <div className="col-span-2 h-20 bg-gray-50 dark:bg-[#0d1119] rounded border border-black/10 dark:border-white/5 p-3 font-mono text-[10px] text-gray-600 dark:text-slate-400 overflow-hidden leading-relaxed relative">
                                                                <div className="absolute top-0 right-0 w-8 h-full bg-gradient-to-l from-gray-50 dark:from-[#0d1119] to-transparent"></div>
                                                                <div><span className="text-pink-600 dark:text-pink-400">const</span> <span className="text-blue-600 dark:text-blue-300">initProtocol</span> = <span className="text-cyan-600 dark:text-yellow-300">async</span> () =&gt; {'{'}</div>
                                                                <div className="pl-4"><span className="text-pink-600 dark:text-pink-400">await</span> <span className="text-blue-600 dark:text-blue-300">systemCheck</span>();</div>
                                                                <div className="pl-4 text-gray-400 dark:text-slate-600">// Establishing secure connection</div>
                                                                <div className="pl-4"><span className="text-blue-600 dark:text-blue-300">connect</span>(<span className="text-orange-600 dark:text-orange-300">SERVER_MAIN</span>);</div>
                                                                <div>{'}'}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Screen Gloss */}
                                                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 via-transparent to-purple-500/5 dark:from-blue-500/10 dark:to-purple-500/10 pointer-events-none mix-blend-overlay"></div>
                                                <div className="absolute top-0 right-0 w-[40%] h-full bg-gradient-to-l from-white/20 dark:from-white/5 to-transparent skew-x-12 opacity-30 pointer-events-none"></div>
                                            </div>
                                        </div>

                                        {/* Floating Elements */}
                                        <div className="absolute -top-6 -right-4 md:-right-12 z-30 w-48 glass-panel bg-white/70 dark:bg-transparent p-4 rounded-xl shadow-xl dark:shadow-2xl floating-anim border border-black/5 dark:border-white/10 backdrop-blur-xl">
                                            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/40 dark:from-white/5 to-transparent pointer-events-none"></div>
                                            <div className="flex items-center gap-3 mb-2 relative z-10">
                                                <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.15)]">
                                                    <span className="material-icons text-[18px]">bolt</span>
                                                </div>
                                                <span className="text-sm font-medium text-gray-800 dark:text-slate-200">Status do Sistema</span>
                                            </div>
                                            <div className="flex items-end justify-between relative z-10">
                                                <span className="text-2xl font-bold text-gray-900 dark:text-white font-display tracking-tight">99.9%</span>
                                                <span className="px-2 py-0.5 rounded-full bg-blue-500/10 text-[10px] text-blue-400 font-bold border border-blue-500/20">ESTÁVEL</span>
                                            </div>
                                        </div>

                                        <div className="absolute -bottom-4 -left-4 md:-left-12 z-30 w-60 glass-panel bg-white/70 dark:bg-transparent p-5 rounded-xl shadow-xl dark:shadow-2xl floating-anim-delayed border border-black/5 dark:border-white/10 backdrop-blur-xl">
                                            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/40 dark:from-white/5 to-transparent pointer-events-none"></div>
                                            <div className="flex justify-between items-start mb-4 relative z-10">
                                                <div>
                                                    <p className="text-xs font-semibold text-gray-600 dark:text-slate-400 uppercase tracking-wider mb-1">Crescimento ROI</p>
                                                    <div className="flex items-baseline gap-2">
                                                        <p className="text-3xl font-bold text-gray-900 dark:text-white font-display tracking-tight">+45%</p>
                                                        <span className="text-xs text-blue-400 font-medium">↑ 12%</span>
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
                                <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-sky-200/50 dark:bg-primary/20 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen"></div>
                            </div>

                            <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center h-full">
                                <motion.div
                                    className="flex flex-col gap-6 text-left max-w-xl mx-auto lg:mx-0"
                                    initial="hidden"
                                    animate={isActive ? "visible" : "hidden"}
                                    variants={slideVariants}
                                >
                                    <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 w-fit">
                                        <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                                        <span className="text-xs font-medium text-primary tracking-wide uppercase">Variante 2.0 Live</span>
                                    </motion.div>
                                    <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-gray-900 dark:text-white">
                                        Desenvolvimento <br />
                                        <span className="text-gradient-blue">Wireframe</span>
                                    </motion.h1>
                                    <motion.p variants={fadeInUp} className="text-gray-600 dark:text-gray-400 text-lg sm:text-xl font-light leading-relaxed max-w-lg">
                                        Nós arquitetamos soluções digitais escaláveis, seguras e de alto desempenho sob medida para o crescimento empresarial.
                                    </motion.p>
                                    {/* Buttons Removed */}
                                </motion.div>

                                {/* Visual: Growth Chart */}
                                <motion.div
                                    className="relative lg:h-[700px] w-full flex items-center justify-center perspective-[2000px] hidden lg:flex"
                                    style={{ x: springX, y: springY }}
                                >
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-300/30 dark:bg-primary/20 rounded-full blur-[80px] pointer-events-none mix-blend-multiply dark:mix-blend-screen animate-pulse"></div>

                                    <div className="relative w-full max-w-lg bg-white dark:bg-[#1a1c20]/80 rounded-2xl shadow-2xl dark:shadow-2xl p-8 z-20 border border-black/10 dark:border-white/10 overflow-hidden group hover:scale-[1.02] transition-transform duration-500">

                                        {/* Header */}
                                        <div className="flex justify-between items-center mb-10 relative z-10 w-full">
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-900 dark:text-white font-display">Desempenho de Vendas</h3>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">Conversão e Crescimento</p>
                                            </div>
                                            <div className="px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-bold flex items-center gap-2">
                                                <span className="w-2 h-2 rounded-full bg-blue-500 animate-[pulse_2s_infinite]"></span>
                                                Live
                                            </div>
                                        </div>

                                        {/* Chart Area */}
                                        <div className="relative h-64 w-full flex items-end justify-between gap-3 mt-8">
                                            {/* Background Grid Lines */}
                                            <div className="absolute inset-0 flex flex-col justify-between border-b border-black/5 dark:border-white/10 pb-6 pointer-events-none">
                                                {[1, 2, 3, 4, 5].map(i => (
                                                    <div key={i} className="w-full h-[1px] bg-black/5 dark:bg-white/5"></div>
                                                ))}
                                            </div>

                                            {/* Trending Lines SVG Area */}
                                            <div className="absolute inset-0 pb-6 z-20 pointer-events-none overflow-visible h-full">
                                                {/* Line 1 (Main Trend) */}
                                                <svg className="absolute inset-0 w-full h-full drop-shadow-md dark:drop-shadow-[0_0_15px_rgba(59,130,246,0.5)] overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                                                    <defs>
                                                        <linearGradient id="trendGradient1" x1="0%" y1="100%" x2="100%" y2="0%">
                                                            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5" />
                                                            <stop offset="100%" stopColor="#0ea5e9" stopOpacity="1" />
                                                        </linearGradient>
                                                    </defs>
                                                    <motion.path
                                                        d="M 5 65 L 20 55 L 35 60 L 50 40 L 65 45 L 80 20 L 95 0"
                                                        fill="none"
                                                        stroke="url(#trendGradient1)"
                                                        strokeWidth="3"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        initial={{ pathLength: 0 }}
                                                        animate={{ pathLength: isActive ? 1 : 0 }}
                                                        transition={{ duration: 1.5, ease: "linear", delay: 0.5 }}
                                                    />
                                                </svg>

                                                {/* Line 2 (Secondary Trend) */}
                                                <svg className="absolute inset-0 w-full h-full drop-shadow-sm opacity-60 flex-none overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                                                    <motion.path
                                                        d="M 5 80 L 25 70 L 45 75 L 65 50 L 85 40 L 95 25"
                                                        fill="none"
                                                        stroke="#60a5fa"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        initial={{ pathLength: 0 }}
                                                        animate={{ pathLength: isActive ? 1 : 0 }}
                                                        transition={{ duration: 1.5, ease: "linear", delay: 0.7 }}
                                                    />
                                                </svg>

                                                {/* Line 3 (Tertiary Trend) */}
                                                <svg className="absolute inset-0 w-full h-full drop-shadow-sm opacity-40 flex-none overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                                                    <motion.path
                                                        d="M 5 90 L 30 85 L 60 75 L 80 65 L 95 60"
                                                        fill="none"
                                                        stroke="#93c5fd"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        initial={{ pathLength: 0 }}
                                                        animate={{ pathLength: isActive ? 1 : 0 }}
                                                        transition={{ duration: 1.5, ease: "linear", delay: 0.9 }}
                                                    />
                                                </svg>
                                            </div>
                                        </div>

                                        {/* Labels below chart */}
                                        <div className="flex justify-between text-[10px] sm:text-xs font-mono text-gray-500 dark:text-gray-400 mt-2 px-1 relative z-10 w-full mb-1">
                                            <span>Jan</span>
                                            <span>Fev</span>
                                            <span>Mar</span>
                                            <span>Abr</span>
                                            <span>Mai</span>
                                            <span>Jun</span>
                                            <span>Jul</span>
                                        </div>

                                    </div>

                                    {/* Floating Elements Around Chart */}
                                    <motion.div
                                        className="absolute top-20 -right-8 lg:-right-16 w-48 p-4 rounded-xl border border-black/5 dark:border-blue-500/20 bg-white dark:bg-[#050505]/80 backdrop-blur-xl shadow-2xl animate-[float_4s_ease-in-out_infinite_0.5s] z-30"
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : 50 }}
                                        transition={{ delay: 1, duration: 0.8 }}
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-blue-600 dark:text-blue-400">
                                                <span className="material-icons">rocket_launch</span>
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-500 dark:text-gray-400">Meta</p>
                                                <p className="text-sm font-bold text-gray-900 dark:text-white">🚀 Superada</p>
                                            </div>
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        className="absolute bottom-24 -left-12 lg:-left-20 w-56 p-4 rounded-xl border border-black/5 dark:border-blue-500/20 bg-white dark:bg-[#050505]/80 backdrop-blur-xl shadow-2xl animate-[float_5s_ease-in-out_infinite_1s] z-30"
                                        initial={{ opacity: 0, x: -50 }}
                                        animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -50 }}
                                        transition={{ delay: 1.5, duration: 0.8 }}
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-blue-600 dark:text-blue-400">
                                                <span className="material-icons">trending_up</span>
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-500 dark:text-gray-400">Crescimento</p>
                                                <p className="text-lg font-bold text-gray-900 dark:text-white">+ 127.4%</p>
                                            </div>
                                        </div>
                                    </motion.div>

                                </motion.div>
                            </div>
                        </div>
                    )}
                </SwiperSlide>
            </Swiper>

            <WaveDivider lightFill="#f0f9ff" darkFill="#020617" />
        </section>
    );
};

export default Hero;
