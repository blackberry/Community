---
name: Name of Component
oneline: One line description
status: Status
platform: Platform
complink: "http://ramdom link"
links:
   - http://ramdom/link2
   - http://ramdom/link3

layout: component

title: Title of Component Page
description: "Description.  Can be multi-line.  Will be run through markdown"
contacts:
   - '[Road Runner]'
   - '[Wile E. Coyote]'
tags: OpenSource, Native, Component
---

The rest goes here

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
* _links_: (optional) List of links to web pages related to the component. (Hope to soon run it through markdown.)

The top of the main content also uses the following variables:
* _title_: Title of the Component Page
* _description_: Description of the Compoment.  Will be run through markdown.
* _contacts_: List of contacts
* _tags_: list of tags from OpenSource, Native, Component

### Extra Content (after YAML Header)
Start with an overview, then provide the rest of your page.

### NOTE
This layout is the most complicated and is still **very much** evolving.

