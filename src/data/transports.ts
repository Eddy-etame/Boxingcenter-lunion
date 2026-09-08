/**
 * REGISTRE DES TRANSPORTS — les itinéraires qui déposent au club.
 *
 * La règle est stricte : une ligne n'entre ici que si elle fait avancer
 * quelqu'un jusqu'au 388 avenue des États-Unis.
 *
 * La ligne clé est la 59 : elle parcourt toute l'avenue des États-Unis et
 * marque l'arrêt « États-Unis Fondeyre », dans le quartier du club. Elle part
 * de La Vache, qui est une station du métro B.
 *
 * Ce qu'on n'écrit JAMAIS ici : un horaire, une fréquence à la minute, une
 * durée de trajet. Chaque étape porte le lien vers sa page officielle.
 */

export type Mode = 'bus' | 'metro' | 'train';

export type Etape = {
  mode: Mode;
  code: string;
  de: string;
  a: string;
  precision?: string;
  jours: string;
  href: string;
};

export type Itineraire = {
  id: string;
  onglet: string;
  titre: string;
  resume: string;
  mode: Mode;
  etapes: readonly Etape[];
  meilleur?: true;
};

export const RESEAU = {
  nom: 'Tisséo',
  site: 'https://www.tisseo.fr/',
  itineraire: 'https://www.tisseo.fr/se-deplacer/itineraires',
} as const;

export const LIBELLE_MODE: Record<Mode, string> = {
  bus: 'Bus',
  metro: 'Métro',
  train: 'Train',
};

export const ARRIVEE = {
  arret: 'États-Unis Fondeyre',
  rue: 'avenue des États-Unis',
  phrase: 'Tu descends à « États-Unis Fondeyre ». Le club est au 388 de cette avenue.',
} as const;

const LIGNE_59: Etape = {
  mode: 'bus',
  code: '59',
  de: 'La Vache',
  a: 'États-Unis Fondeyre',
  precision: 'la 59 parcourt toute l’avenue des États-Unis',
  jours: 'toute la semaine',
  href: 'https://www.tisseo.fr/nos-mobilites/transports-en-commun/ligne-59',
};

const METRO_B: Etape = {
  mode: 'metro',
  code: 'B',
  de: 'Borderouge',
  a: 'La Vache',
  precision: 'deux stations, et la 59 part de là',
  jours: 'sept jours sur sept',
  href: 'https://www.tisseo.fr/nos-mobilites/transports-en-commun/ligne-b',
};

/** Le titre de la page, ligne par ligne. La dernière porte l'accent. */
export const TITRE = [
  'La 59 parcourt',
  'toute l’avenue des États-Unis.',
  'Le club est au 388.',
] as const;

/** Le chapeau : ce que fait le meilleur trajet, en une phrase. */
export const CHAPEAU =
  'Depuis L’Union, la 40 rejoint Borderouge, le métro B descend jusqu’à La Vache, et la 59 finit le travail : elle s’arrête à « États-Unis Fondeyre », dans le quartier du club. En voiture, c’est le périphérique et la sortie 33b « Lalande ».';

export const ITINERAIRES: readonly Itineraire[] = [
  {
    id: 'quarante',
    onglet: 'La 40, le métro B, la 59',
    titre: 'De L’Union à l’avenue des États-Unis.',
    resume:
      'La 40 relie L’Union Malbou à Borderouge, terminus du métro B. Deux stations plus loin, La Vache — et c’est là que démarre la 59, qui parcourt toute l’avenue des États-Unis jusqu’à l’arrêt « États-Unis Fondeyre ».',
    mode: 'bus',
    meilleur: true,
    etapes: [
      {
        mode: 'bus',
        code: '40',
        de: 'L’Union Malbou',
        a: 'Borderouge',
        precision: 'terminus du métro B',
        jours: 'en semaine',
        href: 'https://www.tisseo.fr/nos-mobilites/transports-en-commun/ligne-40',
      },
      METRO_B,
      LIGNE_59,
    ],
  },
  {
    id: 'soixante-treize',
    onglet: 'La 73, depuis Saint-Jean',
    titre: 'Depuis Saint-Jean, la 73 puis le métro.',
    resume:
      'La 73 relie Saint-Jean Lestang à Borderouge, tous les jours. On y prend le métro B jusqu’à La Vache, puis la 59 jusqu’à « États-Unis Fondeyre ». C’est le trajet des habitants de Saint-Jean et du nord de L’Union.',
    mode: 'bus',
    etapes: [
      {
        mode: 'bus',
        code: '73',
        de: 'Saint-Jean Lestang',
        a: 'Borderouge',
        precision: 'terminus du métro B',
        jours: 'toute la semaine',
        href: 'https://www.tisseo.fr/nos-mobilites/transports-en-commun/ligne-73',
      },
      METRO_B,
      LIGNE_59,
    ],
  },
  {
    id: 'metro',
    onglet: 'Le métro B et la 59',
    titre: 'Si tu arrives de Toulouse.',
    resume:
      'Le métro B dessert La Vache. Tu y descends, tu prends la 59, et trois arrêts plus loin tu es avenue des États-Unis. C’est le trajet le plus simple depuis le centre.',
    mode: 'metro',
    etapes: [
      {
        mode: 'metro',
        code: 'B',
        de: 'Toulouse',
        a: 'La Vache',
        precision: 'station sur la ligne B',
        jours: 'sept jours sur sept',
        href: 'https://www.tisseo.fr/nos-mobilites/transports-en-commun/ligne-b',
      },
      LIGNE_59,
    ],
  },
];

export const itineraire = (id: string) => {
  const i = ITINERAIRES.find((x) => x.id === id);
  if (!i) throw new Error(`Itinéraire inconnu : ${id}`);
  return i;
};

export const MEILLEUR = ITINERAIRES.find((i) => i.meilleur) ?? ITINERAIRES[0];

export const RESUME = 'La 40, le métro B, puis la 59 jusqu’à l’avenue des États-Unis';

export type Depart = { depuis: string; itineraire: string; texte: string };

export const DEPARTS: readonly Depart[] = [
  {
    depuis: 'L’Union',
    itineraire: 'quarante',
    texte:
      'La 40 part de L’Union Malbou et finit à Borderouge. Le métro B t’emmène à La Vache, la 59 fait le reste de l’avenue.',
  },
  {
    depuis: 'Saint-Jean',
    itineraire: 'soixante-treize',
    texte:
      'La 73 relie Saint-Jean Lestang à Borderouge, tous les jours. Même suite ensuite : métro B, puis la 59.',
  },
  {
    depuis: 'Toulouse',
    itineraire: 'metro',
    texte:
      'Le métro B dessert La Vache. Tu descends, tu prends la 59, et tu es avenue des États-Unis.',
  },
];

export const AVERTISSEMENT =
  'Les horaires changent d’une saison à l’autre. On te dit quelles lignes prendre ; pour l’heure exacte, ouvre la fiche Tisséo — le lien est juste à côté de chaque étape.';
