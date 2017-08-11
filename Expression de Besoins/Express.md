# Gravitation
## Sommaire

* Définition globale du projet
* Définition de la cible
* Gameplay
* Contrôle par Défaut
* Charte Graphique
* Arborescence du site
* Accueil
* PLAY
* CONNECT
* RANKING

## Définition globale du projet

Gravitation est un jeu vidéo entièrement accessible par navigateur Internet qui peut se jouer aussi bien en solo, qu'en multijoueur local (offline) ou à distance (online).
Il sera compatible avec tous les navigateurs récents (Chrome, Chromium, Firefox, Safari, Opera, Edge) et devra être jouable sur un ordinateur de bureau, mais aussi sur tablettes et Smartphones via le Touchscreen et la Gyroscopie.
Une manette de jeu devra pouvoir être paramétrable.

Le jeu dispose de 4 modes de jeu :

* Le mode **Adventure** qui est le mode histoire en solo.
* Le mode **Race** consistant à faire la course contre la montre ou contre des adversaires.
* Le mode **Duel** consistant à se battre en combats à un contre un.
* Le mode **Arena** consistant à se battre en combats dans des Arènes de 4 joueurs.

Les utilisateurs auront la possibilité de créer un compte utilisateur avec un nom unique sur lequel ils pourront personnaliser leur expérience de jeu. Ils pourront également changer les réglages par défauts, ajouter des amis et les inviter en parties multijoueurs, gérer leurs sauvegardes et customiser leurs vaisseaux.

## Définition de la cible
Gravitation s'adresse aux **Hardcore Gamers** appréciant le gameplay 2D et rétro, les jeux de courses et de combats *compétitif*.

## Gameplay
Le joueur contrôlera un vaisseau **triangulaire**. Il pourra le faire avancer dans la direction vers laquelle le vaisseau pointe à l'aide de propulseur et pourra également le faire pivoter.
Le vaisseau subira la **gravité**,il sera donc attiré vers le bas de l'écran. Le joueur jouera avec celle-ci afin de manoeuvrer au mieux dans les différents niveaux.
Cette gravité sera d'ailleurs variable d'un niveau à l'autre, créant ainsi différent contextes auxquels le joueur devra s'adapter. Il lui sera également possible de tirer des **projectiles**.
Le projectile de base se déplace lentement, sur une ligne droite, dans la direction du vaisseau. D'autres projectiles, plus puissants, pourront être acquis grâce à des **Power-Up**. Ils seront alors limité soit en nombre d'utilisation, soit en temps.

## Contrôles par défaut
Desktop:
Joueur 1:
Orienter le vaisseau: Flèche gauche et droite.
Propulseur: Flèche du Haut.
Tir: Entrée.

Joueur 2:
Orienter le vaisseau: QD (en AZERTY), AD (en QWERTY).
Propulseur: Z (en AZERTY), W en (QWERTY).


Tablette/Smartphone:
Orienter le vaisseau: Gyroscope.
Propulseur: "Touch" moitié basse de l'écran.
Tir: "Touch" moitié haute de l'écran.

## Charte Graphique
**Pixel Art**  
**Rétro Scifi**  
**90's**  
**Neon**  

## Arborescence du site
![Arborescence du site](Gravitation-like.png "Arborescence du site")

## Accueil

En arrivant sur la page d'accueil, sans être connecté, trois choix s'offrent au joueur:

* Play
* Connect
* Ranking

##### Play
Permet de lancer une partie rapidement, sans même avoir besoin de se connecter ou de créer un compte.

##### Connect
Permet de se connecter à un compte déja existant ou d'en créer un nouveau, puis de paramétrer les différents réglages et options du compte.

##### Ranking
Permet d'accéder au classement des joueurs.

## PLAY
Après avoir cliqué sur **PLAY**, l'utilisateur va être amené à rentrer un nom d'utilisateur. Un nouveau nom par défauts lui sera proposé ( ex: Guest1337 ). Si l'utilisateur rentre un nom déjà existant, un nom proche lui sera proposé. Par exemple, si l'utilisateur rentre comme nom: John, il lui sera alors proposé John1.

L'écran suivant contient le tutoriel, qui va expliquer au nouveau joueur les commandes dans une partie simples. Il est possible à tout moment de quitter ce tutoriel. Si l'utilisateur est connecté sur un compte et que le tutoriel a déjà été effectué, cette étape sera sautée.

L'écran suivant lui offre deux choix, jouer en **Solo** ou en multijoueur, **Multiplayer**.

Si l'option **Solo** a été choisi, alors l'utilisateur a le choix entre le mode **Adventure** et le mode **Race**.

