---
layout: page
title: 프로젝트
---

<ul>
  {% for repo in site.github.public_repositories %}
  <li>
    <h2><a target="_blank" href="{{ repo.html_url }}">{{ repo.name }}</a></h2>
    <p>{{ repo.description}}</p>
  </li>
  {% endfor %}
</ul>