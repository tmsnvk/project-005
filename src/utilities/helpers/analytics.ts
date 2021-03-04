import { trackCustomEvent } from "gatsby-plugin-google-analytics";

export const trackClick = (category: string, action: string): void => {
  trackCustomEvent({ category, action });
};