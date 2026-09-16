import CacheComponent from "@/components/CacheComponent";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  CacheComponent: true,
};

export default nextConfig;
