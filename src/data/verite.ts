/**
 * REGISTRE DE VÉRITÉ — Boxing Center depuis L'Union.
 *
 * Un fait s'écrit ICI une fois, avec sa source et sa date, puis se projette
 * dans le HTML, les métadonnées, le JSON-LD, llms.txt, le formulaire et le
 * moteur. Aucun composant n'écrit un horaire, une adresse ou une URL en dur —
 * le contrôle de build le refuse.
 *
 * Un point d'attention sur ce site : le club de Toulouse États-Unis ne publie
 * PAS d'horaires d'ouverture, seulement trois plannings hebdomadaires. On ne
 * publie donc aucune heure. Les champs d'ouverture restent vides et le JSON-LD
 * n'annonce pas d'amplitude : inventer une heure enverrait quelqu'un devant
 * une porte fermée.
 */

export type Source = 'site-club' | 'wikipedia' | 'cahier-des-charges' | 'a-verifier';

export type Fait<T = string> = { valeur: T; source: Source; verifie: string };

/** Décidé par le client (Eddy, 2026-09-10) : le numéro et l'adresse que ce site affiche. */
const CDC = (v: string): Fait => ({ valeur: v, source: 'cahier-des-charges', verifie: '2026-09-10' });
const CLUB = (v: string): Fait => ({ valeur: v, source: 'site-club', verifie: '2026-09-09' });
const WIKI = (v: string): Fait => ({ valeur: v, source: 'wikipedia', verifie: '2026-09-09' });

/* ─────────────────────────────  LE SITE  ───────────────────────────── */

export const SITE = {
  origine: 'https://www.boxingcenter-lunion.fr',
  nom: 'Boxing Center — depuis L’Union',
  nomCourt: 'Boxing Center L’Union',
  langue: 'fr-FR',
  /** L'Union est le point de départ du visiteur, jamais une adresse de club. */
  ville: 'L’Union',
  codePostal: '31240',
  gentile: 'Unionais',
  departement: 'Haute-Garonne',
  secteur: 'nord-est toulousain',
  /** L'accès en trois mots, pour le pied de hero. Jamais une distance. */
  accesCourt: 'Périphérique, sortie 33b',
  /** Le formulaire Inlet de CE site : une demande arrive triée par ville. */
  formulaire: '574f2627-1b98-455e-8b89-510809530b27',
} as const;

/* ─────────────────────────────  CONTACT  ───────────────────────────── */

export const CONTACT = {
  telephone: CDC('09 39 03 67 48'),
  telephoneLien: CDC('+33939036748'),
  email: CDC('boxingcenter31@gmail.com'),
} as const;

/* ─────────────────────────────  LE CLUB  ───────────────────────────── */

export type Club = {
  id: 'etats-unis';
  nom: string;
  nomCourt: string;
  ville: string;
  codePostal: string;
  adresse: string;
  telephone: string;
  telephoneLien: string;
  site: string;
  activites: string;
  plannings: string;
  /** ici, la porte d'entrée n'est pas une grille tarifaire mais la séance d'essai */
  tarifs: string;
  /** ce que le club publie à la place d'une amplitude : trois plannings */
  horaires: Fait;
  horairesCourt: string;
  /** vides : le club ne publie pas d'heures d'ouverture. On n'en invente pas. */
  ouverture: string;
  fermeture: string;
  ouvertureTexte: string;
  fermetureTexte: string;
  acces: string;
  singularite: string;
  faits: readonly { cle: string; valeur: string; source: string }[];
  angle: string;
};

