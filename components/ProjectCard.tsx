"use client";

import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
}

export default function ProjectCard({ title, description, link }: ProjectCardProps) {
  return (
    <motion.a
      href={link}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className="border border-black rounded-2xl p-6 flex flex-col justify-between hover:bg-black hover:text-white transition-all duration-300 shadow-[4px_4px_0px_#000]"
    >
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm opacity-80">{description}</p>
      </div>
      <span className="mt-4 text-xs uppercase tracking-wide font-semibold">
        → View Project
      </span>
    </motion.a>
  );
}
