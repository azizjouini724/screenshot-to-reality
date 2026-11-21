// Métadonnées propres à chaque page, sans hériter d'une image générique.
export function pageHead(title: string, description: string) {
  return { meta: [{ title: `${title} | Carthage Table` }, { name: 'description', content: description }, { property: 'og:title', content: `${title} | Carthage Table` }, { property: 'og:description', content: description }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] };
}
