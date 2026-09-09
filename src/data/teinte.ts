/**
 * LA TEINTE DU SITE — les mêmes valeurs que `styles/jetons.css`, lisibles
 * depuis un script de build : la vignette OG et le favicon se dessinent avec
 * la couleur du site, pas avec une couleur retapée.
 *
 * Une valeur change ici ET dans jetons.css, jamais dans un seul des deux.
 */
export const TEINTE = {
  papier: '#f5f0f0',
  papierCreuse: '#eae1e2',
  papierVif: '#fbf7f7',
  encre: '#2b1620',
  graphite: '#6b5257',
  trait: 'rgba(43, 22, 32, 0.16)',
  signal: '#c0526a',
  signalTexte: '#8e2f3f',
  signalProfond: '#6b202c',
} as const;
