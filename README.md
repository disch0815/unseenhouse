# Unsichtbare Risiken — Nischen-Webseite

Werbefinanzierte Ratgeber-Webseite („Messen statt fürchten"), entstanden aus
dem Ressourcen-Bereich von [kurse.dirkschulze.ch](https://kurse.dirkschulze.ch).
Sieben Themenbereiche: Radon, Radioaktivität in Lebensmitteln, Fliegen &
kosmische Strahlung, Röntgen, Strahlungs-Grundlagen, Schadstoffe im Haus,
Trinkwasserqualität.

Technik: [Astro](https://astro.build) (statische Seite) — schnell, SEO-stark,
kostenlos hostbar.

**Dreisprachig:** Deutsch (unter `/`), Italienisch (unter `/it`, Rechtslage
Italien: D.Lgs. 101/2020, D.Lgs. 18/2023, Legge 257/92) und Englisch (unter
`/en`, US-lokalisiert: EPA, pCi/L, ADA, Lead and Copper Rule, PFAS-MCLs).
Inhalte liegen pro Sprache in `src/content/{artikel,themen}/<lang>/`, UI-Texte
in `src/i18n.ts`. Weitere Sprachen (z. B. Französisch) folgen demselben
Muster: Content-Ordner anlegen, Locale in `i18n.ts` ergänzen, Routen unter
`src/pages/fr/` kopieren.

## Lokal arbeiten

```bash
npm install
npm run dev       # Entwicklung auf http://localhost:4321
npm run build     # fertige Seite in dist/
```

## Vor dem Livegang: Checkliste

1. **`src/site.ts` ausfüllen** — Impressums-Angaben (Name, Adresse, E-Mail)
   sind bei werbefinanzierten Seiten Pflicht.
2. **Domain:** unseenhouse.com ist in `astro.config.mjs` eingetragen; hreflang-Alternates, Sitemap (`/sitemap-index.xml`) und robots.txt sind eingerichtet.
3. **Inhalte prüfen** — alle Artikel liegen als Markdown in
   `src/content/artikel/`, die Themen in `src/content/themen/`. Neuer Artikel =
   neue `.md`-Datei mit gleichem Frontmatter-Schema; er erscheint automatisch
   auf Start- und Themenseite.

## Hosting (kostenlos, empfohlen: Cloudflare Pages)

1. Projekt in ein GitHub-Repository pushen.
2. Auf [pages.cloudflare.com](https://pages.cloudflare.com) das Repo verbinden.
3. Build-Einstellungen: Framework „Astro", Build-Befehl `npm run build`,
   Output-Verzeichnis `dist`.
4. Eigene Domain im Cloudflare-Dashboard verbinden (eine .ch-Domain kostet
   ca. 10–15 CHF/Jahr, z. B. bei Infomaniak oder Hostpoint).

Alternativen: Netlify, Vercel, GitHub Pages — alle mit denselben Einstellungen.

## Werbung einrichten

### Google AdSense

1. Konto auf [adsense.google.com](https://adsense.google.com) erstellen und die
   Domain anmelden. Wichtig: AdSense akzeptiert nur Seiten mit eigenem Inhalt,
   Impressum und Datenschutzerklärung — alles bereits vorhanden.
2. Nach der Freischaltung die **Publisher-ID** (`ca-pub-…`) in `src/site.ts`
   bei `adsensePublisherId` eintragen.
3. Im AdSense-Dashboard pro Platzierung einen **Anzeigenblock** anlegen und die
   Slot-IDs in den `<AdSlot slot="…" />`-Aufrufen eintragen
   (`src/pages/index.astro`, `src/pages/themen/[id].astro`,
   `src/pages/artikel/[id].astro`).
4. **Consent:** Für die EU/Schweiz verlangt Google eine zertifizierte
   Consent-Plattform. Am einfachsten: im AdSense-Konto unter
   „Datenschutz & Mitteilungen" die Google-eigene Consent-Meldung aktivieren.
   Der eingebaute einfache Banner (`ConsentBanner.astro`) kann dann entfernt
   werden.

### Affiliate (Amazon PartnerNet)

1. Konto auf [partnernet.amazon.de](https://partnernet.amazon.de) erstellen.
2. Partner-Tag in `src/site.ts` bei `amazonPartnerTag` eintragen — er wird an
   alle Amazon-Links in den Affiliate-Boxen automatisch angehängt.
3. Affiliate-Boxen stehen im Frontmatter einzelner Artikel (`affiliate:`-Block,
   siehe `radon-messen.md`). Links auf konkrete, selbst geprüfte Produkte
   konvertieren besser als Suchlinks — die jetzigen Such-URLs sind Platzhalter.
4. Weitere Netzwerke für diese Nische: Digistore24, AWIN (Messgeräte-Shops).

### Direktvermarktung

Die Seite `/werbung` ist die Kontaktseite für direkt gebuchte Werbeplätze —
sinnvoll, sobald erste Besucherzahlen da sind (dann Mediadaten ergänzen).

## Rechtliches

- `src/pages/impressum.astro` und `src/pages/datenschutz.astro` sind Vorlagen
  nach revDSG/DSGVO mit AdSense- und Affiliate-Abschnitten. Vor dem Livegang
  eigene Angaben eintragen und im Zweifel juristisch prüfen lassen.
- Affiliate-Links sind automatisch als «Anzeige · Affiliate-Link» gekennzeichnet
  und tragen `rel="sponsored nofollow"`.
- Gesundheitsthemen: Die Artikel sind bewusst als allgemeine Information mit
  amtlichen Quellen (BAG, BfS, WHO, CDC) formuliert und ersetzen keine Beratung.

## Struktur

```
src/
  site.ts                  zentrale Konfiguration (Name, IDs, Impressum)
  content/themen/          7 Themenbereiche × 3 Sprachen (Navigation + Übersichtsseiten)
  content/artikel/         22 Ratgeber-Artikel × 3 Sprachen (Markdown)
  components/              AdSlot, AffiliateBox, ConsentBanner, Header, Footer …
  layouts/BaseLayout.astro Grundgerüst mit SEO-Metadaten
  pages/                   Start-, Themen-, Artikel- und Rechtsseiten
```
