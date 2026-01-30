import React from 'react';
import { motion } from 'framer-motion';
import teamMarcelo from '../assets/team-marcelo.png';

const About = () => {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    return (
        <section id="about" className="py-24 bg-white relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-30">
                <div className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-[-10%] right-[-5%] w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    className="text-center max-w-3xl mx-auto mb-20"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                >
                    <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">Quem Somos</span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-darkblue mb-6">Qualidade com Simplicidade</h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Nossa missão é entregar qualidade com simplicidade e sem enrolação.
                        Transformamos a presença digital de nossos clientes por meio de sites bonitos, rápidos e focados em conversão.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                    >
                        <motion.h3 variants={fadeIn} className="text-2xl font-bold text-darkblue mb-6">Nossa História</motion.h3>
                        <motion.p variants={fadeIn} className="text-gray-600 mb-6 leading-relaxed">
                            A LocyTech foi fundada por apaixonados por tecnologia que acreditam que todo negócio merece um site incrível.
                            Combinamos design estratégico com desenvolvimento eficiente para entregar resultados reais.
                        </motion.p>
                        <motion.p variants={fadeIn} className="text-gray-600 leading-relaxed mb-6">
                            Atuamos com foco na transparência e na parceria de longo prazo, oferecendo soluções que crescem junto com sua empresa.
                        </motion.p>

                        {/* Metrics or additional hook */}
                        <div className="flex gap-8 border-t border-gray-100 pt-8">
                            <div>
                                <div className="text-3xl font-bold text-primary font-display">+100</div>
                                <div className="text-sm text-gray-500 uppercase tracking-wide">Projetos</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-primary font-display">98%</div>
                                <div className="text-sm text-gray-500 uppercase tracking-wide">Satisfação</div>
                            </div>
                        </div>

                    </motion.div>

                    <motion.div
                        className="relative h-full min-h-[500px] rounded-2xl overflow-hidden shadow-2xl"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <img
                            src={teamMarcelo}
                            className="absolute inset-0 w-full h-full object-cover"
                            alt="Equipe LocyTech"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-darkblue/60 to-transparent"></div>
                        <div className="absolute bottom-8 left-8 right-8 text-white">
                            <p className="font-display text-xl">"Tecnologia é nossa ferramenta, criatividade é nossa essência."</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
