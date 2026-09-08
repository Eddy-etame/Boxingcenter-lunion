/**
 * REGISTRE DES ROUTES — une page = une question que quelqu'un se pose vraiment.
 *
 * Aucune URL n'est écrite en dur ailleurs : on passe par `route('mma')`.
 * Titres et descriptions vivent ici parce qu'ils font partie de
 * l'architecture de recherche, pas de la mise en page.
 *
 * Ce club ne publie pas de grille tarifaire mais une séance d'essai : c'est
 * elle qui prend la place du lien « Tarifs » dans la navigation.
 */

import { DESTINATION } from './verite';

export type RouteId =
  | 'accueil'
  | 'boxe-anglaise'
  | 'mma'
  | 'kick-boxing'
  | 'boxe-enfants'
  | 'preparation-physique'
  | 'premiere-seance'
  | 'ta-seance'
  | 'transports'
  | 'saint-jean'
  | 'rouffiac-tolosan'
  | 'contact'
  | 'merci'
  | 'introuvable'
  | 'mentions-legales'
  | 'confidentialite';

export type Route = {
  id: RouteId;
  chemin: string;
  nav: string;
  question: string;
  titre: string;
  description: string;
  menu: boolean;
  index: boolean;
  commune?: true;
  promo?: true;
};

export const ROUTES: readonly Route[] = [
  {
    id: 'accueil',
    chemin: '/',
    nav: 'Accueil',
    question: 'Où boxer quand on habite L’Union ?',
    titre: 'Club de boxe et MMA près de L’Union | Boxing Center',
    description:
      'Boxe, travail au sol et sports de combat à proximité de L’Union : Boxing Center accueille les Unionais avenue des États-Unis, sur 1 200 m² et trois espaces.',
    menu: true,
    index: true,
  },
  {
    id: 'boxe-anglaise',
    chemin: '/boxe-anglaise/',
    nav: 'Boxe anglaise',
    question: 'À quoi ressemble un cours de boxe anglaise, et est-ce que je peux commencer ?',
    titre: 'Boxe anglaise près de L’Union | Boxing Center',
    description:
      'Cours de boxe anglaise accessibles depuis L’Union, sur deux rings de compétition. Aucun niveau demandé, et un groupe compétiteurs amateurs.',
    menu: true,
    index: true,
  },
  {
    id: 'mma',
    chemin: '/mma/',
    nav: 'Travail au sol',
    question: 'Où faire du grappling et du travail au sol quand on part de L’Union ?',
    titre: 'Grappling et travail au sol près de L’Union | Boxing Center',
    description:
      'Le travail au sol se pratique sur 400 m² de tatamis, avec une cage surélevée officielle et des panneaux de séparation pour le cage control. À proximité de L’Union.',
    menu: true,
    index: true,
  },
  {
    id: 'kick-boxing',
    chemin: '/kick-boxing/',
    nav: 'Pieds-poings',
    question: 'Je veux frapper avec les jambes aussi. Où ?',
    titre: 'Boxe pieds-poings et full contact près de L’Union | Boxing Center',
    description:
      'Boxe pieds-poings et full contact, sur deux rings de compétition et 400 m² de tapis. Accessible depuis L’Union par le périphérique, sortie 33b Lalande.',
    menu: true,
    index: true,
  },
  {
    id: 'boxe-enfants',
    chemin: '/boxe-enfants/',
    nav: 'Boxe enfants',
    question: 'Quelle boxe pour mon enfant, et est-ce que c’est sans danger ?',
    titre: 'Boxe enfant près de L’Union | Boxing Center',
    description:
      'Le club publie des cours enfants, en touché contrôlé, avenue des États-Unis. Les jours et les âges sont sur ses plannings hebdomadaires.',
    menu: true,
    index: true,
  },
  {
    id: 'preparation-physique',
    chemin: '/preparation-physique/',
    nav: 'Prépa physique',
    question: 'Je veux la forme, la muscu et le cardio, sans combattre.',
    titre: 'Cross-training et musculation près de L’Union | Boxing Center',
    description:
      'Seize sacs de frappe, une cage de cross-training, musculation, cardio, Hyrox et Boxing Lady, sur 400 m². Accessible depuis L’Union, avenue des États-Unis.',
    menu: true,
    index: true,
  },
  {
    id: 'premiere-seance',
    chemin: '/premiere-seance/',
    nav: 'Première séance',
    question: 'Je n’ai jamais boxé. Qu’est-ce qui va m’arriver ?',
    titre: 'Première séance de boxe près de L’Union | Boxing Center',
    description:
      'Ce qu’il faut apporter, ce que tu vas faire et ce que tu ne feras pas : le déroulé d’un premier cours pour un débutant venu de L’Union.',
    menu: false,
    index: true,
  },
  {
    id: 'ta-seance',
    chemin: '/ta-seance/',
    nav: 'Ta séance',
    question: 'Quelle discipline, à quel moment, pour moi ?',
    titre: 'Trouver ta séance depuis L’Union | Boxing Center',
    description:
      'Deux réponses et tu sais quel cours viser avenue des États-Unis, et à quel moment de la semaine y aller depuis L’Union.',
    menu: true,
    index: true,
  },
  {
    id: 'transports',
    chemin: '/transports/',
    nav: 'Transports',
    question: 'Comment j’y vais si je n’ai pas de voiture ?',
    titre: 'Y aller en métro et en bus depuis L’Union | Boxing Center',
    description:
      'La 40 rejoint Borderouge, le métro B descend à La Vache, et la 59 parcourt toute l’avenue des États-Unis jusqu’à l’arrêt États-Unis Fondeyre.',
    menu: true,
    index: true,
    promo: true,
  },
  {
    id: 'saint-jean',
    chemin: '/saint-jean/',
    nav: 'Saint-Jean',
    question: 'Et si je pars de Saint-Jean ?',
    titre: 'Club de boxe et MMA près de Saint-Jean (31240) | Boxing Center',
    description:
      'La ligne 73 relie Saint-Jean à Borderouge, puis le métro B et la 59 mènent avenue des États-Unis. Boxing Center y réunit boxe, travail au sol et prépa physique.',
    menu: false,
    index: true,
    commune: true,
  },
  {
    id: 'rouffiac-tolosan',
    chemin: '/rouffiac-tolosan/',
    nav: 'Rouffiac-Tolosan',
    question: 'Et si je pars de Rouffiac-Tolosan ?',
    titre: 'Club de boxe et MMA près de Rouffiac-Tolosan | Boxing Center',
    description:
      'Depuis Rouffiac-Tolosan, la route d’Albi puis le périphérique mènent à Boxing Center Toulouse États-Unis : 1 200 m², deux rings, une cage et seize sacs.',
    menu: false,
    index: true,
    commune: true,
  },
  {
    id: 'contact',
    chemin: '/contact/',
    nav: 'Contact',
    question: 'Je veux poser ma question à quelqu’un.',
    titre: 'Contact | Boxing Center depuis L’Union',
    description:
      'Une question avant de te déplacer depuis L’Union ? Écris-nous, on te répond avec le cours et le créneau qui correspondent. Téléphone : 05 62 24 46 82.',
    menu: true,
    index: true,
  },
  {
    id: 'merci',
    chemin: '/merci/',
    nav: 'Merci',
    question: 'Message envoyé.',
    titre: 'Message bien reçu | Boxing Center L’Union',
    description: 'Ta demande est partie. On te répond rapidement.',
    menu: false,
    index: false,
  },
  {
    id: 'introuvable',
    chemin: '/404/',
    nav: 'Page introuvable',
    question: 'Cette adresse ne mène nulle part.',
    titre: 'Page introuvable | Boxing Center depuis L’Union',
    description: 'Cette page n’existe pas ou a changé d’adresse. Voilà les pages du site.',
    menu: false,
    index: false,
  },
  {
    id: 'mentions-legales',
    chemin: '/mentions-legales/',
    nav: 'Mentions légales',
    question: 'Qui édite ce site ?',
    titre: 'Mentions légales | Boxing Center L’Union',
    description: 'Mentions légales du site boxingcenter-lunion.fr.',
    menu: false,
    index: true,
  },
  {
    id: 'confidentialite',
    chemin: '/confidentialite/',
    nav: 'Confidentialité',
    question: 'Qu’est-ce que vous faites de mes données ?',
    titre: 'Politique de confidentialité | Boxing Center L’Union',
    description: 'Ce que devient une demande envoyée depuis boxingcenter-lunion.fr.',
    menu: false,
    index: true,
  },
] as const;

export function route(id: RouteId): Route {
  const r = ROUTES.find((x) => x.id === id);
  if (!r) throw new Error(`Route inconnue : ${id}`);
  return r;
}

export const MENU = ROUTES.filter((r) => r.menu);

/** Les entrées de navigation ordinaires, hors pages mises en avant. */
export const MENU_SIMPLE = MENU.filter((r) => !r.promo);

/** La page mise en avant, s'il y en a une. */
export const PROMO = ROUTES.find((r) => r.promo);

/** Les pages de communes satellites, dans l'ordre du pied de page. */
export const ROUTES_COMMUNES = ROUTES.filter((r) => r.commune);

/**
 * Ce qui vit chez le club. Ici il ne publie pas de grille tarifaire : la porte
 * d'entrée qu'il met en avant est la séance d'essai. C'est donc elle qu'on
 * met dans la navigation, à sa place.
 */
export const LIENS_CLUB = [
  { nav: 'Plannings', href: DESTINATION.plannings, titre: `Voir les plannings ${DESTINATION.nom}` },
  { nav: 'Séance d’essai', href: DESTINATION.tarifs, titre: `Réserver une séance d’essai` },
] as const;
