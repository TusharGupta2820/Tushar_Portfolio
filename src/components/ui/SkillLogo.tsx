import React, { useState } from 'react';

interface SkillLogoProps {
  name: string;
  className?: string;
}

// Map skill names to official logo URLs (SimpleIcons & Devicon CDN)
const LOGO_URL_MAP: Record<string, string> = {
  python: 'https://cdn.simpleicons.org/python/3776AB',
  typescript: 'https://cdn.simpleicons.org/typescript/3178C6',
  javascript: 'https://cdn.simpleicons.org/javascript/F7DF1E',
  'c++': 'https://cdn.simpleicons.org/cplusplus/00599C',
  c: 'https://cdn.simpleicons.org/c/A8B9CC',
  java: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  sql: 'https://cdn.simpleicons.org/postgresql/4169E1',
  'html5 / css3': 'https://cdn.simpleicons.org/html5/E34F26',
  html: 'https://cdn.simpleicons.org/html5/E34F26',
  css: 'https://cdn.simpleicons.org/css3/1572B6',
  react: 'https://cdn.simpleicons.org/react/61DAFB',
  'next.js': 'https://cdn.simpleicons.org/nextdotjs/000000',
  fastapi: 'https://cdn.simpleicons.org/fastapi/009688',
  'node.js & express': 'https://cdn.simpleicons.org/nodedotjs/5FA04E',
  node: 'https://cdn.simpleicons.org/nodedotjs/5FA04E',
  pytorch: 'https://cdn.simpleicons.org/pytorch/EE4C2C',
  opencv: 'https://cdn.simpleicons.org/opencv/5C3EE8',
  'yolo (v8)': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  langchain: 'https://cdn.simpleicons.org/langchain/1C3C3C',
  'tailwind css': 'https://cdn.simpleicons.org/tailwindcss/06B6D4',
  'three.js / react three fiber': 'https://cdn.simpleicons.org/threedotjs/000000',
  'git & github': 'https://cdn.simpleicons.org/git/F05032',
  docker: 'https://cdn.simpleicons.org/docker/2496ED',
  postman: 'https://cdn.simpleicons.org/postman/FF6C37',
  'vs code / cursor': 'https://cdn.simpleicons.org/visualstudiocode/007ACC',
  vercel: 'https://cdn.simpleicons.org/vercel/000000',
  'github actions': 'https://cdn.simpleicons.org/githubactions/2088FF',
  'object-oriented programming (oop)': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
  'data structures & algorithms (dsa)': 'https://cdn.simpleicons.org/leetcode/FFA116',
  'database management systems (dbms)': 'https://cdn.simpleicons.org/postgresql/4169E1',
  'computer networks': 'https://cdn.simpleicons.org/cisco/1BA0D7',
  'operating systems': 'https://cdn.simpleicons.org/linux/FCC624',
  'restful api design': 'https://cdn.simpleicons.org/openapiinitiative/6BA539',
  'microservices architecture': 'https://cdn.simpleicons.org/kubernetes/326CE5',
  'retrieval-augmented generation (rag)': 'https://cdn.simpleicons.org/chromadb/8A2BE2',
  postgresql: 'https://cdn.simpleicons.org/postgresql/4169E1',
  mongodb: 'https://cdn.simpleicons.org/mongodb/47A248',
  mysql: 'https://cdn.simpleicons.org/mysql/4479A1',
  redis: 'https://cdn.simpleicons.org/redis/FF4438',
  chromadb: 'https://cdn.simpleicons.org/chromadb/8A2BE2',
  sqlite: 'https://cdn.simpleicons.org/sqlite/003B57',
  ollama: 'https://cdn.simpleicons.org/ollama/000000',
  'llama 3.1': 'https://cdn.simpleicons.org/meta/0467DF',
  'deepseek r1': 'https://cdn.simpleicons.org/deepseek/4E6BFF',
  'openai whisper': 'https://cdn.simpleicons.org/openai/10A37F',
  paddleocr: 'https://cdn.simpleicons.org/baidu/2932E1',
};

export const SkillLogo: React.FC<SkillLogoProps> = ({ name, className = "w-5 h-5" }) => {
  const [hasError, setHasError] = useState(false);
  const normalized = name.toLowerCase().trim();

  // Look up direct or partial matching URL
  let logoUrl = LOGO_URL_MAP[normalized];
  if (!logoUrl) {
    const matchedKey = Object.keys(LOGO_URL_MAP).find(k => normalized.includes(k) || k.includes(normalized));
    if (matchedKey) logoUrl = LOGO_URL_MAP[matchedKey];
  }

  // Render official vector image if available and no error
  if (logoUrl && !hasError) {
    return (
      <img
        src={logoUrl}
        alt={`${name} logo`}
        className={`${className} object-contain`}
        onError={() => setHasError(true)}
        loading="lazy"
      />
    );
  }

  // Fallback Inline Official Vector SVGs for common skills
  if (normalized.includes('python')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M11.91 2c-5.18 0-4.85 2.25-4.85 2.25v2.34h4.94v.7H5.06S2 7.03 2 12.18c0 5.16 2.68 4.98 2.68 4.98h1.6v-2.34s-.09-2.68 2.64-2.68h4.52s2.55.04 2.55-2.48V4.48S16.48 2 11.91 2zm-2.7 1.48a.82.82 0 1 1 0 1.64.82.82 0 0 1 0-1.64z" fill="#3776AB" />
        <path d="M12.09 22c5.18 0 4.85-2.25 4.85-2.25v-2.34h-4.94v-.7h6.94S22 16.97 22 11.82c0-5.16-2.68-4.98-2.68-4.98h-1.6v2.34s.09 2.68-2.64 2.68h-4.52s-2.55-.04-2.55 2.48v5.18s-.41 2.48 4.16 2.48zm2.7-1.48a.82.82 0 1 1 0-1.64.82.82 0 0 1 0 1.64z" fill="#FFD43B" />
      </svg>
    );
  }

  if (normalized.includes('react')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="2.2" fill="#61DAFB" />
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.3" />
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.3" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.3" transform="rotate(120 12 12)" />
      </svg>
    );
  }

  // Clean Default Tech Hexagon Badge
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M12 2L21 7V17L12 22L3 17V7L12 2Z" stroke="#3B82F6" strokeWidth="1.8" fill="#3B82F6" fillOpacity="0.15" />
      <circle cx="12" cy="12" r="3" fill="#60A5FA" />
    </svg>
  );
};
