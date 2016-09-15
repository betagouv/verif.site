# [verif.site](https://verif.site)

[![CircleCI](https://circleci.com/gh/sgmap/verif.site.svg?style=svg)](https://circleci.com/gh/sgmap/verif.site)
[![Coverage Status](https://coveralls.io/repos/github/sgmap/verif.site/badge.svg?branch=coveralls)](https://coveralls.io/github/sgmap/verif.site?branch=master)

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

Dépendences :
 * [Node.js]
 * [Cairo](https://cairographics.org/) :
    * Ubuntu: `sudo apt-get install libjpeg-dev && sudo apt-get install libcairo2-dev`
    * Mac: `brew install cairo`

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
