/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  metadata: {
    title: "Srijit's Personal Website",
    description:
      "Srijit Ghosh is a 16yo frontend developer and technologist. This is his personal website.",
    author: "Srijit Ghosh",
    siteUrl: "https://srijit.life",
  },
  nextSeo: {
    title: "Srijit's Personal Website",
    description:
      "Srijit Ghosh is a 16yo frontend developer and technologist. This is his personal website.",
    openGraph: {
      url: "https://srijit.life",
      images: [
        {
          url: "https://cloud-4tgxbh5wm-hack-club-bot.vercel.app/0frontend_dev.jpeg",
          width: 630,
          height: 630,
          alt: "Image description",
        },
      ],
      site_name: "Srijit's Personal Website",
    },
    twitter: {
      handle: "@CheeseBlock011",
      cardType: "summary_large_image",
      title: "Srijit's Personal Website",
      description:
        "Srijit Ghosh is a 16yo frontend developer and technologist. This is his personal website.",
      image:
        "https://cloud-4tgxbh5wm-hack-club-bot.vercel.app/0frontend_dev.jpeg",
    },
  },
  head: {
    // Add custom meta tags
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      // Add more meta tags as needed
    ],

    // Add Twitter card meta tags
    twitter: {
      cardType: "summary_large_image",
      site: "@CheeseBlock011",
    },

    // Add Open Graph meta tags (for Facebook, LinkedIn, etc.)
    openGraph: {
      type: "website",
      url: "https://srijit.life",
      title: "Srijit's Personal Website",
      description:
        "Srijit Ghosh is a 16yo frontend developer and technologist. This is his personal website.",
      images: [
        {
          url: "https://cloud-4tgxbh5wm-hack-club-bot.vercel.app/0frontend_dev.jpeg",
          width: 1200,
          height: 630,
          alt: "Open Graph Image",
        },
      ],
      // Add more Open Graph tags as needed
    },
  },
};

module.exports = nextConfig;
