"use client";

import React, { useState } from "react";
import { Share2, Link as LinkIcon, Check } from "lucide-react";

export function SocialShare({
  title,
  url
}: {
  title: string;
  url: string;
}) {
  const [copied, setCopied] = useState(false);

  const encodedTitle = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(url);

  const shareWhatsApp = `https://wa.me/?text=${encodedTitle}%20-%20${encodedUrl}`;
  const shareTwitter = `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`;
  const shareFacebook = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  return (
    <div className="flex items-center gap-2 py-3 border-y border-gold/15 my-6">
      <span className="text-xs font-semibold text-midnight/70 flex items-center gap-1.5 uppercase tracking-wider">
        <Share2 className="w-3.5 h-3.5 text-gold" />
        Share:
      </span>

      <div className="flex items-center gap-2">
        <a
          href={shareWhatsApp}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-colors"
          title="Share on WhatsApp"
          aria-label="Share on WhatsApp"
        >
          <svg viewBox="0 0 32 32" fill="currentColor" className="w-4 h-4">
            <path d="M16.004 3C9.005 3 3.334 8.671 3.334 15.67c0 2.503.732 4.834 1.994 6.794L3 29l6.702-2.288a12.578 12.578 0 006.302 1.687h.006c6.998 0 12.669-5.671 12.669-12.67C28.679 8.73 23.002 3 16.004 3zm0 23.183h-.005a10.474 10.474 0 01-5.34-1.463l-.383-.227-3.978 1.359 1.376-3.876-.25-.398a10.463 10.463 0 01-1.605-5.588c0-5.796 4.716-10.512 10.516-10.512 2.809 0 5.448 1.095 7.435 3.083a10.45 10.45 0 013.08 7.438c0 5.797-4.716 10.512-10.516 10.512l-.33-.328z" />
          </svg>
        </a>

        <a
          href={shareTwitter}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-sky-500/10 text-sky-600 hover:bg-sky-500 hover:text-white transition-colors"
          title="Share on X"
          aria-label="Share on X"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>

        <a
          href={shareFacebook}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-blue-600/10 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
          title="Share on Facebook"
          aria-label="Share on Facebook"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
            <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
          </svg>
        </a>

        <button
          type="button"
          onClick={handleCopy}
          className="p-2 rounded-full bg-gold/10 text-gold hover:bg-gold hover:text-midnight transition-colors relative"
          title="Copy Link"
          aria-label="Copy link to clipboard"
        >
          {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <LinkIcon className="w-4 h-4" />}
        </button>

        {copied && (
          <span className="text-[11px] text-emerald-600 font-medium animate-fade-in">
            Link copied!
          </span>
        )}
      </div>
    </div>
  );
}
