import React from 'react';
import logoPeacock from '../../assets/logo-locytech-dark.png';
import { Instagram, Linkedin, Facebook, MessageCircle } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#f8fafc] dark:bg-[#02040a] text-slate-800 dark:text-white pt-20 pb-10 border-t border-gray-200 dark:border-white/5 transition-colors duration-300">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-16 border-b border-gray-200 dark:border-white/10 pb-16">
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-3 mb-6">
                            <img src={logoPeacock} alt="LocyTech Logo" className="h-10 w-auto object-contain" />
                            <div className="text-2xl font-bold">
                                Locy<span className="text-primary">Tech</span>
                            </div>
                        </div>
                        <p className="text-slate-500 dark:text-gray-400 mb-6">
                            Site profissional, rápido e que passa confiança.
                            <br />Orçamento no WhatsApp.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="https://www.instagram.com/locytech?igsh=bDExZTJwdTJkZGQ="
                                target="_blank"
                                rel="noreferrer"
                                className="w-10 h-10 rounded-full bg-gray-100 dark:bg-white/5 text-slate-600 dark:text-white flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                            >
                                <Instagram size={20} />
                            </a>
                            <a
                                href="https://wa.me/55999999999"
                                target="_blank"
                                rel="noreferrer"
                                className="w-10 h-10 rounded-full bg-gray-100 dark:bg-white/5 text-slate-600 dark:text-white flex items-center justify-center hover:bg-yellow-500 hover:text-white transition-all duration-300"
                            >
                                <MessageCircle size={20} />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-gray-100 dark:bg-white/5 text-slate-600 dark:text-white flex items-center justify-center hover:bg-[#0077b5] hover:text-white transition-all duration-300"
                            >
                                <Linkedin size={20} />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-gray-100 dark:bg-white/5 text-slate-600 dark:text-white flex items-center justify-center hover:bg-[#1877f2] hover:text-white transition-all duration-300"
                            >
                                <Facebook size={20} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6 text-slate-800 dark:text-white/90">Links Rápidos</h4>
                        <ul className="space-y-4">
                            <li><a href="#hero" className="text-slate-500 dark:text-gray-400 hover:text-primary transition-colors">Início</a></li>
                            <li><a href="#about" className="text-slate-500 dark:text-gray-400 hover:text-primary transition-colors">Sobre Nós</a></li>
                            <li><a href="#services" className="text-slate-500 dark:text-gray-400 hover:text-primary transition-colors">Serviços</a></li>
                            <li><a href="#plans" className="text-slate-500 dark:text-gray-400 hover:text-primary transition-colors">Planos</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6 text-slate-800 dark:text-white/90">Legal</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-slate-500 dark:text-gray-400 hover:text-primary transition-colors">Política de Privacidade</a></li>
                            <li><a href="#" className="text-slate-500 dark:text-gray-400 hover:text-primary transition-colors">Termos de Uso</a></li>
                            <li><a href="#" className="text-slate-500 dark:text-gray-400 hover:text-primary transition-colors">LGPD</a></li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-center items-center text-sm text-slate-400 dark:text-gray-500 gap-4">
                    <div className="text-center w-full">
                        &copy; {new Date().getFullYear()} LocyTech. Todos os direitos reservados.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
