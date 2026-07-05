const repo = "ns-portfolio";

const isProd = process.env.NODE_ENV === "production";

// Detect GitHub Pages vs local automatically
export const BASE_PATH = isProd ? `/${repo}` : "";

export const withBasePath = (path: string) => {
  if (!path) return "";

  if (path.startsWith("http")) return path;

  const normalized = path.startsWith("/") ? path : `/${path}`;

  if (normalized.startsWith(BASE_PATH)) return normalized;

  return `${BASE_PATH}${normalized}`;
};