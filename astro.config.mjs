import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

// Statique par défaut. Seul /api/contact tourne à la demande : il relaie le
// formulaire vers Inlet (JSON + preuve de travail), ce qu'un <form> natif ne
// peut pas faire seul. Tout le reste est pré-rendu.
export default defineConfig({
  site: 'https://www.boxingcenter-lunion.fr',
  output: 'static',
  adapter: vercel(),
  trailingSlash: 'always',
  build: { format: 'directory' },
  prefetch: { prefetchAll: true, defaultStrategy: 'viewport' },
  compressHTML: true,
  redirects: {
    // Les requêtes que les gens tapent, ramenées sur les pages canoniques :
    // fabriquer /club-boxe-lunion/ à côté de / serait le schéma de page
    // satellite que Google sanctionne.
    '/club-boxe-lunion': '/',
    '/boxe-lunion': '/',
    '/sport-combat-lunion': '/',
    '/salle-de-boxe-lunion': '/',
    '/boxe-anglaise-lunion': '/boxe-anglaise/',
    '/club-mma-lunion': '/mma/',
    '/salle-mma-lunion': '/mma/',
    '/mma-lunion': '/mma/',
    '/grappling-lunion': '/mma/',
    '/club-boxe-thai-lunion': '/kick-boxing/',
    '/boxe-thai-lunion': '/kick-boxing/',
    '/club-kick-boxing-lunion': '/kick-boxing/',
    '/kick-boxing-lunion': '/kick-boxing/',
    '/boxe-pieds-poings-lunion': '/kick-boxing/',
    '/full-contact-lunion': '/kick-boxing/',
    '/boxe-enfant-lunion': '/boxe-enfants/',
    '/boxe-femme-lunion': '/preparation-physique/',
    '/musculation-lunion': '/preparation-physique/',
    '/cross-training-lunion': '/preparation-physique/',
    '/hyrox-lunion': '/preparation-physique/',
    '/boxing-fitness': '/preparation-physique/',
    '/club-boxe-saint-jean': '/saint-jean/',
    '/salle-mma-saint-jean': '/saint-jean/',
    '/club-boxe-rouffiac-tolosan': '/rouffiac-tolosan/',
    '/salle-mma-rouffiac-tolosan': '/rouffiac-tolosan/',
    '/bus-lunion-etats-unis': '/transports/',
    '/acces': '/transports/',
  },

});
