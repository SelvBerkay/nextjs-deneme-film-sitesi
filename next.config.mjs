/** @type {import('next').NextConfig} */
const nextConfig = {
  env : {
    MOVIE_API : process.env.MOVIE_API
  },
  images : {
    remotePatterns : [
      {
        hostname : "image.tmdb.org"
      }
    ]
  }
};

export default nextConfig;
