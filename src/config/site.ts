import type { SiteConfig } from "@/types"

export const siteConfig: SiteConfig = {
  name: "Netflix",
  description:
    "An open source Netflix clone built using the new router, server components, trpc and everything new in Next.js 13.",
  url: "https://netflx-web.vercel.app",
  ogImage: "https://tx.shadcn.com/og.jpg",
  links: {
    twitter: "https://twitter.com/sadmann17",
    github: "https://github.com/sadmann7",
  },
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "TV Shows",
      href: "/tv-shows",
    },
    {
      title: "Movies",
      href: "/movies",
    },
    {
      title: "New & Popular",
      href: "/new-and-popular",
    },
    {
      title: "My List",
      href: "/my-list",
    },
  ],
}
