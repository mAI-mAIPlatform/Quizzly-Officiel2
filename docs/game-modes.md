# Modes de jeu

Quizzly a trois grandes familles d'experience.

## Mode apprentissage

Accessible depuis:

- `/matieres`
- `/matiere/[id]-[niveau]`
- `/matiere/[id]-[niveau]/[chapitre]`
- `/play/[niveau]/[matiereId]/[chapitre]/[quizId]`

Caracteristiques:

- progression par matiere;
- reward XP + cristaux;
- suivi des quiz deja reussis;
- consommation de neurones uniquement en cas d'echec dans certains cas.

## Mode classe

Accessible depuis `/classe`.

Caracteristiques:

- rangs de `Apprenti` a `Genie`;
- points ranked;
- selection de classe avant lancer un quiz;
- liste de 25 quiz par classe dans l'interface;
- progression stockee dans `rankedPoints`, `rankedRank` et `rankedCompletedQuizzes`.

### Seuils de rang

- `0 - 500` -> Apprenti
- `501 - 1500` -> Etudiant
- `1501 - 3000` -> Expert
- `3001 - 6000` -> Savant
- `6001+` -> Genie

## Mode survie

Accessible depuis `/survie`.

Caracteristiques:

- 50 epreuves affichees comme defis;
- une erreur peut terminer la partie;
- le score alimente `survivalHighScore` et `survivalTotalXP`;
- les questions sont issues de toutes les matieres et classes.

## Quizzly Pass

Accessible depuis `/pass`.

Caracteristiques:

- 20 paliers;
- progression basee sur les XP cumules;
- recompenses gratuites et premium;
- Pass Pro activable depuis la boutique ou la page pass.

## Choix de design

Le jeu melange:

- des parcours pedagogiques;
- une economie de ressources;
- des objets de collection;
- des classements et badges.

C'est ce mix qui donne au produit son cote "apprentissage + jeu" plutot qu'un simple catalogue d'exercices.
