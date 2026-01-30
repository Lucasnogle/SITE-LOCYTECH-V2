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
        // Here you would typically handle the form submission logic
        alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
        setFormData({ name: '', email: '', phone: '', message: '' });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className="py-24 bg-white relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute right-0 top-0 w-1/3 h-full bg-gray-50 skew-x-12 opacity-50 pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">Contato</span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-darkblue mb-6">Vamos fechar negócio?</h2>
                        <p className="text-lg text-gray-600 mb-12 leading-relaxed">
                            Estamos prontos para elevar o nível da sua presença digital. Entre em contato ou visite nosso escritório.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-blue-50 rounded-lg text-primary">
                                    <span className="material-icons">location_on</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-darkblue text-lg mb-1">Endereço</h4>
                                    <p className="text-gray-600">Rua Buarque de Macedo, 1200<br />Garibaldi, RS, Brasil</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-blue-50 rounded-lg text-primary">
                                    <span className="material-icons">email</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-darkblue text-lg mb-1">E-mail</h4>
                                    <p className="text-gray-600 hover:text-primary transition-colors">contato@locytech.com.br</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-blue-50 rounded-lg text-primary">
                                    <span className="material-icons">phone</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-darkblue text-lg mb-1">Telefone</h4>
                                    <p className="text-gray-600 hover:text-primary transition-colors">+55 (54) 99999-9999</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100"
                    >
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Nome Completo</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-gray-50 focus:bg-white"
                                    placeholder="Seu nome"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">E-mail</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-gray-50 focus:bg-white"
                                    placeholder="seu@email.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Telefone</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-gray-50 focus:bg-white"
                                    placeholder="(XX) 99999-9999"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Mensagem</label>
                                <textarea
                                    name="message"
                                    required
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-gray-50 focus:bg-white resize-none"
                                    placeholder="Como podemos ajudar?"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-4 px-8 bg-primary text-white font-bold rounded-lg hover:bg-blue-400 transform hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-primary/30"
                            >
                                Pedir orçamento
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
