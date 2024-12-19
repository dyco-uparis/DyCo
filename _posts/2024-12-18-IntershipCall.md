---
layout: post
title: '2025 Internship Proposals'
---




------------------------------------------------------------------------

**Internship proposals for 2025**

We look for intership students on the following thematics. 

------------------------------------------------------------------------


## Integrated modelling of muscle contraction and extension

contacts:
*eric.herbert@u-paris.fr* , *christophe.goupil@u-paris.fr*

In this internship, we are interested in characterizing the relationship of force *vs* velocity response of the muscle, as described by the well-known phenomenological equation of Hill [Hill, 1938; Hill, 1970], established almost a century ago:  
$$ F(v) = \frac{c}{v+b} - a $$

The typical convex shape of $$ F(v) $$, due to its hyperbolic expression, and the small number of adjustable parameters have led to its success in recovering experimental contraction data accumulated since then.  

But this description lacks a solid physical basis. Based on a description of an energy conversion machine, we were able to regain this expression where each of the parameters $$ a $$, $$ b $$, and $$ c $$ correspond to quantities that are thermodynamically founded and experimentally accessible. These involve a threshold current $$ I_T $$, the isometric force $$ F_{iso} $$, and the feedback resistance $$ R_{fb} $$ at the origin of the non-linearity. This description is valid both at the scale of the muscle and at that of the whole organism, as has been observed using data on oxygen respiration in horses [Herbert, 2020].  

In the literature, studies looking at muscle contraction are frequent, but there is rarely a widening of the measurement range beyond $$ F_{iso} $$, i.e., exploring both muscle contraction and extension. Interestingly, however, Hill's equation diverges when $$ v = -b $$, clearly indicating that this equation is not valid in the $$ v < 0 $$ range. The description proposed in [Goupil, 2019] allows extension and contraction to be considered in the same framework. One working hypothesis is to make the feedback intensity depend on the deviation from zero speed. An example of a fit to experimental data is shown in Figure 1.  

The work involves describing muscle extension and formalizing these descriptions so that they can be integrated into a model of the muscle as an energy conversion machine. We then derive the fundamental thermodynamic parameters that enable us to reconstruct the generalized Hill parameters, including extension with contraction. The work includes a literature review to explore the models proposed to describe the extension, as well as the establishment of an experimental dataset to test the models. A taste for modeling and thermodynamics is required. Experience of working with the Python language is preferable.  

---

<img src="images/data_vredenbergt.txt.png" alt="Fit of contraction velocity measurements and extension" style="width:100%; height:auto;">

**Figure 1**: Fit of contraction velocity measurements and extension based on Vredenbergt data ($$ \textbf{+} $$) with the proposed model (solid black line) and with Hill's model including dissipation in parameter $$ a $$ (dashed blue line) and without dissipation (dashed red line).


------------------------------------------------------------------------

## Energy Modeling of Socio-Technical Structures

contacts:
*eric.herbert@u-paris.fr* , *petros.chatzimpiros@u-paris.fr* 

Every human society relies on technology to organize the flows of matter and energy that pass through it. In industrial societies, technology is omnipresent through infrastructures and technologies across all sectors of activity. This is characterized by a high energy consumption required both for establishing these structures and for their operation. Generally, the energy consumption associated with the operation of these structures is more noticeable than that associated with their establishment, the latter being inherent to the industrial sector and largely invisible to users. The amount of energy embedded in these structures, also known as "embodied energy," along with the rate (W) at which this energy is supplied—referred to as "embodied power"—depends on the processes as well as the type and complexity of the materials and structures involved.

The quantification of the embodied energy in objects and structures is typically addressed through "bottom-up" life cycle assessment (LCA) approaches. These involve reconstructing resource usage from an individual description of all stages and flows involved in a process. The main challenge lies in defining the scope of analysis, which should be as inclusive as possible but remains inevitably arbitrary to achieve an accurate reconstruction. Indeed, beyond the limitations related to setting a functional boundary in "space," bottom-up approaches are typically static and struggle to account for the temporal dimension of development, in terms of the legacy of past infrastructures, technologies, and innovations in the production of the present.

