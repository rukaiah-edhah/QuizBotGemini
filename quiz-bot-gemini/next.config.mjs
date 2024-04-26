import { withNextVideo } from 'next-video/process';

const nextConfig = {
  images: {
    domains: ['media.giphy.com'],
  },
};

export default withNextVideo(nextConfig);
