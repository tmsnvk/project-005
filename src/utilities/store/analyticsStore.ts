import create from "zustand";

let getLink: string = "";

if (typeof window !== "undefined") getLink = window.location.href;

const analyticsStore = create((set) => ({
  source: getLink.includes("?utm_source=") ? `- ${getLink.substring(getLink.indexOf("=") + 1).toUpperCase()}` : ""
}));

export default analyticsStore;