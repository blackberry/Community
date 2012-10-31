---
layout: technology

title: Python
oneline: Programming Language
forum: 
techlink: 
tags: Python, BlackBerry10, Qt, QML
---
{% include common-defs.md %}

### Description
Python is a readable, easy-to-learn, and high-level programming language
([Wikipedia][1]) first released in 1991 and now 
[used by many organizations](http://wiki.python.org/moin/OrganizationsUsingPython).
The BlackBerry PlayBook and BlackBerry 10 devices include a port of Python 3.2, 
and support apps written with it via a Python 
[entry point](http://peterhansen.ca/blog/bbx-python-direct-entry-point.html).

[1]: <http://en.wikipedia.org/wiki/Python_(programming_language)> "Python Programming Language, at Wikipedia"

The [BB-Py Project](http://blackberry-py.microcode.ca/) is a community-driven 
effort to build on this capability by providing UI frameworks 
(currently [PySide](http://www.pyside.org/) on [Qt](Qt)), 
support libraries, code samples, 
tools, and documentation.  The goal is to support the development of 
complete BlackBerry 10 apps, with the UI written using QML and Cascades, and
the "business logic" or back-end code written entirely in Python.

### Samples
A variety of samples are under development 
(see the [wiki](http://hg.microcode.ca/blackberry-py/wiki/Home)). 

Of particular note is the 
[QML LiveView](http://hg.microcode.ca/blackberry-py/wiki/QMLViewerSample) 
utility which allows you to render .qml files stored in the shared area on your 
PlayBook/BlackBerry 10 device.  You can edit the files via WiFi/USB connection 
using your PC-based text editor, and see the page re-rendered immediately
upon saving, giving you instant feedback as to how the page will appear
and behave on the actual target device.

### Additional Links
* [Project page](http://blackberry-py.microcode.ca/)
* [Wiki](http://hg.microcode.ca/blackberry-py/wiki/)
* [Repository (Mercurial)](http://hg.microcode.ca/blackberry-py/src)

### Contacts
Contact the project team or stay informed:
* Email: bbpyproject (at) gmail.com
* Twitter: [@BBPyProject](https://twitter.com/#!/BBPyProject)
* IRC: #bbx-python on Freenode.net (if no one is there, try in #BlackBerryDev)

### Also See
* [MIT license](http://en.wikipedia.org/wiki/MIT_License), [MIT]
* [Python website](http://www.python.org/)
