# Navigation et routes

Cette page sert de carte rapide pour comprendre le parcours de l'utilisateur dans Quizzly.

## Navigation principale

La `Sidebar` expose les routes suivantes:

- `/` : tableau de bord
- `/matieres` : catalogue des matieres
- `/quetes` : quetes quotidiennes et hebdomadaires
- `/profil` : profil joueur
- `/classe` : mode classe
- `/survie` : mode survie
- `/boutique` : boutique
- `/social` : reseau social et tribus
- `/pass` : Quizzly Pass

La `Navbar` est masquee sur les ecrans de jeu sous `/play/` et `/quiz/` pour eviter les superpositions.

## Parcours pedagogique

1. L'utilisateur choisit une classe et une matiere dans `/matieres`.
2. Il ouvre une matiere sur `/matiere/[id]-[niveau]`.
3. Il entre dans un chapitre sur `/matiere/[id]-[niveau]/[chapitre]`.
4. Il lance un quiz sur `/play/[niveau]/[matiereId]/[chapitre]/[quizId]`.
5. Il obtient son score, son XP et ses recompenses dans `QuizEngine`.

## Parcours competitif

### Mode classe

- Page: `/classe`
- Quiz: `/quiz/ranked/[class]/[id]`
- Donnees: `src/data/ranked`
- Recompenses: points ranked et progression de rang

### Mode survie

- Page: `/survie`
- Quiz: `/quiz/survie/[id]`
- Donnees: `src/data/survie`
- Regle: une erreur peut stopper le quiz

## Pages annexes

- `/profil` permet de modifier pseudo, bio et avatar.
- `/reglages` permet de changer la classe actuelle et quelques preferences.
- `/boutique` permet d'acheter neurones, boosters et cosmestiques.
- `/pass` affiche les paliers du pass saisonnier.
- `/classement` affiche un classement simulé pour l'instant.

## Redirections et etats vides

- Si un quiz de cours est introuvable, la page affiche un message d'erreur et un bouton de retour.
- Si le joueur n'a plus de neurones, `QuizLoader` le renvoie vers la boutique ou le chapitre.
- Sur `classement`, le rendu attend le montage client pour eviter un souci d'hydratation.
