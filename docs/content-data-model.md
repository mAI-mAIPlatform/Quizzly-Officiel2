# Modeles de contenu

Cette page explique comment le contenu est range dans `src/data`.

## Quiz de cours

Les quiz de cours suivent l'arborescence:

```text
src/data/<niveau>/<matiere>/metadata.json
src/data/<niveau>/<matiere>/ch1/quiz1.json
src/data/<niveau>/<matiere>/ch1/quiz2.json
...
```

### Exemple de metadata

```json
{
  "sujet": "maths",
  "niveau": "2nde",
  "chapitres": [
    {
      "id": "ch1",
      "titre": "Nombres et Calculs",
      "description": "..."
    }
  ]
}
```

### Exemple de quiz

```json
{
  "id": "quiz1",
  "titre": "The American Dream",
  "questions": [
    {
      "id": "q1",
      "type": "qcm",
      "enonce": "...",
      "options": ["...", "..."],
      "correctIndex": 0
    }
  ]
}
```

## Quiz ranked

Les quiz classee sont regroupes dans:

- `src/data/ranked/allQuizzes.ts`
- `src/data/ranked/<niveau>/extended*/`

Le helper `getRankedQuizData(grade, id)` transforme l'identifiant du quiz en index de tableau.

### Regles

- les grades sont normalises en minuscules;
- l'identifiant de quiz correspond a un index 1-based;
- si le quiz n'existe pas, la fonction retourne `null`.

## Quiz survie

Les quiz survie sont regroupes dans:

- `src/data/survie/quizzes.ts`
- `src/data/survie/extended*/`

Le helper `getSurvivalQuizData(id)` cherche l'objet dont `id` vaut `survival_<id>`.

## Conseils de maintenance

- Garder des identifiants stables.
- Ne pas melanger les schemas entre cours, ranked et survie sans documenter la transition.
- Verifier qu'un quiz charge par le routeur existe bien dans le repertoire attendu.

## Lecture cote serveur

Les quizzes de cours sont lus depuis le disque avec `fs/promises` et `path` dans la page de jeu.
Cela signifie qu'un fichier mal nomme ou mal place provoque un ecran d'erreur plutot qu'un crash silencieux.
