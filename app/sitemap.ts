import type { MetadataRoute } from "next";
import { site } from "@/lib/data";

const routes = ["", "/courses", "/courses/protocols", "/placements", "/campus", "/fees", "/corporate", "/resources", "/about", "/contact", "/demo"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((r) => ({ url: `${site.url}${r}`, changeFrequency: "monthly", priority: r === "" ? 1 : 0.7 }));
}
