import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/admin/imagenes",
        destination: "/imagenes",
        permanent: true,
      },
      {
        source: "/encargar-una-pintura",
        destination: "/encargos-pintura",
        permanent: true,
      },
      {
        source: "/pinturas-originales",
        destination: "/pinturas",
        permanent: true,
      },
      {
        source: "/pinturas-originales-a-la-venta",
        destination: "/pinturas",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
