---
layout: technology

title: Camera
oneline: Camera APIs for BB 10
forum:
techlink:
tags: camera, blackberry 10
---
{% include common-defs.md %}

### Description

APIs to use the Camera on BlackBerry 10

### Documentation

* [Online Reference](http://developer.blackberry.com/native/reference/bb10/com.qnx.doc.camera.lib_ref/topic/overview.html)

The main forum for questions depends on the software stack being used:

* [Native SDK](http://supportforums.blackberry.com/t5/Native-Development/bd-p/native_sdk)
* [Cascades](http://supportforums.blackberry.com/t5/Cascades-Development/bd-p/Cascades)
* [WebWorks](http://supportforums.blackberry.com/t5/Web-and-WebWorks-Development/bd-p/browser_dev)

### Samples

**[HelloCamera](http://github.com/blackberry/Cascades-Community-Samples/tree/master/HelloCamera)**  
Shows how to set up a Cascades foreign window and connect the Camera viewfinder to it.

**[NativeCamera](http://github.com/blackberry/Core-Native-Community-Samples/tree/master/NativeCamera)**  
Shows how to set up a Camera viewfinder in a non-cascades environment using libscreen.

**[HelloVideoCamera](https://github.com/blackberry/Cascades-Community-Samples/tree/master/HelloVideoCamera)**  
Shows how to record videos using the Camera.
This sample is based on the HelloCamera sample so it also illustrates how to set up a Cascades foreign window and connect the Camera viewfinder to it.

**[Photobomber](https://github.com/blackberry/Cascades-Samples/tree/master/photobomber)**  
A camera application that let's you take photos and then have them "bombed" by somebody.  The app shows how to use the
Cascades multimedia library with Camera, take a picture, manipulate the image, and add an image over another image.

### BBJam Samples
A collection of sample apps demonstrated in the Native Camera API Deep-Dive session at the BlackBerry JAM conference in San Jose.
Some of these samples are similar to those listed above, but with a focus on more in-line documentation, as well as notes on best-practices and "gotchas".
These samples have been updated to build with the Gold NDK release.

**[Viewfinder](https://github.com/blackberry/Presentations/tree/master/2012-BlackBerryJam-Americas/JAM15/Viewfinder)**
A simple sample using libscreen which illustrates how to start a viewfinder.  Includes notes on how to inventory available cameras and search for cameras based on the features you require.

**[RecordVideo](https://github.com/blackberry/Presentations/tree/master/2012-BlackBerryJam-Americas/JAM15/RecordVideo)**
Builds on the Viewfinder sample by adding the ability to record a video.  Shows how to play a start/stop tone and how to select a filename on the camera roll to save the video to.

**[TakePhoto](https://github.com/blackberry/Presentations/tree/master/2012-BlackBerryJam-Americas/JAM15/TakePhoto)**
This is similar to the NativeCamera sample, but with some additional documentation.  Demonstrates how to take a picture and save it to the camera roll.

**[TakeBurst](https://github.com/blackberry/Presentations/tree/master/2012-BlackBerryJam-Americas/JAM15/TakeBurst)**
This sample demonstrates how to do a burst photo capture and provides recommendations for efficiently saving full-resolution images at 15fps through the use of buffering.
Burst capture can be used as the basis for many interesting effects such as HDR, exposure bracketing, and is used to implement the time-warp effect in the BB10 camera app.

**[FlashPhoto](https://github.com/blackberry/Presentations/tree/master/2012-BlackBerryJam-Americas/JAM15/FlashPhoto)**
A Cascades photo-taking sample which illustrates how to query available flash modes, how to configure the flash, and how to detect whether the flash has fired when a photo is captured.

**[SceneZoom](https://github.com/blackberry/Presentations/tree/master/2012-BlackBerryJam-Americas/JAM15/SceneZoom)**
A Cascades photo-taking sample which illustrates how to query available scene modes and how to switch between scene modes.
Also demonstrates the two mechanisms for adjusting the zoom level and how to determine the range for zoom values.

**[Focus](https://github.com/blackberry/Presentations/tree/master/2012-BlackBerryJam-Americas/JAM15/Focus)**
A Cascades photo-taking sample which demonstrates how to operate the various focus modes available on the device.
Shows how to query the available modes, how to configure them, and provides controls for interacting with the various modes
(eg. sliders for manual focus or a touch-interface to focus on a particular region of the scene).

**[FaceFilter](https://github.com/blackberry/Presentations/tree/master/2012-BlackBerryJam-Americas/JAM15/FaceFilter)**
A C video recording sample which illustrates how to apply in-line filter effects to the live camera video stream.  Face-detect metadata reporting is enabled,
the face co-ordinates are extracted from the preview image stream, and the video buffer is modified with a pixelating mosaic effect.  If you tap to enable video recording,
you will find that the mosaic effect is present when the video is played back.  This sample also illustrates the concept of
event-based access to the camera buffers.  For read/write buffer access, the familiar callback mechanism cannot be used.

**[BarcodeScanner](https://github.com/blackberry/Presentations/tree/master/2012-BlackBerryJam-Americas/JAM15/BarcodeScanner)**
This sample shows you how to process preview frames from the Camera using the Cascades Qt APIs in order to scan a barcode with the built in ZXing library. It is also an example of making a custom component, and playing a sound with Qt.


### Presentations, Articles and Other Media

* [Advanced Camera and Augmented Reality](http://hosting.desire2learncapture.com/RIM/1/watch/184.aspx), JAM Europe session by Sean McVeigh with Martin Lechner (Wikitude) at BlackBerry JAM Europe, Amsterdam, Feb 6, 2013.
* [Native Camera API Deep-Dive](http://hosting.desire2learncapture.com/RIM/1/watch/48.aspx), Breakout session by Sean McVeigh and Paul Bernhardt at the BlackBerry Jam conference in San Jose, CA, Sept 26, 2012.
* [Shutter Sound Policy](http://supportforums.blackberry.com/t5/Native-Development/Camera-shutter-sound/m-p/1808535#M5712),
Forum post by Sean McVeigh, on July, 2012
* [Getting Rolling with the Camera API](http://devblog.blackberry.com/2012/07/camera-api/), DevBlog by Paul Bernhardt, on July 20, 2012

### Also See
[Cascades], [WebWorks], [Native]
