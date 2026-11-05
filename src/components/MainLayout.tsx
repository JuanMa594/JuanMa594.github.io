import React from 'react';
import { ThemeProvider } from './ThemeContext';
import { LanguageProvider } from './LanguageContext';
import { CosmeticsProvider } from './CosmeticsContext';
import { ProjectsFilterProvider } from './Projects/ProjectsFilterContext';

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <CosmeticsProvider>
          <ProjectsFilterProvider>
            <main className="min-h-screen bg-background text-foreground">
              {children}
            </main>
          </ProjectsFilterProvider>
        </CosmeticsProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}
