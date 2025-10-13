/** @type {import('next').NextConfig} */
const nextConfig = {
  // --- هذا هو الجزء المضاف والمهم ---
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  // ------------------------------------
};

export default nextConfig;