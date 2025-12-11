'use client';

import React, { useState, useEffect } from 'react';
import { exercises } from './data';
import { 
  Code2, 
  Menu, 
  X, 
  Copy, 
  Check, 
  Terminal, 
  PlayCircle,
  Monitor,
  Zap
} from 'lucide-react'; 

export default function HTMLPraktikum() {
  const [activeId, setActiveId] = useState("1.1");
  const [showSidebar, setShowSidebar] = useState(true);
  const [isCodeOpen, setIsCodeOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const currentModule = exercises.find((ex) => ex.id === activeId) || exercises[0];

  // Grouping kategori
  const categories = exercises.reduce((acc, curr) => {
    if (!acc[curr.category]) {
      acc[curr.category] = [];
    }
    acc[curr.category].push(curr);
    return acc;
  }, {} as Record<string, typeof exercises>);

  // Detect Mobile Screen on Mount
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
        setShowSidebar(false); // Default tutup di HP
      } else {
        setIsMobile(false);
        setShowSidebar(true); // Default buka di Laptop
      }
    };

    // Run on mount
    handleResize();

    // Listen to resize
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(currentModule.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleModuleClick = (id: string) => {
    setActiveId(id);
    setIsCodeOpen(false);
    if (isMobile) setShowSidebar(false); // Tutup sidebar setelah klik di HP
  };

  return (
    <div className="flex h-screen bg-[#0B1120] text-slate-200 font-sans selection:bg-yellow-500/30 selection:text-yellow-200 overflow-hidden relative">
      
      {/* MOBILE BACKDROP (Layar Gelap saat Sidebar Buka di HP) */}
      {isMobile && showSidebar && (
        <div 
          onClick={() => setShowSidebar(false)}
          className="fixed inset-0 bg-black/50 z-30 backdrop-blur-sm animate-in fade-in duration-200"
        />
      )}

      {/* SIDEBAR (Absolute di HP, Relative di Laptop) */}
      <aside 
        className={`
          ${showSidebar ? 'w-72 translate-x-0' : 'w-0 -translate-x-full md:w-0 md:translate-x-0'} 
          fixed md:relative z-40 h-full
          transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] 
          bg-[#0f172a] border-r border-slate-800 flex flex-col shadow-2xl overflow-hidden
        `}
      >
        <div className="p-5 border-b border-slate-800 flex items-center gap-3 bg-[#0f172a] sticky top-0 z-10 w-72">
          <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-2 rounded-xl text-black shadow-lg shadow-yellow-500/20 shrink-0">
            <Terminal size={20} strokeWidth={2.5} />
          </div>
          <div>
            <h1 className="font-bold text-lg text-white leading-tight tracking-tight">CodeLab HTML</h1>
            <p className="text-xs text-yellow-500 font-medium tracking-wide">Praktikum Informatika</p>
          </div>
          {/* Tombol Close khusus Mobile di dalam Sidebar */}
          <button onClick={() => setShowSidebar(false)} className="md:hidden ml-auto p-1 text-slate-400 hover:text-white">
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-8 w-72 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
            {Object.entries(categories).map(([categoryName, items]) => (
              <div key={categoryName} className="group">
                <h3 className="text-[10px] font-extrabold text-slate-500 mb-3 uppercase tracking-[0.2em] pl-2 border-l-2 border-slate-700 group-hover:border-yellow-500 group-hover:text-yellow-500 transition-colors duration-300 flex items-center gap-2">
                   {categoryName}
                </h3>
                <div className="space-y-1">
                  {items.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleModuleClick(item.id)}
                      className={`w-full text-left px-3 py-2.5 rounded-lg text-sm transition-all duration-300 flex items-center gap-3 group/btn relative overflow-hidden
                        ${activeId === item.id 
                          ? 'bg-blue-900/40 text-yellow-400 border border-yellow-500/30 shadow-[0_0_20px_rgba(234,179,8,0.1)] translate-x-1' 
                          : 'text-slate-400 hover:bg-slate-800 hover:text-white hover:translate-x-1'
                        }`}
                    >
                      {activeId === item.id && (
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-yellow-500 rounded-l-lg shadow-[0_0_10px_#eab308]" />
                      )}
                      <span className={`font-mono text-xs transition-colors ${activeId === item.id ? 'text-yellow-500 font-bold' : 'text-slate-600'}`}>
                        {item.id}
                      </span>
                      <span className="truncate font-medium">{item.title.split(' ').slice(1).join(' ')}</span>
                      {activeId === item.id && <Zap size={14} className="ml-auto text-yellow-500 fill-yellow-500 animate-pulse" />}
                    </button>
                  ))}
                </div>
              </div>
            ))}
            <div className="h-20"></div> 
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 flex flex-col h-full overflow-hidden relative bg-[#0B1120] w-full">
        
        {/* Header Responsive */}
        <header className="h-16 bg-[#0B1120]/80 backdrop-blur-md border-b border-slate-800 flex items-center justify-between px-4 sm:px-6 shadow-md z-10 shrink-0">
          <div className="flex items-center gap-3 sm:gap-4 overflow-hidden">
            <button onClick={() => setShowSidebar(!showSidebar)} className="p-2 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white transition-all duration-200 active:scale-95 shrink-0">
                <Menu size={20}/>
            </button>
            <div className="flex flex-col animate-in slide-in-from-left-4 duration-500 overflow-hidden">
                <h2 className="text-sm sm:text-lg font-bold text-slate-100 flex items-center gap-2 sm:gap-3">
                    <span className="bg-blue-600 text-white px-1.5 py-0.5 sm:px-2 sm:py-0.5 rounded text-[10px] sm:text-xs font-mono shadow-lg shadow-blue-500/30 border border-blue-400 shrink-0">
                        {currentModule.id}
                    </span>
                    <span className="truncate">{currentModule.title}</span>
                </h2>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
             <button onClick={() => setIsCodeOpen(true)} className="group flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-bold transition-all duration-300 shadow-[0_0_15px_rgba(250,204,21,0.3)] hover:shadow-[0_0_25px_rgba(250,204,21,0.5)] active:scale-95 transform">
                <Code2 size={16} className="group-hover:rotate-12 transition-transform stroke-2"/>
                <span className="hidden sm:inline">Lihat Kode</span>
                <span className="sm:hidden">Kode</span>
             </button>
          </div>
        </header>

        {/* Workspace */}
        <div className="flex-1 p-3 sm:p-6 overflow-hidden flex flex-col gap-4 sm:gap-6">
            {/* Preview Box */}
            <div className="flex-1 flex flex-col bg-[#1e293b] rounded-xl sm:rounded-2xl shadow-2xl border border-slate-700 overflow-hidden ring-1 ring-white/5 transition-all duration-500 hover:border-slate-600">
                <div className="bg-[#0f172a] border-b border-slate-800 px-3 py-2 sm:px-4 sm:py-3 flex items-center gap-3 sm:gap-4 shrink-0">
                    <div className="flex gap-1.5 sm:gap-2 group">
                        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500 group-hover:animate-pulse"></div>
                        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="flex-1 bg-[#1e293b] rounded-md px-2 sm:px-4 py-1 sm:py-1.5 flex items-center gap-2 sm:gap-3 border border-slate-700 transition-colors">
                        <Monitor size={12} className="text-blue-400 shrink-0" />
                        <span className="text-[10px] sm:text-xs text-slate-400 font-mono tracking-wide truncate">
                            localhost:3000/.../{currentModule.id}
                        </span>
                    </div>
                </div>
                <div className="flex-1 bg-white relative w-full h-full">
                    <iframe 
                        key={activeId} 
                        srcDoc={currentModule.code}
                        title="output"
                        className="w-full h-full border-none"
                        sandbox="allow-scripts"
                    />
                </div>
            </div>

            {/* Description */}
            <div className="bg-[#0f172a] p-4 sm:p-5 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-400 shadow-lg flex items-start gap-3 sm:gap-4 shrink-0 hover:border-blue-500/50 transition-colors group">
                <div className="p-2 sm:p-2.5 bg-blue-500/10 rounded-xl text-blue-400 mt-0.5 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                    <PlayCircle size={18} className="sm:w-5 sm:h-5" />
                </div>
                <div>
                    <h4 className="text-slate-200 font-bold mb-1 flex items-center gap-2">Instruksi <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></span></h4>
                    <p className="leading-relaxed text-slate-400">{currentModule.description}</p>
                </div>
            </div>
        </div>

        {/* MODAL CODE RESPONSIVE */}
        {isCodeOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
            <div className="bg-[#0B1120] w-full max-w-4xl rounded-xl sm:rounded-2xl shadow-2xl border border-slate-700 overflow-hidden flex flex-col max-h-[85vh] sm:max-h-[90vh] animate-in zoom-in-95 slide-in-from-bottom-5 duration-300">
              <div className="flex items-center justify-between px-4 py-3 sm:px-5 sm:py-4 border-b border-slate-800 bg-[#0f172a]">
                <div className="flex items-center gap-2 sm:gap-3">
                    <div className="bg-yellow-500 p-1 rounded text-black font-bold"><Code2 size={16} /></div>
                    <span className="text-slate-200 font-mono text-xs sm:text-sm font-medium">source_code.html</span>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={handleCopy} className="px-2 py-1.5 sm:px-3 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white transition-all flex items-center gap-2 text-[10px] sm:text-xs font-medium border border-transparent hover:border-slate-600">
                    {copied ? <Check size={14} className="text-green-400"/> : <Copy size={14}/>} {copied ? "Tersalin!" : "Salin"}
                  </button>
                  <div className="w-px h-4 bg-slate-700 mx-1"></div>
                  <button onClick={() => setIsCodeOpen(false)} className="p-1.5 hover:bg-red-500/20 hover:text-red-400 rounded-lg text-slate-500 transition-colors"><X size={18} /></button>
                </div>
              </div>
              <div className="p-0 overflow-auto flex-1 bg-[#0d1117] relative group">
                <div className="absolute left-0 top-4 bottom-4 w-8 sm:w-12 text-right pr-2 sm:pr-4 text-slate-700 font-mono text-[10px] sm:text-sm select-none border-r border-slate-800/50 hidden sm:block">
                     {currentModule.code.split('\n').map((_, i) => (<div key={i} className="leading-6">{i + 1}</div>))}
                </div>
                <pre className="p-4 sm:pl-16 text-blue-200 font-mono text-xs sm:text-sm leading-5 sm:leading-6 tab-4 selection:bg-yellow-500/40 selection:text-white">
                    {currentModule.code}
                </pre>
              </div>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}