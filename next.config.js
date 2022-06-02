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
      domains: ["images.dog.ceo"],
    },
  };
  return nextConfig;
};
