import type { NextConfig } from "next";

const repo = "ns-portfolio"; 
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
	output: "export",
	basePath: isProd ? `/${repo}` : "",
	assetPrefix: isProd ? `/${repo}/` : "",
};

module.exports = nextConfig;

export default nextConfig;
