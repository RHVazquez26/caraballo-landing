"use client";

export const trackCallConversion = () => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", "conversion", {
      send_to: "AW-18099581139/KMNqCM6OuJ4cENPhxrZD",
      event_callback: () => {
        console.log("Conversion tracked successfully");
      },
    });
    
    // Also track as a generic lead event for better visibility in GA4 if linked
    (window as any).gtag("event", "generate_lead", {
      business_name: "Caraballo Appliances",
      method: "Phone Call",
    });
  }
};
