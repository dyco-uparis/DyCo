# Lanyon
Mode d'emploi du site


## Contents

- [Usage](#usage)
- [Ajouter une Page](#Ajouter-une-Page)
- [Ajouter du contenu](#Ajouter-du-contenu)


## Usage

Lanyon is a theme built on top of [Poole](https://github.com/poole/poole), which provides a fully furnished Jekyll setup—just download and start the Jekyll server. See [the Poole usage guidelines](https://github.com/poole/poole#usage) for how to install and use Jekyll. Le depot original se trouve à cette [adresse](https://github.com/poole/lanyon/tree/gh-pages).


## Ajouter une Page

Lanyon includes some customizable options, typically applied via classes on the `<body>` element.


### Sidebar menu

Create a list of nav links in the sidebar by assigning each Jekyll page the correct layout in the page's [front-matter](http://jekyllrb.com/docs/frontmatter/).

```
---
layout: page
title: About
---
```

**Why require a specific layout?** Jekyll will return *all* pages, including the `atom.xml`, and with an alphabetical sort order. To ensure the first link is *Home*, we exclude the `index.html` page from this list by specifying the `page` layout.


### Ajouter une page de post

1. enregistrer dans */_posts* un fichier markdown avec pour entete:
```
---
layout: post
title: 'TITRE QUI SERA AFFICHÉ'
---
```

2. le titre doit comprendre la date: *2020-01-01-*

### Ajouter une page cachées 

enregistrer à la racine un fichier markdown avec pour entete:
```
---
layout: page
title: 'TITRE QUI SERA AFFICHÉ'
---
```
### Ajouter une page référencée

enregistrer à la racine un fichier markdown avec pour entete:
```
---
layout: hidden_page
title: 'TITRE QUI SERA AFFICHÉ'
```

## Ajouter-du-contenu

### Ajouter des maths

Pour cela mettre les équations entre double dollar, par exemple, on obtient une équation en ligne comme $$x=2$$ avec 
```
on obtient une équation en ligne comme $$x=2$$ avec 
```
une équation séparée comme
$$
\begin{align*}
  & \phi(x,y) = \phi \left(\sum_{i=1}^n x_ie_i, \sum_{j=1}^n y_je_j \right)
  = \sum_{i=1}^n \sum_{j=1}^n x_i y_j \phi(e_i, e_j) = \\
  & (x_1, \ldots, x_n) \left( \begin{array}{ccc}
      \phi(e_1, e_1) & \cdots & \phi(e_1, e_n) \\
      \vdots & \ddots & \vdots \\
      \phi(e_n, e_1) & \cdots & \phi(e_n, e_n)
    \end{array} \right)
  \left( \begin{array}{c}
      y_1 \\
      \vdots \\
      y_n
    \end{array} \right)
\end{align*}
$$
avec 

```
une équation séparée comme
$$
\begin{align*}
  & \phi(x,y) = \phi \left(\sum_{i=1}^n x_ie_i, \sum_{j=1}^n y_je_j \right)
  = \sum_{i=1}^n \sum_{j=1}^n x_i y_j \phi(e_i, e_j) = \\
  & (x_1, \ldots, x_n) \left( \begin{array}{ccc}
      \phi(e_1, e_1) & \cdots & \phi(e_1, e_n) \\
      \vdots & \ddots & \vdots \\
      \phi(e_n, e_1) & \cdots & \phi(e_n, e_n)
    \end{array} \right)
  \left( \begin{array}{c}
      y_1 \\
      \vdots \\
      y_n
    \end{array} \right)
\end{align*}
$$
avec 
```


### Ajouter une image ou un film

1. On ajoute une image enregistrée sur github dans Images sous la forme d'un tableau avec un espace pour la légende, avec

```
| ![imageclosedloop](/images/ClosedLoop8.jpg){: width="600px"} |
|:--:| 
| *Légende à ajouter* |
```

2. On ajoute un film disponible en ligne avec la commande iframe. Dans l'exemple suivant on a ajouté la balise *center*. Le lien lui même est obtenu directement depuis la plateforme de partage, généralement via le clic droit.

```
<center>
<iframe width="560" height="315" src="https://www.youtube.com/embed/ka1W64XG7aY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</center>
```


### Ajouter des styles

1. On obtient du **gras**, de *l'italique* avec :

```
**gras** et *italique* 
```

2. On fait des listes avec des points avec 
```
- pierre
- feuille
- ciseaux
```

3. On fait des listes numerotees avec (le numero n'a pas d'importance, il peut rester toujours le meme):
```
1. premier point
1. second point
1. troisieme point
```

4. On fait des titres avec
```
# Gros titre
## Moins Gros Titre
### Encore Moins Gros Titre
#### Petit titre
```

5. On fait des liens avec
```
[mot cliquable](URL)
```

6. On fait un tableau à 3 colonnes et 4 lignes
avec :
```
| centré | gauche | droite |
|:--:|:-- | --:|
| 1 | 2 | 3 |
| alpha | beta | omega |
| 9 | 8 | 7 |
```
la justification est donnée par la seconde ligne 