export const CLUBS: readonly Club[] = [
  {
    id: 'etats-unis',
    nom: 'Boxing Center Toulouse États-Unis',
    nomCourt: 'Toulouse États-Unis',
    ville: 'Toulouse',
    codePostal: '31200',
    adresse: '388 avenue des États-Unis, 31200 Toulouse',
    telephone: '09 39 03 67 48',
    telephoneLien: '+33939036748',
    site: 'https://boxingcenter.fr/salle-de-sport-toulouse/boxing-center-salle-de-toulouse-etats-unis/',
    activites:
      'https://boxingcenter.fr/salle-de-sport-toulouse/boxing-center-salle-de-toulouse-etats-unis/',
    plannings: 'https://boxingcenter.fr/plannings-des-salles-boxing-center-toulouse/',
    tarifs: 'https://boxingcenter.fr/participez-seance-essai/',
    horaires: CLUB('sur trois plannings hebdomadaires — Boxe, Fitness et Sol'),
    horairesCourt: '3 plannings : Boxe · Fitness · Sol',
    ouverture: '',
    fermeture: '',
    ouvertureTexte: '',
    fermetureTexte: '',
    acces:
      'Par le périphérique, sortie 33b « Lalande » — c’est l’accès que le club indique. En transports, le métro B jusqu’à La Vache, puis la ligne 59 qui parcourt toute l’avenue des États-Unis.',
    singularite:
      'La plus grande salle de France dédiée aux sports de combat, selon le club : 1 200 m² d’entraînement en trois zones de 400 m².',
    faits: [
      { cle: 'Ligne', valeur: '59, sur toute l’avenue', source: 'Tisséo' },
      { cle: 'Surface', valeur: '1 200 m²', source: 'boxingcenter.fr' },
      { cle: 'Espaces', valeur: '3 zones de 400 m²', source: 'boxingcenter.fr' },
      { cle: 'Équipement', valeur: '2 rings, 1 cage, 16 sacs', source: 'boxingcenter.fr' },
      { cle: 'Plannings', valeur: '3 publiés', source: 'boxingcenter.fr' },
    ],
    angle:
      'Le club qui réunit toutes les disciplines du réseau en un seul lieu : un espace striking et sol avec cage surélevée, un espace boxe à deux rings, un espace préparation physique à seize sacs.',
  },
] as const;

export const club = (id: Club['id'] = 'etats-unis'): Club => {
  const c = CLUBS.find((x) => x.id === id);
  if (!c) throw new Error(`Club inconnu : ${id}`);
  return c;
};

/** Le club de destination du site. Une seule destination ici. */
export const DESTINATION = CLUBS[0];

/* ────────────────────────  L'UNION, LES FAITS  ──────────────────────── */

export const VILLE = {
  population: WIKI('12 638 habitants (2023)'),
  statut: WIKI('commune de Toulouse Métropole'),
  distance: WIKI('au nord-est de Toulouse, contre le périphérique'),
  rivieres: WIKI('les coteaux du nord-est toulousain'),
  routes: WIKI('l’A68 à la sortie 1, le périphérique à la sortie 14 Croix-Daurade, et la D888'),
  bus: WIKI('le Linéo L9 et les lignes Tisséo 33, 40, 42, 43, 68, 73 et 76'),
  /** Le fait local qui donne son identité au site. */
  figure: WIKI('l’olivier millénaire, planté sur la place de la mairie'),
  histoire: WIKI(
    'la commune est née en 1793 de la fusion de Belbèze-lès-Toulouse et de Lacournandrie, et porte son nom depuis 1794'
  ),
} as const;

/**
 * La phrase qui relie le secteur au club, quand un fait honnête le permet.
 */
export const NOTE_SECTEUR =
  'Le club est sur l’avenue des États-Unis, à côté de la sortie 33b du périphérique — le même périphérique qui borde L’Union.';

/** Les six communes limitrophes. */
export const LIMITROPHES: readonly { nom: string; note?: string }[] = [
  { nom: 'Balma' },
  { nom: 'Launaguet', note: 'sur la route du club' },
  { nom: 'Montrabé' },
  { nom: 'Saint-Geniès-Bellevue' },
  { nom: 'Saint-Jean', note: 'desservie par la ligne 73' },
  { nom: 'Toulouse', note: 'la commune du club' },
] as const;

/* ─────────────────────────  CE QU'ON NE DIT PAS  ───────────────────── */

/** Laisser croire qu'une salle est DANS L'Union. Refusé au build. */
export const INTERDIT: readonly string[] = [
  'salle de L’Union',
  'notre salle à L’Union',
  'notre club à L’Union',
  'situé à L’Union',
  'située à L’Union',
  'basé à L’Union',
  'Boxing Center L’Union vous accueille',
];

/** Vendre l'absence. La faute la plus coûteuse. Refusée au build. */
export const VENTE_NEGATIVE: readonly string[] = [
  'pas de salle',
  'pas de club',
  'aucune salle',
  'aucun club',
  'n’existe pas de salle',
  "n'existe pas de salle",
];

/** Formulations justes, à reprendre telles quelles. */
export const FORMULATIONS = [
  'club de boxe à proximité de L’Union',
  'club de MMA près de L’Union',
  'cours accessibles depuis L’Union',
  'Boxing Center accueille les Unionais dans son club de Toulouse États-Unis',
] as const;
