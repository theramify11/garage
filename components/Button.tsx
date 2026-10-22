'use client';

import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
}

export default function Button({ children, variant = 'primary', href, onClick, type = 'button', className = '', disabled = false }: ButtonProps) {
  const cls = variant === 'primary' ? `btn-primary ${className}` : `btn-outline ${className}`;

  if (href) {
    return (
      <Link href={href} className={`inline-flex items-center justify-center gap-2 ${cls}`}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={`${cls}`} disabled={disabled}>
      {children}
    </button>
  );
}
