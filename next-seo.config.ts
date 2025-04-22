// next-seo.config.js
const SEO = {
  title: "Promise Oghenevwefe",
  titleTemplate: "%s | Software Engineer Portfolio",
  defaultTitle: "Promise Oghenevwefe| Software Engineer Portfolio",
  description:
    "I'm a full-stack developer building clean, scalable web apps using Laravel, React, NestJS, and more. Always learning, always building.",
  canonical: "https://myspheet.vercel.app",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://myspheet.vercel.app",
    siteName: "Promise Oghenevwefe| Software Engineer Portfolio",
    title: "Promise Oghenevwefe| Software Engineer Portfolio",
    description:
      "Explore my portfolio — projects, skills, and experience as a full-stack developer.",
    images: [
      {
        url: "https://myspheet.vercel.app/og-image.png", // Replace with your OG image
        width: 1200,
        height: 630,
        alt: "Promise Oghenevwefe - Software Engineer",
      },
    ],
  },
  twitter: {
    handle: "@myspheet", // Replace with your Twitter handle
    site: "@myspheet",
    cardType: "summary_large_image",
  },
};

export default SEO;
