---
title: Quick Edits to Wiki Pages

layout: basic
---
{% include common-defs.md %}

This page describes how to do quick edit to an existing Wiki Page;
see
[How to Contribute](Contribute.html) and [QuickStart](QuickStart.html)
for more details.

### GitHub, Git and Markdown

This wiki is hosted at [GitHub](http://en.wikipedia.org/wiki/GitHub).
Technically the Wiki is a [Git][1] repository
using [GitHub Pages](http://help.github.com/pages/) and
[Jekyll](http://github.com/mojombo/jekyll/),
but you can mostly ignore that for these instructions

[1]: <http://en.wikipedia.org/wiki/Git_(software)>

Wiki pages are written in
[Markdown](http://daringfireball.net/projects/markdown/) and the source files end in .md.

### Staged and Released Wikis

There are multiple wikis.  The _released_ Wiki is
[blackberry.github.com/Community/][2], while the _staged_ Wiki is at
[blackberry-community.github.com/Community/][3].
These are the only two Wikis you will encounter although
some individuals may create [forks](http://help.github.com/fork-a-repo/)
of the Wiki to create complex contributions.

[2]: <http://blackberry.github.com/Community/index.html>
[3]: <http://blackberry-community.github.com/Community/index.html>

You submit contributions to the staged wiki, which are
then accepted and eventually promoted to the released wiki.

If you have enough privileges, your contribution will be accepted automatically, otherwise it
will show as a GitHub [pull request](http://help.github.com/send-pull-requests/)
in the queue of a Wiki editor.

### GitHub inline Edits

Each Wiki Page has an _Edit This Page_ link to the corresponding _.md_ file.
Once there you can use GitHub's inline file editing (\[[1]\], \[[2]\], \[[3]\])
to edit and preview your change.
The main limitation is that the visual feedback is limited to Markdown without layouts.

[1]: <https://github.com/blog/143-inline-file-editing> "Inline File Editing"
[2]: <https://github.com/blog/844-forking-with-the-edit-button> "Forking with the Edit Button"
[3]: <https://github.com/blog/905-edit-like-an-ace> "Edit Like an Ace"

### Login and Edit

Combining all the steps, to contribute a quick edit:

* Log into GitHub
* Visit the Wiki Page
* Click on its _Edit this Page_ link
* Edit the content, previewing the changes
* When satisfied with the changes, enter the comment for your change and submit.

If necessary, a wiki editor will interact with you through comments on your commit contribution and
will help you integrate your change into the Community Wiki.

### Thanks!
