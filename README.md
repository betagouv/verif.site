# [verif.site](https://verif.site)

Ce site permet de visualiser les statistiques des différents site de [l'incubateur des startup d'État](https://beta.gouv.fr)

## Mettre à jour les données


Dépendences :
 * [Node.js]
 * [Docker]


```sh
make import
```
## Modifier le site

Dépendences :
 * [Node.js]

L'application est une application [react] dans le dossier `front`

```
make install
make start
```

## Lancer les tests

Pour l'instant il n'y a qu'un linter

Dépendences :
 * [Node.js]

Il est nécessaire d'installer des dépendences npm globales avec cette ligne de commande : `npm install -g eslint babel-eslint eslint-plugin-react eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-flowtype`


```
make test
```

## Publier une nouvelle version du site

```
make deploy
```



[Node.js]: https://nodejs.org/en/
[Docker]: https://www.docker.com/
[react]: https://facebook.github.io/react/
