function getBaseUrl() {
  if (typeof window !== "undefined") return window.location.origin;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return `http://localhost:8080`;
}

const BASE_URL = getBaseUrl() + "/api";

export { BASE_URL };
