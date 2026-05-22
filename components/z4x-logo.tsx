'use client';

import React from 'react';

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export function Z4XLogo({ size = 120, className, ...props }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 210"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* Outer Hexagon with Custom Left Break */}
      <path
        d="M 100 15 
           L 178 60 
           L 178 150 
           L 100 195 
           L 22 150 
           L 22 105"
        stroke="currentColor"
        strokeWidth="9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Top-Left part of Hexagon that continues into top of Z */}
      <path
        d="M 100 15 
           L 22 60 
           L 22 75 
           L 90 75"
        stroke="currentColor"
        strokeWidth="9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Central Backbone string (also the vertical of '4') */}
      <path
        d="M 100 15 L 100 195"
        stroke="currentColor"
        strokeWidth="9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* The rest of 'Z' (Diagonal and bottom bar) */}
      <path
        d="M 90 75 L 22 143 L 95 143"
        stroke="currentColor"
        strokeWidth="9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* '4' triangle leg and crossbar */}
      <path
        d="M 100 75 L 65 125 L 125 125"
        stroke="currentColor"
        strokeWidth="9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* 'X' first diagonal */}
      <path
        d="M 120 75 L 178 150"
        stroke="currentColor"
        strokeWidth="9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* 'X' second diagonal */}
      <path
        d="M 120 150 L 178 75"
        stroke="currentColor"
        strokeWidth="9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Z4XSparkle({ size = 16, className, ...props }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path d="M12 0C12 6.627 18.627 12 25 12C18.627 12 12 17.373 12 24C12 17.373 5.373 12 0 12C5.373 12 12 6.627 12 0Z" />
    </svg>
  );
}
