# [sites.beta.gouv.fr](sites.beta.gouv.fr)

Ce site permet de visualiser les statistiques des différents site de [l'incubateur des startup d'État](http://beta.gouv.fr)

## Mettre à jour les données


Dépendences :
 * [Node.js]
 * [Docker]


```
node ./import/index.js
```
## Modifier le site

Dépendences :
 * [Node.js]

L'application est une application [react] dans le dossier `front`

```
cd front
npm start
```

## Publier une nouvelle version du site

```
./front/deploy.sh
```



[Node.js]: https://nodejs.org/en/
[Docker]: https://www.docker.com/
[react]: https://facebook.github.io/react/
