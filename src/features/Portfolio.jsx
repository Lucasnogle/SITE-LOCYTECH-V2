import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/hero-stars.css';
import WaveDivider from '../components/ui/WaveDivider';

const Portfolio = () => {
    const projects = [
        {
            title: "Advocacia Silva & Barros",
            category: "Institucional",
            tags: ["Design Premium", "SEO"],
            result: "+40% leads qualificados",
            color: "from-blue-900 to-slate-800",
            image: "AS",
            size: "md:col-span-2 md:row-span-2",
            height: "h-[500px]"
        },
        {
            title: "EcoStore Brasil",
            category: "E-commerce",
            tags: ["Alta Conversão"],
            result: "Checkout rápido",
            color: "from-yellow-600 to-amber-500",
            image: "EB",
            size: "md:col-span-1 md:row-span-1",
            height: "h-[240px]"
        },
        {
            title: "Dr. André Health",
            category: "Health-Tech",
            tags: ["Agendamento"],
            result: "-20% faltas",
            color: "from-blue-500 to-cyan-400",
            image: "AH",
            size: "md:col-span-1 md:row-span-1",
            height: "h-[240px]"
        },
        {
            title: "Fintech Nexus",
            category: "App Landing",
            tags: ["Motion Design"],
            result: "10k downloads",
            color: "from-purple-900 to-indigo-800",
            image: "FN",
            size: "md:col-span-2 md:row-span-1",
            height: "h-[240px]"
        }
    ];

    const [previewProject, setPreviewProject] = useState(projects[0]);

    return (
        <section id="portfolio" className="py-24 bg-[#f8fafc] dark:bg-[#020617] relative overflow-hidden transition-colors duration-300">
            {/* Background elements */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.05] mix-blend-overlay"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
            </div>

            {/* Stars Effect (Only Visible in Dark Mode) */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-0 dark:opacity-100 transition-opacity duration-300">
                <div className="star-background">
                    <div id="stars" />
                    <div id="stars2" />
                    <div id="stars3" />
                </div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="text-left mb-16 px-4 md:px-0">
                        <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">Portfólio</span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-800 dark:text-white mb-6">
                            Resultados que <span className="text-primary">Falam</span>
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-gray-300 max-w-2xl">
                            Mais do que sites bonitos, entregamos ferramentas de crescimento.
                        </p>
                    </div>
                </div>

                {/* ---------- NEW UIVERSE PORTFOLIO GRID ---------- */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-7xl mx-auto">

                    {/* LEFT COLUMN (1 Large Card) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="w-full h-full"
                    >
                        <div className="portfolio-card card--large">
                            {/* Static visual background layer mimicking original design */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${projects[0].color} opacity-40 mix-blend-overlay pointer-events-none`}></div>

                            {/* Uiverse Border Animation */}
                            <div className="pc-border"></div>

                            {/* Uiverse Hover Golden Tag */}
                            <div className="pc-bottom-text">{projects[0].category}</div>

                            {/* Uiverse Main Content */}
                            <div className="pc-content">
                                <div className="pc-logo">
                                    <span className="monogram">{projects[0].image}</span>
                                    <div className="trail"></div>
                                </div>
                                <span className="pc-logo-bottom-text">{projects[0].title}</span>
                            </div>

                            {/* Original Visible Content (fades out on hover) */}
                            <div className="pc-static-content">
                                <div className="flex justify-between items-start">
                                    <span className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium border border-white/10 text-white shadow-lg">
                                        {projects[0].category}
                                    </span>
                                </div>

                                <div>
                                    <h3 className="text-3xl md:text-4xl font-bold mb-2 text-white">{projects[0].title}</h3>
                                    <div className="flex gap-2 flex-wrap mb-4">
                                        {projects[0].tags.map((tag, i) => (
                                            <span key={i} className="text-sm text-gray-300">#{tag}</span>
                                        ))}
                                    </div>
                                    <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 inline-flex items-center gap-2 border border-white/10">
                                        <span className="material-icons text-secondary text-sm">trending_up</span>
                                        <span className="font-bold text-white text-sm">{projects[0].result}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT COLUMN (Grid of 3 Smaller Cards) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {projects.slice(1).map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                /* If 3 items in a 2-col grid, the last one spans both columns on md screens */
                                className={`w-full h-full ${index === 2 ? 'md:col-span-2' : ''}`}
                            >
                                <div className="portfolio-card card--small">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-60 mix-blend-overlay pointer-events-none`}></div>
                                    <div className="pc-border"></div>
                                    <div className="pc-bottom-text">{project.category}</div>

                                    <div className="pc-content">
                                        <div className="pc-logo">
                                            <span className="monogram">{project.image}</span>
                                            <div className="trail"></div>
                                        </div>
                                        <span className="pc-logo-bottom-text">{project.title}</span>
                                    </div>

                                    <div className="pc-static-content">
                                        <div className="flex justify-end">
                                            <span className="material-icons text-white/50 text-xl group-hover:text-white transition-colors">visibility</span>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold leading-tight text-white mb-1">{project.title}</h3>
                                            <p className="text-xs font-medium text-gray-300">{project.category} • {project.result}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>

            <WaveDivider lightFill="#f8fafc" darkFill="#020617" type="curve-center" />
        </section>
    );
};

export default Portfolio;
