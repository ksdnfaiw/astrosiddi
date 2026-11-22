"use client";

import React from "react";
import { FloatingDevotionalActions } from "./FloatingDevotionalActions";

/**
 * Re-exporting FloatingDevotionalActions as WhatsAppButton
 * to preserve backward compatibility while delivering the 3-button
 * devotional floating action group (WhatsApp, Location, Shri Vigneshwara Suprabhatam)
 * matching the reference images.
 */
export function WhatsAppButton() {
  return <FloatingDevotionalActions />;
}

export default WhatsAppButton;
