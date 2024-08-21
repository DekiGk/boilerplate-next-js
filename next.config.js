module.exports = async (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    ...defaultConfig,
    compiler: {
      styledComponents: true,
    },
    reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "images.dog.ceo",
        },
      ],
    },
  };
  return nextConfig;
};
