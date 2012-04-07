# The BlackBerry&reg; Community Wiki

Content in the
<!-- temporarily removed
[Community Wiki](http://blackberry.github.com/Community)
-->
[Community Wiki](http://pelegri.github.com/Community)
is authored collectively by the community under [Terms and Conditions](TBD).
Some of the content is authored by individuals that are RIM employees - 
(...appropriate disclaimer goes here...).

The Wiki is currently hosted at GitHub and implemented using Pages
([Overview](http://pages.github.com/), [Help](http://help.github.com/pages/).
We are not using the [Page Generator](https://github.com/blog/1081-instantly-beautiful-project-pages)
but rather we are manually using [Jekyll](http://github.com/mojombo/jekyll/) and the gh-pages machinery.

The location of this wiki and the technology used may change over time, but the content and the contribution structure
will remain.

Start page to the wiki is
<!-- temporarily removed
[blackberry.github.com/Community](http://blackberry.github.com/Community)
-->
(temporarily)
[pelegri.github.com/Community](http://pelegri.github.com/Community)
to get started.

## Basic structure

* Each Wiki entry is a page that uses a specific layout, depending on the type of entry.
* We use GitHub issues to track requests.
* We use forks to implement workflow (and to try new features).

## Teams / Roles

* A very small team of [Administrator](TBD) that keeps the Wiki working.
* A dedicated team of [Editors](TBD) that keeps the integrity and consistency of the pages.   All Administrators are Editors.
* A (we hope) large team of [Contributors](TBD) that provides content for the pages.
* The rest of the community.

## How To...

### Make Changes to a Page

*Editor*  
Change the page directly. This can be done in-place
(see GitHub Blogs:
[1](https://github.com/blog/143-inline-file-editing),
[2](https://github.com/blog/844-forking-with-the-edit-button)
and [3](https://github.com/blog/905-edit-like-an-ace))
for small changes or through a fork and a pull request for larger changes

*Contributor*  
Like editors, but use your judgement, specially as you start getting up-to-speed with the machinery and the conventions we are
following: if you don't feel comfortable with markdown or have any doubts, fork and do an explicit pull request.

*Community Member*  
The simplest approach is to file an [Issue](https://github.com/blackberry/Community/issues) with the desired change.
Alternatively, fork the page, do the change and submit a pull request.
We still need to finalize the legal details (see note below).

*Legal Note* - All contributions will be done under the following [Terms and Conditions](TBD), whose
main goals are to ensure that the content can be reused and that the participants (including RIM) are
legally protected.
 
### Create a new Page

GitHub does not currently provide a way to create a
new page directly in-browser, so all changes require cloning the repo into your
workstation.  Otherwise, the process is similar to the situation above, except that all changes are non-minor,
and that new pages need to be assigned a _layout_.
Usually a good way to create a new page is by forking an existing one.


### Make Changes to a Layout

*Contributor*, *Community Member*  
Fork, make changes, submit a pull request.

*Editor*  
Get a review from at least one other editor.

## Special Instructions for Editors and Contributors

You are responsible to review changes coming from the community members for content.
And, depending on the details of the legal arrangement, you may need to review those too.

In general, when in doubt, get feedback from addition people.

## Staging Area

We are temporarily using Eduardo's [Community Repo](http://github.com/pelegri/Community) for staging purposes,
including the [Issues](https://github.com/pelegri/Community/issues).
We may create a proper staging repo for the Editor team via a new organization,
something like _BlackBerry-Wiki_ or _BlackBerry-Community_,
like the [BlackBerry-WebWorks](https://github.com/blackberry-webworks) organization.

## Status of this Initiative

Eduardo has an initial version that will be reviewed by a first group of volunteers.

## Issues

* Do we really need a Meta?  Can that just be the Master branch, with README.md et al?
* How flat / hierarchical do we want the space to be?  Probably faq/ is separated of the rest.  Maybe people/?

## 