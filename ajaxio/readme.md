# Packages utilisés

Note explicative de certains packages dont l'utilité pourrait ne pas être évidente.

## html-webpack-plugin
Loader de fichier html. 
Permet d'avoir des fichiers html dans /src, qui seront loadés dans le bundle /public avec le js et le css insérés ou appelés dedans.

## node-sass
Permet la compilation du SCSS

## sass-loader
Loader de SCSS (utilise node-sass)

## css-loader
Loader de CSS

## mini-css-extract-plugin
Permet de créer un fichier css séparé dans le bundle (ce que ne fait pas webpack par défaut)

## image-webpack-loader
Permet de loader les images en les minifiant au passage.

## postcss-loader
Loader sur lequel s'appuie Autoprefixer pour fonctionner.

## postcss.config.js
Nécessaire au fonctionnement d'Autoprefixer.