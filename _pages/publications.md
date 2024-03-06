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



{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}
