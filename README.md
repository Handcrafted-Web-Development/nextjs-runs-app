<p align="center"><a href="https://nextjs.org/" target="_blank"><img src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg" width="200" alt="Laravel Logo"></a></p>

# NextJs and POO 💯 - Développement d'un jeu de rôle et de stratégie inspiré de 'Reigns' 👨🏼‍💻

_Lisez attentivement le Readme avant de commencer toute manipulation !_ ✌️

## Prérequis 👨🏼‍🏫

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en) (v20.11.1 ou supérieur)
- [Npm](https://www.npmjs.com/) (v10.2.4 ou supérieur)
- [Next.js](https://nextjs.org/docs)

## Étapes d'Installation

1. **Cloner le Projet**

Ouvrez un terminal et exécutez la commande suivante pour cloner le projet depuis le dépôt Git :

#### HTTPS

```shell
git clone https://github.com/Handcrafted-Web-Development/nextjs-runs-app.git
```

#### SSH

```shell
git clone git@github.com:Handcrafted-Web-Development/nextjs-runs-app.git
```

2. **Installer les Dépendances**

Placez-vous dans le répertoire du projet et exécutez la commande suivante pour installer les dépendances avec npm :

```shell
cd nextjs-runs-app
npm install
```

3. **Explication des Dépendances**

Ce projet utilise plusieurs devDependencies pour faciliter le développement et maintenir la cohérence du code lorsque l'on travaille en équipe. Voici une explication de chaque dépendance :

- eslint : ESLint est un outil de linting très populaire pour JavaScript. Il permet de détecter et de signaler les erreurs de syntaxe, les mauvaises pratiques et les conventions de codage non respectées dans votre code JavaScript ou TypeScript.

- eslint-config-next : C'est la configuration ESLint spécifique à Next.js. Elle inclut les règles de linting recommandées pour les projets Next.js, garantissant ainsi la conformité aux meilleures pratiques de développement spécifiques à Next.js.

- prettier : Prettier est un outil de formatage de code qui vous permet de définir des règles de formatage et de formater automatiquement votre code en fonction de ces règles. Cela aide à maintenir une base de code cohérente et facilement lisible.

- sass : SASS est un préprocesseur CSS qui ajoute des fonctionnalités comme les variables, les mixins et les fonctions. Il simplifie l'écriture et la maintenance des feuilles de style en permettant l'utilisation de fonctionnalités avancées qui ne sont pas disponibles dans le CSS standard.

4. **Activation des Dépendances**

Pour activer ces outils, des scripts sont inclus dans le fichier package.json, les voici :

```shell
npm run dev
```

Lance le serveur de développement Next.js

```shell
npm run build
```

Build l'application Next.js pour l'environnement de production

```shell
npm run start
```

Démarre le serveur Next.js en mode production

```shell
npm run lint
```

Exécute ESLint pour le linting du code

⚠️ **Attention : Il est recommandé de lancer cette commande avant de Push son code**

```shell
npm run format
```

Enfin cette commande éxécute Prettier pour formater automatiquement le code

#### À noter que vous pouvez configurer vos IDE grâce au fichier .json des packages (exemple : .prettierrc) pour lancer la commande correspondante à chaque sauvegarde de votre code !

Bon développement ! 🍀
