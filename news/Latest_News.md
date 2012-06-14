---
layout: news
title: Latest Community News
---
{% include news-defs.md %}

<div style="background-color: ghostwhite; border-style: solid; border-width: 1px; padding: 10px; margin-top: 10px; font-size: 105%; text-align: center; line-height: 180%;">
The
<a href="http://www.blackberryjamworldtour.com">BlackBerry 10 Jam World Tour</a> is
visiting <a href="../Paris.html">Paris</a> on <strong>June 12</strong> and
<a href="../London.html">London</a> on <strong>June 14</strong>.
<br/>
The <a href="http://devblog.blackberry.com/2012/06/your-second-chance-at-getting-started-with-cascades/">Cascades Online Webinar</a>
is <strong>June 19</strong>, 11am ET - or <a href="http://www.timeanddate.com/worldclock/fixedtime.html?iso=20120619T1500">convert to your timezone</a>.
</div>

### Cleanup: Qt Repo and Gitorious
We are now contributing directly upstream to [Gitorious](http://qt.gitorious.org/qt), and, as a consequence,
the [old repo](https://github.com/blackberry/Qt) is, at best, a duplicate.
Code has been removed but download files will still be here - currently a tad out of date.

_Source_: Rafael Roquetto, on June 13, 2012


### More Open Source Committers: Jason/jQuery and Gord/Apache Cordova
Jason Scott is now part of the [jQuery team](http://jquery.org/team). And Gord Tanner is now a committer
at [Apache Cordova](http://incubator.apache.org/projects/callback.html).  Congrats!  

_Source_: Jason and Gord, on June 13, 2012

### Updated: SNEP Support in BlackBerry 10
[Martin Wooley][mdw] and [John Murray][jcm] have added
[SNEP](http://www.nfc-forum.org/specs/spec_list/#protts) support to their NfcTool sample
([commit](https://github.com/blackberry/Cascades-Community-Samples/commit/ac7a409893bb5ea9815f492cb7c7a687ba017840)).
More details in the [Code](https://github.com/blackberry/Cascades-Community-Samples/tree/master/NfcTool) and in their
[Article](http://supportforums.blackberry.com/t5/Native-Development/NFC-on-BlackBerry-10-peer-to-peer-communication-using-SNEP/ta-p/1758859)  

_Source_: [Martin][mdw] and [John][jcm], on June 13, 2012

### New Repo: libQREncode
[Cliff Hung] has ported libQREncode, FUKUCHI's very popular, C-based, [QR Code](http://en.wikipedia.org/wiki/QR_Code) encoder
([website](http://fukuchi.org/works/qrencode/index.html)).  The new
[libQREncode](https://github.com/blackberry/libqrencode) repo is a fork of
[FUKUCHI's repo](http://fukuchi.org/works/qrencode/index.html).  

_Source_: [Cliff Hung], on June 13, 2012


### New to Samples-for-AIR: SampleBPSANE
Julian has added the sample shown at [BlackBerry 10 Jam][bb10jam] in Orlando that accessed
[BPS] using [Native Extensions for Adobe AIR](http://www.adobe.com/devnet/air/native-extensions-for-air.html).
Code in the [SampleBPSANE](https://github.com/blackberry/Samples-for-AIR/tree/master/SampleBPSANE) directory of
[Samples-for-AIR](http://github.com/blackberry/Samples-for-AIR] repo.

_Source_: [Julian Dolce], on June 12, 2012

### New BlackBerry 10 Sample: NfcTool
John and Martin have published a new BlackBerry 10 sample that shows how to read and write various
sorts of NDEF messages from and to [NFC] tags using the BlackBerry 10 NFC APIs.
Includes
[Code](https://github.com/blackberry/Cascades-Community-Samples/tree/master/NfcTool)
and
[Article](http://supportforums.blackberry.com/t5/Native-Development/NFC-on-BlackBerry-10-Reading-and-Writing-Tags-using-native-APIs/ta-p/1721887).

_Source_: via changelog at [Cascades-Community-Samples](https://github.com/blackberry/Cascades-Community-Samples), on June 8, 2012

### New Native Sample: NativeCamera
Another sample from Sean: [NativeCamera](https://github.com/blackberry/Cascades-Community-Samples/tree/master/NativeCamera)
shows how to set up a Camera viewfinder in a non-cascades environment using libscreen.

_Source_: [Sean McVeight], via [Community Wiki](http://blackberry.github.com/Community/Camera.html), on June 8, 2012.

### Online Webinar for Cascades
Next June 19th there will be an online webinar for Cascades.  Check out [Details](http://devblog.blackberry.com/2012/06/your-second-chance-at-getting-started-with-cascades/)
and [register](http://developer.blackberry.com/cascades/webcasts).
Time is 11am ET - or [convert to your timezone](http://www.timeanddate.com/worldclock/fixedtime.html?iso=20120619T1500).

_Source_: [DevBlog](http://devblog.blackberry.com/2012/06/your-second-chance-at-getting-started-with-cascades/), on June 7, 2012

### HTML5 test reports 447 for BB10 Browser
[HTML5 test](http://html5test.com/results/mobile.html) reports 447 for the BlackBerry 10 Browser.
This beats all mobile **and** desktop browsers.

_Source_: [Eduardo Pelegri-Llopart][pelegri], on June 7, 2012

### Update to WebWorks and Ripple
New versions of BlackBerry 10 WebWorks SDK and Ripple available from [download page](http://devblog.blackberry.com/2012/06/blackberry-10-webworks-sdk-ripple-update/).
Open Source repos are [Ripple-UI](https://github.com/blackberry/Ripple-UI) and
[BB10-WebWorks-Packager](https://github.com/blackberry/BB10-Webworks-Packager).
On the last one, we are in the middle of consolidating the WebWorks repos for BlackBerry 10, so stay tuned.

_Source_: [Ken Wallis][TBD], at [DevBlog](), on June 6, 2012

### New Cascades Sample: HelloCamera
Sean McVeight has added a new [Cascades] sample showing how to use the Camera on [BlackBerry 10].
Check out the code at the [Cascades-Community-Samples][http://github.com/blackberry/Cascades-Community-Samples],
under [HelloCamera][https://github.com/blackberry/Cascades-Community-Samples/tree/master/HelloCamera].

_Source_: [Sean McVeight][TBD], on June 1, 2012

### BlackBerry PlayBook 2.1 beta
The beta release of the BlacKBerry PlayBook 2.1.0 is now available; we encourage developers to use it to test
their applications before the final release.

_Source_: [Tim Windsor], via [DevBlog](http://devblog.blackberry.com/2012/05/blackberry-playbook-2-1-0-beta/), on May 31, 2012

### bbUI.js 0.9.2 Now Available
Tim has announced the next release of [bbUI.js][bbuijs], v0.9.2. Long list of changes, see the [commit log](https://github.com/blackberry/bbUI.js/commit/5aa6175b88189f1f78341786619561fce1c5f1f4),
and the [ChangeLog](https://github.com/blackberry/bbUI.js/blob/master/CHANGELOG.md#version-092).

_Source_: [Eduardo Pelegri-Llopart][pelegri], on May 29, 2012 

### BlackBerry 10 Jam World Tour Starts
[Milan](http://www.blackberryjamworldtour.com/milan) marks the start of the
[BlackBerry 10 Jam World Tour](http://www.blackberryjamworldtour.com).  Many locations are already sold out,
so hurry up and register if you are interested.

_Source_: [Eduardo Pelegri-Llopart][pelegri], on May 29, 2012 

### More Upstreaming: LibCurl
[Joe Mason](http://twitter.com/joenotcharles)'s changes to libcurl have been accepted.  They provide a new auth callback
and should be integrated in a [future release](http://curl.haxx.se/mail/lib-2012-05/0138.html).  This is a good example
of how contributing directly to the community is a win-win for all involved parties.

_Source_: [Joe Mason](http://twitter.com/joenotcharles), on May 24, 2012

### BlackBerry 10 Games at NordicGame
Sean Taylor and Anders Jeppson (RIM) and Tim Closs (Marmalade) will present on Gaming on BlackBerry 10
and Native Development for BlackBerry 10 at [NordicGame](http://nordicgame.com/).
Sean will present the latest features of [Gameplay](http://github.com/blackberry/gameplay "Gameplay at our GitHub").  

_Source_: [Eduardo Pelegri-Llopart][pelegri], on May 20, 2012 

### Registration open for Milan and Barcelona
Registration for the Milan and Barcelona stops of the BlackBerry 10 [Jam World Tour][jamtour] is now open.  

_Source_: [Eduardo Pelegri-Llopart][pelegri], on May 18, 2012  

### New Repo: RecastNavigation
The new [RecastNavigation](https://github.com/blackberry/recastnavigation) Repository at GitHub
has a port of the Recast Naviation toolkit to build navigation-meshes.  The repo has the Detour, DetourCrowd
and Recast libraries, all ported (from [Upstream](http://code.google.com/p/recastnavigation/ "RecastNavigation Upstream")) to run with BlackBerry Tablet OS and BlackBerry 10 OS.
The library will be used in a future release of Gameplay.  

_Source_: [Eduardo Pelegri-Llopart][pelegri], on May 17, 2012


### BlackBerry 10 Samples Galore
Post at [DevBlog](http://devblog.blackberry.com/2012/05/blackberry-10-samples/ "BlackBerry 10 Samples Galore") summarizing the new samples repositories released during [BlacKBerry 10 Jam](http://www.blackberryjamconference.com/).  

_Source_: [Eduardo Pelegri-Llopart][pelegri], on May 17, 2012  


### BlackBerry 10 Jam World Tour Update
Updates to the [Jam Tour][jamtour] page with new cities and dates.  

_Source_: [Alex Kinsella][alexk], via [DevBlog](http://devblog.blackberry.com/2012/05/blackberry_10_jam_world_tour_update_2/ "BlackBerry 10 Jam World Tour Update"), on May 5, 2012   

### PictureWall Sample
[PictureWall](http://github.com/blackberry/picturewall) is a new HTML5 sample that displays one or more pictures
on a _wall_ of PlayBooks, served from a [node.js](http://nodejs.org/) application
using [socket.io](http://socket.io/).
More details at [DevBlog](http://devblog.blackberry.com/2012/05/picturewall-html5-sample/)

_Source_: [Eduardo Pelegri-LLopart][pelegri], on May 23, 2012

### BlackBerry Samples for jQuery Mobile
New repo [jQuery-Mobile-Samples](http://github.com/blackberry/jquery-mobile-samples) to be used
to contribute to the [jQuery Mobile Cookbook](http://jquerymobilecookbook.com/) project.  

_Source_: [Tim Windsor][timw], via [DevBlog](http://devblog.blackberry.com/2012/05/jquery-mobile-blackberry-samples/ "BlackBerry Samples for jQuery Mobile"), on May 14, 2012   


### New Beta Zone
Update to [BlackBerry Beta Zone](http://blackberry.com/beta).  

_Source_: Kerri B, at [DevBlog](http://blogs.blackberry.com/2012/04/new-blackberry-beta-zone/ "Experience a New BlackBerry Beta Zone"), on April 25, 2012  

    
---
These news are community-contribute.  We encourage you to [Submit News](Submit_News.html); see [how](../other/QuickEdit.html)

