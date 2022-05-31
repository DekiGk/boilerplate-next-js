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
  };
  return nextConfig;
};
