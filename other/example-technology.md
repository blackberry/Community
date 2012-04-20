---
title: Title of Technology Page
oneline: Oneline Summary
forum: URL to forum
techlink: "link to technology main page"
tags: list of tags

layout: technology
---
{% include common-defs.md %}

### Description
Description goes here

### Additional Links
* One Link
* Two Links

### Forum
Should be using {{ page.techlink }} here.
Also use references whenever possible (see common-defs.md in include directory).

### Also See
List of other pages that are relevant to this one.  Use references whenver possible (see common-defs.md in include directory).

<!-- Clone this page, remove after this comment -->
## More on the Technology Layout

### Layout and Variables
The *technology* template has the left-hand side *navigation* page and a simple right-hand side *summary*.

The *technology* template uses the following variables:

* _title_: Title of the Technology Page
* _oneline_: Oneline summary
* _forum_: (optional) URL to main discussion forum
* _tags_: (optional) list of tags
* _techlink_: (optional) URL to main page on technology


### Extra Content (after YAML Header)
Follow the example shown in this page; clone the page and edit.