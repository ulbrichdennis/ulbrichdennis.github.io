---
layout: archive
title: "Research"
permalink: /publications/
author_profile: true
---

{% if site.author.googlescholar %}
  <div class="wordwrap">You can also find my articles on <a href="{{site.author.googlescholar}}">my Google Scholar profile</a>.</div>
{% endif %}

<h2>Interests</h2>
I am interested both in theory and applications. In particular, I am dealing with
<ul>
<li>(dynamics of) ordinary and partial differential equations,</li>
<li>dynamical systems, ergodic theory,</li>
<li>kinetic theory, entropy methods,</li>
<li>the Boltzmann equation and its BGK-type approximations, models for chemical reactions,</li>
<li>long-time behaviour of solutions, convergence to equilibrium, and</li>
<li>physical applications.</li>
</ul>

<h2>Current project participation</h2>
*DFG project number [456849348](https://gepris.dfg.de/gepris/projekt/456849348?language=en)*<br>       
**Modeling and mathematical description of concrete physical applications in the context of kinetic theory using the Bathnagar-Gross-Krook equation**
> We want to consider physical phenomena in the kinetic regime that are described by the so called Boltzmann equation. In many of applications, the Boltzmann equation is seen as the equation which describes physical situations very appropriately. However, the disadvantage of this equation is that the term which describes the interactions of the particles is very complicated, so the model is very inefficient in numerical simulations. If the phenomenon is close to a thermodynamic equilibrium, one can formally derive the so called Bhatnagar-Gross-Krook (BGK) equation. This approximation is much simpler than Boltzmann, and therefore much more efficient in numerical simulations. Therefore, this approximation is the method of choice in a lot of applications. However, this approximation can capture less physics than the full Boltzmann equation.The aim of this proposal is the following. Given a general kinetic model (an extension of the Boltzmann equation for example for gas mixtures, with chemical reactions, with internal degrees of freedom or for example the Landau-Fokker-Planck equation as the grazing collision limit for a plasma), how can we formally approximate it by a BGK type equation? Moreover, we want to get a better picture in which cases the BGK approximation is appropriate to describe physical situations. We want to study in which situations and in which ways it is possible to include more physics into the BGK model. For this, on one hand, we want to consider the modeling of certain physical situations (inertial confinement fusion, re-entrance of a space shuttle) in order to see if the BGK model can be endowed with as much physics as possible to describe the physical situation appropriately. On the other hand, we want to study several extensions of the one species BGK model in a theoretical way. Which influence does this extension have on the qualitative behavior of the solution? Which physical properties can be described and shown with this extension? If there is more than one possibility to extend the model to include a certain physical properties, can one quantify the differences of these different approach? Which influence do they have on the qualitative behavior of the solution?When this project is finished, we hope to have shown that BGK modeling has a much larger area of validity than it is commonly believed today. This will turn out to be extremely useful in applications and its numerical simulations.
           
<h2>Past project participation</h2>
*DFG project number [384027439](https://gepris.dfg.de/gepris/projekt/384027439?language=en&selectedSubTab=2)*<br>
**Ergodic theory of nonlinear waves in discrete and continuous excitable media**
> Many spatially extended physical, chemical and biological systems, including nerve fibres and muscle tissue, form so-called excitable media. These are modelled by nonlinear dynamical systems which are spatially arranged in locally coupled cells so that the excitation can be transferred in space. In agreement with the real observations, such media support the formation and propagation of waves that interact in intricate ways and thus generates rich dynamical phenomena. The proposed project concerns the mathematical analysis and one space dimension.In the past decades, the modelling and analysis of excitable media was predominantly done by using partial differential equations (PDEs) such as FitzHugh-Nagumo (FHN) equation. However, this continuum description is often unnecessary for the overall qualitative behaviour, and rigorous analysis of wave interaction phenomena in excitable PDE is impossible with current methods -- except for a few cases. Cellular automata (CA) are an alternative type of models for a physical system in which space, time and states lie in a discrete set. The discreteness can give an enormous simplification for modelling, simulation and analysis, but lacks first principle derivation and quantitative accuracy. Nevertheless, even simple CA have a rich behaviour and work as models in many areas. Greenberg and Hastings developed a family of CA, abbreviated as GHCA, which qualitatively model, e.g., nerve fibres and support the characteristic action potential waves. Notably, the GHCA have at least 3-states, while almost all analysis thus far concerns two-state CA.This project pursues the following main research questions:Q1: What are the long term statistical (ergodic) properties of cellular automata for excitable media? What is the role of nonlinear waves in these?Q2: Can the CA and discrete dynamical systems perspective with ergodic theory help to understand the complex PDE phenomena of strong interaction of localised waves in excitable media?Previous work of the doctoral candidate and the PIs revealed that the dynamics and complexity of the 3-state GHCA stems entirely from wave interaction. Moreover, it was shown that having more than two states makes this CA amenable to analysis by symbolic dynamics. The aims of this project are on the one hand (Q1) to analyse the ergodic properties, complexity and wave phenomena of GHCA and further CA models. On the other hand it aims to transfer these results to certain PDE (Q2). The latter concerns qualitative comparison to small CA with few states, and quantitative comparison with large CA from a full discretisation with many states. This in particular concerns an extension of the theta-model from neuroscience to a scalar PDE model, which - based on numerical simulations - features qualitatively the same dynamics as the 3-state GHCA.
            

{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}
