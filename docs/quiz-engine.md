# Moteur de quiz

`QuizEngine` est le moteur commun a presque tous les quiz de Quizzly.

## Responsabilites

- afficher la question courante;
- gerer la reponse de l'utilisateur;
- passer a la question suivante;
- calculer le score;
- distribuer les recompenses;
- afficher l'ecran de fin;
- gerer le cas particulier du mode survie;
- envoyer un message a la tribu apres completion si l'utilisateur partage son score.

## Cycle de vie

1. Chargement du quiz.
2. Affichage de la question courante selon son type.
3. Validation de la reponse.
4. Etat de feedback correct ou incorrect.
5. Passage a la question suivante ou fin du quiz.
6. Distribution XP / cristaux / neurone selon le resultat.

## Recompenses

- Si le quiz est reussi, le joueur gagne `score * 2` XP de base.
- En survie, un bonus supplementaire est ajoute.
- En cas de reussite, le quiz est marque comme complete.
- En cas d'echec en survie, un neurone est consomme.

## Seuil de reussite

Le quiz est considere comme reussi si le joueur obtient au moins la moitie des bonnes reponses.

## Interface de fin

L'ecran final affiche:

- un message adapte au score;
- une image de feedback;
- l'XP gagnee;
- un cercle de progression;
- un bouton pour continuer;
- un bouton de partage.

## Dependencies

- `useProgress()` pour la progression.
- `framer-motion` pour l'animation du panneau de retour.
- `canvas-confetti` pour la celebration.

## Particularites

- Le moteur gere les formats `qcm`, `vrai_faux`, `trous` et `relier`.
- En mode survie, une erreur stoppe le quiz avec un petit delai visuel.
- Le bouton de partage publie un message dans la premiere tribu disponible, ou dans un canal de secours.
