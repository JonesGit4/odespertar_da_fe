'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import CountdownTimer from '@/components/CountdownTimer';
import EmailCapture from '@/components/EmailCapture';
import { 
  BookOpen, Users, Lightbulb, Star, CheckCircle, 
  Play, Award, Camera, Ticket, Flame, 
  Heart, Shield, Sparkles, ChevronDown, Globe, MapPin, Sun
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

export default function LightLandingPage() {
  const pageRef = useReveal();

  return (
    <div ref={pageRef} className="min-h-screen bg-cream-50 text-gray-800 overflow-x-hidden">
      
      {/* ══════════ HERO ══════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Soft gradient bg */}
        <div className="absolute inset-0 bg-gradient-to-br from-cream-50 via-white to-sage-50" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-sage-100/30 to-transparent" />
        
        {/* Decorative circles */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-sage-200/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-cream-300/30 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Text */}
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sage-100/80 border border-sage-200/50 mb-8 animate-fade-in">
                <Sun className="w-4 h-4 text-sage-600" />
                <span className="text-sage-700 text-sm font-medium tracking-wider uppercase">Curso Online Exclusivo</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-black leading-[0.95] mb-6 animate-slide-up">
                <span className="text-gray-800">O</span>
                <br />
                <span className="text-sage-600">Despertar</span>
                <br />
                <span className="text-gray-800">da </span>
                <span className="text-sage-600">Fé</span>
              </h1>
              
              <p className="text-lg text-gray-500 max-w-lg mb-10 animate-fade-in leading-relaxed" style={{ animationDelay: '0.3s' }}>
                Uma jornada transformadora que vai despertar o poder da fé na sua vida.
                Descubra uma vida plena, com propósito e cheia de significado.
              </p>
              
              <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <EmailCapture variant="light" buttonText="🔔 Avise-me" />
                <p className="text-gray-400 text-xs mt-4">Seja o primeiro a saber quando as inscrições abrirem</p>
              </div>
            </div>
            
            {/* Right - Photo */}
            <div className="relative animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="relative aspect-[3/4] max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl shadow-sage-200/50">
                <Image
                  src="/images/victor-portrait.jpeg"
                  alt="Victor - O Despertar da Fé"
                  fill
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 border-2 border-sage-300/40 rounded-3xl" />
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-sage-200/30 rounded-3xl" />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-sage-400" />
        </div>
      </section>

      {/* ══════════ O QUE É ══════════ */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="reveal text-center mb-16">
            <span className="text-sage-500 text-sm font-medium tracking-[0.3em] uppercase">Sobre o curso</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6 text-gray-800">
              O que é o <span className="text-sage-600">Despertar da Fé</span>?
            </h2>
            <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-sage-400 to-transparent mx-auto" />
          </div>
          
          <div className="reveal grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                O <strong className="text-sage-700">Despertar da Fé</strong> é mais do que um curso — é uma experiência imersiva projetada para transformar sua relação com a fé, com Deus e consigo mesmo.
              </p>
              <p className="text-gray-500 leading-relaxed mb-6">
                Através de aulas profundas, materiais exclusivos e uma comunidade engajada, você será guiado em uma jornada de autoconhecimento e renovação espiritual que vai impactar todas as áreas da sua vida.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Aulas em vídeo', 'Material exclusivo', 'Comunidade', 'Certificado'].map((item) => (
                  <span key={item} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-sage-50 border border-sage-200 text-sage-700 text-sm">
                    <CheckCircle className="w-3.5 h-3.5 text-sage-500" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl shadow-sage-200/30">
                <Image src="/images/victor-dom-rodrigo.jpeg" alt="Victor com Dom Rodrigo" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <p className="text-white/90 text-sm font-medium">Victor com Dom Rodrigo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ PARA QUEM ══════════ */}
      <section className="py-24 px-4 bg-gradient-to-b from-cream-50 to-white">
        <div className="max-w-5xl mx-auto">
          <div className="reveal text-center mb-16">
            <span className="text-sage-500 text-sm font-medium tracking-[0.3em] uppercase">Público-alvo</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6 text-gray-800">
              Para <span className="text-sage-600">quem</span> é?
            </h2>
            <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-sage-400 to-transparent mx-auto" />
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
              <div key={i} className="card-hover-light group p-6 rounded-2xl bg-white border border-gray-100 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-sage-100 flex items-center justify-center mb-4 group-hover:bg-sage-200 transition-colors">
                  <item.icon className="w-6 h-6 text-sage-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ COMO FUNCIONA ══════════ */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="reveal text-center mb-16">
            <span className="text-sage-500 text-sm font-medium tracking-[0.3em] uppercase">Metodologia</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6 text-gray-800">
              Como <span className="text-sage-600">funciona</span>?
            </h2>
            <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-sage-400 to-transparent mx-auto" />
          </div>
          
          <div className="reveal space-y-6">
            {[
              { step: '01', title: 'Inscrição', desc: 'Garanta sua vaga em um dos lotes exclusivos e tenha acesso imediato à plataforma do curso.', icon: Ticket },
              { step: '02', title: 'Imersão nas aulas', desc: 'Assista às aulas gravadas no seu ritmo, com conteúdo profundo e transformador sobre fé e espiritualidade.', icon: Play },
              { step: '03', title: 'Prática e reflexão', desc: 'Aplique os ensinamentos no dia a dia com exercícios práticos, orações guiadas e materiais de apoio.', icon: BookOpen },
              { step: '04', title: 'Comunidade e suporte', desc: 'Conecte-se com outros alunos e receba suporte durante toda a jornada de transformação.', icon: Users },
              { step: '05', title: 'Transformação', desc: 'Experimente uma fé renovada e desperta, vivendo com mais propósito e significado.', icon: Sparkles },
            ].map((item, i) => (
              <div key={i} className="card-hover-light flex items-start gap-6 p-6 rounded-2xl bg-cream-50/50 border border-sage-100/50">
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-sage-100 to-sage-200/50 flex items-center justify-center">
                  <span className="text-sage-600 font-display text-2xl font-bold">{item.step}</span>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <item.icon className="w-5 h-5 text-sage-500" />
                    <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                  </div>
                  <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ MATERIAIS EXTRAS ══════════ */}
      <section className="py-24 px-4 bg-gradient-to-b from-sage-50/50 to-cream-50">
        <div className="max-w-5xl mx-auto">
          <div className="reveal text-center mb-16">
            <span className="text-sage-500 text-sm font-medium tracking-[0.3em] uppercase">Inclusos</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6 text-gray-800">
              Materiais <span className="text-sage-600">Extras</span>
            </h2>
            <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-sage-400 to-transparent mx-auto" />
          </div>
          
          <div className="reveal grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: BookOpen, title: 'E-books Exclusivos', desc: 'Material de apoio completo para aprofundar cada módulo do curso.' },
              { icon: Play, title: 'Aulas Gravadas', desc: 'Acesso vitalício a todo conteúdo em vídeo de alta qualidade.' },
              { icon: Users, title: 'Grupo Exclusivo', desc: 'Comunidade fechada para troca de experiências e networking espiritual.' },
              { icon: Award, title: 'Certificado', desc: 'Certificado de conclusão ao completar todos os módulos do curso.' },
            ].map((item, i) => (
              <div key={i} className="card-hover-light text-center p-6 rounded-2xl bg-white border border-gray-100 shadow-sm">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sage-100 to-sage-200/50 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-sage-600" />
                </div>
                <h3 className="text-base font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          
          {/* Photo gallery */}
          <div className="reveal mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: '/images/victor-vatican.jpeg', label: 'Vaticano' },
              { src: '/images/victor-kyiv.jpeg', label: 'Kyiv' },
              { src: '/images/victor-lithuania.jpeg', label: 'Lituânia' },
              { src: '/images/victor-ukraine.jpeg', label: 'Ucrânia' },
            ].map((photo, i) => (
              <div key={i} className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md group">
                <Image src={photo.src} alt={photo.label} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-2 left-3 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-white/80" />
                  <span className="text-white/90 text-xs font-medium">{photo.label}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="reveal text-center text-gray-400 text-sm mt-4">
            <Globe className="w-4 h-4 inline mr-1" />
            Conhecimento adquirido em peregrinações por igrejas e catedrais ao redor do mundo
          </p>
        </div>
      </section>

      {/* ══════════ PREÇOS / LOTES ══════════ */}
      <section className="py-24 px-4 bg-white" id="preco">
        <div className="max-w-6xl mx-auto">
          <div className="reveal text-center mb-16">
            <span className="text-sage-500 text-sm font-medium tracking-[0.3em] uppercase">Investimento</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6 text-gray-800">
              Escolha seu <span className="text-sage-600">Lote</span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Garanta sua vaga pelo melhor valor. Cada lote é limitado e ao esgotar, o próximo será liberado em breve.
            </p>
          </div>
          
          <div className="reveal grid md:grid-cols-3 gap-6 lg:gap-8">
            {/* LOTE 1 */}
            <div className="relative rounded-3xl border-2 border-sage-400 bg-gradient-to-b from-sage-50 to-white p-8 shadow-xl shadow-sage-200/30">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-sage-500 to-sage-600 text-white text-xs font-bold uppercase tracking-wider whitespace-nowrap shadow-md">
                  🌟 Melhor Oferta
                </span>
              </div>
              <div className="text-center mb-6 pt-4">
                <h3 className="text-2xl font-display font-bold text-sage-700 mb-1">Lote 1</h3>
                <p className="text-gray-400 text-sm">Vagas limitadas</p>
              </div>
              <div className="text-center mb-6">
                <span className="text-gray-400 text-sm line-through">De R$ XXX,XX</span>
                <div className="text-4xl font-black text-gray-800 mt-1">
                  R$ <span className="text-sage-600">XXX</span>
                  <span className="text-lg text-gray-400">,XX</span>
                </div>
                <p className="text-sage-500 text-sm mt-1">ou 12x de R$ XX,XX</p>
              </div>
              <CountdownTimer variant="light" label="Encerra em" />
              <div className="mt-6 space-y-3">
                {['Acesso completo ao curso', 'Materiais extras exclusivos', 'Grupo exclusivo de alunos', 'Certificado de conclusão', '🎁 Aula prévia exclusiva', '🎁 Foto lado a lado exclusiva', '🎁 50% voucher presencial 2026'].map((item, i) => (
                  <div key={i} className={`flex items-center gap-2 text-sm ${i >= 4 ? 'text-sage-700 font-medium' : 'text-gray-600'}`}>
                    <CheckCircle className={`w-4 h-4 flex-shrink-0 ${i >= 4 ? 'text-sage-500' : 'text-sage-400'}`} />
                    {item}
                  </div>
                ))}
              </div>
              <button className="btn-shine w-full mt-8 py-4 rounded-xl bg-gradient-to-r from-sage-500 to-sage-600 text-white font-bold text-lg transition-all hover:shadow-lg hover:shadow-sage-500/30">
                🔔 Avise-me
              </button>
            </div>

            {/* LOTE 2 */}
            <div className="relative rounded-3xl border border-sage-200 bg-white p-8 shadow-md">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-display font-bold text-gray-800 mb-1">Lote 2</h3>
                <p className="text-gray-400 text-sm">Disponível após Lote 1</p>
              </div>
              <div className="text-center mb-6">
                <span className="text-gray-400 text-sm line-through">De R$ XXX,XX</span>
                <div className="text-4xl font-black text-gray-800 mt-1">
                  R$ <span className="text-sage-500/70">XXX</span>
                  <span className="text-lg text-gray-400">,XX</span>
                </div>
                <p className="text-gray-400 text-sm mt-1">ou 12x de R$ XX,XX</p>
              </div>
              <CountdownTimer variant="light" label="Em breve" />
              <div className="mt-6 space-y-3">
                {['Acesso completo ao curso', 'Materiais extras exclusivos', 'Grupo exclusivo de alunos', 'Certificado de conclusão', '🎁 30% voucher presencial 2026'].map((item, i) => (
                  <div key={i} className={`flex items-center gap-2 text-sm ${i >= 4 ? 'text-sage-600 font-medium' : 'text-gray-500'}`}>
                    <CheckCircle className={`w-4 h-4 flex-shrink-0 ${i >= 4 ? 'text-sage-400' : 'text-gray-300'}`} />
                    {item}
                  </div>
                ))}
              </div>
              <button className="btn-shine w-full mt-8 py-4 rounded-xl border-2 border-sage-300 text-sage-600 font-bold text-lg transition-all hover:bg-sage-50">
                🔔 Avise-me
              </button>
            </div>

            {/* VALOR NORMAL */}
            <div className="relative rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-display font-bold text-gray-800 mb-1">Valor Normal</h3>
                <p className="text-gray-400 text-sm">Disponível após os lotes</p>
              </div>
              <div className="text-center mb-6">
                <div className="text-4xl font-black text-gray-800 mt-4">
                  R$ <span className="text-gray-600">XXX</span>
                  <span className="text-lg text-gray-400">,XX</span>
                </div>
                <p className="text-gray-400 text-sm mt-1">ou 12x de R$ XX,XX</p>
              </div>
              <CountdownTimer variant="light" label="Em breve" />
              <div className="mt-6 space-y-3">
                {['Acesso completo ao curso', 'Materiais extras exclusivos', 'Grupo exclusivo de alunos', 'Certificado de conclusão'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-gray-300 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
              <button className="btn-shine w-full mt-8 py-4 rounded-xl border border-gray-200 text-gray-500 font-bold text-lg transition-all hover:bg-gray-50">
                🔔 Avise-me
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ BÔNUS LOTE 1 ══════════ */}
      <section className="py-24 px-4 bg-gradient-to-b from-cream-50 to-white">
        <div className="max-w-5xl mx-auto">
          <div className="reveal text-center mb-16">
            <span className="text-sage-500 text-sm font-medium tracking-[0.3em] uppercase">Exclusivo</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6 text-gray-800">
              Bônus <span className="text-sage-600">Lote 1</span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Quem garantir sua vaga no Lote 1 recebe benefícios exclusivos que não estarão disponíveis depois.
            </p>
          </div>
          
          <div className="reveal grid md:grid-cols-3 gap-8">
            <div className="card-hover-light group p-8 rounded-2xl bg-white border border-sage-100 shadow-sm text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sage-100 to-sage-200/50 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                <Play className="w-8 h-8 text-sage-600" />
              </div>
              <h3 className="text-xl font-display font-bold text-sage-700 mb-3">Aula Prévia Exclusiva</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Acesso antecipado a uma aula especial, disponível apenas para membros do Lote 1. Comece sua transformação antes de todos.
              </p>
            </div>
            
            <div className="card-hover-light group p-8 rounded-2xl bg-white border border-sage-100 shadow-sm text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sage-100 to-sage-200/50 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                <Camera className="w-8 h-8 text-sage-600" />
              </div>
              <h3 className="text-xl font-display font-bold text-sage-700 mb-3">Foto Lado a Lado Exclusiva</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Uma foto especial e exclusiva lado a lado com Victor, um momento único e memorável para guardar para sempre.
              </p>
            </div>
            
            <div className="card-hover-light group p-8 rounded-2xl bg-white border border-sage-100 shadow-sm text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sage-100 to-sage-200/50 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                <Ticket className="w-8 h-8 text-sage-600" />
              </div>
              <h3 className="text-xl font-display font-bold text-sage-700 mb-3">50% Voucher Presencial</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Ganhe <strong className="text-sage-700">50% de desconto</strong> no evento presencial O Despertar da Fé 2026. Uma experiência que vai além do online.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ BÔNUS LOTE 2 ══════════ */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="reveal text-center mb-12">
            <span className="text-sage-500 text-sm font-medium tracking-[0.3em] uppercase">Lote 2</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6 text-gray-800">
              Bônus <span className="text-sage-600">Lote 2</span>
            </h2>
          </div>
          <div className="reveal max-w-2xl mx-auto">
            <div className="card-hover-light p-8 rounded-2xl bg-sage-50/50 border border-sage-100 text-center">
              <div className="w-16 h-16 rounded-2xl bg-sage-100 flex items-center justify-center mx-auto mb-5">
                <Ticket className="w-8 h-8 text-sage-500" />
              </div>
              <h3 className="text-xl font-display font-bold text-gray-800 mb-3">30% Voucher Presencial 2026</h3>
              <p className="text-gray-500 leading-relaxed">
                Membros do Lote 2 recebem <strong className="text-sage-700">30% de desconto</strong> no evento presencial O Despertar da Fé 2026. Garanta sua presença com condições especiais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ CTA FINAL ══════════ */}
      <section className="py-24 px-4 bg-gradient-to-b from-cream-50 to-sage-50 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-sage-200/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-cream-300/20 rounded-full blur-3xl" />
        
        <div className="reveal max-w-3xl mx-auto text-center relative z-10">
          <div className="relative w-24 h-24 rounded-full overflow-hidden mx-auto mb-8 border-4 border-white shadow-xl">
            <Image src="/images/victor-closeup.jpeg" alt="Victor" fill className="object-cover" />
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-gray-800">
            Não perca essa <span className="text-sage-600">oportunidade</span>
          </h2>
          <p className="text-gray-500 text-lg mb-10 leading-relaxed">
            Cadastre seu e-mail e seja o primeiro a saber quando as inscrições do Lote 1 abrirem. 
            Vagas limitadas e condições que não se repetirão.
          </p>
          <EmailCapture variant="light" buttonText="🔔 Quero ser avisado" />
          <p className="text-gray-400 text-xs mt-6">Seus dados estão seguros. Não enviamos spam.</p>
        </div>
      </section>

      {/* ══════════ FOOTER ══════════ */}
      <footer className="py-12 px-4 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-xl font-display font-bold text-sage-600 mb-2">O Despertar da Fé</h3>
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} O Despertar da Fé. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
