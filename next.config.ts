import type { NextConfig } from "next";
import { LEGACY_ARTWORK_REDIRECTS } from "./src/lib/artwork-slugs";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      ...LEGACY_ARTWORK_REDIRECTS,
      {
        source: "/cuadros-para-living",
        destination: "/cuadros/para-living",
        statusCode: 301,
      },
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
