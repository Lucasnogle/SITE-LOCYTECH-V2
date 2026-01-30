import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Portfolio = () => {
    const projects = [
        {
            title: "Advocacia Silva & Barros",
            category: "Institucional",
            tags: ["Design Premium", "SEO"],
            result: "+40% leads qualificados",
            color: "from-blue-900 to-slate-800",
            image: "AS"
        },
        {
            title: "EcoStore Brasil",
            category: "E-commerce",
            tags: ["Alta Conversão", "Mobile First"],
            result: "Checkout em 2 cliques",
            color: "from-emerald-800 to-green-600",
            image: "EB"
        },
        {
            title: "Dr. André Health",
            category: "Health-Tech",
            tags: ["Agendamento", "Identidade Visual"],
            result: "-20% de faltas",
            color: "from-blue-500 to-cyan-400",
            image: "AH"
        },
        {
            title: "Fintech Nexus",
            category: "App Landing",
            tags: ["Motion Design", "Performance"],
            result: "10k downloads mês 1",
            color: "from-purple-900 to-indigo-800",
            image: "FN"
        }
    ];

    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <section id="portfolio" className="py-24 bg-darkblue relative overflow-hidden text-white">
            {/* Background elements */}
            {/* Background elements */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.05] mix-blend-overlay"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
            </div>

            <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none overflow-hidden">
                <motion.div
                    className="absolute right-0 top-0 w-[600px] h-[600px] bg-primary rounded-full blur-[120px]"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute left-[-100px] bottom-[-100px] w-[600px] h-[600px] bg-secondary rounded-full blur-[120px]"
                    animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-2xl">
                        <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">Portfólio</span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Resultados que Falam</h2>
                        <p className="text-lg text-gray-300">
                            Mais do que sites bonitos, entregamos ferramentas de crescimento. Confira alguns de nossos cases de sucesso.
                        </p>
                    </div>
                    <a href="#contact" className="btn btn-outline border-white/20 hover:bg-white hover:text-darkblue px-8">
                        Ver Todos os Projetos
                    </a>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            {/* Background Gradient/Image Placeholder */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} transition-transform duration-700 group-hover:scale-110`}>
                                <div className="absolute inset-0 flex items-center justify-center opacity-20 text-9xl font-bold text-white mix-blend-overlay">
                                    {project.image}
                                </div>
                            </div>

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>

                            {/* Content */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-between">
                                <div className="flex justify-between items-start">
                                    <span className="bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-medium border border-white/10">
                                        {project.category}
                                    </span>
                                    <motion.div
                                        className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-darkblue opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        whileHover={{ scale: 1.1, rotate: -45 }}
                                    >
                                        <span className="material-icons text-xl">arrow_forward</span>
                                    </motion.div>
                                </div>

                                <div>
                                    <div className="mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
                                        <div className="flex gap-2 flex-wrap mb-4">
                                            {project.tags.map((tag, i) => (
                                                <span key={i} className="text-sm text-gray-300">#{tag}</span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/10 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 bg-secondary rounded-lg text-darkblue">
                                                <span className="material-icons text-lg">trending_up</span>
                                            </div>
                                            <div>
                                                <div className="text-xs text-gray-300 uppercase tracking-wider">Resultado</div>
                                                <div className="font-bold text-lg">{project.result}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
