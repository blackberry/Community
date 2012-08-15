---
layout: basic

title: All Samples in GitHub.com/BlackBerry
tags: samples
jsfile: All_Samples.js
---
{% include common-defs.md %}

<div id='right'>
<div class='caption'>Samples Catalog</div>
<ul>
<li><a href="#samplesHtml5">HTML5 Samples</a></li>
<li><a href="#extensionsHtml5">HTML5 Extensions</a></li>
<li><a href="#samplesNative">Native Samples</a></li>
<li><a href="#samplesAir">AIR Samples</a></li>
<li><a href="#extensionsAir">AIR Extensions</a></li>
<li><a href="#samplesJava">Java Samples</a></li>
<!-- REMOVE start
<li><a href="#samplesOtherClient">Other Client Samples</a></li>
REMOVE end -->
<li><a href="#samplesServer">Other Samples</a></li>
</ul>
</div>

This page catalogs all the samples in RIM's
[GitHub Organization](http://github.com/blackberry)
through several tables generated from a [JSON file](All_Samples.json).
Also see the list of [All Repos].

If you like the samples, go and [Star them on GitHub](https://github.com/blog/1204-notifications-stars).

<div style="margin-top:10px;" class="collapsable" label="Table, Tooltips and Sorting">
</div>
<div style="margin-top: 2px; margin-left:30px;">
There are <span id="stats-samplecount"><!-- dynamic content --></span> samples
optionally annotated with
<span class="question" tip="A list of 'tags' characterizing this sample">T</span>, 
<span class="question" tip="Extra details on the sample">?</span>
<span class="question" tip="This entry stands for a collection of samples">C</span>
and
<span class="warning" tip="Issues to resolve">!</span> tooltips
and organized into 4 tables.
The tables can be sorted on one or more columns: to select multiple
columns select the next column while pressing the 'SHIFT' (on mac) key.
</div>

<div style="margin-top:10px;" class="collapsable" label="Find using Tags">
</div>
<div style="margin-top: 2px; margin-left:30px;">
The set of samples shown can be narrowed via tags; try clicking on these:
<span class="tagfilter">native</span>,
<span class="tagfilter">cascade</span>,
<span class="tagfilter">html5</span>,
<span class="tagfilter">air</span>
and
<span class="tagfilter">java</span>.
To go back to showing all the samples click on on <span id='showAllSamples'><em>Show All</em></span>.

<div id='tagList'>The samples use
<span id='stats-tagcount'><!-- dynamic content --></span> other tags:</div>

<p><em>Currently Displaying
<span id='narrow-samplecount'><!-- dynamic content --></span> samples
containing "<span id="narrow-currenttag"><!-- dynamic content --></span>"</em>
</p>

</div>

<div style="margin-top:10px;" class='collapsable' label="Repositories">
</div>
<div style="margin-top: 2px; margin-left:30px;">
<p style="margin-top: 2px;">The tables list the repository hosting each sample, in some cases
shortening the name for presentation purposes.
Samples come from <span id='stats-repocount'><!-- dynamic content --></span> repos:
</p>
<p><div id='repoList'><!-- dynamic content --></div></p>
</div>

<div style="margin-top:10px;" class='collapsable' label="Feedback and Todo">
<!-- dynamic content -->
</div>
<div style="margin-top:2px; margin-left:30px;">
<ul>
<li>Process WebWorks-Samples</li>
<li>Need different tags for "playbook, may run on bb10" from "playbook only"</li>
<li>Consolidate the number of tags</li>
<li>Decide whether to split Native into Cascades vs the rest</li>
<li>Improve presentation of collapse/expand; maybe use down/right icons</li>
<li>Make Zebra striping work after narrowing</li>
<li>Use $(location).attr('href') to get at URL, then extract argument as narrow-to-tag</li>
<li>The way "the rest" of samples is processed is fragile</li>
<li>Decide how to hande Wiki links</li>
</ul>

<p>
We always welcome your feedback on how to best present information in this and related pages.
</p>
</div>


<div class="dynContent">
<div id="samplesHtml5">
<a name="samplesHtml5"><h2>HTML5 Samples</h2></a>
</div>

<a href="#top">Back to top</a>
</div>

<div class="dynContent">
<div id="extensionsHtml5">
<a name="extensionsHtml5"><h2>HTML5 Extensions</h2></a>
</div>

<a href="#top">Back to top</a>
</div>

<div class="dynContent">
<div id="samplesNative">
<a href="samplesNative"><h2>Native Samples</h2></a>
</div>

<a href="#top">Back to top</a>
</div>

<div class="dynContent">
<div id="samplesAir">
<a href="samplesAir"><h2>AIR Samples</h2></a>
</div>

<a href="#top">Back to top</a>
</div>

<div class="dynContent">
<div id="extensionsAir">
<a href="extensionsAir"><h2>AIR Extensions</h2></a>
</div>

<a href="#top">Back to top</a>
</div>

<div class="dynContent">
<div id="samplesJava">
<a href="samplesJava"><h2>Java Samples</h2></a>
</div>

<a href="#top">Back to top</a>
</div>

<!-- REMOVE for now, no entries

<div class="dynContent">
<div id="samplesOtherClient">
<a href="samplesOtherClient"><h2>Other Client Samples</h2></a>
</div>

<a href="#top">Back to top</a>
</div>

REMOVE until here -->


<div class="dynContent">
<div id="samplesOther">
<a href="samplesOther"><h2>Other Samples</h2></a>
</div>

<a href="#top">Back to top</a>
</div>