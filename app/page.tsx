'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full text-center">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">
          O Despertar da Fé
        </h1>
        <p className="text-gray-400 text-lg mb-12">
          Escolha a versão da landing page para visualizar
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Dark + Gold Version */}
          <Link href="/dark" className="group">
            <div className="relative overflow-hidden rounded-2xl border border-gold-500/30 bg-gradient-to-br from-dark-700 to-dark-900 p-8 transition-all duration-500 hover:border-gold-500/60 hover:shadow-[0_0_40px_rgba(212,160,18,0.2)]">
              <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-gold-500 to-gold-700 flex items-center justify-center">
                  <svg className="w-8 h-8 text-dark-900" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-serif font-bold text-gold-400 mb-3">
                  Versão Nobre
                </h2>
                <p className="text-gray-400 text-sm">
                  Dark com dourado • Estilo elegante e sofisticado
                </p>
                <div className="mt-6 inline-flex items-center text-gold-500 font-medium group-hover:gap-3 gap-2 transition-all">
                  Visualizar
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>

          {/* Light + Modern Version */}
          <Link href="/light" className="group">
            <div className="relative overflow-hidden rounded-2xl border border-sage-300/50 bg-gradient-to-br from-white to-cream-50 p-8 transition-all duration-500 hover:border-sage-400 hover:shadow-[0_0_40px_rgba(107,143,94,0.15)]">
              <div className="absolute inset-0 bg-gradient-to-br from-sage-100/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-sage-400 to-sage-600 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-display font-bold text-gray-800 mb-3">
                  Versão Moderna
                </h2>
                <p className="text-gray-500 text-sm">
                  Clara e leve • Design moderno e acolhedor
                </p>
                <div className="mt-6 inline-flex items-center text-sage-600 font-medium group-hover:gap-3 gap-2 transition-all">
                  Visualizar
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
