import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoPeacock from '../assets/logo-locytech-dark.png';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const headerVariants = {
        hidden: { y: -100, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const menuVariants = {
        closed: {
            opacity: 0,
            x: "100%",
            transition: { duration: 0.3 }
        },
        open: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.4, ease: "easeOut", staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        closed: { opacity: 0, x: 20 },
        open: { opacity: 1, x: 0 }
    };

    return (
        <motion.header
            className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:px-6 md:py-6 transition-all duration-300"
            initial="hidden"
            animate="visible"
            variants={headerVariants}
        >
            <div className={`max-w-7xl mx-auto rounded-xl transition-all duration-300 ${isScrolled ? 'bg-[#04293F]/60 backdrop-blur-xl border border-white/10 shadow-2xl py-3 px-6' : 'bg-transparent py-2 px-0'}`}>
                <div className="flex justify-between items-center">
                    <a href="#hero" className="z-50 group flex items-center gap-3">
                        <img src={logoPeacock} alt="LocyTech Logo" className="h-20 w-auto object-contain drop-shadow-md" />
                        <span className="text-2xl font-display font-bold text-white tracking-tight">
                            Locy<span className="text-primary group-hover:text-white transition-colors">Tech</span>
                        </span>
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {['Início', 'Sobre Nós', 'Serviços', 'Planos', 'Portfólio'].map((item, index) => {
                            const href = item === 'Início' ? '#hero' :
                                item === 'Sobre Nós' ? '#about' :
                                    item === 'Serviços' ? '#services' :
                                        item === 'Planos' ? '#plans' :
                                            '#portfolio';
                            return (
                                <a
                                    key={index}
                                    href={href}
                                    className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group font-sans"
                                >
                                    {item}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            );
                        })}
                        <a
                            href="#contact"
                            className="bg-primary/10 hover:bg-primary/20 border border-primary/50 text-primary text-sm font-bold py-2.5 px-6 rounded-lg transition-all hover:shadow-[0_0_20px_rgba(13,185,242,0.3)]"
                        >
                            Pedir Orçamento
                        </a>
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden z-50 p-2 text-white focus:outline-none"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        <div className="w-6 h-5 relative flex flex-col justify-between">
                            <span className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                            <span className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        className="fixed inset-0 bg-[#050505]/95 backdrop-blur-xl md:hidden flex flex-col items-center justify-center z-40"
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                    >
                        <nav className="flex flex-col items-center gap-8">
                            {['Início', 'Sobre Nós', 'Serviços', 'Planos', 'Portfólio'].map((item, index) => {
                                const href = item === 'Início' ? '#hero' :
                                    item === 'Sobre Nós' ? '#about' :
                                        item === 'Serviços' ? '#services' :
                                            item === 'Planos' ? '#plans' :
                                                '#portfolio';
                                return (
                                    <motion.a
                                        key={index}
                                        href={href}
                                        className="text-2xl font-light text-white hover:text-primary transition-colors font-display"
                                        onClick={() => setIsMenuOpen(false)}
                                        variants={itemVariants}
                                    >
                                        {item}
                                    </motion.a>
                                );
                            })}
                            <motion.a
                                href="#contact"
                                className="nav-btn-mobile mt-4 px-8 py-3 rounded-lg text-lg bg-primary text-black font-bold"
                                onClick={() => setIsMenuOpen(false)}
                                variants={itemVariants}
                            >
                                Pedir Orçamento
                            </motion.a>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default Header;
