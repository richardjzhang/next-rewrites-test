/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        { source: "/foo", destination: "http://localhost:4000/foo" },
      ],
    };
  },
};

export default nextConfig;
