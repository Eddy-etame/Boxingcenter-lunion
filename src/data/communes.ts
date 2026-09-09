/**
 * REGISTRE DES COMMUNES SATELLITES.
 *
 * Une page par commune, et le contrat qui les rend légitimes : le test du
 * remplacement. Si l'on remplace le nom de la commune par un autre et que la
 * page reste vraie, la page n'a pas le droit d'exister.
 *
 * Chaque entrée porte sa population datée, son gentilé, son code INSEE, son
 * intercommunalité, ses VRAIES communes limitrophes, les lignes qui la relient
 * au club, et une information pratique qui sert à décider.
 *
 * Géographie relevée sur Wikipédia le 2026-09-09.
 */

import type { MediaSlug } from './medias';

export type CommuneId = 'saint-jean' | 'rouffiac-tolosan';

export type Commune = {
  id: CommuneId;
  nom: string;
  gentile: string;
  codePostal: string;
  insee: string;
  population: string;
  intercommunalite: string;
  limitrophes: readonly string[];
  /** vrai si la commune touche celle du site */
  toucheLeClub: boolean;
  situation: string;
  route: string;
  transport: string;
  faitLocal: string;
  faitLocalEcho: string;
  photo: MediaSlug;
  cotes: readonly { cle: string; valeur: string }[];
  titre: string;
  description: string;
  faq: readonly { titre: string; texte: string }[];
  pont?: { texte: string; ancre: string; href: string };
};

