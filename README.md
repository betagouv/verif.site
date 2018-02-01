# [verif.site](https://verif.site)

[![CircleCI](https://circleci.com/gh/betagouv/verif.site.svg?style=svg)](https://circleci.com/gh/betagouv/verif.site)
[![Coverage Status](https://coveralls.io/repos/github/betagouv/verif.site/badge.svg?branch=coveralls)](https://coveralls.io/github/betagouv/verif.site?branch=master)

Ce site permet de visualiser les statistiques des différents sites de [l'incubateur des startup d'État](https://beta.gouv.fr)

## Installation

Dépendences :
 * [Node.js] v≥4.
 * [yarn](https://yarnpkg.com/lang/en/)

```sh
yarn
```

## Mettre à jour les données

Dépendences :

 * [Docker]

```sh
yarn update
```

### Mettre à jour l'image Docker

Nous utilisons l'outil [domain-scan](https://github.com/18F/domain-scan), développé par 18F. L'image docker est disponible sur
### Configurer l'export des données vers data.gouv.fr

Si la variable d'environnement `DATA_GOUV_API_KEY` est présente, le script essaiera alors d'envoyer les données brutes sur [data.gouv.fr](https://data.gouv.fr)

La clé doit être générée depuis l'administration [Incubateur de Services Numériques](https://www.data.gouv.fr/fr/organizations/incubateur-de-services-numeriques/#datasets) sur data.gouv.fr.

Le jeu de donnée mis à jour est le fichier `sites.json`, dans [Caractéristiques techniques des sites](https://www.data.gouv.fr/fr/datasets/caracteristiques-techniques-des-sites/).

## Modifier le site

L'application est une application [React] dans le dossier `front`.

```
yarn start
```

## Lancer les tests

Dépendances :
 * [Node.js]
 * [Cairo](https://cairographics.org/) :
    * Ubuntu: `sudo apt-get install libjpeg-dev && sudo apt-get install libcairo2-dev`
    * Mac: `brew install cairo`

```
yarn test
```

## Publier une nouvelle version du site

```
yarn deploy
```


[Node.js]: https://nodejs.org/en/
[Docker]: https://www.docker.com/
[React]: https://facebook.github.io/react/
