/**
 * CMS DOCUMENT MODELS (Sanity-compatible plain objects, no dependency required).
 * These mirror the TypeScript types in /lib/data/*. Create the same document types in the chosen
 * headless CMS, then re-implement /lib/cms.ts to read from it.
 * Editorial roles: Areas, Investor Stories, Articles, Developers, Strategy pages, Testimonials, FAQs, Images, SEO.
 */
const seo = { name: 'seo', type: 'object', fields: [{ name: 'title', type: 'string' }, { name: 'description', type: 'text' }, { name: 'ogImage', type: 'image' }, { name: 'noindex', type: 'boolean' }] };
const image = { name: 'image', type: 'image', options: { hotspot: true }, fields: [{ name: 'alt', type: 'string' }] }; // hotspot = focal point

export const schemas = [
  { name: 'area', type: 'document', fields: [
    { name: 'name', type: 'string' }, { name: 'slug', type: 'slug' }, image, { name: 'tagline', type: 'string' },
    { name: 'tags', type: 'array', of: [{ type: 'string' }] }, { name: 'overview', type: 'text' }, { name: 'masterplan', type: 'text' },
    { name: 'location', type: 'text' }, { name: 'connectivity', type: 'text' }, { name: 'lifestyle', type: 'text' },
    { name: 'market', type: 'text' }, { name: 'rental', type: 'text' }, { name: 'pipeline', type: 'text' },
    { name: 'developers', type: 'array', of: [{ type: 'reference', to: [{ type: 'developer' }] }] },
    { name: 'strengths', type: 'array', of: [{ type: 'string' }] }, { name: 'considerations', type: 'array', of: [{ type: 'string' }] },
    { name: 'bfView', type: 'text' }, { name: 'story', type: 'reference', to: [{ type: 'story' }] }, seo,
  ] },
  { name: 'story', type: 'document', fields: [
    { name: 'name', type: 'string' }, { name: 'slug', type: 'slug' }, { name: 'country', type: 'string' }, { name: 'strategy', type: 'string' },
    { name: 'verified', type: 'boolean', description: 'Only verified, approved stories are published and indexed.' },
    { name: 'situation', type: 'object' }, { name: 'options', type: 'array', of: [{ type: 'object' }] }, { name: 'decision', type: 'text' },
    { name: 'acquisition', type: 'object' }, { name: 'evolution', type: 'array', of: [{ type: 'object' }] },
    { name: 'testimonial', type: 'reference', to: [{ type: 'testimonial' }] }, image, seo,
  ] },
  { name: 'article', type: 'document', fields: [
    { name: 'title', type: 'string' }, { name: 'slug', type: 'slug' }, { name: 'category', type: 'string' }, { name: 'alsoIn', type: 'array', of: [{ type: 'string' }], description: 'Other categories (the article also appears under their filter).' }, { name: 'seoTitle', type: 'string' },
    { name: 'description', type: 'text', description: 'Meta description, Open Graph description and hub excerpt.' }, { name: 'standfirst', type: 'text' },
    { name: 'published', type: 'date' }, { name: 'updated', type: 'date', description: 'Date of the last revision.' },
    { name: 'author', type: 'object', description: 'A real BF author only; otherwise the byline is « BF Properties ».' },
    { name: 'body', type: 'array', of: [{ type: 'block' }, { type: 'figures' }, { type: 'table' }, { type: 'compare' }, { type: 'method' }, { type: 'analysis' }, { type: 'question' }, { type: 'profiles' }, { type: 'quote' }, { type: 'image' }] },
    { name: 'image', type: 'string', description: 'Cover: an authorised image slot (home teaser, Open Graph, structured data).' },
    { name: 'sources', type: 'array', of: [{ type: 'object' }], description: 'Official sources only: label, url, note.' }, { name: 'methodology', type: 'array', of: [{ type: 'text' }] }, { name: 'methodologyTitle', type: 'string' },
    { name: 'disclaimer', type: 'text' }, { name: 'cta', type: 'object' }, { name: 'links', type: 'array', of: [{ type: 'object' }], description: 'Links to routes that exist only.' },
    { name: 'related', type: 'array', of: [{ type: 'reference', to: [{ type: 'article' }] }] }, { name: 'noindex', type: 'boolean' }, seo,
  ] },
  { name: 'developer', type: 'document', fields: [{ name: 'name', type: 'string' }, { name: 'description', type: 'text' }, { name: 'logo', type: 'image' }] },
  { name: 'strategy', type: 'document', fields: [
    { name: 'title', type: 'string' }, { name: 'slug', type: 'slug' }, { name: 'objective', type: 'text' }, { name: 'suits', type: 'text' },
    { name: 'how', type: 'text' }, { name: 'scenario', type: 'text' }, { name: 'capital', type: 'string' },
    { name: 'benefits', type: 'array', of: [{ type: 'string' }] }, { name: 'considerations', type: 'array', of: [{ type: 'string' }] }, seo,
  ] },
  { name: 'testimonial', type: 'document', fields: [{ name: 'quote', type: 'text' }, { name: 'author', type: 'string' }, { name: 'approved', type: 'boolean' }] },
  { name: 'faq', type: 'document', fields: [{ name: 'question', type: 'string' }, { name: 'answer', type: 'text' }, { name: 'page', type: 'string' }] },
];
