import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd()
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "**" }
    ]
  },
  async redirects() {
    const appUrl = process.env.NEXT_PUBLIC_APP_URL || "https://app.pulchriflow.com";
    return [
      { source: "/login", destination: `${appUrl}/login`, permanent: false },
      { source: "/register", destination: `${appUrl}/register`, permanent: false },
      { source: "/dashboard/:path*", destination: `${appUrl}/dashboard/:path*`, permanent: false },
      { source: "/privacy-policy", destination: "/privacy", permanent: true },
      { source: "/terms-and-conditions", destination: "/terms", permanent: true }
    ];
  }
};

export default nextConfig;
