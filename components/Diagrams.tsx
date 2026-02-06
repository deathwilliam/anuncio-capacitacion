
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Instagram, Send, BarChart2, Share2, Globe } from 'lucide-react';

// --- DIGITAL VISIBILITY DIAGRAM ---
export const DigitalVisibilityDiagram: React.FC = () => {
  const [activeNodes, setActiveNodes] = useState<number[]>([]);
  
  // Data nodes: Digital Channels
  // Connectors: Synergies
  
  const toggleNode = (id: number) => {
    setActiveNodes(prev => prev.includes(id) ? prev.filter(e => e !== id) : [...prev, id]);
  };

  const getVisibilityScore = () => {
    return activeNodes.length * 25; // Simple multiplier
  };

  const channels = [
    { id: 0, x: '20%', y: '20%', label: 'WhatsApp', icon: <Send size={14} /> },
    { id: 1, x: '80%', y: '20%', label: 'Instagram', icon: <Instagram size={14} /> },
    { id: 2, x: '50%', y: '50%', label: 'Tu Marca', icon: <Smartphone size={14} /> },
    { id: 3, x: '20%', y: '80%', label: 'Facebook', icon: <Share2 size={14} /> },
    { id: 4, x: '80%', y: '80%', label: 'Local', icon: <Globe size={14} /> },
  ];

  return (
    <div className="flex flex-col items-center p-8 bg-white rounded-xl shadow-sm border border-stone-200 my-8">
      <h3 className="font-serif text-xl mb-4 text-stone-800">Mapa de Alcance Digital</h3>
      <p className="text-sm text-stone-500 mb-6 text-center max-w-md">
        Activa los canales digitales para ver cómo aumenta la <strong>Visibilidad de tu Marca</strong> en la comunidad.
      </p>
      
      <div className="relative w-64 h-64 bg-[#F5F4F0] rounded-lg border border-stone-200 p-4 overflow-hidden">
         {/* Network lines */}
         <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
            {channels.map((ch, i) => (
                channels.slice(i + 1).map((target, j) => (
                    <line 
                        key={`${i}-${j}`}
                        x1={ch.x} y1={ch.y} x2={target.x} y2={target.y}
                        stroke={activeNodes.includes(ch.id) && activeNodes.includes(target.id) ? '#C5A059' : '#e5e7eb'}
                        strokeWidth={activeNodes.includes(ch.id) && activeNodes.includes(target.id) ? 2 : 1}
                        className="transition-all duration-500"
                    />
                ))
            ))}
         </svg>

         {channels.map(ch => (
             <button
                key={`node-${ch.id}`}
                onClick={() => toggleNode(ch.id)}
                className={`absolute w-12 h-12 -ml-6 -mt-6 rounded-full border-2 flex flex-col items-center justify-center transition-all duration-300 z-10 ${activeNodes.includes(ch.id) ? 'bg-stone-900 border-nobel-gold text-nobel-gold shadow-lg scale-110' : 'bg-white border-stone-200 hover:border-stone-400 text-stone-400'}`}
                style={{ left: ch.x, top: ch.y }}
             >
                {ch.icon}
                <span className="text-[7px] uppercase font-bold mt-1">{ch.label}</span>
             </button>
         ))}
      </div>

      <div className="mt-8 w-full max-w-xs">
          <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">
            <span>Alcance Estimado</span>
            <span>{getVisibilityScore()}%</span>
          </div>
          <div className="h-2 w-full bg-stone-100 rounded-full overflow-hidden">
            <motion.div 
                className="h-full bg-nobel-gold" 
                initial={{ width: 0 }}
                animate={{ width: `${getVisibilityScore()}%` }}
            />
          </div>
      </div>
      
      <div className="mt-4 h-6 text-sm font-serif italic text-stone-600">
        {activeNodes.length === 0 ? "Sin presencia activa." : activeNodes.length < 3 ? "Empezando a conectar..." : "¡Marca conectada!"}
      </div>
    </div>
  );
};

// --- GROWTH PATH DIAGRAM ---
export const GrowthPathDiagram: React.FC = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
        setStep(s => (s + 1) % 4);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const steps = [
    { label: "Identidad", icon: <Globe size={24} />, desc: "Define quién eres" },
    { label: "Contenido", icon: <Instagram size={24} />, desc: "Crea valor visual" },
    { label: "Difusión", icon: <Send size={24} />, desc: "Llega a tu público" },
    { label: "Venta", icon: <Smartphone size={24} />, desc: "Cierra el ciclo" }
  ];

  return (
    <div className="flex flex-col items-center p-8 bg-[#F5F4F0] rounded-xl border border-stone-200 my-8">
      <h3 className="font-serif text-xl mb-4 text-stone-900">Ruta de Crecimiento Digital</h3>
      <p className="text-sm text-stone-600 mb-6 text-center max-w-md">
        El proceso sistemático para llevar tu emprendimiento de local a conectado.
      </p>

      <div className="relative w-full max-w-lg h-56 bg-white rounded-lg shadow-inner overflow-hidden mb-6 border border-stone-200 flex items-center justify-around p-4">
        
        {steps.map((s, i) => (
            <div key={i} className="flex flex-col items-center gap-3 relative">
                <div className={`w-16 h-16 rounded-xl border-2 flex items-center justify-center transition-all duration-700 ${step === i ? 'bg-stone-900 border-nobel-gold text-nobel-gold scale-110 shadow-lg' : 'bg-stone-50 border-stone-200 text-stone-300'}`}>
                    {s.icon}
                </div>
                <div className="text-center">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-stone-500 block">{s.label}</span>
                    {step === i && <motion.span initial={{opacity: 0}} animate={{opacity: 1}} className="text-[9px] text-nobel-gold italic">{s.desc}</motion.span>}
                </div>
                {i < steps.length - 1 && (
                    <div className="absolute top-8 -right-8 text-stone-200">
                        <motion.div animate={{ x: step === i ? [0, 5, 0] : 0, opacity: step === i ? 1 : 0.3 }}>→</motion.div>
                    </div>
                )}
            </div>
        ))}

      </div>

      <div className="flex gap-2">
          {steps.map((_, s) => (
              <div key={s} className={`h-1 rounded-full transition-all duration-300 ${step === s ? 'w-8 bg-nobel-gold' : 'w-2 bg-stone-300'}`}></div>
          ))}
      </div>
    </div>
  );
};

