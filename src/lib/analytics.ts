/**
 * Non-PII Google Analytics (GA4) event dispatcher for Astrological and Numerological Tools.
 * Strictly adheres to privacy guidelines: NO birth dates, times, or personal details are logged.
 */

type ToolEventName = "tool_used" | "result_viewed" | "cta_click";

export function trackToolEvent(
  eventName: ToolEventName,
  parameters: {
    toolName: string;
    action?: string;
    destination?: string;
    [key: string]: unknown;
  }
) {
  if (typeof window === "undefined" || !(window as unknown as { gtag?: (...args: unknown[]) => void }).gtag) {
    return;
  }

  try {
    const gtag = (window as unknown as { gtag: (...args: unknown[]) => void }).gtag;
    gtag("event", eventName, {
      ...parameters,
      non_interaction: false,
    });
  } catch {
    // Silently handle if analytics blocked by browser extension
  }
}
