import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const text = `Olá, vim pelo site! Me chamo *${formData.name}* (${formData.email}).\n\n${formData.message}`;
        const encoded = encodeURIComponent(text);
        window.open(`https://wa.me/55999999999?text=${encoded}`, '_blank');
        setFormData({ name: '', email: '', phone: '', message: '' });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className="py-24 bg-[#f8fafc] dark:bg-[#020617] relative overflow-hidden transition-colors duration-300">
            {/* Background elements */}
            <div className="absolute inset-0 bg-grid-pattern opacity-0 dark:opacity-[0.03] pointer-events-none transition-opacity duration-300"></div>
            <div className="absolute right-0 top-0 w-1/3 h-full bg-primary/5 blur-[120px] pointer-events-none"></div>
            <div className="absolute left-0 bottom-0 w-1/4 h-full bg-blue-600/5 blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-secondary font-mono tracking-widest uppercase text-sm mb-4 block">Contato</span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-800 dark:text-white mb-6">
                            Vamos fechar <br />
                            <span className="text-gradient-cyan">Negócio?</span>
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-gray-300 mb-12 leading-relaxed max-w-md">
                            Estamos prontos para elevar o nível da sua presença digital. Entre em contato e vamos conversar sobre o seu futuro.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-center gap-5 group">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all duration-300">
                                    <span className="material-icons">email</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-1">E-mail</h3>
                                    <p className="text-slate-600 dark:text-gray-400">contato@locytech.com.br</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 group">
                                <div className="w-14 h-14 rounded-2xl bg-white dark:bg-darkblue/50 border border-gray-200 dark:border-white/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                                    <span className="material-icons">phone</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-1">Telefone</h3>
                                    <p className="text-slate-600 dark:text-gray-400">(99) 99999-9999</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-white dark:bg-white/5 backdrop-blur-md p-8 md:p-10 rounded-3xl relative overflow-hidden border border-gray-200 dark:border-white/10 shadow-xl dark:shadow-none"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[50px] pointer-events-none"></div>

                        <h2 className="text-3xl font-display font-bold text-slate-800 dark:text-white mb-2">
                            Vamos Criar Algo <span className="text-gradient-cyan">Incrível?</span>
                        </h2>
                        <p className="text-slate-600 dark:text-gray-300 mb-8 border-b border-gray-200 dark:border-white/5 pb-8">
                            Preencha o formulário abaixo e entraremos em contato.
                        </p>

                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700 dark:text-gray-300 uppercase tracking-wider">Nome</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-gray-400 focus:border-primary focus:ring-1 focus:ring-primary/50 outline-none transition-all hover:bg-white dark:hover:bg-white/[0.07]"
                                        placeholder="Seu nome"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700 dark:text-gray-300 uppercase tracking-wider">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-gray-400 focus:border-primary focus:ring-1 focus:ring-primary/50 outline-none transition-all hover:bg-white dark:hover:bg-white/[0.07]"
                                        placeholder="seu@email.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700 dark:text-gray-300 uppercase tracking-wider">Telefone (Opcional)</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-gray-400 focus:border-primary focus:ring-1 focus:ring-primary/50 outline-none transition-all hover:bg-white dark:hover:bg-white/[0.07]"
                                    placeholder="(XX) 99999-9999"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700 dark:text-gray-300 uppercase tracking-wider">Mensagem</label>
                                <textarea
                                    name="message"
                                    required
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-gray-400 focus:border-primary focus:ring-1 focus:ring-primary/50 outline-none transition-all hover:bg-white dark:hover:bg-white/[0.07] resize-none"
                                    placeholder="Como podemos ajudar?"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-4 bg-primary hover:bg-[#00d0dd] text-[#020617] font-bold rounded-xl transition-all duration-300 flex justify-center items-center gap-2 group hover:shadow-[0_0_20px_rgba(0,240,255,0.4)]"
                            >
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    PEDIR ORÇAMENTO
                                    <span className="material-icons text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                </span>
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
