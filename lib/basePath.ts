const repo = "ns-portfolio";

const isProd = process.env.NODE_ENV === "production";

// Detect GitHub Pages vs local automatically
export const BASE_PATH = isProd ? `/${repo}` : "";