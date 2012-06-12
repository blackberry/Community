---
title: Qt
oneline: Cross-Platform App Framework
forum: "http://supportforums.blackberry.com/t5/Cascades-Development/bd-p/Cascades"
techlink: 
tags: cascades, native, blackberry10

layout: technology
---
{% include common-defs.md %}

### Description
Qt is a cross-platform application and UI framework for developers using C++ or QML, a CSS & JavaScript like language.
[Cascades] leverages the Qt object model, event model, and threading model, using
QtCore, QtXML, QtSql, QtNetwork and QtSensors.
The [Cascades] UI elements are available through C/C++ bindings and using [QML].

Qt 4.8 is included in the BlackBerry 10 Devices and is also available in the Native SDK.
A release includes matched builds for win32, linux32, win64, linux64, macosx
on the Native SDK
and for armle-v7 and x86 on the devices.

### Getting started

The [Qt Api Documentation](http://qt-project.org/doc/qt-4.8/) provides some good examples on how to get started with Qt.

### UI Creation

UIs in Qt can be either written using Widgets or Qt Quick. Because Widgets have its origin in the desktop world and
are more or less static, it is recommended to use Qt Quick and QML for UIs on mobile platforms.  

#### Qt Quick 

[Qt Quick](http://qt-project.org/doc/qt-4.8/qtquick.html) is a set of technologies built on top of Qt providing the 
developers with the means to write fluid application UIs especially for mobile and embedded platforms.

The core of Qt Quick is the Java Script like QML language that allows the declaration of a user interface. QML 
code is executed at runtime by the [Qt Declarative UI Runtime](http://qt-project.org/doc/qt-4.8/qmlruntime.html). Because 
Qt Quick runs on top of Qt, custom elements can be defined on the C++ side 
and exposed to QML ([extending QML](http://qt-project.org/doc/qt-4.8/qml-extending.html)). Furthermore data can be [exchanged between C++ and QML](http://qt-project.org/doc/qt-4.8/qtbinding.html) which makes it possible to seperate UI and 
logic from each other. In general it is recommened to have the business logic in C++ and the UI in Java Script.

### Support

BlackBerry 10 developers interact through two forums:

* Developers using Qt as part of Cascades-centric applications use
the [Cascades Forum](http://supportforums.blackberry.com/t5/Cascades-Development/bd-p/Cascades)
* Developers using Qt without Cascades-layer use the [Native Forum](http://supportforums.blackberry.com/t5/Native-Development/bd-p/native_sdk)

IRC: #qt-qnx on freenode

### Filing Bugs

Defects or requests for enhancement can be submitted through the [DevZone JIRA](https://www.blackberry.com/jira/secure/Dashboard.jspa),
which is monitored by members of the BlackBerry DevRel team.

BlackBerry 10 uses Qt from the upstream community at [Gitorious/qt](http://qt.gitorious.org/qt);
issues that come from there can also in the corresponding
[BugReports](http://bugreports.qt-project.org/).

### Qt Samples

TBD.



### Also See
[QNX on Qt-Project](http://qt-project.org/wiki/QNX)

