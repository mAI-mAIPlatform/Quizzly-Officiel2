# Ajouter du contenu

Cette page explique comment enrichir Quizzly avec de nouveaux quiz, chapitres ou modes.

## Ajouter un quiz de cours

1. Choisir un niveau dans `src/data/<niveau>/`.
2. Choisir une matiere.
3. Completer ou mettre a jour `metadata.json`.
4. Ajouter un fichier `quizX.json` dans le bon chapitre.
5. Verifier que le `quizId` correspond bien au nom du fichier.

### Exemple

```text
src/data/2nde/maths/ch2/quiz11.json
```

## Ajouter un chapitre

Dans le `metadata.json`, ajouter une entree:

```json
{
  "id": "ch5",
  "titre": "Nouveau chapitre",
  "description": "..."
}
```

Puis creer le dossier `ch5/` avec ses quizzes.

## Ajouter une question

Choisir un type supporte:

- `qcm`
- `vrai_faux`
- `trous`
- `relier`

Ne pas oublier:

- un `id` unique;
- un enonce lisible;
- une reponse valide;
- des options coherentes pour les QCM.

## Ajouter un quiz ranked

- creer un nouveau fichier dans le bon dossier `src/data/ranked/<niveau>/...`;
- l'export doit etre pris en compte par `allQuizzes.ts`;
- le quiz sera disponible via son index dans la liste du niveau.

## Ajouter un quiz survie

- creer ou enrichir `src/data/survie/quizzes.ts` ou les modules d'extension;
- s'assurer que `getSurvivalQuizData(id)` peut retrouver l'objet via `survival_<id>`.

## Bonnes pratiques

- Garder les IDs stables.
- Utiliser le champ `enonce` quand le texte est une vraie phrase de question.
- Rester court et lisible: les ecrans de quiz sont faits pour le mobile autant que pour desktop.
- Tester un nouveau quiz en entrant directement dans le flux de jeu.