export const COMMUNES: readonly Commune[] = [
  {
    id: 'saint-jean',
    nom: 'Saint-Jean',
    gentile: 'Saint-Jeannais',
    codePostal: '31240',
    insee: '31488',
    population: '11 261 habitants (2023)',
    intercommunalite: 'Toulouse Métropole',
    limitrophes: [
      'Castelmaurou',
      'L’Union',
      'Montrabé',
      'Rouffiac-Tolosan',
      'Saint-Geniès-Bellevue',
    ],
    toucheLeClub: false,
    situation:
      'Saint-Jean touche L’Union et partage le même code postal. La ligne 73 part de Saint-Jean Lestang et rejoint Borderouge, terminus du métro B — la même porte d’entrée que pour les Unionais.',
    route:
      'Par l’A68 à la sortie 1, le périphérique est à la sortie 14, ou la RN 88. Le club est ensuite sur le périphérique nord, sortie 33b « Lalande ».',
    transport:
      'La ligne 73 relie Saint-Jean Lestang à Borderouge tous les jours. Les lignes 42, 43, 68 et 76 desservent aussi la commune, vers Borderouge et Argoulets.',
    faitLocal:
      'La 73 roule tous les jours et finit à Borderouge, où le métro B prend le relais. C’est la seule ligne du secteur à assurer ce trajet le week-end.',
    faitLocalEcho:
      'À La Vache, la 59 repart et parcourt l’avenue des États-Unis jusqu’au club.',
    photo: 'ring-de-boxe-lunion',
    cotes: [
      { cle: 'Ligne', valeur: '73, tous les jours' },
      { cle: 'Route', valeur: 'A68 sortie 1 · périph. 33b' },
      { cle: 'Arrivée', valeur: 'États-Unis Fondeyre' },
      { cle: 'Le club', valeur: '1 200 m², 3 espaces' },
    ],
    titre: 'Club de boxe et MMA près de Saint-Jean (31240) | Boxing Center',
    description:
      'La ligne 73 relie Saint-Jean à Borderouge, puis le métro B et la 59 mènent avenue des États-Unis. Boxing Center y réunit boxe, MMA, grappling et préparation physique.',
    faq: [
      {
        titre: 'Depuis Saint-Jean, comment on y va ?',
        texte:
          'La 73 part de Saint-Jean Lestang et finit à Borderouge, terminus du métro B. Deux stations plus loin, La Vache : la 59 y démarre et parcourt toute l’avenue des États-Unis. Descends à « États-Unis Fondeyre ». En voiture, le périphérique et la sortie 33b « Lalande ».',
      },
      {
        titre: 'Saint-Jean ou L’Union : même club ?',
        texte:
          'Le même, et le même code postal. Saint-Jean touche L’Union, et les deux communes arrivent au club par Borderouge et le métro B.',
      },
      {
        titre: 'Qu’est-ce qu’on peut y pratiquer ?',
        texte:
          'La salle réunit toutes les disciplines du réseau : boxe anglaise et pieds-poings sur deux rings de compétition, MMA et grappling sur 400 m² de tatamis avec une cage surélevée, et un espace préparation physique avec seize sacs, musculation, cardio, cross-training et Hyrox.',
      },
      {
        titre: 'Mon enfant peut s’inscrire ?',
        texte:
          'Le club publie des cours enfants. Les jours et les tranches d’âge figurent sur ses plannings hebdomadaires — c’est la seule source à jour.',
      },
    ],
  },
  {
    id: 'rouffiac-tolosan',
    nom: 'Rouffiac-Tolosan',
    gentile: 'Rouffiacois',
    codePostal: '31180',
    insee: '31462',
    population: '2 363 habitants (2023)',
    intercommunalite: 'Communauté de communes des Coteaux Bellevue',
    limitrophes: ['Beaupuy', 'Castelmaurou', 'Montrabé', 'Saint-Jean'],
    toucheLeClub: false,
    situation:
      'Rouffiac-Tolosan touche Saint-Jean, qui touche L’Union : le secteur s’enchaîne le long de la route d’Albi. C’est une commune de 2 363 habitants, la plus petite du secteur — et celle qui a le plus grandi depuis les années 1960.',
    route:
      'Par la route d’Albi, puis le périphérique nord et la sortie 33b « Lalande ». C’est le trajet le plus simple depuis Rouffiac.',
    transport:
      'La ligne 68 relie la commune à Balma-Gramont, sur le métro A. La ligne 355 du réseau liO rejoint la gare routière de Toulouse par la route d’Albi.',
    faitLocal:
      'Depuis Rouffiac, la voiture reste le trajet le plus direct : la route d’Albi rejoint le périphérique, et le club est à la sortie 33b.',
    faitLocalEcho:
      'En transports, la 68 mène au métro A ; les lignes A et B se croisent à Jean Jaurès, et la B dessert l’avenue des États-Unis.',
    photo: 'sparring-boxe-lunion',
    cotes: [
      { cle: 'Limite', valeur: 'touche Saint-Jean' },
      { cle: 'Route', valeur: 'route d’Albi · périph. 33b' },
      { cle: 'Bus', valeur: '68 vers Balma-Gramont' },
      { cle: 'Le club', valeur: '1 200 m², 3 espaces' },
    ],
    titre: 'Club de boxe et MMA près de Rouffiac-Tolosan | Boxing Center',
    description:
      'Depuis Rouffiac-Tolosan, la route d’Albi puis le périphérique mènent à Boxing Center Toulouse États-Unis : 1 200 m², deux rings, une cage et seize sacs de frappe.',
    faq: [
      {
        titre: 'Depuis Rouffiac-Tolosan, quel est le chemin ?',
        texte:
          'En voiture, la route d’Albi rejoint le périphérique et le club est à la sortie 33b « Lalande ». En transports, la ligne 68 mène à Balma-Gramont sur le métro A ; les lignes A et B se croisent à Jean Jaurès, et la B dessert l’avenue des États-Unis par la station La Vache, d’où part la 59.',
      },
      {
        titre: 'Rouffiac touche L’Union ?',
        texte:
          'Rouffiac-Tolosan touche Beaupuy, Castelmaurou, Montrabé et Saint-Jean. Saint-Jean, elle, touche L’Union : le secteur s’enchaîne d’est en ouest le long de la route d’Albi.',
      },
      {
        titre: 'Qu’est-ce qu’il y a dans la salle ?',
        texte:
          'Trois espaces de 400 m² : le MMA et le grappling avec une cage surélevée officielle, la boxe avec deux rings de compétition, et la préparation physique avec seize sacs de frappe, musculation, cardio et cross-training.',
      },
      {
        titre: 'Je n’ai jamais boxé.',
        texte:
          'C’est le cas de la plupart des gens qui poussent la porte. Une première séance se passe au sac, à la corde et aux pattes d’ours : tu frappes, personne ne te frappe.',
      },
    ],
  },
] as const;

export const commune = (id: CommuneId): Commune => {
  const c = COMMUNES.find((x) => x.id === id);
  if (!c) throw new Error(`Commune inconnue : ${id}`);
  return c;
};

/** Les communes servies, pour `areaServed` de l'Organization. */
export const AIRE_SERVIE: readonly string[] = COMMUNES.map((c) => c.nom);
