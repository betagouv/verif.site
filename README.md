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

Si la variable d'environnement `DATA_GOUV_API_KEY` est présente, le script essaiera alors d'envoyer les données brutes sur [data.gouv.fr](https://data.gouv.fr)

La clé doit être reliée à l'administration [Incubateur de Services Numériques](https://www.data.gouv.fr/fr/organizations/incubateur-de-services-numeriques/#datasets). 

Le jeux de donnée mis à jour est le fichier `sites.json`, dans [Caractéristiques techniques des sites](https://www.data.gouv.fr/fr/datasets/caracteristiques-techniques-des-sites/).

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
