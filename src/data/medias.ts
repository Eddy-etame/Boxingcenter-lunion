/**
 * MANIFESTE MÉDIA — la seule porte d'entrée des images.
 *
 * Nom de fichier : `<sujet>-lunion` — le sujet est ce qu'on voit, la ville est
 * celle du site. Pas de « boxing-center » dans le nom, pas de numéro d'origine.
 *
 * `alt` décrit la scène, jamais un lieu. `legende` dit ce qu'on voit puis le
 * club de destination du site.
 */

export type Media = {
  slug: string;
  source: string;
  alt: string;
  legende?: string;
  focus?: string;
};

const LOT = 'wetransfer_dsc_3218-jpg_2026-09-07_1104';
const EU = 'Boxing Center Toulouse États-Unis';

export const MEDIAS = [
  {
    slug: 'club-boxe-lunion',
    source: 'DSC_3078.jpg',
    alt: 'Vue large de la salle pendant un cours collectif : plusieurs pratiquants autour et sur le ring.',
    legende: `Un cours collectif — ${EU}`,
    focus: '50% 50%',
  },
  {
    slug: 'ring-de-boxe-lunion',
    source: 'DSC_3100.jpg',
    alt: 'Le ring vu de l’extérieur des cordes, pendant un entraînement.',
    legende: `Le ring — ${EU}`,
    focus: '55% 50%',
  },
  {
    slug: 'sparring-boxe-lunion',
    source: 'DSC_3117.jpg',
    alt: 'Deux boxeurs casqués en opposition contrôlée pendant une séance de sparring.',
    legende: `Sparring encadré — ${EU}`,
    focus: '50% 35%',
  },
  {
    slug: 'boxe-anglaise-lunion',
    source: 'DSC_3054.jpg',
    alt: 'Un boxeur en garde face à un coach qui tient les pattes d’ours, dans le ring.',
    legende: `Travail technique aux pattes — ${EU}`,
    focus: '55% 35%',
  },
  {
    slug: 'premiere-seance-lunion',
    source: 'DSC_3131.jpg',
    alt: 'Un pratiquant enroule les bandes autour des mains d’un autre avant l’entraînement.',
    legende: `Les bandes, avant tout le reste — ${EU}`,
    focus: '55% 45%',
  },
  {
    slug: 'sac-de-frappe-lunion',
    source: 'DSC_2964.jpg',
    alt: 'Un pratiquant en sweat rouge frappe un sac lourd pendant un entraînement.',
    legende: `Travail au sac — ${EU}`,
    focus: '55% 40%',
  },
  {
    slug: 'preparation-physique-lunion',
    source: 'DSC_3081.jpg',
    alt: 'Un pratiquant fait de la corde à sauter pendant l’échauffement, au centre de la salle.',
    legende: `Échauffement à la corde — ${EU}`,
    focus: '45% 40%',
  },
  {
    slug: 'entrainement-boxe-lunion',
    source: 'DSC_3215.jpg',
    alt: 'Un boxeur s’entraîne dans le ring pendant que d’autres pratiquants observent depuis le bord.',
    legende: `Le club pendant un entraînement — ${EU}`,
    focus: '50% 45%',
  },
  {
    slug: 'travail-au-corps-lunion',
    source: 'DSC_3309.jpg',
    alt: 'Deux pratiquants au corps à corps pendant un exercice, gants verts.',
    legende: `Travail au corps — ${EU}`,
    focus: '50% 40%',
  },
  {
    slug: 'encadrement-boxe-lunion',
    source: 'DSC_2979.jpg',
    alt: 'Un coach ajuste les gants d’un boxeur casqué avant de monter sur le ring.',
    legende: `L’encadrement avant la montée sur le ring — ${EU}`,
    focus: '45% 40%',
  },
  {
    slug: 'materiel-boxe-lunion',
    source: 'DSC_2932.jpg',
    alt: 'Gants de boxe et casque de protection posés sur un sac de sport dans le vestiaire.',
    legende: `Le matériel du club — ${EU}`,
    focus: '50% 45%',
  },
] as const satisfies readonly Media[];

export type MediaSlug = (typeof MEDIAS)[number]['slug'];

const INDEX = new Map(MEDIAS.map((m) => [m.slug, m as Media]));

export function media(slug: MediaSlug): Media {
  const m = INDEX.get(slug);
  if (!m) throw new Error(`Média inconnu : ${slug}`);
  return m;
}

export const DOSSIER_SOURCE = LOT;

/** Les photos par RÔLE, pas par nom de fichier. */
export const ROLES = {
  hero: 'club-boxe-lunion',
  signature: 'sparring-boxe-lunion',
  premiereSeance: 'premiere-seance-lunion',
  effort: 'sac-de-frappe-lunion',
  calme: 'ring-de-boxe-lunion',
  salle: 'entrainement-boxe-lunion',
} as const satisfies Record<string, MediaSlug>;
