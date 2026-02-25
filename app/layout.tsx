import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "O Despertar da Fé - Curso Online",
  description: "Uma jornada transformadora de fé e autoconhecimento. Desperte para uma vida plena e cheia de propósito.",
  keywords: "fé, despertar, curso online, autoconhecimento, transformação, espiritualidade",
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
