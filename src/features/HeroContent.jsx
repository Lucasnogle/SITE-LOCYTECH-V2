import React from 'react';
import { motion } from 'framer-motion';

const HeroContent = ({ badgeText, title, subtitle, isActive, variants, fadeInUp }) => {
    return (
        <motion.div
            className="flex flex-col gap-6 text-left max-w-xl mx-auto lg:mx-0"
            initial="hidden"
            animate={isActive ? "visible" : "hidden"}
            variants={variants}
        >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 w-fit">
                <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                <span className="text-xs font-medium text-primary tracking-wide uppercase font-mono">{badgeText}</span>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-white mb-4">
                {title}
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-gray-400 text-lg sm:text-xl font-light leading-relaxed max-w-lg font-display">
                {subtitle}
            </motion.p>
        </motion.div>
    );
};

export default HeroContent;
