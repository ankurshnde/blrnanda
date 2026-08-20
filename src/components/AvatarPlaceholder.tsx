import React from 'react';

interface AvatarPlaceholderProps {
  name: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const AvatarPlaceholder: React.FC<AvatarPlaceholderProps> = ({
  name,
  className = '',
  size = 'md',
}) => {
  const getInitials = (n: string) => {
    const parts = n.replace(/^(Dr\.|Prof\.|Mr\.|Ms\.)\s*/, '').trim().split(' ');
    if (parts.length >= 2) {
      return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
    }
    return n.slice(0, 2).toUpperCase();
  };

  const sizeClasses = {
    sm: 'w-12 h-12 text-xs',
    md: 'w-20 h-20 text-sm',
    lg: 'w-24 h-24 text-base',
    xl: 'w-32 h-32 text-xl',
  };

  return (
    <div
      className={`relative rounded-full flex items-center justify-center font-bold tracking-wider select-none overflow-hidden transition-all duration-300 border border-yellow-500/20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 text-yellow-400/90 shadow-inner group-hover:border-yellow-400/50 group-hover:scale-105 ${sizeClasses[size]} ${className}`}
      title={name}
    >
      {/* Subtle background pattern / glow */}
      <div className="absolute inset-0 bg-radial-gradient from-yellow-500/10 to-transparent opacity-60 pointer-events-none" />
      
      {/* Avatar Silhouette Icon combined with Initials */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        <svg
          className="w-1/2 h-1/2 opacity-35 mb-0.5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
        <span className="font-mono font-bold leading-none text-[0.8em]">{getInitials(name)}</span>
      </div>
    </div>
  );
};