In this work, we propose to focus on the embodied energy and power of structures using a top-down approach, starting from macroscopic consumption data to analyze the uses and renewal dynamics of structures. This top-down strategy relies on globally available energy balances over time [i.e., ref. 1], enabling analysis at the scale of the global socio-technical system. In this approach, and as a first approximation, the embodied energy of structures can be considered as the interannual sum of the inflow into the industrial sector, combined with a decay function to account for infrastructure wear and the resource investment needed for their renewal. This study can be conducted using published data from the recent past and can be leveraged to discuss energy transition scenarios.

In a second phase, and based on the established energy balances, we propose to focus on the competition between infrastructure use and production. Some uses are flexible and allow for storage when not in use, for example, a car that can charge at night, while other uses (e.g., a factory) are highly constrained, operating 24/7 and requiring a continuous, fully controllable energy source. To model these dynamics, we propose to construct a usage rate and mobilized power for each use, deriving the characteristics of an energy system compatible with the intermittency of renewable sources and the associated storage needs. This analysis will lead to the development of scenarios inspired by some recent work by the team [ref. 2].

[ref. 1] https://www.sankey-diagrams.com/global-energy-flows-2018-2050-dnvgl/  
[ref. 2] https://doi.org/10.1371/journal.pone.0286242

------------------------------------------------------------------------

## Growth Dynamics of _Podospora anserina_ Thallus

contact: *eric.herbert@u-paris.fr* 

**Master internship,** at the interface of physics and biology, supervised by biologist and physicist, on the growth of branching networks in the case of the filamentous fungus *Podospora anserina*. We look for motivated students with a taste for numerical studies.

**Hyphal network**  
The achievement of filamentous fungi in colonizing terrestrial ecosystems can be largely attributed to their flexible morphology, and more specifically to their ability to form an interconnected hyphal network, the mycelium, based upon some fundamental cellular processes, such as hyphal tip (or apex) growth, septation, hyphal orientation, branching, and fusion (also known as anastomosis).  

Hyphal tip expansion is a highly polarized process, based upon secretory vesicles which are transported to the apical cell wall using a combination of microtubule and microfilaments, allowing a localized polar secretion of wall materials. Polarity is directly correlated to the morphology of the hypha via the growth velocity. The delivered secretory vesicles accumulate temporarily in an apical vesicle cluster, the spitzenkörper. Vesicle exocytosis at the apical membrane allows both the release of secretory enzymes and the expansion of apical membrane and cell wall.  
*P. anserina* is autotrophic, meaning that its growth is not conditioned by any other organism, and is therefore a model for the growth of branching networks.

**Internship**  
Initial work has made it possible to acquire a collection of growth images and to reconstruct the network in the form of a dynamic graph. Building on this work, the internship will focus on characterizing the network and its dynamics. At a local level, with interactions such as avoidance and attraction of hyphae/apex structures. At the global level, the spatial distribution of the material and the impact of hyphal overlap and fusion on the resilience of the network.  
An experimental study could be envisaged to detect mergers in the network.

---

- Ledoux, *et al.* (2022). *Prediction and Experimental Evidence of the Optimisation of the Angular Branching Process...*. [Scientific Reports](https://doi.org/10.1038/s41598-022-16245-9).  
- Ledoux, *et al.* (2023). *Prediction and Experimental Evidence of Different Growth Phases...*. [Scientific Reports](https://doi.org/10.1038/s41598-023-35327-w).  
- Chassereau, *et al.* (2024). *Full Identification of a Growing and Branching Network's Spatio-Temporal Structures*. [arXiv, 2407.06824](https://doi.org/10.48550/arXiv.2407.06824). Accepted in *Biophysical Journal*.

---

![Fungal Network](./images/a_thalle_time_color.png)

