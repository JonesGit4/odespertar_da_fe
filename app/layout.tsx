import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "O Despertar da Fé - Curso Online",
  description: "Mais que um curso. Uma jornada transformadora que vai lhe ajudar a enxergar os mistérios nunca revelados sobre os tempos finais, e te ensinar sobre preservação da Fé, dogmas e a VERDADEIRA TRADIÇÃO da Igreja.",
  keywords: "fé, despertar, curso online, autoconhecimento, transformação, espiritualidade, tradição, Igreja",
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
