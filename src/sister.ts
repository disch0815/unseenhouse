// Cross-Promo zur Schwester-Seite everydayradiation.com
import type { Lang } from './i18n';

export const SISTER_URL = 'https://everydayradiation.com';

export const SISTER: Record<
  Lang,
  {
    url: string;
    label: string;
    title: string;
    intro: string;
    cta: string;
    topics: { title: string; href: string }[];
  }
> = {
  de: {
    url: SISTER_URL,
    label: 'Schwester-Seite',
    title: 'Strahlung im Alltag',
    intro:
      'Radon ist Strahlung — und Strahlung steckt auch im Flug, im Röntgenbild und in der Paranuss. Auf unserer Schwester-Seite ordnen wir sie ein: mit Zahlen statt Panik.',
    cta: 'Zu everydayradiation.com',
    topics: [
      { title: 'Strahlung verstehen', href: `${SISTER_URL}/themen/grundlagen` },
      { title: 'Radioaktivität in Lebensmitteln', href: `${SISTER_URL}/themen/lebensmittel` },
      { title: 'Fliegen & kosmische Strahlung', href: `${SISTER_URL}/themen/fliegen` },
      { title: 'Röntgen beim Zahnarzt & Arzt', href: `${SISTER_URL}/themen/roentgen` },
    ],
  },
  it: {
    url: `${SISTER_URL}/it`,
    label: 'Sito gemello',
    title: 'Radiazioni nella vita quotidiana',
    intro:
      'Il radon è radiazione — e la radiazione sta anche nel volo, nella radiografia e nella noce brasiliana. Sul nostro sito gemello la mettiamo in prospettiva: con numeri, senza panico.',
    cta: 'Vai a everydayradiation.com',
    topics: [
      { title: 'Capire le radiazioni', href: `${SISTER_URL}/it/temi/capire` },
      { title: 'Radioattività negli alimenti', href: `${SISTER_URL}/it/temi/alimenti` },
      { title: 'Volare e radiazione cosmica', href: `${SISTER_URL}/it/temi/volare` },
      { title: 'Radiografie dal dentista e dal medico', href: `${SISTER_URL}/it/temi/radiografie` },
    ],
  },
  en: {
    url: `${SISTER_URL}/en`,
    label: 'Sister site',
    title: 'Everyday Radiation',
    intro:
      'Radon is radiation — and radiation is also in your flight, your X-ray, your Brazil nut. Our sister site puts it in perspective: numbers, not panic.',
    cta: 'Visit everydayradiation.com',
    topics: [
      { title: 'Understanding Radiation', href: `${SISTER_URL}/en/topics/basics` },
      { title: 'Radioactivity in Food', href: `${SISTER_URL}/en/topics/food` },
      { title: 'Flying & Cosmic Radiation', href: `${SISTER_URL}/en/topics/flying` },
      { title: 'X-Rays at the Dentist & Doctor', href: `${SISTER_URL}/en/topics/x-rays` },
    ],
  },
};
