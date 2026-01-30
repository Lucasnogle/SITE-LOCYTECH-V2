import React from 'react';
import { motion } from 'framer-motion';

const Pricing = () => {
    const plans = [
        {
            name: "Manutenção",
            price: "199",
            features: [
                "Hospedagem inclusa",
                "Backup diário",
                "Suporte por e-mail",
                "1h de ajustes mensais"
            ],
            isPopular: false,
            buttonStyle: "btn-outline border-darkblue text-darkblue hover:bg-darkblue hover:text-white"
        },
        {
            name: "Visual Update",
            price: "499",
            features: [
                "Tudo do plano Manutenção",
                "Redesign anual",
                "Suporte WhatsApp Prioritário",
                "Otimização SEO trimestral"
            ],
            isPopular: true,
            buttonStyle: "btn-primary shadow-lg shadow-primary/30"
        },
        {
            name: "Crescimento",
            price: "999",
            features: [
                "Tudo do plano Update",
                "Gestão de conteúdo (Blog)",
                "Relatórios de performance",
                "Consultoria mensal de Growth"
            ],
            isPopular: false,
            buttonStyle: "btn-outline border-darkblue text-darkblue hover:bg-darkblue hover:text-white"
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
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <section id="plans" className="py-24 bg-white relative">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gray-50 to-transparent pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">Planos</span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-darkblue mb-6">Evolua com Assinatura</h2>
                    <p className="text-lg text-gray-600">
                        Previsibilidade e qualidade contínua para o seu negócio. Escolha o plano ideal para suas necessidades.
                    </p>
                </div>

                <motion.div
                    className="grid md:grid-cols-3 gap-8 items-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                >
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            className={`p-8 rounded-2xl transition-all duration-300 relative ${plan.isPopular
                                ? 'bg-darkblue text-white shadow-2xl scale-105 border border-white/10 z-10'
                                : 'bg-white text-darkblue border border-gray-200 hover:shadow-xl hover:-translate-y-1'
                                }`}
                        >
                            {plan.isPopular && (
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-secondary text-darkblue text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full shadow-lg">
                                    Melhor Custo-Benefício
                                </div>
                            )}

                            <h3 className={`text-2xl font-bold mb-4 ${plan.isPopular ? 'text-white' : 'text-darkblue'}`}>{plan.name}</h3>
                            <div className="flex items-baseline mb-8">
                                <span className={`text-sm ${plan.isPopular ? 'text-gray-300' : 'text-gray-500'}`}>R$</span>
                                <span className={`text-5xl font-bold mx-1 ${plan.isPopular ? 'text-white' : 'text-darkblue'}`}>{plan.price}</span>
                                <span className={`text-sm ${plan.isPopular ? 'text-gray-300' : 'text-gray-500'}`}>/mês</span>
                            </div>

                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <svg className={`w-5 h-5 mt-0.5 flex-shrink-0 ${plan.isPopular ? 'text-primary' : 'text-green-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className={`text-sm ${plan.isPopular ? 'text-gray-300' : 'text-gray-600'}`}>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <a href="#contact" className={`w-full block text-center py-4 rounded-lg font-semibold transition-all ${plan.buttonStyle}`}>
                                Contratar Agora
                            </a>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Pricing;
