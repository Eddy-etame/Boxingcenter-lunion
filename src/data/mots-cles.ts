/**
 * REGISTRE DES MOTS-CLÉS — le territoire de recherche, page par page.
 *
 * Principe : plus de pertinence PAR page, pas plus de pages. Neuf pages de
 * fond, deux pages de commune qui portent chacune une géographie réelle.
 *
 * Les prioritaires sont les composants naturels d'une expression — la requête
 * exacte vit dans le title et la description, où elle ne tord aucune phrase.
 * Le contrôle de build les vérifie dans le texte visible : chaque motif gardé
 * est une promesse d'écriture.
 */

import type { RouteId } from './routes';

export type Cluster = {
  page: RouteId;
  prioritaires: readonly string[];
  secondaires: readonly string[];
};

export const CONTEXTE_GEO = {
  ville: 'L’Union',
  codePostal: '31240',
  gentile: 'Unionais',
  departement: 'Haute-Garonne',
  secteur: 'nord-est toulousain',
} as const;

export const CLUSTERS: readonly Cluster[] = [
  {
    page: 'accueil',
    prioritaires: ['club de boxe', 'L’Union', 'sport de combat', 'grappling', 'États-Unis'],
    secondaires: [
      'boxe L’Union',
      'club de boxe près de L’Union',
      'salle de boxe près de L’Union',
      'cours de boxe L’Union',
      'boxe anglaise L’Union',
      'MMA L’Union',
      'boxe enfant L’Union',
      '31240',
      'Unionais',
      'nord-est toulousain',
      'Lalande',
      'métro B',
      'La Vache',
    ],
  },
  {
    page: 'boxe-anglaise',
    prioritaires: ['boxe anglaise', 'L’Union', 'débutant'],
    secondaires: [
      'cours de boxe L’Union',
      'club de boxe L’Union',
      'ring de compétition',
      'compétiteurs amateurs',
      'apprendre à boxer',
      'pattes d’ours',
    ],
  },
  {
    page: 'mma',
    prioritaires: ['grappling', 'L’Union', 'travail au sol', 'cage'],
    secondaires: [
      'MMA L’Union',
      'club MMA L’Union',
      'salle MMA L’Union',
      'jiu-jitsu brésilien',
      'combat au sol',
      'tatamis',
      'cage control',
    ],
  },
  {
    page: 'kick-boxing',
    prioritaires: ['pieds-poings', 'L’Union', 'full contact'],
    secondaires: [
      'boxe pieds poings L’Union',
      'kick boxing L’Union',
      'boxe thaï L’Union',
      'striking',
      'low kick',
    ],
  },
  {
    page: 'boxe-enfants',
    prioritaires: ['boxe enfant', 'L’Union', 'touché contrôlé'],
    secondaires: [
      'cours de boxe enfant L’Union',
      'boxe ado L’Union',
      'sport de combat enfant',
      'boxe éducative',
    ],
  },
  {
    page: 'preparation-physique',
    prioritaires: ['cross-training', 'L’Union', 'musculation', 'Hyrox'],
    secondaires: [
      'boxing fitness L’Union',
      'boxe femme L’Union',
      'Boxing Lady',
      'street workout',
      'accès libre',
      'cardio',
      'seize sacs de frappe',
    ],
  },
  {
    page: 'premiere-seance',
    prioritaires: ['première séance', 'L’Union', 'débutant'],
    secondaires: [
      'première séance boxe L’Union',
      'séance d’essai',
      'commencer la boxe',
      'jamais fait de boxe',
      'que faut-il apporter',
    ],
  },
  {
    page: 'ta-seance',
    prioritaires: ['L’Union', 'créneau', 'planning'],
    secondaires: [
      'planning boxe L’Union',
      'horaires boxe L’Union',
      'boxe le soir L’Union',
      'boxe le midi',
      'boxe le samedi',
    ],
  },
  {
    page: 'saint-jean',
    prioritaires: [
      'club de boxe Saint-Jean',
      'boxe anglaise Saint-Jean',
      'club MMA Saint-Jean',
      'salle MMA Saint-Jean',
      'sport de combat Saint-Jean',
      'club kick boxing Saint-Jean',
      'boxe pieds poings Saint-Jean',
      'club boxe thaï Saint-Jean',
    ],
    secondaires: [
      'boxe Saint-Jean',
      'salle de boxe Saint-Jean',
      'boxe enfant Saint-Jean',
      'Saint-Jeannais',
      '31240',
      'ligne 73',
    ],
  },
  {
    page: 'rouffiac-tolosan',
    prioritaires: [
      'club de boxe Rouffiac-Tolosan',
      'boxe anglaise Rouffiac-Tolosan',
      'club MMA Rouffiac-Tolosan',
      'salle MMA Rouffiac-Tolosan',
      'sport de combat Rouffiac-Tolosan',
      'club kick boxing Rouffiac-Tolosan',
      'boxe pieds poings Rouffiac-Tolosan',
      'club boxe thaï Rouffiac-Tolosan',
    ],
    secondaires: [
      'boxe Rouffiac',
      'salle de boxe Rouffiac-Tolosan',
      'boxe enfant Rouffiac-Tolosan',
      'Rouffiacois',
      '31180',
      'route d’Albi',
    ],
  },
  {
    page: 'contact',
    prioritaires: ['L’Union', 'contact'],
    secondaires: [
      'club de boxe près de L’Union',
      'inscription boxe L’Union',
      'séance d’essai boxe L’Union',
    ],
  },
] as const;

export const cluster = (page: RouteId) => CLUSTERS.find((c) => c.page === page);

/**
 * Les motifs exacts, instanciés sur un lieu. Ils servent la liste de questions
 * des pages communes : à gauche la recherche telle qu'elle se tape, à droite
 * le fait qui y répond.
 */
export const motifs = (lieu: string) =>
  [
    `club de boxe ${lieu}`,
    `boxe anglaise ${lieu}`,
    `club MMA ${lieu}`,
    `salle MMA ${lieu}`,
    `sport de combat ${lieu}`,
    `club kick boxing ${lieu}`,
    `boxe pieds poings ${lieu}`,
    `club boxe thaï ${lieu}`,
  ] as const;
