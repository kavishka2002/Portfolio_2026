import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { profile } from "@/data/profile";
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: profile.siteUrl }, ...projects.map((p) => ({ url: `${profile.siteUrl}/projects/${p.slug}` }))];
}
