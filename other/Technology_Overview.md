---
title: Overview of Technology Used in This Wiki

layout: basic
---
{% include other-defs.md %}

This page provides a brief *Overview of the Technology* used in the Wiki.

Also see:
* How to [Propose a New Page][propose new page]
* How to do a [Quick Edit][quick edit] to an existing page
* How to [Create a New Page][create new page]
* An overview of [Contribution Opportunities](Contribute.html).

### Git and GitHub

[Git](http://en.wikipedia.org/wiki/Git_(software)
is a [Distributed](http://en.wikipedia.org/wiki/Distributed_revision_control)
[Code Management](http://en.wikipedia.org/wiki/Source_code_management) system.
[GitHub](http://en.wikipedia.org/wiki/GitHub) is a very popular Git forge with additional facilities for
social interaction.

### Pages and Wikis

The BlackBerry&reg; Community Wiki uses [GitHub Pages](http://help.github.com/pages/) with
templating provided via
[Jekyll](http://github.com/mojombo/jekyll/).
The benefits of this approach over GitHub's Wiki are [discussed here](http://supportforums.blackberry.com/t5/General-Open-Source-Topics/Community-Wiki-at-GitHub-Pages-or-Wiki/td-p/1466637).

### How are Pages Written?

Wiki pages are written in [Markdown](http://daringfireball.net/projects/markdown/) (.md extension)
using one of a set of layouts.
We provide template examples for all the layouts, so you can get copy one of them and just edit away.

### How Can You Report a Problem in a Page

If you believe there are errors in the content of a page, file a
[content Issue](https://github.com/blackberry/Community/issues?labels=content) on the main repository.

Infrastructure problems are more nuanced, so we record them against the
[Staging Repository](https://github.com/blackberry-community/Community/issues?labels=content).


### Where are Pages Kept?

We keep the pages in [GitHub Repositories](http://help.github.com/create-a-repo/),
which may be user-facing, staging, or individual repositories.

### Two URLs?

GitHub will automatically run the Pages machinery if the appropriate URL is invoked.
The two URLs for the user-facing Wiki are
[blackberry.github.com/Community](http://blackberry.github.com/Community)
and [github.com/blackberry/Community](https://github.com/blackberry/Community).

### What is the BlackBerry-Community?

*BlackBerry-Community* is our *staging*
[repository](https://github.com/blackberry-community/Community)
and [wiki](http://blackberry-community.github.com/Community).
Your contributions must go through BlackBerry-Community;
later a member of the core team will propagate them to the user-facing wiki.

### How Does New Content Propagate?

[Fork](http://help.github.com/fork-a-repo/) the staging repository.  Add your content to it (most likely
by cloning into your local workstation), then send a [pull request](http://help.github.com/send-pull-requests/).

### Can I Edit in my Browser Instead?

GitHub's inline file editing (\[[1]\], \[[2]\], \[[3]\]) can be used for simple changes.
The edit generates its own commit and pull request, so all the other machinery still applies
but visual feedback is limited to Markdown without layouts.

[1]: <https://github.com/blog/143-inline-file-editing> "Inline File Editing"
[2]: <https://github.com/blog/844-forking-with-the-edit-button> "Forking with the Edit Button"
[3]: <https://github.com/blog/905-edit-like-an-ace> "Edit Like an Ace"

If you only use edit inline you will not need to install Git
but you will still need to get a GitHub account.

### How Do I Start Using Git and GitHub

The GitHub [Help Pages](http://help.github.com) provide a good introduction.  Some highlights from there:

* Get a free account at GitHub.com ([signup](https://github.com/plans))
* Learn about [Markdown](http://github.github.com/github-flavored-markdown/)
* Install Git in your workstation/laptop ([Mac](http://help.github.com/mac-set-up-git/),
[Windows](http://help.github.com/win-set-up-git),
[Linux](http://help.github.com/linux-set-up-git))
* Set up your [user name and email](http://help.github.com/set-your-user-name-email-and-github-token/)

### SSH and Port 22

GitHub supports [Smart HTTP](https://github.com/blog/642-smart-http-support) in addition to _git:_;
this is very useful if you can't go [through port 22](http://help.github.com/ssh-issues/).
If you only use Smart HTTP, you do not _need_ to configure and setup SSH keys.

As a policy, we require you to set your user name and email to accept your commits.

### Your Local Wiki

One of the benefits of leveraging Git repositories
is that you can run the wiki locally in your workstation.
This is useful for a fast edit loop, and to work disconnected.

To create a local wiki, run Jekyll
([usage](https://github.com/mojombo/jekyll/wiki/Usage),
[install](https://github.com/mojombo/jekyll/wiki/Install/2ac4260c25de04e9215573c3424bd6ecdcdae9ef))
as `jekyll --server` and point your browser to `localhost:4000/Community/`.

### Additional Information

Documentation on Git is pretty good by now:

Git-Related:
 * [Git SCM](http://git-scm.com)
 * [Git Reference](http://git-scm.com/docs)
 * [Git Book](http://git-scm.com/book)
 * [Git Videos](http://git-scm.com/videos)
 * The Git Man pages installed in your desktop with the software.

GitHub-Related:
 * [GitHub Help](http://help.github.com/)
 * [GitHub Features](http://github.com/features)
 * [GitHub Pages](http://help.github.com/pages/)
 * [GitHub Flavored Markdown](http://github.github.com/github-flavored-markdown/)