Si l'option **Adventure** a été sélectionnée, un écran permettant de rentrer un *mot de passe* à l'aide de combinaison de symbole permet d'avancer à un niveau plus avancée dans le jeu. Il est possible de passer cet écran si aucun mot de passe n'est connu grace à un bouton **Skip**. Si le mot de passe est erroné, un message d'erreur s'affiche signalant à l'utilisateur que celui n'est pas valide.

Ensuite l'utilisateur se retrouve dans le premier niveau du mode **Adventure** et peut avancer dans le mode histoire.

Si l'option **Race** a été choisi en mode **Solo**, l'utilisateur accède alors à un écran lui permettant de choisir la carte sur lequel il va courir contre la montre. Une fois cette dernière sélectionnée, le jeu commence.

Si l'option **Multiplayer** a été choisi et que l'utilisateur est sur un ordinateur de bureau, un nouveau choix s'offre à lui entre **Offline** et **Online**.

Si l'option **Offline** est sélectionnée, une nouvelle fenêtre rappelle les contrôles par défauts pour les deux joueurs jouant sur le même clavier, un bouton **Continue** permet d'accéder à la suite.

Ensuite, trois choix s'offrent à l'utilisateur, **Race**, **Arena** et **Duel**.
Pour chacun de ces choix, l'écran de Sélection de la carte est affiché, et une fois celle-ci sélectionné, la partie est lancée.

Si l'option **Online**  est choisie, trois choix s'offrent à l'utilisateur, **Race**, **Arena** et **Duel**.
Pour chacun de ces choix, l'écran suivant liste les différents lobbys disponibles et permet à l'utilisateur de les rejoindre. Les lobbys sur lesquels jouent des membres de sa liste d'amis seront affichés en haut. Un bouton **Create Lobby** permet de créer un nouveau lobby qui pourra être rejoint par d'autres joueurs. Si l'utilisateur est connecté, il lui sera possible de passer ce lobby en privé et d'y inviter des joueurs de sa liste d'amis. Enfin, l'écran de Sélection de la carte est affiché et une fois celle-ci sélectionnée, la partie est lancée.

## CONNECT
Si l'utilisateur n'est pas connecté à un compte, il lui faut alors se connecter.

##### Connect
L'utilisateur devra remplir un formulaire de connexion à 2 champs.
Nom d'utilisateur/Email.
Mot de passe.
Il sera également possible de se conneceter rapidement via les réseaux sociaux Facebook et Google+.
Un bouton **Create Account** sera disponible en bas du formulaire pour les joueurs désirant créer un compte.

##### Create Account
L'utilisateur devra remplir un formulaire comprenant:
Nom d'utilisateur.
Email.
Mot de passe.
Une mesure contre les robots devra être mis en place.

Une fois connecté, l'utilisateur accède alors au **Menu**.

### Menu
Le **Menu** Comprend :

* Profile
* Configuration
* Friends
* Ship
* My Ranking
* PLAY

##### Profile
Cette section permet de modifier des informations sur son compte.
il y est possible de:

* Changer son nom d'utilisateur.
* Changer son mot de passe.
* Changer son Avatar.
* Changer son nom réel.
* Changer sa description.

##### Configuration
Cette section permet à l'utilisateur de changer les configurations des touches, ainsi que des réglages particuliers liés au jeu.

##### Friends
Ici, l'utilisateur pourra gérer sa liste d'amis. Il verra ses amis connectés et pourra leur envoyer des messages ainsi que les inviter en parties.
Il sera possible d'ajouter des amis en insérant leur nom d'utilisateur ou leur mail. Il pourra également accepter de nouvelles demandes d'amis.

##### Ship
Cette zone permettra à l'utilisateur de personnaliser son vaisseau et ses munitions de bases, en choisissant parmis les skins qu'il aura débloqué dans le jeu.

##### My Ranking
L'utilisateur pourra accéder à son classement dans tous les modes de jeu classés.

##### PLAY
L'utilisateur est renvoyé vers la sélection d'un mode de Jeu **Solo** ou **Multiplayer**.

## RANKING
Les classements **Online** sont basés sur un système de point ELOs.
Les classements **Solo** montre les meilleurs performances Solo, en **Race**, le temps effectué par carte, en **Adventure**, le score du mode Histoire.

Le menu **Ranking** comprend 5 Ladder:

* Online Race
* Online Duel
* Online Arena
* Solo Race
* Solo Adventure

##### Online Race
Ladder en points ELO sur les compétitions de type **Race** à 4 joueurs.
##### Online Duel
Ladder en points ELO sur les compétitions de type **Duel** à 2 joueurs.
##### Online Arena
Ladder en points ELO sur les compétitions de type **Arena** à 4 joueurs.
##### Solo Race
Classement au meilleur temps absolu.
##### Solo Adventure
Classement au meilleur score absolu.
