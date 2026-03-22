# Onboarding joueur 🎉

But: guider un nouvel utilisateur des 30 premieres secondes jusqu'au premier quiz reussi sans friction.

## Objectifs UX

- Rassurer: expliquer en 1 ecran pourquoi Quizzly aide a progresser.
- Contexte minimal: choisir matiere et niveau scolaire en moins de 3 taps.
- Action claire: bouton unique "Commencer un quiz d'essai".
- Feedback immediat: confetti ou vibration courte apres la premiere bonne reponse.

## Parcours cible

1. Arrivee: hero + 3 puces de valeur.
2. Formulaire ultra court: niveau scolaire, matiere preferee.
3. Quiz d'essai de 3 questions.
4. Recap: score, badge d'accueil, call-to-action vers Matieres ou Play.

## Bonnes pratiques

- Pas de creation de compte avant le premier quiz.
- Afficher temps estime (<= 2 min) et nombre de questions.
- Toujours proposer un bouton "Passer" sur les modales de tuto.
- Copier simple et directe, eviter le jargon.

## Mesure

- Taux de fin du quiz d'essai.
- Temps moyen avant premiere reponse.
- Nombre de retours ecran precedent (indicatif de friction).

## Edge cases

- Connexion lente: fallback en texte, pas de video lourde.
- Mode avion: proposer un quiz hors ligne si possible.

## Livrables

- Ecran Onboarding en Figma.
- Copie FR courte (<45 caracteres par ligne).
- Animations micro (fade + slide) inferieures a 250 ms.
