# Spécification Techniques

## T1 Gestion des comptes utilisateurs

### T1.1 Navigation entre le formulaire de création de compte et le formulaire de connexion à un compte existant
le passage d'une vue à une autre est implémenté grace à react-router-dom. Les composants correspondant aux formulaires sont encapsuler dans un composant Route tandis que des composants NavLink permette le changement de l'URL de l'application, et donc déclenche le nouveau rendu correspondant

### T1.2 Création d'un compte utilisateurs
La gestion des comptes utilisateurs se fait gràce au deux packages meteor, accounts-base et accounts-password. Le formulaire de création d'un compte est un composants React nommé SignUp, lui meme composé de sous composants générique gérant l'Input, le label et retournant la "string" entré dans l'Input. le composant SignUp récupère les valeurs des Input, les enregistre dans le State du composant SignUp, et au clique sur le bouton de Validation, lance la fonction de création de compte avec mot de passe du Packages accounts-password, en lui passant les valeurs contenu dans le State de SignUp.

### T1.3 Connexion à un compte utilisateurs
La gestion des comptes utilisateurs se fait gràce au deux packages meteor, accounts-base et accounts-password.
