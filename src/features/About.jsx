import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

import WaveDivider from '../components/ui/WaveDivider';
import teamMarcelo from '../assets/team-marcelo.png';
// import teamLucas from '../assets/team-lucas.png'; // Removed as per user request
import teamAna from '../assets/team-ana.png';
// import teamProfessional from '../assets/team_professional_dev.png'; // Image generation failed

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

    const carouselImages = [teamMarcelo, teamAna];

    return (
        <section id="about" className="py-24 bg-[#f0f9ff] dark:bg-[#020617] relative overflow-hidden transition-colors duration-300">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[10%] left-[-5%] w-[400px] h-[400px] bg-primary/5 dark:bg-primary/10 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-secondary/5 dark:bg-secondary/10 rounded-full blur-[100px]"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Text Content */}
                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div>
                            <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">Quem Somos</span>
                            <h2 className="text-4xl md:text-5xl font-display font-bold text-darkblue dark:text-white leading-tight">
                                Qualidade com <br />
                                <span className="text-gradient-cyan">Simplicidade</span>
                            </h2>
                        </div>

                        <div className="space-y-6 text-lg text-gray-600 dark:text-gray-400">
                            <p>
                                Nossa missão é entregar qualidade com simplicidade e sem enrolação. Transformamos a
                                presença digital de nossos clientes por meio de sites bonitos, rápidos e focados em
                                conversão.
                            </p>
                            <p>
                                A LocyTech foi fundada por apaixonados por tecnologia que acreditam que todo negócio
                                merece um site incrível. Combinamos design estratégico com desenvolvimento eficiente para
                                entregar resultados reais.
                            </p>
                            <p>
                                Atuamos com foco na transparência e na parceria de longo prazo, oferecendo soluções que
                                crescem junto com sua empresa.
                            </p>
                        </div>

                        <div className="pt-6 border-t border-gray-100 dark:border-white/10">
                            <h3 className="text-xl font-bold text-darkblue dark:text-white mb-2">Foco em Resultados Reais</h3>
                            <p className="text-gray-500 dark:text-gray-500 text-sm">
                                "Tecnologia é nossa ferramenta, criatividade é nossa essência."
                            </p>
                        </div>
                    </motion.div>


                    <motion.div
                        className="relative h-full min-h-[500px] rounded-2xl overflow-hidden shadow-2xl"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <Swiper
                            modules={[Autoplay, EffectFade]}
                            effect="fade"
                            spaceBetween={0}
                            slidesPerView={1}
                            loop={true}
                            autoplay={{
                                delay: 8000,
                                disableOnInteraction: false,
                            }}
                            className="h-full w-full absolute inset-0"
                        >
                            {carouselImages.map((img, index) => (
                                <SwiperSlide key={index} className="overflow-hidden">
                                    <div className="w-full h-full relative overflow-hidden">
                                        <img
                                            src={img}
                                            className="w-full h-full object-cover transform transition-transform duration-[10000ms] ease-linear scale-100 hover:scale-105 animate-subtle-zoom"
                                            alt={`Equipe LocyTech ${index + 1}`}
                                            style={{
                                                transformOrigin: 'center center'
                                            }}
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <div className="absolute inset-0 bg-gradient-to-t from-darkblue/80 via-transparent to-transparent z-10 pointer-events-none"></div>
                        <div className="absolute bottom-8 left-8 right-8 text-white z-20">
                            <p className="font-display text-xl">"Tecnologia é nossa ferramenta, criatividade é nossa essência."</p>
                        </div>
                    </motion.div>
                </div>
            </div>

            <WaveDivider lightFill="#fdfbf6" darkFill="#020617" type="slant-right" />
        </section>
    );
};

export default About;
