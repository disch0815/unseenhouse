// Slug-Zuordnung der Sprachversionen (Schlüssel: deutscher Slug).
// Wird für hreflang-Alternates und den Sprachumschalter-Kontext genutzt.
import { LOCALES, type Lang } from './i18n';

type Group = Record<Lang, string>;

export const THEMEN_I18N: Group[] = [
  { de: 'radon', it: 'radon', en: 'radon' },
  { de: 'schadstoffe', it: 'inquinanti', en: 'home-pollutants' },
  { de: 'trinkwasser', it: 'acqua', en: 'drinking-water' },
];

export const ARTIKEL_I18N: Group[] = [
  { de: 'was-ist-radon', it: 'cos-e-il-radon', en: 'what-is-radon' },
  { de: 'radon-messen', it: 'misurare-il-radon', en: 'testing-for-radon' },
  { de: 'radon-senken', it: 'ridurre-il-radon', en: 'reducing-radon' },
  { de: 'asbest-im-haus', it: 'amianto-in-casa', en: 'asbestos-at-home' },
  { de: 'schimmel-wohnung', it: 'muffa-in-casa', en: 'mold-at-home' },
  { de: 'schadstoffe-hauskauf', it: 'inquinanti-acquisto-casa', en: 'pollutants-home-buying' },
  { de: 'formaldehyd-voc', it: 'formaldeide-voc', en: 'formaldehyde-voc' },
  { de: 'leitungswasser-testen', it: 'analisi-acqua-rubinetto', en: 'testing-tap-water' },
  { de: 'blei-im-trinkwasser', it: 'piombo-nell-acqua', en: 'lead-in-drinking-water' },
  { de: 'uran-radon-trinkwasser', it: 'uranio-radon-acqua', en: 'uranium-radon-water' },
  { de: 'pfas-trinkwasser', it: 'pfas-acqua', en: 'pfas-drinking-water' },
];

export interface Alternate {
  lang: Lang | 'x-default';
  href: string;
}

/** hreflang-Alternates für Themen- oder Artikelseiten (relative Pfade). */
export function alternatesFor(
  kind: 'thema' | 'artikel',
  lang: Lang,
  slug: string
): Alternate[] {
  const table = kind === 'thema' ? THEMEN_I18N : ARTIKEL_I18N;
  const group = table.find((g) => g[lang] === slug);
  if (!group) return [];
  const base = (l: Lang) =>
    kind === 'thema' ? LOCALES[l].themenBase : LOCALES[l].artikelBase;
  const alts: Alternate[] = (['de', 'it', 'en'] as Lang[]).map((l) => ({
    lang: l,
    href: `${base(l)}/${group[l]}`,
  }));
  // x-default: die deutsche Version als Primärsprache
  alts.push({ lang: 'x-default', href: `${base('de')}/${group.de}` });
  return alts;
}

/** hreflang-Alternates für die Strahlungs-Hub-Seiten. */
export function hubAlternates(): Alternate[] {
  return [
    { lang: 'de', href: LOCALES.de.strahlungHref },
    { lang: 'it', href: LOCALES.it.strahlungHref },
    { lang: 'en', href: LOCALES.en.strahlungHref },
    { lang: 'x-default', href: LOCALES.de.strahlungHref },
  ];
}

/** hreflang-Alternates für die Startseiten. */
export function homeAlternates(): Alternate[] {
  return [
    { lang: 'de', href: '/' },
    { lang: 'it', href: '/it' },
    { lang: 'en', href: '/en' },
    { lang: 'x-default', href: '/' },
  ];
}
