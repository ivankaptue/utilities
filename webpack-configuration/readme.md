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

1. Créer dans un dossier ``web`` qui sera la racine de la configuration ``webpack``.
2. Copier les fichiers  ``package.json``, ``package-lock.json``, ``webpack.config.js``, ``.babelrc`` dans le dossier précédemment crée.
3. Lancer la commande ``npm install`` pour installer toutes les dépendances déclarées dans le fichier package.json.
4. Créer les fichiers ``assets/src/css/style.scss``, ``assets/src/js/app.js`` dans le dossier `web`. 

# Compilation
* `npm run dev` pour lancer la compilation des assets en mode développement. (Ceci pourra aider lors du deboggage)
* `npm run dev-watch` pour lancer la compilation des assets en mode développement et en mode `watch`.
* `npm run prod` pour lancer la compilation des assets en mode production (les assets sont alors minifiés).
