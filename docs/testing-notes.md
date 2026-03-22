# Notes de test

Cette page liste les verifications utiles apres une modification.

## Verifications de base

- lancer `npm run lint`;
- ouvrir le tableau de bord;
- tester une navigation vers une matiere;
- lancer au moins un quiz de cours;
- verifier la fin d'un quiz reussi;
- tester un echec en mode survie;
- verifier qu'un achat boutique reste persistant;
- recharger la page pour confirmer `localStorage`.

## Tests fonctionnels conseilles

### Progression

- l'XP monte correctement;
- le niveau passe au bon moment;
- les cristaux augmentent apres level-up;
- le pass avance selon les XP cumules.

### Quiz

- QCM: la bonne option est marquee;
- vrai/faux: le feedback visuel est correct;
- trous: la reponse est comparee sans casse;
- relier: toutes les paires doivent etre connectees avant validation.

### Social

- ajouter un ami;
- creer une tribu;
- ouvrir un chat;
- envoyer un message;
- recharger la page et verifier la persistence.

### Boutique

- acheter un neurone;
- acheter un booster;
- debloquer un avatar;
- activer le Pass Pro.

## Risques connus

- Les ecrans sociaux et classement sont en partie simules.
- Certaines actions de reinitialisation ne sont pas encore branchees.
- Le systeme de progression est fortement couple au navigateur via `localStorage`, donc il faut tester dans une session propre si besoin.

## Quand suspecter un bug

- un quiz se termine sans recompense;
- un niveau ne se met pas a jour;
- un bouton de validation reste bloque;
- une page de quiz renvoie une erreur de chemin;
- un achat retire des cristaux mais n'actualise pas l'affichage.
