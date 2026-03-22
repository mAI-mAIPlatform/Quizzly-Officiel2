# Animations et haptique ✨

## Objectif

Renforcer la sensation de progression sans distraire.

## Animations recommandees

- Changement de question: slide leger + fade 150 ms.
- Bonne reponse: pulse vert + confetti leger.
- Mauvaise reponse: shake horizontal 120 ms.
- Deblocage badge: scale-up 200 ms + glow.

## Haptique

- Bonne reponse: vibration courte.
- Mauvaise reponse: vibration double courte.
- Grosse victoire (record perso): vibration longue.

## Accessibilite

- Respecter prefers-reduced-motion: desactiver animations, garder feedback couleur/son.
- Option Reglages: "reduire feedback tactile".

## Performance

- Utiliser framer-motion avec `layoutId` pour transitions fluides.
- Limiter les ombres couteuses sur mobile bas de gamme.
