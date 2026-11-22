# Mes Livres — site GitHub Pages

## Contenu
- `index.html` : page d'accueil
- `style.css` : design responsive
- `script.js` : année automatique du pied de page
- `assets/` : bannière et couvertures optimisées depuis les ZIP fournis

## 1. Configurer les liens des APK
Dans `index.html`, remplacez les deux occurrences de :

`https://github.com/VOTRE-PSEUDO/VOTRE-DEPOT/releases/latest`

par l'adresse de la page Releases de votre dépôt, par exemple :

`https://github.com/mon-compte/mes-livres/releases/latest`

Les deux boutons ouvrent la page Releases GitHub. Ajoutez-y les APK comme fichiers (Assets) de la Release.

## 2. Publier sur GitHub Pages
1. Créez un dépôt GitHub.
2. Décompressez ce dossier et envoyez **tout son contenu** à la racine du dépôt.
3. Dans GitHub : **Settings → Pages**.
4. Dans **Build and deployment**, choisissez **Deploy from a branch**.
5. Sélectionnez `main` et `/ (root)`, puis **Save**.
6. Après le déploiement, GitHub affichera l'adresse publique du site dans cette même page.

Aucun framework ni compilation n'est nécessaire.


## 3. Organisation de la page
- Les deux téléchargements APK sont regroupés dans une barre dédiée en haut de la page.
- Les couvertures sont présentées dans une grille régulière et responsive pour faciliter la lecture.
- Les deux boutons de téléchargement présents dans les anciennes sections sont masqués afin d’éviter les doublons.
