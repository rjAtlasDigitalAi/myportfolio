export default function robots() {
  const baseUrl = 'https://millersmith.design';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
