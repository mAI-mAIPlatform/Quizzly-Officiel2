# Architecture

Quizzly est construit avec le **Next.js App Router** et un ensemble de composants React client/server bien separes.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- canvas-confetti

## Structure generale

- `src/app/` contient les routes App Router.
- `src/components/` contient les briques reutilisables.
- `src/context/ProgressContext.tsx` centralise la progression joueur.
- `src/data/` contient les contenus pedagogiques et competitifs.
- `public/images/` contient les visuels, avatars et badges.

## Layout global

Le layout principal:

- charge les polices `Inter` et `Space_Grotesk`;
- enveloppe l'app dans `ProgressProvider`;
- affiche la `Sidebar` a gauche sur desktop et en bas sur mobile;
- affiche la `Navbar` au-dessus du contenu principal;
- ajoute des paddings differents entre mobile et desktop.

Voir `src/app/layout.tsx`.

## Separation client/server

Certaines pages doivent etre cote client car elles utilisent:

- `useState`;
- `useEffect`;
- `useProgress`;
- `usePathname` ou `useParams`;
- les interactions locales comme la boutique, les amis ou les quetes.

Les pages de lecture de quiz sur disque utilisent du code serveur pour lire les fichiers JSON depuis `src/data`.

## Points d'entree importants

- `src/app/page.tsx` : tableau de bord.
- `src/app/matieres/page.tsx` : selection des matieres.
- `src/app/matiere/[id]/page.tsx` : chapitre d'une matiere.
- `src/app/matiere/[id]/[chapitre]/page.tsx` : liste des quiz d'un chapitre.
- `src/app/play/[niveau]/[matiereId]/[chapitre]/[quizId]/page.tsx` : lancement d'un quiz de cours.
- `src/app/quiz/ranked/[class]/[id]/page.tsx` : mode classe.
- `src/app/quiz/survie/[id]/page.tsx` : mode survie.

## UI partagee

Les composants les plus transverses sont:

- `src/components/Navbar.tsx`
- `src/components/Sidebar.tsx`
- `src/components/ThemeToggle.tsx`
- `src/components/quiz/QuizEngine.tsx`
- `src/components/quiz/QuizLoader.tsx`

## Donnees et etat

La progression utilisateur est stockee dans `localStorage` sous la clef `quizzly_progress`.
Les quiz de cours sont charges depuis des fichiers data sur disque, tandis que les quiz ranked et survival sont agregees via des modules TypeScript.

Pour tous les details de l'etat global, lire [Etat de progression](state-progress.md).
