# Profil et reglages

Ce chapitre regroupe les ecrans qui permettent au joueur de se presenter et de personnaliser son experience.

## Profil

Page: `/profil`

Actions possibles:

- modifier le pseudo;
- modifier la bio;
- choisir un avatar;
- voir les statistiques principales;
- consulter les succes;
- envoyer certains succes vers une tribu.

## Statistiques affichees

- quiz completes
- cristaux
- serie en jours
- neurones
- niveau

## Badges

Le profil expose des badges simulant la progression:

- Pionnier
- Premier Pas
- Savant Fou
- Bourreau
- Collectionneur
- Infatigable
- Maître des Classes
- Accelerateur

## Reglages

Page: `/reglages`

Actions disponibles:

- changer sa classe actuelle;
- cocher des matieres favorites;
- afficher une zone de danger pour la reinitialisation.

## Points d'attention

- La reinitialisation de progression est visuellement presente, mais elle n'est pas encore branchee a une action destructive.
- Les preferences de matieres favorites sont encore surtout decoratives.
- Le choix de classe est bien persiste via `updateProfile({ selectedClass })`.
