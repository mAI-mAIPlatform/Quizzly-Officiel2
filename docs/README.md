# Documentation Quizzly

Bienvenue dans la documentation centrale de Quizzly. Ce dossier regroupe les repères utiles pour comprendre l'application, naviguer dans le code et ajouter de nouveaux contenus sans casser l'existant.

## Carte rapide

- [Architecture](architecture.md)
- [Navigation et routes](routing-map.md)
- [Etat de progression](state-progress.md)
- [Moteur de quiz](quiz-engine.md)
- [Types de questions](question-types.md)
- [Modeles de contenu](content-data-model.md)
- [Modes de jeu](game-modes.md)
- [Boutique et Pass](shop-pass.md)
- [Social et tribus](social-system.md)
- [Profil et reglages](profile-settings.md)
- [Ajouter du contenu](contributing-content.md)
- [Notes de test](testing-notes.md)

## Ce que fait l'app

Quizzly est une application Next.js d'apprentissage gamifiee. Elle combine:

- un parcours de matieres et chapitres par niveau scolaire;
- des quiz avec plusieurs formats de questions;
- une progression persistee en local dans `localStorage`;
- une boutique pour acheter neurones, boosters, avatars et Pass Pro;
- des modes competitifs comme le mode classe et le mode survie;
- des panneaux sociaux, de profil et de quetes.

## Ce qu'il faut garder en tete

- Les donnees de progression sont locales au navigateur.
- Certains ecrans sont partiellement simules, notamment le social et le classement.
- L'essentiel de l'experience repose sur `src/context/ProgressContext.tsx`, `src/components/quiz/*` et `src/data/*`.

Si tu veux etendre Quizzly, commence par lire [l'architecture](architecture.md) puis [le modele de contenu](content-data-model.md).
