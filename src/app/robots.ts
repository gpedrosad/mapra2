import { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

const PRIVATE_PATHS = ["/api/", "/imagenes"];

function publicRules(userAgent: string) {
  return {
    userAgent,
    allow: "/",
    disallow: PRIVATE_PATHS,
  };
}

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      publicRules("*"),
      publicRules("GPTBot"),
      publicRules("ChatGPT-User"),
      publicRules("OAI-SearchBot"),
      publicRules("PerplexityBot"),
      publicRules("ClaudeBot"),
      publicRules("Google-Extended"),
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
