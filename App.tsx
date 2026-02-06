
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { HeroScene, DigitalNetworkScene } from './components/QuantumScene';
import { DigitalVisibilityDiagram, GrowthPathDiagram, EngagementMetricDiagram } from './components/Diagrams';
import { ArrowDown, Menu, X, Smartphone, Globe, Users, Zap } from 'lucide-react';

const FacilitatorCard = ({ name, role, delay }: { name: string, role: string, delay: string }) => {
  return (
    <div className="flex flex-col group animate-fade-in-up items-center p-8 bg-white rounded-xl border border-stone-200 shadow-sm hover:shadow-md transition-all duration-300 w-full max-w-xs hover:border-nobel-gold/50" style={{ animationDelay: delay }}>
      <h3 className="font-serif text-2xl text-stone-900 text-center mb-3">{name}</h3>
      <div className="w-12 h-0.5 bg-nobel-gold mb-4 opacity-60"></div>
      <p className="text-xs text-stone-500 font-bold uppercase tracking-widest text-center leading-relaxed">{role}</p>
    </div>
  );
};

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F8F4] text-stone-800 selection:bg-nobel-gold selection:text-white">
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#F9F8F4]/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-4 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-8 h-8 bg-nobel-gold rounded-full flex items-center justify-center text-white font-serif font-bold text-xl shadow-sm pb-1">𝜑</div>
            <span className={`font-serif font-bold text-lg tracking-wide transition-opacity ${scrolled ? 'opacity-100' : 'opacity-0 md:opacity-100'}`}>
              PRESENCIA <span className="font-normal text-stone-500">DIGITAL</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-stone-600">
            <a href="#introduccion" onClick={scrollToSection('introduccion')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">Introducción</a>
            <a href="#estrategia" onClick={scrollToSection('estrategia')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">Estrategia</a>
            <a href="#impacto" onClick={scrollToSection('impacto')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">Impacto</a>
            <a href="#facilitadores" onClick={scrollToSection('facilitadores')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">Equipo</a>
            <button 
              onClick={() => window.open('https://wa.me/', '_blank')}
              className="px-5 py-2 bg-stone-900 text-white rounded-full hover:bg-stone-800 transition-colors shadow-sm cursor-pointer"
            >
              Inscribirse
            </button>
          </div>

          <button className="md:hidden text-stone-900 p-2" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#F9F8F4] flex flex-col items-center justify-center gap-8 text-xl font-serif animate-fade-in">
            <a href="#introduccion" onClick={scrollToSection('introduccion')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">Introducción</a>
            <a href="#estrategia" onClick={scrollToSection('estrategia')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">Estrategia</a>
            <a href="#impacto" onClick={scrollToSection('impacto')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">Impacto</a>
            <a href="#facilitadores" onClick={scrollToSection('facilitadores')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">Equipo</a>
            <button 
              onClick={() => {setMenuOpen(false); window.open('https://wa.me/', '_blank');}}
              className="px-6 py-3 bg-stone-900 text-white rounded-full shadow-lg cursor-pointer"
            >
              Inscribirse por WhatsApp
            </button>
        </div>
      )}

      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <HeroScene />
        
        <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(249,248,244,0.92)_0%,rgba(249,248,244,0.6)_50%,rgba(249,248,244,0.3)_100%)]" />

        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="inline-block mb-4 px-3 py-1 border border-nobel-gold text-nobel-gold text-xs tracking-[0.2em] uppercase font-bold rounded-full backdrop-blur-sm bg-white/30">
            Jornada de Emprendimiento 4.0
          </div>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium leading-tight md:leading-[1.1] mb-8 text-stone-900 drop-shadow-sm">
            Fundamentos Digitales <br/><span className="italic font-normal text-stone-600 text-3xl md:text-5xl block mt-4">& Presencia en Redes Sociales</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-stone-700 font-light leading-relaxed mb-12">
            Potencia tu negocio en Las Vueltas y Ojos de Agua. Domina las herramientas digitales que impulsarán tu crecimiento.
          </p>
          
          <div className="flex justify-center">
             <a href="#introduccion" onClick={scrollToSection('introduccion')} className="group flex flex-col items-center gap-2 text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors cursor-pointer">
                <span>CONOCE MÁS</span>
                <span className="p-2 border border-stone-300 rounded-full group-hover:border-stone-900 transition-colors bg-white/50">
                    <ArrowDown size={16} />
                </span>
             </a>
          </div>
        </div>
      </header>

      <main>
        {/* Introduccion */}
        <section id="introduccion" className="py-24 bg-white">
          <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4">
              <div className="inline-block mb-3 text-xs font-bold tracking-widest text-stone-500 uppercase">La Convocatoria</div>
              <h2 className="font-serif text-4xl mb-6 leading-tight text-stone-900">El Siguiente Nivel Digital</h2>
              <div className="w-16 h-1 bg-nobel-gold mb-6"></div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-stone-600">
                    <Zap className="text-nobel-gold" size={20} />
                    <span>Ojos de Agua: Viernes 6 Feb</span>
                </div>
                <div className="flex items-center gap-3 text-stone-600">
                    <Smartphone className="text-nobel-gold" size={20} />
                    <span>Trae tu smartphone cargado</span>
                </div>
              </div>
            </div>
            <div className="md:col-span-8 text-lg text-stone-600 leading-relaxed space-y-6">
              <p>
                <span className="text-5xl float-left mr-3 mt-[-8px] font-serif text-nobel-gold">H</span>oy más que nunca, la presencia digital es el motor que impulsa a los jóvenes emprendedores. En colaboración con <strong>Plan International Inc.</strong>, presentamos una jornada intensiva diseñada para transformar tu iniciativa local en una marca conectada.
              </p>
              <p>
                Desde entender los ecosistemas digitales hasta dominar las métricas de Instagram y WhatsApp Business, esta jornada te brindará las llaves de la <strong className="text-stone-900 font-medium">Industria 4.0</strong>. Aprende a crear contenido que resuene y estrategias que conviertan seguidores en clientes leales en Las Vueltas y Ojos de Agua.
              </p>
            </div>
          </div>
        </section>

        {/* The Strategy: Visibility */}
        <section id="estrategia" className="py-24 bg-white border-t border-stone-100">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-stone-100 text-stone-600 text-xs font-bold tracking-widest uppercase rounded-full mb-6 border border-stone-200">
                            <Globe size={14}/> VISIBILIDAD LOCAL
                        </div>
                        <h2 className="font-serif text-4xl md:text-5xl mb-6 text-stone-900">El Ecosistema Digital</h2>
                        <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                           Un negocio moderno no es solo un local físico; es una red de puntos de contacto digitales. Aprenderemos a mapear tu presencia para que tus clientes te encuentren en el momento justo.
                        </p>
                        <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                            Interactúa con nuestro simulador para ver cómo cada canal (WhatsApp, FB, IG) amplifica tu mensaje y atrae a la comunidad local hacia tu propuesta de valor.
                        </p>
                    </div>
                    <div>
                        <DigitalVisibilityDiagram />
                    </div>
                </div>
            </div>
        </section>

        {/* Strategy: Growth Path */}
        <section className="py-24 bg-stone-900 text-stone-100 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="w-96 h-96 rounded-full bg-stone-600 blur-[100px] absolute top-[-100px] left-[-100px]"></div>
                <div className="w-96 h-96 rounded-full bg-nobel-gold blur-[100px] absolute bottom-[-100px] right-[-100px]"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                     <div className="order-2 lg:order-1">
                        <GrowthPathDiagram />
                     </div>
                     <div className="order-1 lg:order-2">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-stone-800 text-nobel-gold text-xs font-bold tracking-widest uppercase rounded-full mb-6 border border-stone-700">
                            TRANSFORMACIÓN
                        </div>
                        <h2 className="font-serif text-4xl md:text-5xl mb-6 text-white">Estrategia 4.0</h2>
                        <p className="text-lg text-stone-400 mb-6 leading-relaxed">
                            No basta con "estar" en redes sociales. La clave es el <strong>Marketing de Atracción</strong>. Entenderemos el viaje del cliente desde el descubrimiento hasta la compra final.
                        </p>
                        <p className="text-lg text-stone-400 leading-relaxed">
                            Analizaremos cómo las herramientas digitales gratuitas pueden automatizar procesos y darte más tiempo para enfocarte en lo que realmente amas de tu negocio.
                        </p>
                     </div>
                </div>
            </div>
        </section>

        {/* Metrics */}
        <section className="py-24 bg-[#F9F8F4]">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <h2 className="font-serif text-4xl md:text-5xl mb-6 text-stone-900">Midiendo el Éxito</h2>
                    <p className="text-lg text-stone-600 leading-relaxed">
                        Los datos no mienten. Aprenderemos a interpretar las estadísticas de tus redes para ajustar el rumbo y asegurar que cada publicación cuente. Compara el alcance orgánico frente a estrategias dirigidas.
                    </p>
                </div>
                <div className="max-w-3xl mx-auto">
                    <EngagementMetricDiagram />
                </div>
            </div>
        </section>

        {/* Impact */}
        <section id="impacto" className="py-24 bg-white border-t border-stone-200">
             <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12">
                <div className="md:col-span-5 relative">
                    <div className="aspect-square bg-[#F5F4F0] rounded-xl overflow-hidden relative border border-stone-200 shadow-inner">
                        <DigitalNetworkScene />
                        <div className="absolute bottom-4 left-0 right-0 text-center text-xs text-stone-400 font-serif italic">Visualización de conectividad en Las Vueltas y Ojos de Agua</div>
                    </div>
                </div>
                <div className="md:col-span-7 flex flex-col justify-center">
                    <div className="inline-block mb-3 text-xs font-bold tracking-widest text-stone-500 uppercase">IMPACTO COMUNITARIO</div>
                    <h2 className="font-serif text-4xl mb-6 text-stone-900">Empoderamiento Juvenil</h2>
                    <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                        Esta jornada es más que una clase de tecnología; es un espacio de networking donde los jóvenes de la zona pueden colaborar, compartir ideas y fortalecer el tejido empresarial local.
                    </p>
                    <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                        Al finalizar, no solo tendrás nuevas habilidades, sino una hoja de ruta clara para que tu negocio crezca junto a tu comunidad.
                    </p>
                    
                    <div className="p-6 bg-[#F9F8F4] border border-stone-200 rounded-lg border-l-4 border-l-nobel-gold">
                        <p className="font-serif italic text-xl text-stone-800 mb-4">
                            "Nuestra meta es que cada joven emprendedor tenga las herramientas digitales para competir y prosperar en el mercado global desde su propio municipio."
                        </p>
                        <span className="text-sm font-bold text-stone-500 tracking-wider uppercase">— Plan International Inc.</span>
                    </div>
                </div>
             </div>
        </section>

        {/* Team */}
        <section id="facilitadores" className="py-24 bg-[#F5F4F0] border-t border-stone-300">
           <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="inline-block mb-3 text-xs font-bold tracking-widest text-stone-500 uppercase">EL EQUIPO</div>
                    <h2 className="font-serif text-3xl md:text-5xl mb-4 text-stone-900">Facilitadores Expertos</h2>
                    <p className="text-stone-500 max-w-2xl mx-auto">Una colaboración estratégica para el desarrollo local.</p>
                </div>
                
                <div className="flex flex-col md:flex-row gap-8 justify-center items-center flex-wrap">
                    <FacilitatorCard 
                        name="Plan International" 
                        role="Organización Líder" 
                        delay="0s" 
                    />
                    <FacilitatorCard 
                        name="Alcaldía Ojos de Agua" 
                        role="Sede Colaboradora" 
                        delay="0.1s" 
                    />
                    <FacilitatorCard 
                        name="Especialistas Digitales" 
                        role="Facilitadores" 
                        delay="0.2s" 
                    />
                </div>
                <div className="text-center mt-12">
                    <p className="text-stone-500 italic">Comprometidos con el desarrollo del potencial de la juventud salvadoreña.</p>
                </div>
           </div>
        </section>

      </main>

      <footer className="bg-stone-900 text-stone-400 py-16">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
                <div className="text-white font-serif font-bold text-2xl mb-2">Emprendimiento 4.0</div>
                <p className="text-sm">Jornada de Fundamentos Digitales y Presencia en Redes</p>
            </div>
            <div className="flex gap-4">
                <Smartphone size={24} className="text-nobel-gold opacity-50" />
                <Users size={24} className="text-nobel-gold opacity-50" />
                <Globe size={24} className="text-nobel-gold opacity-50" />
            </div>
        </div>
        <div className="text-center mt-12 text-xs text-stone-600">
            © 2025 Plan International Inc. - Las Vueltas & Ojos de Agua. Sitio diseñado para la convocatoria local.
        </div>
      </footer>
    </div>
  );
};

export default App;
