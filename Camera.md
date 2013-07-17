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

**[HelloCamera](https://github.com/blackberry/Cascades-Community-Samples/tree/master/HelloCamera)**  
Shows how to set up a Cascades foreign window and connect the Camera viewfinder to it.

**[NativeCamera](https://github.com/blackberry/Core-Native-Community-Samples/tree/master/NativeCamera)**  
Shows how to set up a Camera viewfinder in a non-cascades environment using libscreen.

**[HelloVideoCamera](https://github.com/blackberry/Cascades-Community-Samples/tree/master/HelloVideoCamera)**  
Shows how to record videos using the Camera.
This sample is based on the HelloCamera sample so it also illustrates how to set up a Cascades foreign window and connect the Camera viewfinder to it.

**[Photobomber](https://github.com/blackberry/Cascades-Samples/tree/master/photobomber)**  
A camera application that let's you take photos and then have them "bombed" by somebody.  The app shows how to use the
Cascades multimedia library with Camera, take a picture, manipulate the image, and add an image over another image.

**[RotationCamera](https://github.com/blackberry/Cascades-Community-Samples/tree/master/RotationCamera)**  
Demonstrates some best-practices for handling device rotation in the video viewfinder case.

### BBJam Samples
A collection of sample apps demonstrated in the Native Camera API Deep-Dive session at the BlackBerry JAM conferences in San Jose, Amsterdam, and Orlando.
Some of these samples are similar to those listed above, but with a focus on more in-line documentation, as well as notes on best-practices and "gotchas".  Some more advanced samples and demos are also found in this section.

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

**[Camera3D](https://github.com/blackberry/Presentations/tree/master/2013-BlackBerryJam-Europe/JAM370/Camera3D)**
A C camera sample which shows how to render the camera viewfinder into an OpenGL texture.  Also demonstrates the use of the event-mode interface, and the RGB video viewfinder.  This sample extends the GoodCitizen 3d-cube demo.

**[Heartbeat](https://github.com/blackberry/Presentations/tree/master/2013-BlackBerryJam-Americas/JAM40/Heartbeat)**
A Cascades sample showing how the camera viewfinder can be used in some interesting ways.  Specifically, this sample uses the video viewfinder to measure your heartrate when your finger is held over the on-board videolight.  The algorithm was hastily put together, so this sample is ripe for someone who has a bit more time to implement a proper FFT.  Community contribution welcome!

**[Character](https://github.com/blackberry/Presentations/tree/master/2013-BlackBerryJam-Americas/JAM40/character)**
A GamePlay3D sample which illustrates how to render the camera viewfinder as a texture in a 3D scene!  This uses a similar approach as the Camera3D sample.  This sample extends the stock "character" sample from the GamePlay3D repository [Here](https://github.com/blackberry/GamePlay/tree/master/samples/character).

**[Moustacher](https://github.com/blackberry/Presentations/tree/master/2013-BlackBerryJam-Americas/JAM40/Moustacher)**
A face-detection sample written in C which superimposes a moustache on your face.  Similar to the FaceFilter sample.  Illustrates in-line filter effects and parsing of face-detect data.  Moustaches will also be present in your recorded videos!

**[SlaveFlash](https://github.com/blackberry/Presentations/tree/master/2013-BlackBerryJam-Europe/JAM370/SlaveFlash)**
A C sample which was written to illustrate other interesting things that can be done with retroactive burst capture.  A circular buffer of past images is maintained and when a large jump in review-frame brightness is detected followed by a similar decrease in brightness, we assume that an external flash has fired.  The full-resolution image with the matching timestamp is extracted from the circular buffer, saved to disk, and then opened in the picture viewer card.  The decision to try this with an external flash was to demonstrate that if you don't like the on-board flash, you can try using your professional strobes!

### Presentations, Articles and Other Media

* [Native Camera API Deep-Dive](http://hosting.desire2learncapture.com/RIM/1/watch/48.aspx), Breakout session by Sean McVeigh and Paul Bernhardt at the BlackBerry Jam Americas conference in San Jose, CA, Sept 26, 2012.
* [Native API Deep-Dive: Advanced Camera and Augmented Reality](http://www.youtube.com/watch?v=wfvlt2hu-Jw), Breakout session by Sean McVeigh with Wikitude CTO Martin Lechner at the BlackBerry Jam Europe conference in Amsterdam, February 6, 2013.
* [Advanced Native Camera: Seeing is Believing!](https://bblive.blackberryconferences.net/2013/connect/sessionDetail.ww?SESSION_ID=1948), Breakout session by Sean McVeigh at the BlackBerry Live / Jam Americas conference in Orlando, FL, May 15, 2013. (follow the Media link for the video).
* [Shutter Sound Policy](http://supportforums.blackberry.com/t5/Native-Development/Camera-shutter-sound/m-p/1808535#M5712),
Forum post by Sean McVeigh, on July, 2012
* [Getting Rolling with the Camera API](http://devblog.blackberry.com/2012/07/camera-api/), DevBlog by Paul Bernhardt, on July 20, 2012

### Also See
[Cascades], [WebWorks], [Native]
