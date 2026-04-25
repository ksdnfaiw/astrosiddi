import React from "react";

interface ImagePlaceholderProps {
  className?: string;
  text?: string;
}

export function ImagePlaceholder({ className = "w-full h-64", text = "Upload Image" }: ImagePlaceholderProps) {
  return (
    <div className={`flex flex-col items-center justify-center bg-deepPurple border-2 border-dashed border-gold/50 rounded-lg ${className}`}>
      {/* Om Symbol SVG */}
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#F5A623"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="mb-3"
      >
        <path d="M7 11C7 11 9 9 12 9C15 9 17 11 17 14C17 18.5 10 20 10 20" />
        <path d="M12 9C12 9 12 5 15 5C18 5 19 8 19 11" />
        <path d="M10 20C10 20 13 22 17 22" />
        <path d="M5 14C5 14 3 13 3 11C3 9 5 8 5 8" />
        <circle cx="15" cy="3" r="1" fill="#F5A623" />
      </svg>
      <span className="font-jost text-xs text-mutedGold uppercase tracking-wider">{text}</span>
    </div>
  );
}
