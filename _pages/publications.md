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
*DFG project number [456849348](https://gepris.dfg.de/gepris/projekt/456849348?language=en)*:       

**Modeling and mathematical description of concrete physical applications in the context of kinetic theory using the Bathnagar-Gross-Krook equation**
    
> We want to consider physical phenomena in the kinetic regime that are described by the so called Boltzmann equation. In many of applications, the Boltzmann equation is seen as the equation which describes physical situations very appropriately. However, the disadvantage of this equation is that the term which describes the interactions of the particles is very complicated, so the model is very inefficient in numerical simulations. If the phenomenon is close to a thermodynamic equilibrium, one can formally derive the so called Bhatnagar-Gross-Krook (BGK) equation. This approximation is much simpler than Boltzmann, and therefore much more efficient in numerical simulations. Therefore, this approximation is the method of choice in a lot of applications. However, this approximation can capture less physics than the full Boltzmann equation.The aim of this proposal is the following. Given a general kinetic model (an extension of the Boltzmann equation for example for gas mixtures, with chemical reactions, with internal degrees of freedom or for example the Landau-Fokker-Planck equation as the grazing collision limit for a plasma), how can we formally approximate it by a BGK type equation? Moreover, we want to get a better picture in which cases the BGK approximation is appropriate to describe physical situations. We want to study in which situations and in which ways it is possible to include more physics into the BGK model. For this, on one hand, we want to consider the modeling of certain physical situations (inertial confinement fusion, re-entrance of a space shuttle) in order to see if the BGK model can be endowed with as much physics as possible to describe the physical situation appropriately. On the other hand, we want to study several extensions of the one species BGK model in a theoretical way. Which influence does this extension have on the qualitative behavior of the solution? Which physical properties can be described and shown with this extension? If there is more than one possibility to extend the model to include a certain physical properties, can one quantify the differences of these different approach? Which influence do they have on the qualitative behavior of the solution?When this project is finished, we hope to have shown that BGK modeling has a much larger area of validity than it is commonly believed today. This will turn out to be extremely useful in applications and its numerical simulations.
           


{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}
