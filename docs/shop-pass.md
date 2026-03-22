# Boutique et Pass

La boutique et le pass forment l'economie de Quizzly.

## Boutique

Page: `/boutique`

Les achats principaux:

- neurones;
- boosters d'XP;
- avatars cosmetiques;
- Pass Pro.

## Ressources

- `crystals` est la monnaie principale.
- `neurones` est la ressource de tentative.
- `xpBoost` applique un multiplicateur d'XP.

## Packs visibles

- `1 Neurone`
- `Pack 5 Neurones`
- `Booster x1.5`
- `Booster x2`
- `Booster x3`
- avatars de collection comme Robot, Hibou Sage ou Dragon

## Pass Pro

- coute 50 cristaux;
- debloque les recompenses premium;
- change l'affichage du badge `PRO` sur la page Pass.

## Regles de recompense du Pass

La methode `claimPassReward(tier)` applique des recompenses selon le palier:

- palier 20: avatar legendaire
- paliers multiples de 5: gros pack de cristaux
- paliers pairs: cristaux
- autres paliers: neurone bonus

## Relation avec l'XP

- chaque passage de niveau peut ajouter des cristaux;
- le pass avance en parallele via les XP cumules;
- les boosters multiplient l'XP gagnee sur les quizzes.

## Points d'attention

- Le bouton booster de la boutique utilise actuellement un chemin de chargement un peu particulier; il vaut mieux garder la signature du contexte stable.
- L'etat de la boutique est purement local et persistant dans le navigateur.
