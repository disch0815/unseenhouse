// Zentrale Seiten-Konfiguration — hier anpassen, sobald Name/Domain feststehen.
export const SITE = {
  name: 'Unsichtbare Risiken',
  tagline: 'Messen statt fürchten',
  description:
    'Radon im Keller, Asbest in der Wand, Blei im Wasser: die unsichtbaren Risiken des Alltags — verständlich erklärt, mit Zahlen statt Panik.',
  // AdSense: Nach Freischaltung des AdSense-Kontos hier die Publisher-ID eintragen,
  // z. B. 'ca-pub-1234567890123456'. Solange leer, werden nur Platzhalter gerendert.
  adsensePublisherId: '',
  // Affiliate: Amazon-Partner-Tags pro Marktplatz (partnernet.amazon.de,
  // programma-affiliazione.amazon.it, affiliate-program.amazon.com).
  // Leere Tags => Link ohne Tag. Wird von AffiliateBox automatisch angehängt.
  amazonPartnerTags: {
    'amazon.de': '',
    'amazon.it': '',
    'amazon.com': '',
  } as Record<string, string>,
  kurseUrl: 'https://kurse.dirkschulze.ch',
  // Impressum-Angaben (Pflicht in DE/CH bei kommerziellen Seiten mit Werbung)
  owner: {
    name: 'PD Dr. Dirk Schulze', // TODO prüfen/vervollständigen
    street: 'Strasse Nr.', // TODO
    city: 'PLZ Ort', // TODO
    country: 'Schweiz',
    email: 'kontakt@example.com', // TODO
  },
};
