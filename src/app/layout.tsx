import type { Metadata } from "next";
 
import './globals.css';

 

export const metadata: Metadata = {
  title: "JuanMa594 - Software, Automation & AI Developer Portfolio",
  description: "Personal portfolio of JuanMa594, showcasing GitHub projects, experience, and skills. Built with React, TypeScript, and Tailwind CSS.",
  // Browser translation tools can rewrite nodes and break custom animations; the site ships its own EN/ES toggle.
  other: { google: 'notranslate' },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      translate="no"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
