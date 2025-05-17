---
layout: default
title: Blog
subtitle: Blog subtitle
pagination:
  enabled: true
  collection: posts
  per_page: 5
  permalink: /blog/page/:num/
---

{% if paginator.page == 1 %}
  <p>Total number of posts: {{ paginator.total_posts }}</p>
{% endif %}

<!-- There are {{ paginator.posts.size }} posts on this page. -->

{% for post in paginator.posts %}
  <div class="card-blog-preview">
      {% if post.image %}
      <img src="{{ post.image }}" alt="{{ post.title }} preview image" style="max-width: 100%; height: auto; border-radius: 8px;" />
      {% endif %}
      <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
      <p class="post-meta">{{ post.date | date: "%B %d, %Y" }}</p>
      <p>{{ post.excerpt }}</p>
  </div>
{% endfor %}

<div class="spacer-pagination-bottom"></div>


<div class="pagination">
  {% if paginator.previous_page %}
    <a class="pagination-item-wrapper" href="{{ paginator.previous_page_path }}">&laquo; Previous</a>
  {% endif %}
  <p class="pagination-item-wrapper">
  Page {{ paginator.page }} of {{ paginator.total_pages }}
  </p>

  {% if paginator.next_page %}
    <a class="pagination-item-wrapper" href="{{ paginator.next_page_path }}">
    Next &raquo;
    </a>
  {% endif %}
</div>
