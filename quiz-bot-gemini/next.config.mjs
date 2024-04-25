// next.config.mjs

// Import the withNextVideo function
import { withNextVideo } from 'next-video/process';

// Your Next.js configuration with the images domain included
const nextConfig = {
  images: {
    domains: ['media.giphy.com'],
  },
  // ... other configurations
};

// Export the configuration wrapped by withNextVideo using ES module syntax
export default withNextVideo(nextConfig);
