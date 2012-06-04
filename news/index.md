---
layout: news
title: Community News
---

<h3>Latest News</h3>
See [News Highlights](Latest_News.html).

<div id="posts">
  <div>
    {% for post in site.posts %}
    <div style="border-bottom: 1px solid #DFDFDF;">
     <div>
      <h3><a class="newsPost" href="{{ site.baseurl }}/{{ post.url }}">{{ post.title }}</a></h3>
      <div>{{ post.date | date: '%m-%d-%Y' }}</div>
      {% if content %}
        {{ content }}
      {% else %}
        {{ post.content }}
      {% endif %}
     </div>
    </div>
    {% endfor %}
  </div>

  {% if site.total_pages > 1 %}
  <div>
    <div>
      {% if site.previous_page > 1 %}
        {% capture page_url %}page{{ page }}{% endcapture%}
      {% endif %}
      {% if site.previous_page %}
      <div>
        <a href="{{ page_url }}" title="Go to previous page">
          &laquo;
        </a>
      </div>
      {% endif %}
      <div>
      {% for page in (1..site.total_pages) %}
      <div>
        {% if page > 1 %}
          {% capture page_url %}page{{ page }}{% endcapture%}
        {% endif %}
        {% if page == site.page %}
          {{ page }}
        {% else %}
          <a href="/{{ page_url }}">{{ page }}</a>
        {% endif %}
      </li>
      {% endfor %}
      {% if site.next_page %}
      <div>
        <a href="/page{{ site.next_page }}" title="Go to next page">
          &raquo;
        </a>
      </div>
      {% endif %}
    </div>
  </div>
  {% endif %}
</div>
