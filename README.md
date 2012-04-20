# The BlackBerry&reg; Community Wiki

<!-- temporarily removed
[Community Wiki](http://blackberry.github.com/Community)
-->
Content in this
[Community Wiki](http://blackberry-community.github.com/Community)
is authored collectively by the community under the following [Terms and Conditions](TBD).
Some of the content is authored by individuals that are RIM employees and
..._appropriate disclaimer goes here_...

This Wiki is currently hosted at GitHub and implemented using Pages
([Overview](http://pages.github.com/), [Help](http://help.github.com/pages/)).
The Wiki is not using the [Page Generator](https://github.com/blog/1081-instantly-beautiful-project-pages)
but rather uses [Jekyll](http://github.com/mojombo/jekyll/) and the gh-pages machinery.
The location of this wiki and the technology used may change over time, but the content and the contribution structure
will remain.

<!-- temporarily removed
[blackberry.github.com/Community](http://blackberry.github.com/Community)
-->
**_Start page_** is (temporarily) at
[blackberry-community.github.com/Community](http://blackberry-community.github.com/Community).

A summary of the **_Contribution Opportunities_** is available at the
[Contribute](http://blackberry-community.github.com/Community/other/Contribute.html) Wiki page.

## Basic structure

* Each Wiki entry is a [Markdown](http://daringfireball.net/projects/markdown/) page
* A page uses a layout (via Jekyll) based on the type of entry.
* Common definitions are kept in *common-defs.md* and other files in the *_includes* directory.
* GitHub issues are used to track requests.
* Git Forks are used to implement workflow (and to try new features).

## Teams / Roles

The following teams collaborate to create the Wiki:

* A very small team of [Administrator](TBD) that keeps the Wiki working.
* A dedicated team of [Editors](TBD) that keeps the integrity and consistency of the pages.   All Administrators are Editors.
* A (we hope) large team of [Contributors](TBD) that provides content for the pages.
* The rest of the community.

## How To...

### Make Changes to a Page

*Editor*  
Change the page directly. This can be done in-place
(see
[[1]](https://github.com/blog/143-inline-file-editing),
[[2]](https://github.com/blog/844-forking-with-the-edit-button)
and [[3]](https://github.com/blog/905-edit-like-an-ace))
for small changes or through a fork and a pull request for larger changes

*Contributor*  
Like editors, but use your judgement, specially as you start getting up-to-speed with the machinery and the conventions we are
following.
If you don't feel comfortable with Markdown
or have any doubts, fork and do an explicit pull request.

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

We use a workflow similar to those used by WebWorks and Gaming via a
[BlackBerry-Community](https://github.com/blackberry-community) organization.
[Issues](https://github.com/pelegri/Community/issues)
are kept in the Community repo in that organization.

Individual members of the community host their own repositories, for example:

 * [pelegri/Community](http://github.com/pelegri/Community)
 * [taylorbb/Community](http://github.com/taylortbb/Community)


## Status of this Initiative

Eduardo has an initial version that will be reviewed by a first group of volunteers.

