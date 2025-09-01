'use client';

import { Container } from '@/components/ui/Container';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { TeamMemberCard } from '@/components/ui/TeamMemberCard';
import { TEAM_MEMBERS } from '@/lib/data';

const TeamsSection = () => {
  return (
    <section id="team" className="py-24 bg-white">
      <Container size="custom">
        <div className="border-b border-black/20 pb-4 mb-16">
          <ScrollReveal>
            <h2 className="text-4xl font-medium text-slate-900 flex items-center gap-4">
              <span className="text-3xl">🐾</span> Our Team
            </h2>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM_MEMBERS.map((member, index) => (
            <ScrollReveal key={member.name} delay={index * 0.1}>
              <TeamMemberCard member={member} />
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TeamsSection;
