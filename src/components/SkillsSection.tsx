import React, { useState } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

const bentoCategories = [
  {
    title: 'CONTENT STRATEGY & CREATOR ECOSYSTEM',
    badge: 'STRATEGY & GROWTH',
    items: ['Creator Management', 'Content Calendars', 'Campaign Planning', 'User Journey', 'E-Voucher Distribution'],
    description: 'Led end-to-end Marathi creator onboarding, content calendar strategy, and high-engagement campaign execution for leading video ecosystems.',
    stat: 'POC - MARATHI',
    colSpan: 'lg:col-span-7',
  },
  {
    title: 'MODERATION, QA & POLICY AUDITING',
    badge: 'COMPLIANCE & INTEGRITY',
    items: ['Content Moderation', 'Quality Assurance (QA)', '2nd Level Qualitycheck', 'Product QC', 'Community Guidelines Audit'],
    description: 'Implemented multi-level content audits, vendor calibrations, and product quality checks in coordination with e-commerce and moderation teams.',
    stat: 'STRICT STANDARDS',
    colSpan: 'lg:col-span-5',
  },
  {
    title: 'BRAND PARTNERSHIPS & MONETIZATION',
    badge: 'COMMERCIAL & OPS',
    items: ['Influencer Marketing', 'Brand Collaborations', 'Vendor Management', 'Agency Partner Management', 'Monetization Strategy'],
    description: 'Spearheaded influencer marketing partnerships, brand sales, monetization roadmaps, and scalable vendor operations.',
    stat: 'SCALE & VALUE',
    colSpan: 'lg:col-span-5',
  },
  {
    title: 'MEDIA RESEARCH, BROADCAST & DIRECTION',
    badge: 'JOURNALISM & PRODUCTION',
    items: ['Video Conceptualization', 'Primary & Depth Research', 'News 18 Lokmat', 'Audioranjan Podcast', 'All India Radio', 'Award-Winning Films'],
    description: 'Engineered comprehensive media research, monthly analytical reporting, and award-winning cinematic storytelling & audio broadcasts.',
    stat: 'AWARD WINNING',
    colSpan: 'lg:col-span-7',
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const SkillsSection: React.FC = () => {
  const [, setHoveredIdx] = useState<number | null>(null);

  return (
    <section
      id="skills"
      className="relative w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black pt-6 sm:pt-8 pb-16 sm:pb-24 px-4 sm:px-12 lg:px-20 overflow-hidden flex flex-col justify-center"
    >
      {/* Ambient Glows */}
      <div className="absolute top-1/3 left-1/4 w-64 h-64 sm:w-[34rem] sm:h-[34rem] bg-[#D4AF37]/5 rounded-full blur-[80px] sm:blur-[170px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-60 h-60 sm:w-[28rem] sm:h-[28rem] bg-[#8C6D4F]/5 rounded-full blur-[80px] sm:blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Eyebrow Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-4 mb-5 sm:mb-7"
        >
          <span
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            03 / AREAS OF EXPERTISE
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
        </motion.div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 sm:mb-10"
        >
          <h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.9] sm:leading-[0.85] select-none break-words"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              STRATEGIC EXECUTION.
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
              PROVEN RESULTS.
            </span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6"
        >
          {bentoCategories.map((block, idx) => (
            <motion.div
              key={block.title}
              variants={cardVariants}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              whileHover={{ y: -5, transition: { duration: 0.25 } }}
              className={`${block.colSpan} relative p-5 sm:p-8 md:p-9 rounded-sm border border-[#8C6D4F]/35 bg-[#100D0B]/85 backdrop-blur-xl overflow-hidden transition-all duration-500 hover:border-[#D4AF37]/80 hover:shadow-[0_16px_45px_rgba(212,175,55,0.14)] cursor-pointer group`}
            >
              {/* Top Subtle Border Highlight */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Corner Minimal Pins */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#D4AF37]/40 group-hover:border-[#D4AF37] transition-colors duration-300" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#D4AF37]/40 group-hover:border-[#D4AF37] transition-colors duration-300" />

              {/* Card Meta Header */}
              <div className="flex items-center justify-between mb-3.5 sm:mb-4">
                <span className="text-[9.5px] sm:text-[10px] font-mono tracking-[0.2em] sm:tracking-[0.25em] uppercase text-[#D4AF37] group-hover:text-[#F3DBB3] transition-colors">
                  {block.badge}
                </span>
                <span className="text-[9.5px] sm:text-[10px] font-mono px-2 py-0.5 sm:px-2.5 border border-[#8C6D4F]/40 text-[#C4B5A5] bg-[#17130F] group-hover:border-[#D4AF37]/50 group-hover:text-white transition-all">
                  {block.stat}
                </span>
              </div>

              {/* Title */}
              <h3
                className="text-2xl sm:text-3xl lg:text-4xl font-normal tracking-wide text-white mb-2.5 sm:mb-3 group-hover:text-[#F7E7C4] transition-colors"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                {block.title}
              </h3>

              {/* Description */}
              <p
                className="text-xs sm:text-sm text-[#A8988B] font-light leading-relaxed mb-5 sm:mb-7 max-w-xl group-hover:text-[#D5CBC0] transition-colors"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {block.description}
              </p>

              {/* Interactive Tag Chips */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-3.5 sm:pt-4 border-t border-[#8C6D4F]/20">
                {block.items.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 sm:px-3.5 sm:py-1.5 text-[9.5px] sm:text-[10.5px] font-medium tracking-[0.14em] sm:tracking-[0.16em] uppercase rounded-sm border border-[#8C6D4F]/35 bg-[#171310] text-[#E8D7C5] group-hover:border-[#D4AF37]/50 group-hover:bg-[#1F1914] group-hover:text-white transition-all duration-300"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default SkillsSection;