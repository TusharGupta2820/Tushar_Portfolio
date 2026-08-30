import React from 'react';

interface SkillLogoProps {
  name: string;
  className?: string;
}

export const SkillLogo: React.FC<SkillLogoProps> = ({ name, className = "w-5 h-5" }) => {
  const normalized = name.toLowerCase();

  // Python
  if (normalized.includes('python')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M11.91 2c-5.18 0-4.85 2.25-4.85 2.25v2.34h4.94v.7H5.06S2 7.03 2 12.18c0 5.16 2.68 4.98 2.68 4.98h1.6v-2.34s-.09-2.68 2.64-2.68h4.52s2.55.04 2.55-2.48V4.48S16.48 2 11.91 2zm-2.7 1.48a.82.82 0 1 1 0 1.64.82.82 0 0 1 0-1.64z" fill="#3776AB" />
        <path d="M12.09 22c5.18 0 4.85-2.25 4.85-2.25v-2.34h-4.94v-.7h6.94S22 16.97 22 11.82c0-5.16-2.68-4.98-2.68-4.98h-1.6v2.34s.09 2.68-2.64 2.68h-4.52s-2.55-.04-2.55 2.48v5.18s-.41 2.48 4.16 2.48zm2.7-1.48a.82.82 0 1 1 0-1.64.82.82 0 0 1 0 1.64z" fill="#FFD43B" />
      </svg>
    );
  }

  // TypeScript
  if (normalized.includes('typescript')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#3178C6" />
        <path d="M5 10.5h6M8 10.5v8" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
        <path d="M13.5 16.5c.8.9 2 1.5 3.3 1.5 1.5 0 2.4-.7 2.4-1.8 0-1.2-1.1-1.6-2.4-2.1-1.6-.6-3.1-1.4-3.1-3.2 0-1.8 1.4-3.1 3.5-3.1 1.4 0 2.5.5 3.3 1.3" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  // JavaScript
  if (normalized.includes('javascript')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#F7DF1E" />
        <path d="M7 11v6c0 1.3.8 1.8 1.8 1.8.8 0 1.4-.3 1.8-.7" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
        <path d="M13.5 16.5c.8.9 2 1.5 3.3 1.5 1.5 0 2.4-.7 2.4-1.8 0-1.2-1.1-1.6-2.4-2.1-1.6-.6-3.1-1.4-3.1-3.2 0-1.8 1.4-3.1 3.5-3.1 1.4 0 2.5.5 3.3 1.3" stroke="#000000" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  // C++
  if (normalized.includes('c++')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#00599C" />
        <path d="M11.5 8.5a4 4 0 1 0 0 7" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
        <path d="M14 12h3M15.5 10.5v3M18.5 12h3M20 10.5v3" stroke="#00D8FF" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  // C
  if (normalized === 'c' || normalized.startsWith('c ')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#A8B9CC" />
        <path d="M15 8.5a4.5 4.5 0 1 0 0 7" stroke="#1D2A44" strokeWidth="2.4" strokeLinecap="round" />
      </svg>
    );
  }

  // Java
  if (normalized.includes('java') && !normalized.includes('javascript')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M6 14.5c0 2 2.5 3.5 6 3.5s6-1.5 6-3.5H6z" fill="#E76F00" />
        <path d="M18 13.5c1.5 0 2.5.8 2.5 2s-1 2-2.5 2" stroke="#E76F00" strokeWidth="1.5" />
        <path d="M10 8c.5-2 3-3 3-5 0 2-2 3-1 5" stroke="#5382A1" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M13 9c.5-2 3-3 3-5 0 2-2 3-1 5" stroke="#5382A1" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  // SQL / PostgreSQL / MySQL / Database
  if (normalized.includes('sql') || normalized.includes('postgres') || normalized.includes('database')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <ellipse cx="12" cy="6" rx="8" ry="3" fill="#336791" />
        <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6" stroke="#336791" strokeWidth="2" fill="none" />
        <path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" stroke="#336791" strokeWidth="2" fill="none" />
      </svg>
    );
  }

  // HTML5 & CSS3
  if (normalized.includes('html') || normalized.includes('css')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M4 3l1.5 16.5L12 21l6.5-1.5L20 3H4z" fill="#E34F26" />
        <path d="M12 5v14.2l4.8-1.2L18 5H12z" fill="#EF652A" />
        <path d="M8 8h8M8 11.5h7.5l-.5 4.5-3 1-3-1-.2-2" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  // React
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

  // Next.js
  if (normalized.includes('next')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#000000" stroke="#333333" strokeWidth="1" />
        <path d="M8 7v10M16 17L9.5 8.5" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M16 7v6.5" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  // FastAPI
  if (normalized.includes('fastapi')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#009688" />
        <path d="M13 4L7 13h5l-1 7 7-10h-5l1-6z" fill="#ffffff" />
      </svg>
    );
  }

  // Node.js
  if (normalized.includes('node')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M12 2l9 5.2v10.4L12 22.8 3 17.6V7.2L12 2z" fill="#5FA04E" />
        <path d="M12 6.5l5 2.9v5.8L12 18.1 7 15.2V9.4L12 6.5z" stroke="#ffffff" strokeWidth="1.2" fill="none" />
      </svg>
    );
  }

  // PyTorch
  if (normalized.includes('pytorch')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M13.5 3a7.5 7.5 0 0 0-4.5 13.5l1.5-1.5A5.5 5.5 0 0 1 13.5 5a5.5 5.5 0 0 1 5.5 5.5c0 2-1 3.8-2.6 4.8l1.5 1.5A7.5 7.5 0 0 0 13.5 3z" fill="#EE4C2C" />
        <circle cx="16" cy="7" r="1.2" fill="#EE4C2C" />
      </svg>
    );
  }

  // OpenCV
  if (normalized.includes('opencv') || normalized.includes('vision')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="7" r="4" fill="#ED2527" />
        <circle cx="7" cy="16" r="4" fill="#00B04F" />
        <circle cx="17" cy="16" r="4" fill="#0072BB" />
      </svg>
    );
  }

  // LangChain
  if (normalized.includes('langchain')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="5" fill="#1C3C3C" />
        <path d="M8 12h8M10 8h4M10 16h4" stroke="#25C19F" strokeWidth="2" strokeLinecap="round" />
        <circle cx="6" cy="12" r="2" fill="#25C19F" />
        <circle cx="18" cy="12" r="2" fill="#25C19F" />
      </svg>
    );
  }

  // Tailwind CSS
  if (normalized.includes('tailwind')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.335 6.182 14.974 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.335 13.382 8.974 12 6.001 12z" fill="#38BDF8" />
      </svg>
    );
  }

  // Docker
  if (normalized.includes('docker')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M22.5 10.5c-.4-.3-1.6-.4-2.5.2-.2-1.1-.9-2-2-2.5-.2-.1-.5-.2-.7-.2-.2 0-.4 0-.6.1-.5-1.5-1.9-2.6-3.7-2.6h-.5c-.3 0-.6.1-.9.2-.5-1.2-1.7-2-3-2H8c-.5 0-1 .2-1.4.5-.4.3-.6.8-.6 1.3v1H5c-.5 0-1 .2-1.4.5-.4.3-.6.8-.6 1.3v1H2c-.6 0-1 .4-1 1v5.5C1 19 4.6 22 9 22s8-3 8-5.5v-.5c2.5 0 5-1.5 5.5-4.5.3-.4.2-.8 0-1z" fill="#2496ED" />
      </svg>
    );
  }

  // Git / GitHub
  if (normalized.includes('git')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M21.5 11.2l-8.7-8.7c-.7-.7-1.8-.7-2.5 0L8.7 4.1l3.2 3.2c.7-.2 1.6 0 2.2.6.6.6.8 1.5.6 2.2l3.1 3.1c.7-.2 1.6 0 2.2.6.8.8.8 2.2 0 3-.8.8-2.2.8-3 0-.7-.7-.8-1.7-.5-2.5L13.4 11V16c.3.2.6.5.7.9.4 1.1-.1 2.3-1.2 2.7-1.1.4-2.3-.1-2.7-1.2-.4-1.1.1-2.3 1.2-2.7.3-.1.6-.1.9 0v-5.2c-.3-.1-.6-.1-.9 0-1.1.4-2.3-.1-2.7-1.2-.4-1.1.1-2.3 1.2-2.7.7-.3 1.5-.1 2 .3L8.7 3.5 2.5 9.7c-.7.7-.7 1.8 0 2.5l8.7 8.7c.7.7 1.8.7 2.5 0l7.8-7.8c.7-.7.7-1.8 0-2.5z" fill="#F05032" />
      </svg>
    );
  }

  // Vercel
  if (normalized.includes('vercel')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M12 2L23 21H1L12 2Z" fill="currentColor" />
      </svg>
    );
  }

  // VS Code
  if (normalized.includes('vs code') || normalized.includes('vscode')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M17.5 2L5 11.8 1.5 9 0 10.2l3.8 3.8L0 17.8l1.5 1.2L5 16.2 17.5 26l6.5-3.2V5.2L17.5 2zm1.5 17.6l-8.5-6.6 8.5-6.6v13.2z" fill="#007ACC" />
      </svg>
    );
  }

  // Postman
  if (normalized.includes('postman')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#FF6C37" />
        <path d="M16 8l-8 4 3 1.5L16 8z" fill="#ffffff" />
        <path d="M11 13.5v3.5l2-2-2-1.5z" fill="#ffffff" />
      </svg>
    );
  }

  // Linux
  if (normalized.includes('linux')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <ellipse cx="12" cy="14" rx="7" ry="8" fill="#FCC624" />
        <ellipse cx="12" cy="13" rx="5.5" ry="7" fill="#000000" />
        <ellipse cx="12" cy="15" rx="3.8" ry="4.8" fill="#ffffff" />
        <circle cx="10" cy="10" r="1" fill="#ffffff" />
        <circle cx="14" cy="10" r="1" fill="#ffffff" />
        <circle cx="10.3" cy="10.2" r="0.5" fill="#000000" />
        <circle cx="13.7" cy="10.2" r="0.5" fill="#000000" />
        <path d="M10.5 12c.5.5 2.5.5 3 0l-.5 1.5h-2l-.5-1.5z" fill="#FFA500" />
      </svg>
    );
  }

  // MongoDB
  if (normalized.includes('mongo')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M12 2C12 2 6 7.5 6 13.5c0 4 3 7.5 6 8.5 3-1 6-4.5 6-8.5C18 7.5 12 2 12 2z" fill="#47A248" />
        <path d="M12 3v17c1.5-.5 4.5-3.5 4.5-6.5C16.5 8 12 3 12 3z" fill="#499D4A" />
      </svg>
    );
  }

  // ChromaDB
  if (normalized.includes('chroma')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <circle cx="8" cy="8" r="4" fill="#FF5252" />
        <circle cx="16" cy="8" r="4" fill="#448AFF" />
        <circle cx="12" cy="16" r="4" fill="#69F0AE" />
      </svg>
    );
  }

  // Redis
  if (normalized.includes('redis')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M2 7l10-5 10 5-10 5L2 7z" fill="#D82C20" />
        <path d="M2 12l10 5 10-5M2 17l10 5 10-5" stroke="#A3241A" strokeWidth="1.5" />
      </svg>
    );
  }

  // Ollama
  if (normalized.includes('ollama') || normalized.includes('llama') || normalized.includes('deepseek')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#18181B" />
        <circle cx="9" cy="10" r="1.5" fill="#10B981" />
        <circle cx="15" cy="10" r="1.5" fill="#10B981" />
        <path d="M9 15c1 1 5 1 6 0" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M7 6l2 2M17 6l-2 2" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  // Hugging Face
  if (normalized.includes('hugging')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#FFD21E" />
        <circle cx="9" cy="10" r="1.5" fill="#000000" />
        <circle cx="15" cy="10" r="1.5" fill="#000000" />
        <path d="M8 14c1.5 2 6.5 2 8 0" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  // Default Cyber / Tech Circuit Icon
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect x="2" y="2" width="20" height="20" rx="4" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      <circle cx="8" cy="8" r="2" fill="#3B82F6" />
      <circle cx="16" cy="16" r="2" fill="#8B5CF6" />
      <path d="M8 10v4h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
};
