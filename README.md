# [verif.site](https://verif.site)

Ce site permet de visualiser les statistiques des différents sites de [l'incubateur des startup d'État](https://beta.gouv.fr)

## Installation

Dépendences :
 * [Node.js] v≥4.

```sh
npm install
```

## Mettre à jour les données

Dépendences :

 * [Docker]

```sh
npm run update
```

## Modifier le site

L'application est une application [React] dans le dossier `front`.

```
npm start
```

## Lancer les tests

Il est nécessaire d'installer des dépendences npm globales avec cette ligne de commande : `npm install -g eslint babel-eslint eslint-plugin-react eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-flowtype`


```
npm test
```

## Publier une nouvelle version du site

```
npm run deploy
```



[Node.js]: https://nodejs.org/en/
[Docker]: https://www.docker.com/
[React]: https://facebook.github.io/react/
