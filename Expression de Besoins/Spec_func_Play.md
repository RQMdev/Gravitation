# Spécifications Fonctionnelles Partie Play

## Création d'Utilisateur Temporaire
Lorsque l'utilisateur se lance dans une partie (PLAY) sans s'être connecté préalablement à un compte utilisateur, cette modale apparaît pour lui permettre de choisir un pseudo qu'il pourra utiliser le temps de son utilisation.
Elle est composé d'un Champs dans lequel l'utilisateur entrera un pseudonyme respectant ces regles : ( length:3min/16max Char: "a-z/A-Z/0-9/\_-" ).
Au clic sur le bouton "Valider", si le Pseudo est déja pris, il lui sera proposé le pseudonyme le plus proche disponible. (ex: john, john1).

## Tutorial
Cette section proposera une Partie de Gravitation expliquant les touches aux joueurs nouveaux.
A tout moment un bouton "Skip" sera disponible pour passer à l'étape suivante

## Paramètrer le type de Partie
Les choix de paramétrage de la partie seront l'équivalent d'un bouton radio. La sélection du mode de jeux aura 2 ou 3 niveau de profondeur suivant les choix effectuer. La sélection d'un choix proposera a l'utilisateur le niveau de choix suivant correspondant.
* Niveau 1 : Solo // Multiplayer
* Niveau 2 : Offline // Online ( only for Multiplayer )
* Niveau 3 Solo :	Race // Adventure
* Niveau 3 Multi : Race // Battle

## Lobby
La section **Lobby** proposera une visualisation du groupe actuel. Le premier joueur a rejoindre un **Lobby** sera défini **Leader** et aura les droits d'administrations.

### Gestion de la visibilité du Lobby
Le **Leader** sera capable de changer la visibilité du Lobby.
3 choix lui seront proposé :
* Public ( Ouvert à tous ).
* Amis seulement.
* Privé ( Fermé ).

### Kick
Le **Leader** sera capable de kicker le joueur de son choix.

### Passation de pouvoir
Le **Leader** sera capable de donné ses droits d'administrateurs à un autre joueur présent dans le **Lobby**

### Bouton étape Suivante
Un bouton étape suivante est disponible pour passer à l'écran de sélection des **Maps**, le mode lancé dépendra du nombre de joueurs présents dans le **Lobby**.
* Duel : Le bouton est activé et affiche "Duel" si et seulement si il y a deux joueurs dans le Lobby.
* Arena : Le bouton est activé et affiche "Arena" lorsque 3 ou 4 joueurs sont présents dans le **Lobby**.
Il sera possible d'avoir plus de 4 joueurs dans le **Lobby**, mais le bouton étape suivante sera alors désactivé.
Un message sera affiché précisant qu'il y a trop de joueurs dans ce **Lobby** pour lancer une partie. 

## Slider de sélection des Maps
Pour tout les choix sauf le mode Aventure l'utilisateur se retrouvera devant un Carrousel lui présentant les Maps disponible, des flèches à droites et à gauche lui permettront de faire défiler ce dernier.
