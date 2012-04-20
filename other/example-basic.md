---
title: Title of Basic Page
oneline: Oneline Summary
tags: list of tags

layout: basic
---
{% include common-defs.md %}

### Description
Description goes here

### Additional Links
* One Link
* Two Links

### Contacts
Contacts here.  Use references whenever possible (see common-defs.md in include directory).

### Also See
List of other pages that are relevant to this one.  Use references whenver possible (see common-defs.md in include directory).

<!-- Clone this page, remove after this comment -->
## More on the Basic Layout

### Layout and Variables
The *basic* template has the left-hand side *navigation* page and a simple right-hand side *summary*.
The summary is not shown if the *oneline* variable is not define

The *basic* template uses the following variables:

* _title_: Title of the Basic Page
* _oneline_: (optional) Oneline summary
* _tags_: (optional) list of tags


### Extra Content (after YAML Header)
Follow the example shown in this page; clone the page and edit.