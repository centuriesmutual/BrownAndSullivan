import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";

const ROUTES: string[] = [
  "/",
  "/about",
  "/agents",
  "/audit",
  "/careers",
  "/claims",
  "/cms",
  "/compliance",
  "/compliance-artifacts",
  "/contact",
  "/contactus",
  "/directory",
  "/documents",
  "/do-not-sell",
  "/dental-vision-hearing",
  "/ftc-tsr",
  "/hipaa",
  "/integrations",
  "/legal",
  "/new-enrollment",
  "/policy-directives",
  "/practice",
  "/rewards",
  "/scripts",
  "/search",
  "/tcpa",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const now = new Date();
  return ROUTES.map((path) => ({
    url: path === "/" ? base : `${base}${path}`,
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
