import './globals.css';

export const metadata = {
  title: "Thanseeh — Web Developer",
  description: "Web developer based in Mokeri, Kuttiady, Kozhikode. Building modern websites, custom business software, basic SEO, and Google Business Profile & Maps setup.",
  keywords: [
    "Thanseeh",
    "Web Developer Kozhikode",
    "Web Developer Kuttiady",
    "Web Developer Kerala",
    "Custom Business Software",
    "Website Development",
    "Google Maps Setup",
    "SEO Kozhikode",
    "React",
    "Next.js"
  ],
  authors: [{ name: "Thanseeh", url: "https://github.com/thanseehdev" }],
  openGraph: {
    title: "Thanseeh — Web Developer",
    description: "Building modern websites and custom business software to help businesses grow and work smarter. Based in Mokeri, Kuttiady, Kozhikode.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thanseeh — Web Developer & Custom Software Solutions",
    description: "Building modern websites and custom business software. Based in Mokeri, Kuttiady, Kozhikode.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        {children}
      </body>
    </html>
  );
}
