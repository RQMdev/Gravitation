# 2 Spécifications Fonctionnelles Partie Connect

## 2.1 Création/Connexion

### 2.1.1 Création d'un compte
L'utilisateur pourra créer un compte soit propre au site, un compte "Gravitation", soit en utilisant une authentification Google ou Facebook.

Trois bouton seront donc disponible dans la fenêtre de création de compte :
* Connexion with Facebook
* Connexion with Google
* Create a Gravitation Account

#### 2.1.1.1 Création d'un Compte Gravitation
Un formulaire sera accessible par l'utilisateur pour qu'il crée un compte.

celui-ci comprendra trois champs :
* Username ( Nom d'utilisateur )
* E-mail
* Password ( mot de passe )

### 2.1.2 Formulaire de Connexion via le Compte Gravitation
Trois champs seront disponible pour la connexion :
* Username or E-mail
(length:3min/16max Char: "a-z/A-Z/0-9/\_-")
* Password
(length:8min/30max Char: "a-z/A-Z/0-9/\_-!$@&#")
* Password Confirmation

Une fois le formulaire validé d'un click sur le bouton 'Valider', l'utilisateur recevra un e-mail lui proposant un lien de validation, une fois ce lien visité, sont compte sera activé, et l'utilisateur directement connecté.

1 lien 'Mot de passe oublié' sera disponible en bas des champs de connexion. Lorsque l'utilisateur clique sur ce lien, une fenêtre modale apparait, lui demander de renseigner son adresse E-mail dans un champ prévu à cette effet. Lorsque l'utilisateur valide son choix en cliquant sur le bouton Envoyer correspondant, si l'e-mail correspond à un compte de la base de données, un mail lui sera envoyé avec un nouveau mot de passe généré aléatoirement.

#### 2.1.3 Connexion avec Facebook
Une fenêtre modal apparait ou l'utilisateur peut se connecter sur son compte facebook et ainsi se connecter à partir de celui-ci.

#### 2.1.4 Connexion avec Google
Comme pour Facebook, une modal apparaitra pour permettre la connexion via les comptes Google.

### 2.2 Gestion du Profil

#### 2.2.1 Changement du Mot de passe
Cette section proposera à l'utilisateur de changer son mot de passe. Cette action sera décomposé en plusieurs étapes.

* Etape 1: L'utilisateur rentre son ancien mot de passe puis clique sur le bouton 'Valider'.
* Etape 2: L'utilisateur rentre son nouveau mot de passe dans le 1er champs, et une nouvelle fois dans le 2nd champs de confirmation.

#### 2.2.2 Changement de la photo de profil
L'utilisateur peut ajouté une photo de profil depuis son ordinateur. Les restrictions lié aux formats et au poids du fichié seront spécifié sous le champs d'ajout.

### 2.3 Configuration du Jeu

#### 2.3.1 Assignation des Touches en Jeu
Cette section du Site permettra d'assigné une configuration des touches en jeux personnalisés.

Les champs configurable disponible sont :
* Propulsion :
* Tir :
* Tourner a gauche :
* Tourner à droite :

L'utilisateur pourra séléctionner le champs souhaité, il lui sera clairement indiqué qu'il est en train d'effectuer une modification sur ce champs. Il pourra alors presser la touche voulu.

### 2.4 Amis

Dans cette section seront listé tout les Amis du compte.
Il sera ici possible d'ajouter des nouveaux amis ainsi que de modérer les relations déja existante.

#### 2.4.1 Ajout d'un Nouvel Ami
Une modale présentera un champs permettant de faire une recherche d'Ami en entrant soit leur 'Username' soit leur 'mail'. Une fois validé, une Invitation sera envoyé au compte correspondant.

#### 2.4.2 Fonctionnalité disponible par Ami
En sélectionnant un Ami, un menu déroulant s'ouvrira, contenant les fonctionnalités suivantes :

#### 2.4.3 Profil
Un lien vers le profil de l'utilisateur sera disponible

#### 2.4.4 Inviter dans un Groupe
En cliquant sur ce bouton, une Invitation à rejoindre le groupe sera ennvoyé à cet utilisateur

#### 2.4.5 Envoyer un message
Cliquer sur ce bouton ouvrira une fenêtre de conversation avec l'utilisateur visé

#### 2.4.6 Bloquer cet Utilisateur
Un bouton 'Bloquer' sera disponible activant une modale de confirmation.

#### 2.4.7 Suppression du lien d'Amitié
Un bouton 'Supprimer l'Amitié' sera disponible, lorsque l'utilisateur cliquera dessus, une modale lui demandant la confirmation ou le rejet de l'opération apparaitra.

### 2.5 Vaisseau
Cette section permettra de sélectionner son vaisseau parmis ceux déja débloqué. Tout les vaisseaux seront visible via un Slider, mais seul ceux débloqué pourront être sélectionner.

### 2.6 Mon Classement
Redirection vers la page **Rankings** avec la fonctionnalité de filtrage de ses propre classements activé !

### 2.7 Jouer ( PLAY )
Renvoi vers une vue de sélection de la partie.
