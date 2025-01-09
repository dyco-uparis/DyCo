---
layout: page
title: Éric Herbert
csl: ieee.csl
bibliography: doc_eh/herbert.bib
---

Contact *eric.herbert@u-paris.fr*

### Contenu
- [Présentation](#presentation)
- [Thermodynamique](#thermo)
	- [Systèmes vivants](#livingsystems)
        - [Économie](#eco)
- [Croissance réseau fongique](#thalle)
- [Impact des énergies de flux sur la production agricole](#poulets)
- [Panache granulaire](#panache)

## Présentation succincte <a name="presentation"></a>
J'ai rejoint l'université Paris Diderot en 2013 comme enseignant chercheur au sein du [LIED](http://www.lied-pieri.univ-paris-diderot.fr/), laboratoire qui vise à apporter des réponses interdisciplinaires à la question sociale majeure de la transition énergétique. Ma contribution est celle d'un physicien, environné de sciences humaines et de biologistes. On trouvera une présentation de nos activités de recherches actuelles [ici](#recherche).

### Dernières Publications <a name="publis"></a>
On trouvera sur [cette page](/hidden_EH) la liste complète des publications

Actuellement mes recherches sont essentiellement axées sur la notion d'optimisation énergétique entendu comme la capacité à moduler volontairement un système pour maximiser un usage désiré de l'énergie. Pour cela l'approche physique est celle de la thermodynamique à temps fini, appliquée à aux machines à conversion de l'énergie généralisées. L'application y est articulée dans les systèmes vivants ou les structures adaptatives humaines, comme les structures économiques.


## Brief Overview <a name="presentation"></a>
I joined Paris Diderot University in 2013 as a researcher and lecturer within the [LIED](http://www.lied-pieri.univ-paris-diderot.fr/), a laboratory dedicated to providing interdisciplinary solutions to the major social challenge of energy transition. My contribution comes as a physicist, working alongside experts in the humanities and biology. You can find an overview of our current research activities [here](#recherche).

### Latest Publications <a name="publis"></a>
The complete list of publications can be found on [this page](/hidden_EH).

Currently, my research is primarily focused on the concept of energy optimization, understood as the ability to deliberately modulate a system to maximize a desired use of energy. From a physics perspective, this is approached through finite-time thermodynamics, applied to generalized energy conversion systems. The application is explored in living systems or adaptive human structures, such as economic frameworks.











### Thermodynamique <a name="thermo"></a>
Ces travaux sont menés avec [Christophe Goupil](/ChG). L'objet est de développer un cadre générique de travail permettant l'emploi du formalisme et des catégories de la thermodynamique hors d'équilibre, notamment le développement de Onsager de la description microscopique Force/Flux, avec une approche nodale, qui permet la prise en compte des rétroactions sur le point de fonctionnement réel d'une machine à conversion de l'énergie. Ceci est développé dans le cadre thermodynamique seul et dans le cadre d'applications à des systèmes plus éloignés mais partageant des caractéristiques communes, notamment la dissipation et l'accès aux ressources dans le but effectuer un travail: les systèmes vivants et les structures économiques.

| ![imageclosedloop](/images/KC_shadock.png){: width="600px"}                                          |
|:--:|
| *Schéma général d'une machine à conversion de l'énergie contrainte par des conditions au bord mixtes*|

#### Thermodynamique modale
L'approche thermodynamique nodale est développée au laboratoire dans le cadre de la thermodynmique à temps fini. On trouvera plus de détails sur [cette page](/FTT). Nous nous intéressons plus spécifiquement aux machines à conversion de l'énergie comme systèmes formel idéal. Nous décrivons cette machine comme la capacité à transformer de l'énergie diluée (par exemple la chaleur) en énergie concentrée (le travail) via un processus intrinsequement dissipatif.
La question scientifiques est celle des points de fonctionnement réellement accessibles par la machine. En effet une machine n'est jamais directement en contact avec une ressource, par exemple les températures $$T_+$$ et $$T_-$$, mais via des résistances de couplages. Ces résistances ont pour effet de moduler la différence de température réellement accessible et de dépendre du point de fonctionnement. Ainsi, la machine apparait comme un système à la dynamique riche, pouvant même sous certaines conditions faire apparaitre des spontanément de oscillations.

| ![imageclosedloop](/images/ClosedLoop8.jpg){: width="600px"}|
|:--:|
| *Dépendance du gain de la rétroaction en fonction de la conductivité $$\omega_\kappa$$. Pour un gain nul, le système est attendu à osciller*|

> Publications reliées
6. [C. Goupil, H. Ouerdane, E. Herbert, G. Benenti, Y. D’Angelo, and Ph. Lecoeur. Closed-loop approach to thermodynamics. Physical Review E, 94(3):032136, September 2016.](/2016/09/01/Closed-loop)


#### Systèmes vivants <a name="livingsystems"></a>
Cette thématique est développée plus en détail sur [cette page](/thermo_metabo).

Les systèmes vivants transforment une énergie diluée, le potentiel chimique issu de l'alimentation, en une énergie concentrée, par exemple via un travail effectué sur leur centre de masse: c'est le déplacement. À l'echelle du muscle, des descriptions phénoménologiques précises ont été développées il y un siècle, notamment par A. Hill, sans qu'un formalisme convaincant ait finalement émergé. En nous appuyant sur une approche basée sur la FTT nous avons pu retrouver les équations phénoménologiques et conclure le débat sur la nature des paramètres utilisés.

Dans le cas du muscle, la machine à conversion de l'énergie n'est contrainte que par l'accès aux ressources: son point de fonctionnement spontané sera celui qui lui permet de développer le maximum de puissance. Or le comportement d'un organisme complet fait intervenir la notion de *choix*, c'est à dire, la décision de se placer à un point de fonctionnement plutôt qu'un autre pour effectuer le même déplacement. 
Le cadre de fonctionnement a été discuté dans un [article récent](/2020/01/01/Adapted-or-Adaptable/) pour faire apparaitre les contraintes spécifiques associées aux organismes vivant. Notamment l'existence d'un *basal*, la consommation d'énergie pour maintenir les processus vitaux, c'est à dire en l'absence d'effort. 

Nous voulons à présent généraliser cette approche à un organisme complet pour pouvoir discuter à la fois du cadre et de l'appropiation de ces contraintes.


| ![imageNJP](/images/NJP6.jpg){: width="300px"} | ![imageNJP](/images/KC_COE1.png){: width="300px"}|
|:--:|:--:|
| *Force développée en fonction de la vitesse de contraction pour deux types de muscle. En noir le soleus, pauvre en fibre rapide et en rouge l'EDL riche en fibre rapide. On constate que l'écart au cas idéal, relation linéaire entre force et vitesse, est signifcativement amplifié dans le cas du soleus, marquant sa différence de nature avec l'EDL.*| *Cout en Énergie (COE) pour effectuer un travail à l'intensité $$I_2$$. Dans le cas d'un déplacement, il s'agit d'une énergie par unité de longueur parcourue. En vert le flux de déchet qui est utilisé. On observe un point de fonctionnement optimal pour minimiser ce flux.*|

> Publications reliées
1. E. Herbert, H. Ouerdane, Ph. Lecoeur, V. Bels, C. Goupil , « Thermodynamics of Animal Locomotion ». <b>Physical Review Letters</b> 125, (2020): 228102. https://doi.org/10.1103/PhysRevLett.125.228102.
1. [Ch. Goupil and É. Herbert Adapted or Adaptable: How to Manage Entropy Production ?  Entropy 2020, 22(1), 29; https://doi.org/10.3390/e22010029](/2020/01/01/Adapted-or-Adaptable/)
1. [Christophe Goupil, Henni Ouerdane, Eric Herbert, Clémence Goupil, and Yves D’Angelo.
Thermodynamics of metabolic energy conversion under muscle load. New Journal of Physics,
21(2):023021, February 2019.](/2019/02/01/Thermodynamics-of-metabolic-energy-conversion-under-muscle-load)


#### Économie <a name="eco"></a>
Cette thématique est développée plus en détail sur [cette page](/EcoDyco).

La contrainte environementale, et notamment l'accès aux ressources énergétiques, contraint l'horizon des possibles pour les systèmes vivants et par conséquent les sociétés humaines. Pour prendre l'exemple de l'énergie,  avant la révolution industrielle, seules des énergies de flux (éolien, solaire ou hydraulique) étaient accessibles. Au cours du $$19^{eme}$$ siecle, l'apparition d'un usage massif des énergies fossiles par les sociétés humaines a completement modifié notre rapport à l'usage de l'énergie. D'une industrie adaptée à une ressource au flux imposé, sans lien avec le besoin, une nouvelle industrie adaptée à l'usage d'une énergie toujours disponible  est apparue.
Ainsi, cette énergie peut être qualifiée de *potentiel* dans le sens où elle existe sous la forme d'un réservoir dont le flux s'adate à la demande. Cette adaptation est remise en cause
À l'heure où les contraintes de ressources se font préssentes. Nous proposons un cadre de travail prenant en compte l'accès aux ressources (énergie et matière) dans un formalisme issu de la thermodynamique hors d'équilibre, reprenant la distinction entre qualité et qualité pour modéliser les flux de matière et d'énergie dans le système économique. Ce cadre doit être complété par un *moteur* macro économique qui peut être modifié.

| ![imageNJP](/images/Eco.png){: width="600px"} |
|:--:|
| *Évolutions comparées de la production de biens en fonction du temps avec une modélisation économique de type Goodwin. En noir (bleu) Goodwin sans contrainte liée ressources (avec des ressources infinies). En vert, cyan et rouge les ressources sont limitées. En cyan la friction est plus élevée que dans le cas vert, on constate que la croissance plus limitée mais que la production à long terme est moins affectée par l'épuisement des ressources* |

> Publications reliées
1. Macroeconomic modelling in a finite world -- En cours de rédaction

### Croissance réseau fongique <a name="thalle"></a>
Avec les biologistes de l'équipe [B2C](http://www.lied-pieri.univ-paris-diderot.fr/spip.php?article242). On trouvera plus de détails sur la [page dédiée](/fungus_growth)

<center>
<iframe width="556" height="310" src="https://www.youtube.com/embed/CsrLAOFjRZI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</center>

> Publications reliées
1. Hyphal network whole field imaging allows for accurate estimation of anastomosis rates and branching dynamics of the filamentous fungus Podospora anserina. Scientific Reports 10, nᵒ 1 (21 février 2020): 1‑16. https://doi.org/10.1038/s41598-020-57808-y.


### Impact du remplacement des énergies de stock par des énergies de flux sur la production agricole <a name="poulets"></a>
Avec [Petros Chatzimpiros](http://www.lied-pieri.univ-paris-diderot.fr/?emd_person=brouillon-auto-16). Les études d'impact concernant la transition énergétique s'attachent à dimensionner les parcs d'energie renouvelables nécessaires à l'approvisionnement énergétique de nos sociétés. Or les  énergies *fossiles* ont pour caractéristiques essentielles d'être des énergies de stock, disponibles à tout instant et pouvant répondre virtuellement à n'importe quel demande en adaptant le flux.
Les énergies dites *renouvelables* à l'inverse, sont des énergies dépendantes du flux solaire ou éolien, ce qui génère un approvisionnement subi: le flux d'énergie est irrégulier et difficilement prévisible, rendant l'adaptation entre l'offre et la demande instantanée improbable. Dans ce cas, la productivité d'un système industriel adapté à une ressource énergétique non contrainte sera nécessairement affectée.

Un paramètre critique est donc la perte de production d'un systèmes énergétique lorsque les conditions d'accès aux ressources ne sont plus parfaitement *potentiel*. Nous proposons dans ce travail une première quantification de cette perte pour un système d'élevage avicole.


|![imageNJP](/doc_eh/poussin_ouverture.png){: width="600px"}                                                                                                                                                                                                                                                                                                                                                                        |
|:--:|
| *Taux d'ouverture $$\tau$$ d'un système de production avicole. $$\tau=1$$ correspond à une ouverture toute l'année.  En fonction de $$\lambda$$ la fraction d'énergie éolienne et solaire et $$N$$ le dimensionnement du parc énergétique. $$N=1$$ correspond à un parce fournissant sur un an l'énergie nécessaire au fonctionnement du système avicole. Pour $$\lambda=0.5$$ et $$N=1$$, la production avicole correspond à 0.6*|


### Panache granulaire déclenché thermiquement <a name="panache"></a>
Un lit granulaire sédimenté au fond d'une cuve peut être destabilisé par un chauffage localisé qui va faire decroitre sa densité jusqu'à la rendre inférieure au fluide environnant. 


Under suitable conditions, an immersed granular bed can be destabilized by local thermal forcing and the induced buoyant force. The destabilization is eviden from the triggering and establishment of a dense fluid-like granular plume. Varying the initial granular layer average height h, a time series of the free layer surface is extracted, allowing us to dynamically compute the underlying volume of the granular layer. Different observed phenomena, namely the initial interface deformation, the lowering of the average granular interface (i.e. decrease of the granular layer volume) and the emission of a plume, are analysed. We show that the phenomenon is mainly driven by heat transfer, for large $$h$$ and also involves a variable height thermal boundary condition and Darcy flow triggering, for small $$h$$. Simple modelling with no adjustable parameters not only allows us to capture the observed scaling power laws but is also in quantitative agreement with the obtained experimental data. 
<center>
<iframe width="556" height="310" src="https://www.youtube.com/embed/NZF_MIjwjLs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</center>

> Publications reliées
4. Eric Herbert, Cyprien Morize, Aurélie Louis-Napoléon, Christophe Goupil, Pierre Jop, and
Yves D’Angelo. Buoyancy-driven destabilization of an immersed granular bed. Journal of
Fluid Mechanics, 843:778–809, May 2018.
5. C. Morize, E. Herbert, and A. Sauret. Resuspension threshold of a granular bed by localized
heating. Physical Review E, 96(3):032903, September 2017.




