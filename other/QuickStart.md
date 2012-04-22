---
title: QuickStart to Git and GitHub

layout: basic
---
{% include common-defs.md %}

New to Git but want to contribute to the wiki? Here are some basic starting concepts and links.

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

File an Issue with a
[content](https://github.com/blackberry-community/Community/issues?labels=content) label.

### Where are Pages Kept?

We keep the pages in [GitHub Repositories](http://help.github.com/create-a-repo/).  There are multiple repositories,
most visitors to the wiki only interact with [blackberry.github.com/Community](http://blackberry.github.com/Community),
but you will interact with other staging repositories.

### Two URLs?

GitHub will automatically run the Pages machinery if the appropriate URL is invoked.  For the main Wiki, the two
relevant URLs are
[blackberry.github.com/Community](http://blackberry.github.com/Community)
and [github.com/blackberry/Community](https://github.com/blackberry/Community).

### What is the BlackBerry-Community?

You will never contribute directly to the stable *BlackBerry* repository;
your contributions will first show in the
our *staging* repository,
*BlackBerry-Community*
([repository](https://github.com/blackberry-community/Community),
[wiki](http://blackberry-community.github.com/Community))

### How Does New Content Propagate?

[Fork](http://help.github.com/fork-a-repo/) the staging repository.  Add your content to it (most likely
by cloning into your local workstation), then send a [pull request](http://help.github.com/send-pull-requests/).

### Can I Edit in my Browser?

GitHub allows inline file editing and this may be very useful for quick and simple changes.
The edit generates its own commit and pull request, so all the other machinery still applies,
but visual feedback is limited to Markdown, without layouts.
See [1], [2] and [3] for details.

[1]: <https://github.com/blog/143-inline-file-editing> ""
[2]: <https://github.com/blog/844-forking-with-the-edit-button> ""
[3]: <https://github.com/blog/905-edit-like-an-ace> ""

### What are my First Steps?

* Get a free account at GitHub.com
* Learn about Markdown
* Install Git in your workstation/laptop (not needed if you edit inline)

### Working Disconnected

One of the benefits of our arrangement is that you can run the wiki locally in your workstation.
You just need to run Jekyll
([usage](https://github.com/mojombo/jekyll/wiki/Usage),
[install](https://github.com/mojombo/jekyll/wiki/Install/2ac4260c25de04e9215573c3424bd6ecdcdae9ef))
using the command <code>jekyll --server --base-url '/Community'</code>.

### Online Books and Tutorials:

For additional links check out:
 * [Git SCM](http://git-scm.com)
 * [ProGit.org](http://progit.org)
 * [GitHub Help](http://help.github.com/)