// --- ENGAGEMENT METRIC CHART ---
export const EngagementMetricDiagram: React.FC = () => {
    const [strategy, setStrategy] = useState<'basica' | 'optimizada' | '4.0'>('optimizada');
    
    // Values represent Engagement Rates or Reach (arbitrary units)
    const data = {
        basica: { reach: 15, interaction: 5 },
        optimizada: { reach: 45, interaction: 25 },
        '4.0': { reach: 95, interaction: 65 } 
    };

    const currentData = data[strategy];
    const maxVal = 100;
    
    return (
        <div className="flex flex-col md:flex-row gap-8 items-center p-8 bg-stone-900 text-stone-100 rounded-xl my-8 border border-stone-800 shadow-lg">
            <div className="flex-1 min-w-[240px]">
                <h3 className="font-serif text-xl mb-2 text-nobel-gold">Alcance vs Estrategia</h3>
                <p className="text-stone-400 text-sm mb-4 leading-relaxed">
                    Compara el impacto de publicar sin plan versus aplicar las herramientas de la Industria 4.0.
                </p>
                <div className="flex gap-2 mt-6">
                    {(['basica', 'optimizada', '4.0'] as const).map((s) => (
                        <button 
                            key={s}
                            onClick={() => setStrategy(s)} 
                            className={`px-3 py-1.5 rounded text-xs font-medium transition-all duration-200 border uppercase tracking-widest ${strategy === s ? 'bg-nobel-gold text-stone-900 border-nobel-gold' : 'bg-transparent text-stone-400 border-stone-700 hover:border-stone-500 hover:text-stone-200'}`}
                        >
                            {s}
                        </button>
                    ))}
                </div>
                <div className="mt-6 font-mono text-xs text-stone-500 flex items-center gap-2">
                    <BarChart2 size={14} className="text-nobel-gold" /> 
                    <span>MÉTRICA DE IMPACTO (MAYOR ES MEJOR)</span>
                </div>
            </div>
            
            <div className="relative w-64 h-72 bg-stone-800/50 rounded-xl border border-stone-700/50 p-6 flex justify-around items-end">
                <div className="absolute inset-0 p-6 flex flex-col justify-between pointer-events-none opacity-10">
                   <div className="w-full h-[1px] bg-stone-400"></div>
                   <div className="w-full h-[1px] bg-stone-400"></div>
                   <div className="w-full h-[1px] bg-stone-400"></div>
                   <div className="w-full h-[1px] bg-stone-400"></div>
                </div>

                {/* Reach Bar */}
                <div className="w-20 flex flex-col justify-end items-center h-full z-10">
                    <div className="flex-1 w-full flex items-end justify-center relative mb-3">
                        <div className="absolute -top-5 w-full text-center text-[10px] font-mono text-stone-400 font-bold bg-stone-900/90 py-1 px-2 rounded backdrop-blur-sm border border-stone-700/50">{currentData.reach}%</div>
                        <motion.div 
                            className="w-full bg-stone-600 rounded-t-md"
                            initial={{ height: 0 }}
                            animate={{ height: `${(currentData.reach / maxVal) * 100}%` }}
                        />
                    </div>
                    <div className="h-6 flex items-center text-[8px] font-bold text-stone-500 uppercase tracking-wider">Alcance</div>
                </div>

                {/* Interaction Bar */}
                <div className="w-20 flex flex-col justify-end items-center h-full z-10">
                     <div className="flex-1 w-full flex items-end justify-center relative mb-3">
                        <div className="absolute -top-5 w-full text-center text-[10px] font-mono text-nobel-gold font-bold bg-stone-900/90 py-1 px-2 rounded backdrop-blur-sm border border-nobel-gold/30">{currentData.interaction}%</div>
                        <motion.div 
                            className="w-full bg-nobel-gold rounded-t-md shadow-[0_0_20px_rgba(197,160,89,0.25)] relative overflow-hidden"
                            initial={{ height: 0 }}
                            animate={{ height: `${(currentData.interaction / maxVal) * 100}%` }}
                        >
                           <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-white/20"></div>
                        </motion.div>
                    </div>
                     <div className="h-6 flex items-center text-[8px] font-bold text-nobel-gold uppercase tracking-wider">Interacción</div>
                </div>
            </div>
        </div>
    )
}
