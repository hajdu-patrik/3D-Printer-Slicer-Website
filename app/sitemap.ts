import type { MetadataRoute } from 'next';
import { siteUrl } from './config/links';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/`,
      lastModified: new Date()
    }
  ];
}
