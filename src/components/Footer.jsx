import logoPeacock from '../assets/logo-locytech-dark.png';

const Footer = () => {
    return (
        <footer className="bg-darkerblue text-white pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-16 border-b border-white/10 pb-16">
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-3 mb-6">
                            <img src={logoPeacock} alt="LocyTech Logo" className="h-10 w-auto object-contain" />
                            <div className="text-2xl font-bold">
                                Locy<span className="text-primary">Tech</span>
                            </div>
                        </div>
                        Site profissional, rápido e que passa confiança.
                        Orçamento no WhatsApp.
                        <div className="flex gap-4">
                            {['instagram', 'linkedin', 'facebook'].map((social) => (
                                <a
                                    key={social}
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                                >
                                    <span className="material-icons text-sm">link</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6 text-white/90">Links Rápidos</h4>
                        <ul className="space-y-4">
                            <li><a href="#hero" className="text-gray-400 hover:text-primary transition-colors">Início</a></li>
                            <li><a href="#about" className="text-gray-400 hover:text-primary transition-colors">Sobre Nós</a></li>
                            <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors">Serviços</a></li>
                            <li><a href="#plans" className="text-gray-400 hover:text-primary transition-colors">Planos</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6 text-white/90">Legal</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Política de Privacidade</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Termos de Uso</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">LGPD</a></li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
                    <div>
                        &copy; {new Date().getFullYear()} LocyTech. Todos os direitos reservados.
                    </div>
                    <div className="flex items-center gap-2">
                        <span>Feito com</span>
                        <span className="text-red-500">❤</span>
                        <span>no Brasil</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
