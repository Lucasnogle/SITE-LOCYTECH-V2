import React from 'react';

const Certificated = () => {
    const certificates = [
        { text: "SSL Seguro", icon: "lock" },
        { text: "Parceiro Google", icon: "verified" },
        { text: "Proteção LGPD", icon: "verified_user" },
        { text: "Top Web Design RS", icon: "emoji_events" }
    ];

    return (
        <section className="bg-gray-50 border-y border-gray-200 py-12">
            <div className="container mx-auto px-6">
                <div className="flex flex-wrap justify-center gap-8 md:gap-16 grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100">
                    {certificates.map((cert, index) => (
                        <div key={index} className="flex items-center gap-3 text-gray-500 font-semibold group cursor-default">
                            <span className="material-icons text-2xl group-hover:text-primary transition-colors">{cert.icon}</span>
                            <span>{cert.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificated;
