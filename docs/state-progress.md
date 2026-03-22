# Etat de progression

La progression est le coeur de Quizzly. Tout ce qui ressemble a une economie, un rang, des quetes ou un historique passe par `ProgressContext`.

## Stockage

- Clef `localStorage`: `quizzly_progress`
- Provider global: `ProgressProvider`
- Hook d'acces: `useProgress()`

## Donnees principales

Le state utilisateur contient notamment:

- `xp`
- `level`
- `streak`
- `crystals`
- `completedQuizzes`
- `quests`
- `passTier`
- `neurones`
- `pseudo`
- `bio`
- `avatar`
- `unlockedThemes`
- `unlockedAvatars`
- `claimedPassRewards`
- `selectedClass`
- `xpBoost`
- `unlockedAchievements`
- `friends`
- `tribes`
- `messages`
- `rankedPoints`
- `rankedRank`
- `rankedCompletedQuizzes`
- `survivalHighScore`
- `survivalTotalXP`
- `isPassPro`

## Regles de base

- 100 XP font monter d'un niveau.
- Chaque niveau gagne 50 cristaux.
- Le Pass evolue tous les 200 XP cumules, avec un plafond au palier 20.
- Le joueur commence avec 5 neurones.

## Fonctions exposees

- `addXP(amount)`
- `addCrystals(amount)`
- `markQuizCompleted(quizId, matiereId)`
- `isQuizCompleted(quizId)`
- `claimQuestReward(questId)`
- `useNeurone()`
- `buyNeurones(amount, cost)`
- `buyCosmetic(type, id, cost)`
- `claimPassReward(tier)`
- `updateProfile(data)`
- `buyBooster(multiplier, cost)`
- `unlockAchievement(id)`
- `addFriend(pseudo)`
- `createTribe(name)`
- `joinTribe(id)`
- `sendMessage(chatId, text)`
- `addRankedPoints(amount)`
- `markRankedQuizCompleted(quizId)`
- `updateSurvivalScore(score)`
- `buyPassPro()`

## Points d'attention

- La regeneration des neurones est testee a un rythme accelere: 1 neurone toutes les 30 minutes.
- Plusieurs actions ecrivent immediatement dans `localStorage` apres chaque mise a jour.
- Certaines fonctions de quetes utilisent des identifiants de quetes futurs ou incomplets, ce qui laisse de la place pour evoluer le systeme.

## Quand l'etat se met a jour

- apres un quiz reussi;
- lors d'un echec en mode survie;
- lors d'un achat boutique;
- lors d'une modification de profil;
- lors d'une action sociale;
- lors de la reclamation d'une recompense de pass ou de quete.
