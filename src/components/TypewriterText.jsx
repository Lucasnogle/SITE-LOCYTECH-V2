import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TypewriterText = ({ text }) => {
    return (
        <span className="inline-block relative min-w-[240px] sm:min-w-[300px] text-left">
            <AnimatePresence mode="wait">
                <motion.span
                    key={text}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="text-gradient-animated block whitespace-nowrap"
                >
                    {text}
                </motion.span>
            </AnimatePresence>
            {/* Invisible placeholder to maintain width */}
            <span className="invisible h-0 block overflow-hidden">{text}</span>
        </span>
    );
};

export default TypewriterText;
