# Types de questions

Quizzly supporte plusieurs formats de questions pour garder le rythme varie.

## 1. QCM

Composant: `src/components/quiz/QuestionQCM.tsx`

- affiche plusieurs choix;
- compare l'index selectionne a `correctIndex`;
- si `correctIndex` n'existe pas, il peut deduire la bonne reponse via `question.answer`.

### Format attendu

```json
{
  "id": "q1",
  "type": "qcm",
  "enonce": "Question ?",
  "options": ["A", "B", "C"],
  "correctIndex": 0
}
```

## 2. Vrai / Faux

Composant: `src/components/quiz/QuestionVraiFaux.tsx`

- propose deux boutons: vrai et faux;
- compare la selection a `reponse` ou `answer`.

### Format attendu

```json
{
  "id": "q2",
  "type": "vrai_faux",
  "enonce": "Affirmation ?",
  "reponse": true
}
```

## 3. Texte a trous

Composant: `src/components/quiz/QuestionTrous.tsx`

- insere un champ au milieu de l'enonce;
- utilise le separateur `{{1}}`;
- accepte plusieurs reponses possibles via `reponsesAttendues`.

### Format attendu

```json
{
  "id": "q3",
  "type": "trous",
  "enonce": "Le mot manque ici {{1}}.",
  "reponsesAttendues": ["reponse", "une autre reponse"]
}
```

## 4. Relier

Composant: `src/components/quiz/QuestionRelier.tsx`

- affiche deux colonnes d'elements melanges;
- l'utilisateur cree des connexions entre les paires;
- la validation demande de relier toutes les paires avant de valider.

### Format attendu

```json
{
  "id": "q4",
  "type": "relier",
  "question": "Associe les termes.",
  "pairs": [
    { "left": "Terme A", "right": "Definition A" },
    { "left": "Terme B", "right": "Definition B" }
  ]
}
```

## Conseils de contenu

- Toujours fournir un `id` unique.
- Preferer `enonce` quand il existe, sinon `question`.
- Pour les QCM, garder un `correctIndex` clair.
- Pour les textes a trous, eviter les formulations ambigues.
- Pour les questions relier, garder le meme nombre de gauche et de droite.
