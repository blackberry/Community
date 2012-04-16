---
title: Title of Component Page
name: Name of Component
oneline: One line description
status: Status
platform: Platform
complink: "http://ramdom link"
license: license
tags: OpenSource, Native, Component

layout: component
---
{% include common-defs.md %}

### Description
A description, using markdown and in as many paragraphs as appropriate.

### Additional Links
* [link1](http://ramdom/link1)
* [link2](http://ramdom/link2)

### Contacts
Contacts here.  Use references whenever possible (see common-defs.md in include directory).

### Also see
List of other pages that are relevant to this one.  Use references whenever possible (see common-defs.md in include directory).


<!-- Clone this page, remove after this comment -->
## More on the Component Layout

### Layout and Variables
The *component* template includes the left-hand side *navigation* page and the right-hand side *summary* insert.  

The summary is created from the following variables:
* _name_: Name of Component
* _oneline_: One line description of component
* _status_: One of Ported, Released, Wanted...
* _platform_: One of Native, WebWorks, AIR, Android...
* _license_: (optional) Type of license (ASL2, BSD, GPLv2,... proprietary)
* _complink_: (optional) Link to official site for Component
* _title_: Title of the Component Page
* _tags_: list of tags from OpenSource, Native, Component

### Extra Content (after YAML Header)
Follow the example shown in this page; clone the page and edit.
