---
layout: page
title: Recherche
---


#Contenu

- [Thermodynamique nodale](#thermonodal)
- [Thermodynamique des systèmes vivants](#livingsystems)
- [Économie](#eco)
- [Croissance réseau fongique](#thalle)
- [MKIDS](#MKIDS)

# Thermodynamique modale <a name="thermonodal"></a>
L'objet de ces travaux est de développer un cadre générique de travail permettant l'emploi du formalisme et des catégories de la thermodynamique hors d'équilibre, notamment le développement de Onsager de la description microscopique Force/Flux, avec une approche nodale, qui permet la prise en compte des rétroactions sur le point de fonctionnement réel d'une machine à conversion de l'énergie. Ceci est développé dans le cadre thermodynamique seul et dans le cadre d'applications à des systèmes plus éloignés mais partageant des caractéristiques communes, notamment la dissipation et l'accès aux ressources dans le but effectuer un travail: les systèmes vivants et les structures économiques.

| ![imageclosedloop](/images/KC_shadock.png){: width="600px"}                                          |
|:--:|
| *Schéma général d'une machine à conversion de l'énergie contrainte par des conditions au bord mixtes*|


L'approche thermodynamique nodale est développée au laboratoire dans le cadre de la thermodynmique à temps fini. On trouvera plus de détails sur [cette page](/FTT). Nous nous intéressons plus spécifiquement aux machines à conversion de l'énergie comme systèmes formel idéal. Nous décrivons cette machine comme la capacité à transformer de l'énergie diluée (par exemple la chaleur) en énergie concentrée (le travail) via un processus intrinsequement dissipatif.
La question scientifiques est celle des points de fonctionnement réellement accessibles par la machine. En effet une machine n'est jamais directement en contact avec une ressource, par exemple les températures $T_{+}$ et $$T_-$$, mais via des résistances de couplages. Ces résistances ont pour effet de moduler la différence de température réellement accessible et de dépendre du point de fonctionnement. Ainsi, la machine apparait comme un système à la dynamique riche, pouvant même sous certaines conditions faire apparaitre des spontanément de oscillations.

| ![imageclosedloop](/images/ClosedLoop8.jpg){: width="600px"}|
|:--:|
| *Dépendance du gain de la rétroaction en fonction de la conductivité $$\omega_\kappa$$. Pour un gain nul, le système est attendu à osciller*|

> Publications reliées
6. [C. Goupil, H. Ouerdane, E. Herbert, G. Benenti, Y. D’Angelo, and Ph. Lecoeur. Closed-loop approach to thermodynamics. Physical Review E, 94(3):032136, September 2016.](/2016/09/01/Closed-loop)


# Thermodynamique des systèmes vivants <a name="livingsystems"></a>
Cette thématique est développée plus en détail sur [cette page](/thermo_metabo).

Les systèmes vivants transforment une énergie diluée, le potentiel chimique issu de l'alimentation, en une énergie concentrée, par exemple via un travail effectué sur leur centre de masse: c'est le déplacement. À l'echelle du muscle, des descriptions phénoménologiques précises ont été développées il y un siècle, notamment par A. Hill, sans qu'un formalisme convaincant ait finalement émergé. En nous appuyant sur une approche basée sur la FTT nous avons pu retrouver les équations phénoménologiques et conclure le débat sur la nature des paramètres utilisés.

Dans le cas du muscle, la machine à conversion de l'énergie n'est contrainte que par l'accès aux ressources: son point de fonctionnement spontané sera celui qui lui permet de développer le maximum de puissance. Or le comportement d'un organisme complet fait intervenir la notion de *choix*, c'est à dire, la décision de se placer à un point de fonctionnement plutôt qu'un autre pour effectuer le même déplacement. 
Le cadre de fonctionnement a été discuté dans un [article récent](/2020/01/01/Adapted-or-Adaptable/) pour faire apparaitre les contraintes spécifiques associées aux organismes vivant. Notamment l'existence d'un *basal*, la consommation d'énergie pour maintenir les processus vitaux, c'est à dire en l'absence d'effort. 

Nous voulons à présent généraliser cette approche à un organisme complet pour pouvoir discuter à la fois du cadre et de l'appropiation de ces contraintes.


| ![imageNJP](/images/NJP6.jpg){: width="300px"} | ![imageNJP](/images/KC_COE1.png){: width="300px"}|
|:--:|:--:|
| *Force développée en fonction de la vitesse de contraction pour deux types de muscle. En noir le soleus, pauvre en fibre rapide et en rouge l'EDL riche en fibre rapide. On constate que l'écart au cas idéal, relation linéaire entre force et vitesse, est signifcativement amplifié dans le cas du soleus, marquant sa différence de nature avec l'EDL.*| *Cout en Énergie (COE) pour effectuer un travail à l'intensité $$I_2$$. Dans le cas d'un déplacement, il s'agit d'une énergie par unité de longueur parcourue. En vert le flux de déchet qui est utilisé. On observe un point de fonctionnement optimal pour minimiser ce flux.*|

> Publications reliées
1. [Ch. Goupil and É. Herbert Adapted or Adaptable: How to Manage Entropy Production ?  Entropy 2020, 22(1), 29; https://doi.org/10.3390/e22010029](/2020/01/01/Adapted-or-Adaptable/)
1. [Christophe Goupil, Henni Ouerdane, Eric Herbert, Clémence Goupil, and Yves D’Angelo.
Thermodynamics of metabolic energy conversion under muscle load. New Journal of Physics,
21(2):023021, February 2019.](/2019/02/01/Thermodynamics-of-metabolic-energy-conversion-under-muscle-load)


# Économie <a name="eco"></a>
Cette thématique est développée plus en détail sur [cette page](/EcoDyco).

La contrainte environementale, et notamment l'accès aux ressources énergétiques, contraint l'horizon des possibles pour les systèmes vivants et par conséquent les sociétés humaines. Pour prendre l'exemple de l'énergie,  avant la révolution industrielle, seules des énergies de flux (éolien, solaire ou hydraulique) étaient accessibles. Au cours du $$19^{eme}$$ siecle, l'apparition d'un usage massif des énergies fossiles par les sociétés humaines a completement modifié notre rapport à l'usage de l'énergie. D'une industrie adaptée à une ressource au flux imposé, sans lien avec le besoin, une nouvelle industrie adaptée à l'usage d'une énergie toujours disponible  est apparue.
Ainsi, cette énergie peut être qualifiée de *potentiel* dans le sens où elle existe sous la forme d'un réservoir dont le flux s'adate à la demande. Cette adaptation est remise en cause
À l'heure où les contraintes de ressources se font préssentes. Nous proposons un cadre de travail prenant en compte l'accès aux ressources (énergie et matière) dans un formalisme issu de la thermodynamique hors d'équilibre, reprenant la distinction entre qualité et qualité pour modéliser les flux de matière et d'énergie dans le système économique. Ce cadre doit être complété par un *moteur* macro économique qui peut être modifié.

| ![imageNJP](/images/Eco.png){: width="600px"} |
|:--:|
| *Évolutions comparées de la production de biens en fonction du temps avec une modélisation économique de type Goodwin. En noir (bleu) Goodwin sans contrainte liée ressources (avec des ressources infinies). En vert, cyan et rouge les ressources sont limitées. En cyan la friction est plus élevée que dans le cas vert, on constate que la croissance plus limitée mais que la production à long terme est moins affectée par l'épuisement des ressources* |

> Publications reliées
1. Macroeconomic modelling in a finite world -- En cours de rédaction



# Croissance réseau fongique  <a name="thalle"></a>
Lien vers la page [dédiée](/fungus_growth.md)


# MKIDS  <a name="MKIDS"></a>
Lien vers la page [dédiée](/MKIDS.md)


