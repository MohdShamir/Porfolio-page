import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const SocialLinks = () => {
  const socialLinks = [
    { icon: Github, link: 'https://github.com/MohdShamir', label: 'GitHub' },
    { icon: Linkedin, link: 'https://linkedin.com/in/mohd-shamir', label: 'LinkedIn' },
  ];

  return (
    <div className="flex justify-center gap-6">
      {socialLinks.map(({ icon: Icon, link, label }, index) => (
        <a
          key={index}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="p-3 rounded-full transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-offset-2
                     bg-[#0e0e0e] border border-[#1f1f1f] text-blue-400 hover:bg-blue-500/10 
                     hover:border-blue-500 hover:text-white focus:ring-blue-500 
                     shadow-md hover:shadow-blue-500/40 hover:scale-110 backdrop-blur-md"
        >
          <Icon size={22} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
