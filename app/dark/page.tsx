'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import CountdownTimer from '@/components/CountdownTimer';
import EmailCapture from '@/components/EmailCapture';
import FleurDeLis, { FleurDeLisDivider } from '@/components/FleurDeLis';
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
    <div ref={pageRef} className="dark-theme min-h-screen bg-dark-800 text-white overflow-x-hidden">
      
      {/* ══════════ HERO - Cinematic Banner ══════════ */}
      <section className="relative flex flex-col overflow-hidden bg-dark-800">
        {/* DESKTOP: Full-screen background hero */}
        <div className="hidden md:block relative" style={{ minHeight: '100vh' }}>
          <div className="absolute inset-0">
            <Image
              src="/images/hero-batalha.jpg"
              alt="O Despertar da Fé - Junte-se na única batalha que salva"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-800 via-dark-800/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-dark-800/50 via-transparent to-transparent" />
          </div>
          <div className="absolute inset-0 fleur-bg-pattern pointer-events-none" />
          <div className="absolute top-16 left-8 animate-float pointer-events-none">
            <FleurDeLis size={50} opacity={0.18} />
          </div>
          <div className="absolute top-24 right-12 animate-float pointer-events-none" style={{ animationDelay: '1.5s' }}>
            <FleurDeLis size={40} opacity={0.16} />
          </div>
          {/* Official Logo - top of hero (watermark style) */}
          <div className="relative z-10 pt-8 px-4">
            <div className="max-w-6xl mx-auto flex justify-start">
              <div className="relative w-[140px] h-[140px]" >
                <Image
                  src="/images/logo-transparent.png"
                  alt="Despertar da Fé - Logo Oficial"
                  fill
                  className="object-contain drop-shadow-[0_0_20px_rgba(212,160,18,0.4)]"
                />
              </div>
            </div>
          </div>
          {/* Bottom CTA */}
          <div className="absolute bottom-16 left-0 right-0 z-10 px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/30 bg-dark-800/60 backdrop-blur-sm mb-6 animate-fade-in">
                <Flame className="w-4 h-4 text-gold-500" />
                <span className="text-gold-400 text-sm font-medium tracking-wider uppercase">Curso Online Exclusivo</span>
              </div>
              <p className="text-xl text-gold-200 max-w-2xl mx-auto mb-8 animate-fade-in leading-relaxed drop-shadow-lg" style={{ animationDelay: '0.3s' }}>
                Mais que um curso. Uma jornada transformadora que vai lhe ajudar a enxergar os mistérios nunca revelados sobre os tempos finais, e te ensinar sobre preservação da Fé, dogmas e a VERDADEIRA TRADIÇÃO da Igreja.
              </p>
              <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <EmailCapture variant="dark" buttonText="🔔 Avise-me" />
                <p className="text-gold-500 text-xs mt-4 drop-shadow-md">Seja o primeiro a saber quando as inscrições abrirem</p>
              </div>
            </div>
          </div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce z-10">
            <ChevronDown className="w-6 h-6 text-gold-500/60" />
          </div>
        </div>

        {/* MOBILE: Image as contained block + CTA below */}
        <div className="md:hidden">
          {/* Official Logo - mobile FULL WIDTH (watermark style) */}
          <div className="flex justify-center px-4 pt-6 pb-2">
            <div className="relative w-full aspect-square max-w-[280px]" >
              <Image
                src="/images/logo-transparent.png"
                alt="Despertar da Fé - Logo Oficial"
                fill
                className="object-contain drop-shadow-[0_0_20px_rgba(212,160,18,0.4)]"
              />
            </div>
          </div>
          {/* Hero image — zoomed in on mobile for impact */}
          <div className="relative w-full h-[55vh] overflow-hidden">
            <Image
              src="/images/hero-batalha.jpg"
              alt="O Despertar da Fé - Junte-se na única batalha que salva"
              fill
              className="object-cover scale-125"
              style={{ objectPosition: '50% 40%' }}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-800 via-transparent to-dark-800/30" />
          </div>
          {/* CTA below image */}
          <div className="px-4 py-8 text-center -mt-8 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/30 bg-dark-800/80 backdrop-blur-sm mb-5">
              <Flame className="w-4 h-4 text-gold-500" />
              <span className="text-gold-400 text-xs font-medium tracking-wider uppercase">Curso Online Exclusivo</span>
            </div>
            <p className="text-lg text-gold-200 mx-auto mb-6 leading-relaxed">
              Mais que um curso. Uma jornada transformadora que vai lhe ajudar a enxergar os mistérios nunca revelados sobre os tempos finais, e te ensinar sobre preservação da Fé, dogmas e a VERDADEIRA TRADIÇÃO da Igreja.
            </p>
            <EmailCapture variant="dark" buttonText="🔔 Avise-me" />
            <p className="text-gold-500 text-xs mt-3">Seja o primeiro a saber quando as inscrições abrirem</p>
          </div>
        </div>
      </section>

      {/* ══════════ BISHOP + VIKTOR FEATURE BANNER ══════════ */}
      <section className="relative py-0 overflow-hidden">
        <div className="relative w-full aspect-[3/4] sm:aspect-[16/9] md:aspect-[16/6]">
          <Image
            src="/images/banner-hero.jpeg"
            alt="Bispo Dom Rodrigo e Victor Stavale - O Despertar da Fé"
            fill
            className="object-cover scale-110 sm:scale-100"
            style={{ objectPosition: '50% 15%' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-800 via-transparent to-dark-800/50" />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-800/60 via-transparent to-dark-800/60" />
          {/* Fleur accent corners */}
          <div className="absolute top-4 left-4 pointer-events-none hidden md:block">
            <FleurDeLis size={36} opacity={0.25} color="#D4A012" />
          </div>
          <div className="absolute top-4 right-4 pointer-events-none hidden md:block">
            <FleurDeLis size={36} opacity={0.25} color="#D4A012" />
          </div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-center">
            <p className="text-gold-400 font-serif text-lg md:text-2xl font-bold drop-shadow-lg">
              Victor Stavale & Bispo Dom Rodrigo
            </p>
            <p className="text-gold-300 text-sm mt-1 drop-shadow-md">
              Unidos na batalha da fé
            </p>
          </div>
        </div>
      </section>

      {/* ══════════ O QUE É ══════════ */}
      <section className="py-8 md:py-20 px-4 relative">
        {/* Fleur-de-lis divider */}
        <FleurDeLisDivider className="mb-4 md:mb-12" />

        {/* Background fleur accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <FleurDeLis size={300} opacity={0.06} />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="reveal text-center mb-6 md:mb-12">
            <span className="text-gold-500/60 text-sm font-medium tracking-[0.3em] uppercase">Sobre o curso</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-6">
              O que é o <span className="text-gradient-gold">Despertar da Fé</span>?
            </h2>
            <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto" />
          </div>
          
          <div className="reveal grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gold-300 text-lg leading-relaxed mb-6">
                O <strong className="text-gold-400">Despertar da Fé</strong> é mais do que um curso — é uma experiência imersiva projetada para transformar sua relação com a fé, com Deus e consigo mesmo.
              </p>
              <p className="text-gold-400 leading-relaxed mb-6">
                Sob a orientação espiritual de <strong className="text-gold-400/80">Dom Rodrigo</strong>, Bispo e autoridade eclesiástica, e com a condução de <strong className="text-gold-400/80">Victor Stavale</strong>, você será guiado em uma jornada de autoconhecimento e renovação espiritual que vai impactar todas as áreas da sua vida.
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
                  alt="Bispo Dom Rodrigo e Victor Stavale"
                  fill
                  className="object-cover"
                  style={{ objectPosition: '50% 15%' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-800/70 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-gold-300 text-sm font-medium">Victor Stavale & Bispo Dom Rodrigo</p>
                </div>
              </div>
              {/* Fleur accent on photo */}
              <div className="absolute -top-4 -right-4 pointer-events-none">
                <FleurDeLis size={36} opacity={0.25} />
              </div>
            </div>
          </div>

          {/* Second photo - Bishop + Victor Stavale selfie */}
          <div className="reveal mt-16 grid md:grid-cols-2 gap-8 items-center">
            <div className="relative order-2 md:order-1">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border-glow-gold">
                <Image
                  src="/images/victor-dom-rodrigo-selfie.jpeg"
                  alt="Bispo Dom Rodrigo e Victor Stavale - momento informal"
                  fill
                  className="object-cover"
                  style={{ objectPosition: '50% 15%' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-800/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-gold-300 text-sm font-medium">Victor Stavale & Dom Rodrigo — Unidos pela fé</p>
                </div>
              </div>
              <div className="absolute -bottom-3 -left-3 pointer-events-none">
                <FleurDeLis size={32} opacity={0.22} />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <p className="text-gold-200/70 text-lg leading-relaxed mb-4">
                Através de aulas profundas, materiais exclusivos e uma comunidade engajada, você terá acesso ao conhecimento construído em <strong className="text-gold-400">peregrinações e missões</strong> por igrejas e catedrais ao redor do mundo.
              </p>
              <p className="text-gold-400 leading-relaxed">
                Uma parceria entre a tradição da Igreja, representada por Dom Rodrigo, e a experiência vivida de Victor Stavale nas terras santas da Europa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ PARA QUEM ══════════ */}
      <section className="py-8 md:py-20 px-4 bg-gradient-to-b from-dark-800 via-dark-700/50 to-dark-800 relative">
        {/* Fleur pattern background */}
        <div className="absolute inset-0 fleur-bg-pattern pointer-events-none" />
        
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="reveal text-center mb-6 md:mb-12">
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
              <div key={i} className="group p-6 rounded-2xl border border-gold-500/10 bg-dark-600/40 backdrop-blur-sm hover:border-gold-500/30 hover:bg-dark-500/40 transition-all duration-500">
                <div className="w-12 h-12 rounded-xl bg-gold-500/5 flex items-center justify-center mb-4 group-hover:bg-gold-500/10 transition-colors">
                  <item.icon className="w-6 h-6 text-gold-600" />
                </div>
                <h3 className="text-xl font-bold text-gold-300 mb-2">{item.title}</h3>
                <p className="text-gold-400 text-base leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ COMO FUNCIONA ══════════ */}
      <section className="py-8 md:py-20 px-4 relative">
        <FleurDeLisDivider className="mb-4 md:mb-12" />
        
        {/* Large background fleur */}
        <div className="absolute bottom-10 right-10 pointer-events-none hidden lg:block">
          <FleurDeLis size={200} opacity={0.05} />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="reveal text-center mb-6 md:mb-12">
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
              <div key={i} className="flex items-start gap-4 md:gap-6 p-5 md:p-6 rounded-2xl border border-gold-500/10 bg-dark-600/30 hover:border-gold-500/20 transition-all group">
                <div className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-gold-500/10 to-gold-600/5 flex items-center justify-center group-hover:from-gold-500/20 group-hover:to-gold-600/10 transition-all">
                  <span className="text-gold-500 font-serif text-xl md:text-2xl font-bold">{item.step}</span>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <item.icon className="w-5 h-5 text-gold-600" />
                    <h3 className="text-xl md:text-2xl font-bold text-gold-300">{item.title}</h3>
                  </div>
                  <p className="text-gold-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ MATERIAIS EXTRAS + GALLERY ══════════ */}
      <section className="py-8 md:py-20 px-4 bg-gradient-to-b from-dark-800 via-dark-700/50 to-dark-800 relative">
        <div className="absolute inset-0 fleur-bg-pattern pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="reveal text-center mb-6 md:mb-12">
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
              <div key={i} className="text-center p-6 rounded-2xl border border-gold-500/10 bg-dark-600/30 hover:border-gold-500/25 transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold-500/10 to-gold-600/5 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="w-7 h-7 text-gold-600" />
                </div>
                <h3 className="text-lg font-bold text-gold-300 mb-2">{item.title}</h3>
                <p className="text-gold-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          
          {/* Photo gallery — Victor Stavale's journey */}
          <div className="reveal mt-16">
            <h3 className="text-center text-lg font-serif font-semibold text-gray-300 mb-8">
              <Globe className="w-5 h-5 inline mr-2 text-gold-500" />
              Conhecimento de peregrinações ao redor do mundo
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { src: '/images/victor-vatican.jpeg', label: 'Vaticano' },
                { src: '/images/victor-kyiv.jpeg', label: 'Kyiv' },
                { src: '/images/victor-lithuania.jpeg', label: 'Lituânia' },
                { src: '/images/victor-ukraine.jpeg', label: 'Ucrânia' },
              ].map((photo, i) => (
                <div key={i} className="relative aspect-[4/3] rounded-xl overflow-hidden group">
                  <Image src={photo.src} alt={photo.label} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-800/80 to-transparent" />
                  <div className="absolute bottom-2 left-3 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-gold-400" />
                    <span className="text-white/80 text-xs font-medium">{photo.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional photos - more of Victor Stavale's travels */}
          <div className="reveal mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: '/images/victor-white.jpeg', label: 'Ucrânia' },
              { src: '/images/victor-green.jpeg', label: 'São Jorge' },
              { src: '/images/victor-vilnius.jpeg', label: 'Vilnius' },
              { src: '/images/victor-community.jpeg', label: 'Comunidade' },
            ].map((photo, i) => (
              <div key={i} className="relative aspect-[4/3] rounded-xl overflow-hidden group">
                <Image src={photo.src} alt={photo.label} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-800/80 to-transparent" />
                <div className="absolute bottom-2 left-3 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-gold-400" />
                  <span className="text-white/80 text-xs font-medium">{photo.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ PREÇOS / LOTES ══════════ */}
      <section className="py-8 md:py-20 px-4 relative" id="preco">
        <FleurDeLisDivider className="mb-4 md:mb-12" />

        {/* Decorative fleur accents */}
        <div className="absolute top-20 left-8 pointer-events-none hidden lg:block">
          <FleurDeLis size={80} opacity={0.08} />
        </div>
        <div className="absolute bottom-20 right-8 pointer-events-none hidden lg:block">
          <FleurDeLis size={80} opacity={0.08} />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="reveal text-center mb-6 md:mb-12">
            <span className="text-gold-500/60 text-sm font-medium tracking-[0.3em] uppercase">Investimento</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-6">
              Escolha seu <span className="text-gradient-gold">Lote</span>
            </h2>
            <p className="text-gold-400 max-w-xl mx-auto">
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
                <p className="text-gold-500 text-sm">Vagas limitadas</p>
              </div>
              <div className="text-center mb-6">
                <span className="text-gold-500 text-sm line-through">De R$ XXX,XX</span>
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
                <p className="text-gold-500 text-sm">Disponível após Lote 1</p>
              </div>
              <div className="text-center mb-6">
                <span className="text-gold-500 text-sm line-through">De R$ XXX,XX</span>
                <div className="text-4xl font-black text-white mt-1">
                  R$ <span className="text-gold-400/70">XXX</span>
                  <span className="text-lg text-gray-400">,XX</span>
                </div>
                <p className="text-gold-500 text-sm mt-1">ou 12x de R$ XX,XX</p>
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
                <p className="text-gold-500 text-sm">Disponível após os lotes</p>
              </div>
              <div className="text-center mb-6">
                <div className="text-4xl font-black text-white mt-4">
                  R$ <span className="text-gray-300">XXX</span>
                  <span className="text-lg text-gray-400">,XX</span>
                </div>
                <p className="text-gold-500 text-sm mt-1">ou 12x de R$ XX,XX</p>
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
      <section className="py-8 md:py-20 px-4 bg-gradient-to-b from-dark-800 via-dark-700/30 to-dark-800 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,160,18,0.05)_0%,transparent_50%)]" />
        {/* Fleur accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <FleurDeLis size={250} opacity={0.05} />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="reveal text-center mb-6 md:mb-12">
            <span className="text-gold-500/60 text-sm font-medium tracking-[0.3em] uppercase">Exclusivo</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-6">
              Bônus <span className="text-gradient-gold">Lote 1</span>
            </h2>
            <p className="text-gold-400 max-w-xl mx-auto">
              Quem garantir sua vaga no Lote 1 recebe benefícios exclusivos que não estarão disponíveis depois.
            </p>
          </div>
          
          <div className="reveal grid md:grid-cols-3 gap-8">
            <div className="group p-6 md:p-8 rounded-2xl border border-gold-500/20 bg-dark-600/40 hover:border-gold-500/40 transition-all text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold-500/10 to-gold-600/5 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                <Play className="w-6 h-6 text-gold-500/20" />
              </div>
              <h3 className="text-xl font-serif font-bold text-gold-400 mb-3">Aula Prévia Exclusiva</h3>
              <p className="text-gold-400 text-base leading-relaxed">
                Acesso antecipado a uma aula especial, disponível apenas para membros do Lote 1. Comece sua transformação antes de todos.
              </p>
            </div>
            
            <div className="group p-6 md:p-8 rounded-2xl border border-gold-500/20 bg-dark-600/40 hover:border-gold-500/40 transition-all text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold-500/10 to-gold-600/5 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                <Camera className="w-6 h-6 text-gold-500/20" />
              </div>
              <h3 className="text-xl font-serif font-bold text-gold-400 mb-3">Foto Lado a Lado Exclusiva</h3>
              <p className="text-gold-400 text-base leading-relaxed">
                Uma foto especial e exclusiva lado a lado com Victor Stavale, um momento único e memorável para guardar para sempre.
              </p>
            </div>
            
            <div className="group p-6 md:p-8 rounded-2xl border border-gold-500/20 bg-dark-600/40 hover:border-gold-500/40 transition-all text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold-500/10 to-gold-600/5 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                <Ticket className="w-6 h-6 text-gold-500/20" />
              </div>
              <h3 className="text-xl font-serif font-bold text-gold-400 mb-3">50% Voucher Presencial</h3>
              <p className="text-gold-400 text-base leading-relaxed">
                Ganhe <strong className="text-gold-300">50% de desconto</strong> no evento presencial O Despertar da Fé 2026. Uma experiência que vai além do online.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ BÔNUS LOTE 2 ══════════ */}
      <section className="py-8 md:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="reveal text-center mb-12">
            <span className="text-gold-500/60 text-sm font-medium tracking-[0.3em] uppercase">Lote 2</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-6">
              Bônus <span className="text-gradient-gold">Lote 2</span>
            </h2>
          </div>
          <div className="reveal max-w-2xl mx-auto">
            <div className="p-8 rounded-2xl border border-gold-500/15 bg-dark-600/30 text-center relative overflow-hidden">
              {/* Fleur accent inside card */}
              <div className="absolute -bottom-6 -right-6 pointer-events-none">
                <FleurDeLis size={80} opacity={0.16} />
              </div>
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold-500/10 to-gold-600/5 flex items-center justify-center mx-auto mb-5">
                  <Ticket className="w-6 h-6 text-gold-400/20" />
                </div>
                <h3 className="text-xl font-serif font-bold text-gold-100 mb-3">30% Voucher Presencial 2026</h3>
                <p className="text-gold-400 leading-relaxed">
                  Membros do Lote 2 recebem <strong className="text-gold-400">30% de desconto</strong> no evento presencial O Despertar da Fé 2026. Garanta sua presença com condições especiais.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ CTA FINAL ══════════ */}
      <section className="py-8 md:py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,160,18,0.08)_0%,transparent_60%)]" />
        <FleurDeLisDivider className="mb-4 md:mb-12" />

        {/* Fleur background accents */}
        <div className="absolute top-1/4 left-8 pointer-events-none hidden lg:block">
          <FleurDeLis size={60} opacity={0.10} />
        </div>
        <div className="absolute bottom-1/4 right-8 pointer-events-none hidden lg:block">
          <FleurDeLis size={60} opacity={0.10} />
        </div>

        <div className="reveal max-w-3xl mx-auto text-center relative z-10">
          {/* Logo oficial - responsive full width (watermark style) */}
          <div className="relative w-full max-w-[320px] md:max-w-[240px] aspect-square mx-auto mb-6" >
            <Image src="/images/logo-transparent.png" alt="Despertar da Fé - Logo Oficial" fill className="object-contain drop-shadow-[0_0_20px_rgba(212,160,18,0.4)]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Não perca essa <span className="text-gradient-gold">oportunidade</span>
          </h2>
          <p className="text-gold-400 text-lg mb-8 leading-relaxed">
            Cadastre seu e-mail e seja o primeiro a saber quando as inscrições do Lote 1 abrirem. 
            Vagas limitadas e condições que não se repetirão.
          </p>
          <EmailCapture variant="dark" buttonText="🔔 Quero ser avisado" />
          <p className="text-gold-600 text-xs mt-6">Seus dados estão seguros. Não enviamos spam.</p>
        </div>
      </section>

      {/* ══════════ FOOTER ══════════ */}
      <footer className="py-8 md:py-12 px-4 border-t border-gold-500/10">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-xl font-serif font-bold text-gradient-gold mb-2">O Despertar da Fé</h3>
          <p className="text-gold-600 text-sm">© {new Date().getFullYear()} O Despertar da Fé. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
