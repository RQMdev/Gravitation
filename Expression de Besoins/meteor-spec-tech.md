# Spécification Techniques

## T1 Gestion des comptes utilisateurs

### T1.1 Navigation entre le formulaire de création de compte et le formulaire de connexion à un compte existant
le passage d'une vue à une autre est implémenté grace à react-router-dom. Les composants correspondant aux formulaires sont encapsuler dans un composant Route tandis que des composants NavLink permette le changement de l'URL de l'application, et donc déclenche le nouveau rendu correspondant

### T1.2 Création d'un compte utilisateurs
La gestion des comptes utilisateurs se fait gràce au deux packages meteor, accounts-base et accounts-password. Le formulaire de création d'un compte est un composants React nommé SignUp, lui même composé de sous composants générique gérant l'Input, le label et retournant la "string" entré dans l'Input. le composant SignUp récupère les valeurs des Input, les enregistre dans le State du composant SignUp, et au clique sur le bouton de Validation, lance la fonction de création de compte avec mot de passe du Packages accounts-password, en lui passant les valeurs contenu dans le State de SignUp.

### T1.3 Connexion à un compte utilisateurs existant
La gestion des comptes utilisateurs se fait gràce au deux packages meteor, accounts-base et accounts-password. Le formulaire de création d'un compte est un composants React nommé SignIn, lui meme composé de sous composants générique gérant l'Input, le label et retournant la "string" entré dans l'Input. le composant SignIn récupère les valeurs des Inputs, les enregistre dans le State du composant SignIn, et au clique sur le bouton de Validation, lance la fonction de connexion au compte avec mot de passe du Packages accounts-password, en lui passant les valeurs contenu dans le State de SignIn.

### T1.4 Affichage des Erreurs après validation d'un formulaire de création de compte/connexion à un compte existant erronées
Un component générique DisplayError à été créer. il prend un message en propriété (props), et le retourne dans une div.
Lors de l'appel des fonctions createUser() et loginWithPassword(), un callback se charge de récupéré la raison de l'erreur et de l'ajouté au State du composant.
La fonction render du composant elle vérifie si une erreur est présente dans le State, et si c'est le cas, ajoute un composant DisplayError en lui passant en propriété le message d'erreur du State.

### T1.5 Redirection après un envoi d'un formulaire de création de compte/de connexion à un compte existant
Le composant React principal "App" reçoit en propriété currentUser le résultat de la fonction Meteor.user().
La fonction de rendu du composant "App" contient un opérateur conditionnel vérifiant la propriété currentUser, si elle est vrai, et donc que l'utilisateur est bien connecté, le composant Dashboard est rendu, alors que si elle est fausse, et donc que l'utilisateur n'est toujours pas connecté, c'est le composant contenant les formulaires de création de comptes et connexion qui sont rendu.

### T1.6 Déconnexion d'un utilisateur
Un composant générique "Button" à été créer, il prend en paramètre un label et une fonction onClick et retourne un element html "button".

Dans la barre de navigation du composant Dashboard, un composant "Button" est appelé avec comme label "Log Out" et comme fonction onClick la fonction interne à meteor: Meteor.logout().

## T2 Utilisateurs connectés

### T2.1 Visualisations des utilisateurs connectés
le package meteor mizzao:user-status à été ajouté. il rajoute des propriété de status de connection au objet de la collection des utilisateurs (users).

Coté serveur, une donnée 'usersOnline' est publié, elle correspond au utilisateur qui ont un status.online à vrai.

Un composant générique User prend en propriété un objet 'user' et retourne des divs présentant le pseudonyme de l'utilisateur (user.username) et son status de connexion (user.status)

Le Dashboard lui contient un composant UsersOnline, qui est contenu dans un HOC lui rajoutant en propriété la donnée
'usersOnline' de manière réactive.

Le composant UsersOnline se charge alors pour chacun des utilisateurs récupéré depuis la donnée 'usersOnline',
de créer une instance du composant User.

## T3 Gestion du jeu

### T3.1 Intégration du jeu
Le composant React GameWindow se charge de rendre la div dans laquelle Phaser rajoutera le canvas. elle dispose d'un état ( State ) gameVisible, qui est un booléen, et qui définit si cette div est en display:none ou block, c-a-d si elle est visible ou non.

### T3.2 Gestion de l'état d'un jeu multi-joueur
Work In Progress
