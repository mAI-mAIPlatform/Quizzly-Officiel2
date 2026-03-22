# Social et tribus

Le systeme social sert a donner une couche communautaire a Quizzly.

## Fonctions disponibles

- ajouter des amis;
- creer une tribu;
- rejoindre une tribu;
- envoyer des messages;
- partager des scores ou des succes.

## Donnees utilisees

Dans `ProgressContext`, on trouve:

- `friends`
- `tribes`
- `messages`

## Page Social

Page: `/social`

Elle contient trois onglets:

- `amis`
- `tribus`
- `chat`

### Onglet amis

- ajout par pseudo;
- liste des amis stockes localement;
- ouverture d'un chat direct.

### Onglet tribus

- creation d'une tribu;
- affichage du nombre de membres;
- bouton pour ouvrir la conversation.

### Onglet chat

- messages regroupes par `chatId`;
- defilement automatique vers le bas;
- affichage visuel distingue entre messages de l'utilisateur et messages recents.

## Limites actuelles

- Le label "WebSocket" dans l'interface est surtout decoratif pour l'instant.
- Les amis et tribus sont stockes localement, sans backend distant.
- La tribu mondiale suggeree est encore un element d'interface, pas une vraie federation.

## Liens avec les autres ecrans

- les succes du profil peuvent etre partages dans une tribu;
- le score d'un quiz peut etre publie dans la premiere tribu disponible;
- le tableau de bord met en avant la quete du jour et l'esprit communautaire.
