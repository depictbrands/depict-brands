'use client';

import AboutHero from '@/components/AboutHero';
import AboutValues from '@/components/AboutValues';
import AboutTeam from '@/components/AboutTeam';
import AboutTeamGrid from '@/components/AboutTeamGrid';

export default function AboutPage() {
  return (
    <main className="bg-white">
      <AboutHero />
      <AboutValues />
      <AboutTeam />
      <AboutTeamGrid />
    </main>
  );
}
