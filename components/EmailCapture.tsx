'use client';

import { useState } from 'react';

interface EmailCaptureProps {
  variant: 'dark' | 'light';
  buttonText?: string;
  placeholder?: string;
}

export default function EmailCapture({ variant, buttonText = 'Avise-me', placeholder = 'Seu melhor e-mail' }: EmailCaptureProps) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // TODO: Integrate with email service
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  const isDark = variant === 'dark';

  if (submitted) {
    return (
      <div className={`text-center py-4 px-6 rounded-xl ${isDark ? 'bg-gold-500/10 border border-gold-500/30' : 'bg-sage-50 border border-sage-200'}`}>
        <p className={`text-lg font-medium ${isDark ? 'text-gold-400' : 'text-sage-600'}`}>
          ✓ Cadastrado com sucesso!
        </p>
        <p className={`text-sm mt-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
          Você será avisado quando as inscrições abrirem.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-lg mx-auto">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={placeholder}
        required
        className={`flex-1 px-5 py-3.5 rounded-xl text-base transition-all focus:outline-none focus:ring-2 ${
          isDark
            ? 'bg-dark-300/80 border border-gold-500/20 text-white placeholder-gray-500 focus:ring-gold-500/40 focus:border-gold-500/50'
            : 'bg-white border border-gray-200 text-gray-800 placeholder-gray-400 focus:ring-sage-400/40 focus:border-sage-400 shadow-sm'
        }`}
      />
      <button
        type="submit"
        className={`btn-shine px-8 py-3.5 rounded-xl font-bold text-base transition-all whitespace-nowrap ${
          isDark
            ? 'bg-gradient-to-r from-gold-600 to-gold-500 text-dark-900 hover:from-gold-500 hover:to-gold-400 shadow-lg shadow-gold-500/20'
            : 'bg-gradient-to-r from-sage-500 to-sage-600 text-white hover:from-sage-400 hover:to-sage-500 shadow-lg shadow-sage-500/20'
        }`}
      >
        {buttonText}
      </button>
    </form>
  );
}
