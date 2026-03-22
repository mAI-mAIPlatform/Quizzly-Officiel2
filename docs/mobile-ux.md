# UX mobile 📱

## Principes

- Gestes natifs: swipe pour changer de question, pull to refresh sur listes.
- Boutons en bas de l'ecran pour access rapide.
- Barre de progression collante en haut.

## Layouts

- Cartes pleine largeur pour questions et reponses.
- Grilles 2 colonnes max pour badges et avatars.
- Eviter le zoom: police 16px mini.

## Performance

- Prefetch images badges + avatars en basse definition.
- Limiter les bundles: lazy load des modes non utilises.

## Hors ligne

- Cache minimal: dernier quiz joue et son recap.
- Messagerie: banner "connexion perdue" avec mode degrade.

## Tests rapides

- Tap avec une main: bouton principal accessible au pouce.
- Orientation: verifier portrait; paysage facultatif pour video.
