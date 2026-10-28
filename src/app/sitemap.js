export default function sitemap() {
  const baseUrl = 'https://millersmith.design';

  return [
    {
      url: baseUrl,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
  ];
}
