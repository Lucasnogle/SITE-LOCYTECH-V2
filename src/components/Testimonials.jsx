import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';

import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
    const testimonials = [
        {
            quote: "A LocyTech entendeu perfeitamente a necessidade do meu escritório. O site transmite a confiança que meus clientes precisam. O resultado superou todas as expectativas.",
            author: "Carlos Mendes",
            role: "Advogado Tributarista",
            company: "Mendes & Associados",
            rating: 5
        },
        {
            quote: "Desde o lançamento da loja virtual, dobramos nossas vendas. A navegação é fluida e o suporte é sensacional. Recomendo de olhos fechados!",
            author: "Fernanda Lie",
            role: "Fundadora",
            company: "NaturalB",
            rating: 5
        },
        {
            quote: "Profissionais de altíssimo nível. O sistema de agendamento que criaram para minha clínica otimizou todo o nosso fluxo de atendimento.",
            author: "Dr. André Silva",
            role: "Diretor Clínico",
            company: "Clinica Silva",
            rating: 5
        }
    ];

    return (
        <section id="testimonials" className="py-24 bg-gray-50 relative overflow-hidden">
            {/* Decor */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">Depoimentos</span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-darkblue mb-6">O que Dizem Nossos Clientes</h2>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        spaceBetween={30}
                        slidesPerView={1}
                        centeredSlides={true}
                        loop={true}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                        }}
                        breakpoints={{
                            768: {
                                slidesPerView: 2,
                                centeredSlides: false,
                            },
                            1024: {
                                slidesPerView: 3,
                                centeredSlides: false,
                            },
                        }}
                        className="pb-12"
                    >
                        {testimonials.map((item, index) => (
                            <SwiperSlide key={index} className="h-full">
                                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 h-full flex flex-col justify-between hover:shadow-xl transition-shadow duration-300 mx-2 my-2">
                                    <div>
                                        <div className="flex text-yellow-400 mb-6">
                                            {[...Array(item.rating)].map((_, i) => (
                                                <span key={i} className="material-icons text-sm">star</span>
                                            ))}
                                        </div>
                                        <div className="text-primary text-4xl font-serif leading-none mb-4 opacity-30">“</div>
                                        <p className="text-gray-600 leading-relaxed italic mb-6 relative z-10">
                                            {item.quote}
                                        </p>
                                    </div>

                                    <div className="flex item-center gap-4 mt-auto pt-6 border-t border-gray-100">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-gray-500 font-bold text-lg">
                                            {item.author.charAt(0)}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-darkblue">{item.author}</h4>
                                            <div className="text-xs text-gray-500">{item.role}, <span className="text-primary">{item.company}</span></div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;
