// Zentrale Seiten-Konfiguration — hier anpassen, sobald Name/Domain feststehen.
export const SITE = {
  name: 'Unsichtbare Risiken',
  tagline: 'Messen statt fürchten',
  description:
    'Radon im Keller, Asbest in der Wand, Blei im Wasser: die unsichtbaren Risiken des Alltags — verständlich erklärt, mit Zahlen statt Panik.',
  // AdSense: Nach Freischaltung des AdSense-Kontos hier die Publisher-ID eintragen,
  // z. B. 'ca-pub-1234567890123456'. Solange leer, werden nur Platzhalter gerendert.
  adsensePublisherId: 'ca-pub-1767160731181931',
  // Affiliate: Amazon-Partner-Tags pro Marktplatz (partnernet.amazon.de,
  // programma-affiliazione.amazon.it, affiliate-program.amazon.com).
  // Leere Tags => Link ohne Tag. Wird von AffiliateBox automatisch angehängt.
  amazonPartnerTags: {
    'amazon.de': 'unseenhouse-21',
    'amazon.it': '',
    'amazon.com': '',
  } as Record<string, string>,
  kurseUrl: 'https://kurse.dirkschulze.ch',
  // Impressums-Angaben (Quelle: www.dirkschulze.ch/impressum)
  owner: {
    name: 'Dirk Schulze Röntgendiagnostik GmbH',
    street: 'Schlatterpünt 2',
    city: '8460 Marthalen',
    country: 'Schweiz',
    email: 'ds@dirkschulze.ch',
    phone: '+41 52 589 68 59',
    uid: 'CHE-258.518.798',
    management: 'PD Dr. med. dent. Dirk Schulze (Vorsitzender), Nadine Sandra Schulze (Geschäftsführerin)',
  },
};
