import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
    const services = [
        {
            title: "Sites Institucionais",
            description: "Credibilidade para seu negócio. Layouts sérios, otimizados e pensados para converter visitantes em clientes.",
            icon: "code",
            color: "from-blue-500 to-cyan-400"
        },
        {
            title: "Landing Pages",
            description: "Alta conversão para lançamentos e produtos únicos. Foco total em capturar leads e gerar vendas.",
            icon: "rocket_launch",
            color: "from-purple-500 to-pink-500"
        },
        {
            title: "E-commerce Sustentável",
            description: "Lojas virtuais leves e eficientes. Integração simples, rápida e focada na experiência do usuário.",
            icon: "shopping_bag",
            color: "from-green-500 to-emerald-400"
        },
        {
            title: "Health-Tech Leve",
            description: "Soluções digitais para clínicas e profissionais de saúde. Agendamento fácil e clareza nas informações.",
            icon: "monitor_heart",
            color: "from-red-500 to-orange-400"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <section id="services" className="py-24 bg-gray-50 relative overflow-hidden">
            {/* Dot Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.4]" style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

            {/* Subtle Gradient Spot */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-yellow-100/50 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">Nossos Serviços</span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-darkblue mb-6">Soluções Sob Medida</h2>
                    <p className="text-lg text-gray-600">
                        Desenvolvemos estratégias digitais personalizadas para cada tipo de negócio.
                    </p>
                </div>

                <motion.div
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group relative overflow-hidden"
                        >
                            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.color}`}></div>
                            <div className="w-14 h-14 rounded-xl bg-gray-50 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm border border-gray-100">
                                <span className={`material-icons text-3xl bg-clip-text text-transparent bg-gradient-to-br ${service.color}`}>
                                    {service.icon}
                                </span>
                            </div>
                            <h3 className="text-xl font-bold text-darkblue mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
