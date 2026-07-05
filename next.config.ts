import type { NextConfig } from "next";

const repo = "ns-portfolio"; 

const nextConfig: NextConfig = {
	output: "export",
	basePath: `/${repo}`,
	assetPrefix: `/${repo}/`,
	trailingSlash: true,
};

module.exports = nextConfig;

export default nextConfig;
