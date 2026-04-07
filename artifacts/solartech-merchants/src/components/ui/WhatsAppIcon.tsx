import React from 'react';

interface WhatsAppIconProps {
  className?: string;
  size?: number;
  strokeWidth?: number;
}

export default function WhatsAppIcon({ className = '', size = 24, strokeWidth = 1.6 }: WhatsAppIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Rounded chat bubble */}
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      {/* Phone handset */}
      <path d="M9.5 9a.5.5 0 0 1 .5-.5h.01c.28 0 .53.16.64.42l.72 1.62a.5.5 0 0 1-.1.55l-.5.5a.1.1 0 0 0-.02.1c.2.5.56 1.02 1.06 1.52s1.02.86 1.52 1.06a.1.1 0 0 0 .1-.02l.5-.5a.5.5 0 0 1 .55-.1l1.62.72c.26.11.42.36.42.64V15a.5.5 0 0 1-.5.5c-3.04 0-5.5-2.46-5.5-5.5z" />
    </svg>
  );
}
