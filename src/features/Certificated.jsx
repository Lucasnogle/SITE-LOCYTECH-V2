import React from 'react';
import WaveDivider from '../components/ui/WaveDivider';

const Certificated = () => {
    const certificates = [
        { text: "SSL Seguro", icon: "lock" },
        { text: "Parceiro Google", icon: "verified" },
        { text: "Proteção LGPD", icon: "verified_user" },
        { text: "Top Web Design RS", icon: "emoji_events" }
    ];

    return (
        <section className="bg-gray-50 dark:bg-[#020617] py-12 relative overflow-hidden transition-colors duration-300">
            <div className="container mx-auto px-6 relative z-[60]">
                <div className="flex flex-wrap justify-center gap-8 md:gap-16 grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100">
                    {certificates.map((cert, index) => (
                        <div key={index} className="flex items-center gap-3 text-gray-500 dark:text-gray-400 font-semibold group cursor-default">
                            <span className="material-icons text-2xl group-hover:text-primary transition-colors">{cert.icon}</span>
                            <span>{cert.text}</span>
                        </div>
                    ))}
                </div>
            </div>

            <WaveDivider lightFill="#f8fafc" darkFill="#020617" type="curve-right" />
        </section>
    );
};

export default Certificated;
