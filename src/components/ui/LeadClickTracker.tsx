"use client";

import { useEffect } from "react";

/**
 * Global click listener that captures all click-to-call (tel:)
 * and WhatsApp link clicks, dispatching custom GA4 and GTM events.
 */
export function LeadClickTracker() {
  useEffect(() => {
    function handleLeadClick(e: MouseEvent) {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href") || "";
      const linkText = (anchor.innerText || anchor.getAttribute("aria-label") || "").trim();
      let contactMethod: "phone" | "whatsapp" | null = null;

      if (href.startsWith("tel:")) {
        contactMethod = "phone";
      } else if (
        href.includes("wa.me") ||
        href.includes("api.whatsapp.com") ||
        href.includes("whatsapp.com")
      ) {
        contactMethod = "whatsapp";
      }

      if (contactMethod) {
        // 1. Google Analytics 4 (gtag.js)
        if (typeof window !== "undefined" && (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag) {
          const gtag = (window as unknown as { gtag: (...args: unknown[]) => void }).gtag;
          gtag("event", "generate_lead_click", {
            contact_method: contactMethod,
            destination_url: href,
            link_text: linkText.substring(0, 60),
            page_location: window.location.href,
            page_title: document.title,
            branch_location: "Visakhapatnam",
          });
        }

        // 2. Google Tag Manager / dataLayer push
        if (typeof window !== "undefined") {
          const win = window as unknown as { dataLayer?: Record<string, unknown>[] };
          win.dataLayer = win.dataLayer || [];
          win.dataLayer.push({
            event: "generate_lead_click",
            contact_method: contactMethod,
            destination_url: href,
            element_text: linkText.substring(0, 60),
            page_path: window.location.pathname,
          });
        }
      }
    }

    document.addEventListener("click", handleLeadClick, { capture: true });
    return () => {
      document.removeEventListener("click", handleLeadClick, { capture: true });
    };
  }, []);

  return null;
}

