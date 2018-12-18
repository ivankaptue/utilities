# Description

Il s'agit ici, de la configuration webpack pour servir les assets de mes projets.
Les librairies pré-configurées sont: `bootstrap`, `font-awesome`, `jquery`, `popper.js`.

# Avantages
* Installation de toutes les dépendances de son projet via `npm`.
* Utilisation de la syntaxe `ES2015` dans ses fichiers js.
* Utilisation de `sass` pour son `css`.
* Minification des `js` et `css` en mode production.
* Possibilité de minifier les images en configurant `img-loader`.

# Utilisation

1. Cloner le projet ou Télécharger le .zip
2. copier le dossier `webpack-configuration` dans le repertoire qui contiendra les assets
3. Se déplacer dans le dossier `webpack-configuration`
4. Lancer la commande `npm install` pour installer les dépendances
5. Renommer le dossier webpack-configuration à votre convenance

Dans le dossier assets, il y'a le dossier `src` qui est dossier des sources et le dossier `public` qui est le dossier dans lequel les assets
sont compilés. 

**NB:** Ne pas mettre du contenu dans le dossier `public` car il est supprimé lors de la compilation des assets en environement de production.

# Compilation
* `npm run dev` pour lancer la compilation des assets en mode développement. (Ceci pourra aider lors du deboggage)
* `npm run dev-watch` pour lancer la compilation des assets en mode développement et en mode `watch`.
* `npm run prod` pour lancer la compilation des assets en mode production (les assets sont alors minifiés).

# Avertissements
Sous windows, le `NODE_ENV` pose parfois des problèmes. Il faut dans ce cas installer le package `win-node-env`, grace à la commande
```
npm install -g win-node-env
```

Il faudra aussi ajouter le dossier `node_modules` dans le fichier `.gitignore` pour les utilisateurs de `git` ;).