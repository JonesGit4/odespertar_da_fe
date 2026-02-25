'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import CountdownTimer from '@/components/CountdownTimer';
import EmailCapture from '@/components/EmailCapture';
import { 
  BookOpen, Users, Lightbulb, Star, CheckCircle, 
  Play, Award, Camera, Ticket, Flame, 
  Heart, Shield, Sparkles, ChevronDown, Globe, MapPin
} from 'lucide-react';

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('active');
        });
      },
      { threshold: 0.1 }
    );
    const elements = ref.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function DarkLandingPage() {
  const pageRef = useReveal();

  return (
    <div ref={pageRef} className="dark-theme min-h-screen bg-dark-900 text-white overflow-x-hidden">
      
      {/* ══════════ HERO ══════════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-700/50 to-dark-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,160,18,0.08)_0%,transparent_70%)]" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
        
        {/* Floating particles */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-gold-500/30 rounded-full animate-float" />
        <div className="absolute top-40 right-20 w-1.5 h-1.5 bg-gold-500/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-1/4 w-1 h-1 bg-gold-500/40 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Text */}
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/20 bg-gold-500/5 mb-8 animate-fade-in">
                <Flame className="w-4 h-4 text-gold-500" />
                <span className="text-gold-400 text-sm font-medium tracking-wider uppercase">Curso Online Exclusivo</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif font-black leading-[0.95] mb-6 animate-slide-up">
                <span className="text-white">O</span>
                <br />
                <span className="text-gradient-gold">Despertar</span>
                <br />
                <span className="text-white">da </span>
                <span className="text-gradient-gold">Fé</span>
              </h1>
              
              <p className="text-lg text-gray-400 max-w-lg mb-10 animate-fade-in leading-relaxed" style={{ animationDelay: '0.3s' }}>
                Uma jornada transformadora que vai despertar o poder da fé na sua vida.
                Descubra uma vida plena, com propósito e cheia de significado.
              </p>
              
              <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <EmailCapture variant="dark" buttonText="🔔 Avise-me" />
                <p className="text-gray-600 text-xs mt-4">Seja o primeiro a saber quando as inscrições abrirem</p>
              </div>
            </div>
            
            {/* Right - Photo */}
            <div className="relative animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="relative aspect-[3/4] max-w-md mx-auto rounded-2xl overflow-hidden">
                <Image
                  src="/images/victor-portrait.jpeg"
                  alt="Victor - O Despertar da Fé"
                  fill
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent" />
              </div>
              {/* Gold corner accents */}
              <div className="absolute -top-2 -left-2 w-10 h-10 border-t-2 border-l-2 border-gold-500/50 rounded-tl-lg" />
              <div className="absolute -top-2 -right-2 w-10 h-10 border-t-2 border-r-2 border-gold-500/50 rounded-tr-lg" />
              <div className="absolute -bottom-2 -left-2 w-10 h-10 border-b-2 border-l-2 border-gold-500/50 rounded-bl-lg" />
              <div className="absolute -bottom-2 -right-2 w-10 h-10 border-b-2 border-r-2 border-gold-500/50 rounded-br-lg" />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-gold-500/40" />
        </div>
      </section>

      {/* ══════════ O QUE É ══════════ */}
      <section className="py-24 px-4 relative">
        <div className="section-divider-gold mb-24" />
        <div className="max-w-5xl mx-auto">
          <div className="reveal text-center mb-16">
            <span className="text-gold-500/60 text-sm font-medium tracking-[0.3em] uppercase">Sobre o curso</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-6">
              O que é o <span className="text-gradient-gold">Despertar da Fé</span>?
            </h2>
            <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto" />
          </div>
          
          <div className="reveal grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                O <strong className="text-gold-400">Despertar da Fé</strong> é mais do que um curso — é uma experiência imersiva projetada para transformar sua relação com a fé, com Deus e consigo mesmo.
              </p>
              <p className="text-gray-400 leading-relaxed mb-6">
                Através de aulas profundas, materiais exclusivos e uma comunidade engajada, você será guiado em uma jornada de autoconhecimento e renovação espiritual que vai impactar todas as áreas da sua vida.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Aulas em vídeo', 'Material exclusivo', 'Comunidade', 'Certificado'].map((item) => (
                  <span key={item} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-sm">
                    <CheckCircle className="w-3.5 h-3.5" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border-glow-gold">
                <Image
                  src="/images/victor-dom-rodrigo.jpeg"
                  alt="Victor com Dom Rodrigo"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white/80 text-sm font-medium">Victor com Dom Rodrigo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ PARA QUEM ══════════ */}
      <section className="py-24 px-4 bg-gradient-to-b from-dark-900 via-dark-800/50 to-dark-900">
        <div className="max-w-5xl mx-auto">
          <div className="reveal text-center mb-16">
            <span className="text-gold-500/60 text-sm font-medium tracking-[0.3em] uppercase">Público-alvo</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-6">
              Para <span className="text-gradient-gold">quem</span> é?
            </h2>
            <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto" />
          </div>
          
          <div className="reveal grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Heart, title: 'Buscadores de propósito', desc: 'Quem sente que há algo maior esperando e quer encontrar seu verdadeiro caminho de fé.' },
              { icon: Shield, title: 'Pessoas em transição', desc: 'Quem está passando por um momento de mudança e precisa de clareza e direção espiritual.' },
              { icon: Flame, title: 'Renovação da fé', desc: 'Quem deseja reavivar e fortalecer sua conexão com Deus de forma profunda e genuína.' },
              { icon: Users, title: 'Líderes e mentores', desc: 'Quem deseja inspirar outros através de uma fé sólida e transformadora.' },
              { icon: Lightbulb, title: 'Curiosos espirituais', desc: 'Quem busca compreender melhor a fé e seu papel na vida cotidiana.' },
              { icon: Star, title: 'Todos os níveis', desc: 'Seja iniciante ou experiente, o curso se adapta à sua jornada pessoal.' },
            ].map((item, i) => (
              <div key={i} className="group p-6 rounded-2xl border border-gold-500/10 bg-dark-600/30 hover:border-gold-500/30 hover:bg-dark-500/30 transition-all duration-500">
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center mb-4 group-hover:bg-gold-500/20 transition-colors">
                  <item.icon className="w-6 h-6 text-gold-500" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ COMO FUNCIONA ══════════ */}
      <section className="py-24 px-4 relative">
        <div className="section-divider-gold mb-24" />
        <div className="max-w-5xl mx-auto">
          <div className="reveal text-center mb-16">
            <span className="text-gold-500/60 text-sm font-medium tracking-[0.3em] uppercase">Metodologia</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-6">
              Como <span className="text-gradient-gold">funciona</span>?
            </h2>
            <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto" />
          </div>
          
          <div className="reveal space-y-8">
            {[
              { step: '01', title: 'Inscrição', desc: 'Garanta sua vaga em um dos lotes exclusivos e tenha acesso imediato à plataforma do curso.', icon: Ticket },
              { step: '02', title: 'Imersão nas aulas', desc: 'Assista às aulas gravadas no seu ritmo, com conteúdo profundo e transformador sobre fé e espiritualidade.', icon: Play },
              { step: '03', title: 'Prática e reflexão', desc: 'Aplique os ensinamentos no dia a dia com exercícios práticos, orações guiadas e materiais de apoio.', icon: BookOpen },
              { step: '04', title: 'Comunidade e suporte', desc: 'Conecte-se com outros alunos e receba suporte durante toda a jornada de transformação.', icon: Users },
              { step: '05', title: 'Transformação', desc: 'Experimente uma fé renovada e desperta, vivendo com mais propósito e significado.', icon: Sparkles },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-6 p-6 rounded-2xl border border-gold-500/10 bg-dark-600/20 hover:border-gold-500/20 transition-all group">
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-gold-500/20 to-gold-600/10 flex items-center justify-center group-hover:from-gold-500/30 group-hover:to-gold-600/20 transition-all">
                  <span className="text-gold-500 font-serif text-2xl font-bold">{item.step}</span>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <item.icon className="w-5 h-5 text-gold-500" />
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ MATERIAIS EXTRAS ══════════ */}
      <section className="py-24 px-4 bg-gradient-to-b from-dark-900 via-dark-800/50 to-dark-900">
        <div className="max-w-5xl mx-auto">
          <div className="reveal text-center mb-16">
            <span className="text-gold-500/60 text-sm font-medium tracking-[0.3em] uppercase">Inclusos</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-6">
              Materiais <span className="text-gradient-gold">Extras</span>
            </h2>
            <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto" />
          </div>
          
          <div className="reveal grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: BookOpen, title: 'E-books Exclusivos', desc: 'Material de apoio completo para aprofundar cada módulo do curso.' },
              { icon: Play, title: 'Aulas Gravadas', desc: 'Acesso vitalício a todo conteúdo em vídeo de alta qualidade.' },
              { icon: Users, title: 'Grupo Exclusivo', desc: 'Comunidade fechada para troca de experiências e networking espiritual.' },
              { icon: Award, title: 'Certificado', desc: 'Certificado de conclusão ao completar todos os módulos do curso.' },
            ].map((item, i) => (
              <div key={i} className="text-center p-6 rounded-2xl border border-gold-500/10 bg-dark-600/20 hover:border-gold-500/25 transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold-500/20 to-gold-600/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="w-7 h-7 text-gold-500" />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          
          {/* Photo gallery strip */}
          <div className="reveal mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: '/images/victor-vatican.jpeg', label: 'Vaticano' },
              { src: '/images/victor-kyiv.jpeg', label: 'Kyiv' },
              { src: '/images/victor-lithuania.jpeg', label: 'Lituânia' },
              { src: '/images/victor-ukraine.jpeg', label: 'Ucrânia' },
            ].map((photo, i) => (
              <div key={i} className="relative aspect-[4/3] rounded-xl overflow-hidden group">
                <Image src={photo.src} alt={photo.label} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent" />
                <div className="absolute bottom-2 left-3 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-gold-400" />
                  <span className="text-white/80 text-xs font-medium">{photo.label}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="reveal text-center text-gray-500 text-sm mt-4">
            <Globe className="w-4 h-4 inline mr-1" />
            Conhecimento adquirido em peregrinações por igrejas e catedrais ao redor do mundo
          </p>
        </div>
      </section>

      {/* ══════════ PREÇOS / LOTES ══════════ */}
      <section className="py-24 px-4 relative" id="preco">
        <div className="section-divider-gold mb-24" />
        <div className="max-w-6xl mx-auto">
          <div className="reveal text-center mb-16">
            <span className="text-gold-500/60 text-sm font-medium tracking-[0.3em] uppercase">Investimento</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-6">
              Escolha seu <span className="text-gradient-gold">Lote</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Garanta sua vaga pelo melhor valor. Cada lote é limitado e ao esgotar, o próximo será liberado em breve.
            </p>
          </div>
          
          <div className="reveal grid md:grid-cols-3 gap-6 lg:gap-8">
            {/* LOTE 1 */}
            <div className="relative rounded-2xl border-2 border-gold-500/40 bg-gradient-to-b from-dark-400/60 to-dark-700/60 p-8 animate-pulse-gold">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-gold-600 to-gold-500 text-dark-900 text-xs font-bold uppercase tracking-wider whitespace-nowrap">
                  🔥 Melhor Oferta
                </span>
              </div>
              <div className="text-center mb-6 pt-4">
                <h3 className="text-2xl font-serif font-bold text-gold-400 mb-1">Lote 1</h3>
                <p className="text-gray-500 text-sm">Vagas limitadas</p>
              </div>
              <div className="text-center mb-6">
                <span className="text-gray-500 text-sm line-through">De R$ XXX,XX</span>
                <div className="text-4xl font-black text-white mt-1">
                  R$ <span className="text-gradient-gold">XXX</span>
                  <span className="text-lg text-gray-400">,XX</span>
                </div>
                <p className="text-gold-500/70 text-sm mt-1">ou 12x de R$ XX,XX</p>
              </div>
              <CountdownTimer variant="dark" label="Encerra em" />
              <div className="mt-6 space-y-3">
                {['Acesso completo ao curso', 'Materiais extras exclusivos', 'Grupo exclusivo de alunos', 'Certificado de conclusão', '🎁 Aula prévia exclusiva', '🎁 Foto lado a lado exclusiva', '🎁 50% voucher presencial 2026'].map((item, i) => (
                  <div key={i} className={`flex items-center gap-2 text-sm ${i >= 4 ? 'text-gold-300 font-medium' : 'text-gray-300'}`}>
                    <CheckCircle className={`w-4 h-4 flex-shrink-0 ${i >= 4 ? 'text-gold-400' : 'text-gold-500'}`} />
                    {item}
                  </div>
                ))}
              </div>
              <button className="btn-shine w-full mt-8 py-4 rounded-xl bg-gradient-to-r from-gold-600 to-gold-500 text-dark-900 font-bold text-lg transition-all hover:shadow-lg hover:shadow-gold-500/30">
                🔔 Avise-me
              </button>
            </div>

            {/* LOTE 2 */}
            <div className="relative rounded-2xl border border-gold-500/15 bg-gradient-to-b from-dark-400/40 to-dark-700/40 p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-serif font-bold text-white mb-1">Lote 2</h3>
                <p className="text-gray-500 text-sm">Disponível após Lote 1</p>
              </div>
              <div className="text-center mb-6">
                <span className="text-gray-500 text-sm line-through">De R$ XXX,XX</span>
                <div className="text-4xl font-black text-white mt-1">
                  R$ <span className="text-gold-400/70">XXX</span>
                  <span className="text-lg text-gray-400">,XX</span>
                </div>
                <p className="text-gray-500 text-sm mt-1">ou 12x de R$ XX,XX</p>
              </div>
              <CountdownTimer variant="dark" label="Em breve" />
              <div className="mt-6 space-y-3">
                {['Acesso completo ao curso', 'Materiais extras exclusivos', 'Grupo exclusivo de alunos', 'Certificado de conclusão', '🎁 30% voucher presencial 2026'].map((item, i) => (
                  <div key={i} className={`flex items-center gap-2 text-sm ${i >= 4 ? 'text-gold-300/70 font-medium' : 'text-gray-400'}`}>
                    <CheckCircle className={`w-4 h-4 flex-shrink-0 ${i >= 4 ? 'text-gold-400/60' : 'text-gold-500/50'}`} />
                    {item}
                  </div>
                ))}
              </div>
              <button className="btn-shine w-full mt-8 py-4 rounded-xl border border-gold-500/30 text-gold-400 font-bold text-lg transition-all hover:bg-gold-500/10">
                🔔 Avise-me
              </button>
            </div>

            {/* VALOR NORMAL */}
            <div className="relative rounded-2xl border border-gray-700/50 bg-gradient-to-b from-dark-400/30 to-dark-700/30 p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-serif font-bold text-white mb-1">Valor Normal</h3>
                <p className="text-gray-500 text-sm">Disponível após os lotes</p>
              </div>
              <div className="text-center mb-6">
                <div className="text-4xl font-black text-white mt-4">
                  R$ <span className="text-gray-300">XXX</span>
                  <span className="text-lg text-gray-400">,XX</span>
                </div>
                <p className="text-gray-500 text-sm mt-1">ou 12x de R$ XX,XX</p>
              </div>
              <CountdownTimer variant="dark" label="Em breve" />
              <div className="mt-6 space-y-3">
                {['Acesso completo ao curso', 'Materiais extras exclusivos', 'Grupo exclusivo de alunos', 'Certificado de conclusão'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-500">
                    <CheckCircle className="w-4 h-4 text-gray-600 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
              <button className="btn-shine w-full mt-8 py-4 rounded-xl border border-gray-700 text-gray-400 font-bold text-lg transition-all hover:bg-dark-400/30">
                🔔 Avise-me
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ BÔNUS LOTE 1 ══════════ */}
      <section className="py-24 px-4 bg-gradient-to-b from-dark-900 via-dark-800/30 to-dark-900 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,160,18,0.05)_0%,transparent_50%)]" />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="reveal text-center mb-16">
            <span className="text-gold-500/60 text-sm font-medium tracking-[0.3em] uppercase">Exclusivo</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-6">
              Bônus <span className="text-gradient-gold">Lote 1</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Quem garantir sua vaga no Lote 1 recebe benefícios exclusivos que não estarão disponíveis depois.
            </p>
          </div>
          
          <div className="reveal grid md:grid-cols-3 gap-8">
            <div className="group p-8 rounded-2xl border border-gold-500/20 bg-dark-600/30 hover:border-gold-500/40 transition-all text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold-500/20 to-gold-600/10 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                <Play className="w-8 h-8 text-gold-500" />
              </div>
              <h3 className="text-xl font-serif font-bold text-gold-400 mb-3">Aula Prévia Exclusiva</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Acesso antecipado a uma aula especial, disponível apenas para membros do Lote 1. Comece sua transformação antes de todos.
              </p>
            </div>
            
            <div className="group p-8 rounded-2xl border border-gold-500/20 bg-dark-600/30 hover:border-gold-500/40 transition-all text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold-500/20 to-gold-600/10 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                <Camera className="w-8 h-8 text-gold-500" />
              </div>
              <h3 className="text-xl font-serif font-bold text-gold-400 mb-3">Foto Lado a Lado Exclusiva</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Uma foto especial e exclusiva lado a lado com Victor, um momento único e memorável para guardar para sempre.
              </p>
            </div>
            
            <div className="group p-8 rounded-2xl border border-gold-500/20 bg-dark-600/30 hover:border-gold-500/40 transition-all text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold-500/20 to-gold-600/10 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                <Ticket className="w-8 h-8 text-gold-500" />
              </div>
              <h3 className="text-xl font-serif font-bold text-gold-400 mb-3">50% Voucher Presencial</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Ganhe <strong className="text-gold-300">50% de desconto</strong> no evento presencial O Despertar da Fé 2026. Uma experiência que vai além do online.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ BÔNUS LOTE 2 ══════════ */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="reveal text-center mb-12">
            <span className="text-gold-500/60 text-sm font-medium tracking-[0.3em] uppercase">Lote 2</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-6">
              Bônus <span className="text-gradient-gold">Lote 2</span>
            </h2>
          </div>
          <div className="reveal max-w-2xl mx-auto">
            <div className="p-8 rounded-2xl border border-gold-500/15 bg-dark-600/20 text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold-500/15 to-gold-600/5 flex items-center justify-center mx-auto mb-5">
                <Ticket className="w-8 h-8 text-gold-400/70" />
              </div>
              <h3 className="text-xl font-serif font-bold text-white mb-3">30% Voucher Presencial 2026</h3>
              <p className="text-gray-400 leading-relaxed">
                Membros do Lote 2 recebem <strong className="text-gold-400">30% de desconto</strong> no evento presencial O Despertar da Fé 2026. Garanta sua presença com condições especiais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ CTA FINAL ══════════ */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,160,18,0.08)_0%,transparent_60%)]" />
        <div className="section-divider-gold mb-24" />
        <div className="reveal max-w-3xl mx-auto text-center relative z-10">
          {/* Photo accent */}
          <div className="relative w-24 h-24 rounded-full overflow-hidden mx-auto mb-8 border-2 border-gold-500/40">
            <Image src="/images/victor-closeup.jpeg" alt="Victor" fill className="object-cover" />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Não perca essa <span className="text-gradient-gold">oportunidade</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 leading-relaxed">
            Cadastre seu e-mail e seja o primeiro a saber quando as inscrições do Lote 1 abrirem. 
            Vagas limitadas e condições que não se repetirão.
          </p>
          <EmailCapture variant="dark" buttonText="🔔 Quero ser avisado" />
          <p className="text-gray-600 text-xs mt-6">Seus dados estão seguros. Não enviamos spam.</p>
        </div>
      </section>

      {/* ══════════ FOOTER ══════════ */}
      <footer className="py-12 px-4 border-t border-gold-500/10">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-xl font-serif font-bold text-gradient-gold mb-2">O Despertar da Fé</h3>
          <p className="text-gray-600 text-sm">© {new Date().getFullYear()} O Despertar da Fé. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
