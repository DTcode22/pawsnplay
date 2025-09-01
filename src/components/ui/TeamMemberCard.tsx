'use client';

import { motion } from 'framer-motion';
import { Twitter, Linkedin, Dribbble } from 'lucide-react';
import type { TeamMember, SocialLink } from '@/types';

const iconMap = {
  twitter: Twitter,
  linkedin: Linkedin,
  dribbble: Dribbble,
};

const SocialIcon = ({ social }: { social: SocialLink }) => {
  const Icon = iconMap[social.platform];
  return (
    <motion.a
      href={social.href}
      whileHover={{ scale: 1.1, y: -2 }}
      className="text-gray-400 hover:text-gray-600 transition-colors"
      aria-label={`Link to ${social.platform}`}
    >
      <Icon size={24} />
    </motion.a>
  );
};

export const TeamMemberCard = ({ member }: { member: TeamMember }) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="w-full aspect-[4/5] overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <h3 className="text-xl font-semibold text-slate-900">
            {member.name}
          </h3>
          <p className="text-lg text-slate-900/50">{member.role}</p>
        </div>
        <div className="flex items-center gap-5">
          {member.socials.map((social) => (
            <SocialIcon key={social.platform} social={social} />
          ))}
        </div>
      </div>
    </div>
  );
};
