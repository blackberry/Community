/* TODO:
 * Check on branches to NOT miss samples!
 * Code here should be shared with All_Repos2.js and All_Repos.js
 * Clean up the scoping of functions and variables (translateTable, etc)
 * Clean up a bit the DOM manipulation as I learn better what's it doing
 * Add style for taglist and repolist
 * Report on number of samples currently shown
 * Translation table should be a JSON file
 */

// initialize name translation table
function initializeTranslateTable() {
    return {
	"BB10-WebWorks-Samples": "BB10-Web<em>...</em>Samples",
	"Cascades-Community-Samples": "Cascades-Comm<em>...</em>",
	"jQuery-Mobile-Samples": "jQuery-Mobile<em>...</em>",
	"OpenGLES2-ProgrammingGuide": "OpenGLES<em>...</em>Guide",
	"PushSampleApp(AIR-BB10)": "PushSample<em>...</em>AIR-BB10",
	"Qt2Cascades-Samples": "Qt2Cascades<em>...</em>",
	"Qt2Cascades.IPC": "Qt2<em>...</em>.IPC",
	"Qt2Cascades.Network": "Qt2<em>...</em>.Network",
	"Qt2Cascades.Threads": "Qt2<em>...</em>.Threads",
	"Qt2Cascades.QtConcurrency": "Qt2<em>...</em>.QtConcurrency",
	"Qt2Cascades.Script": "Qt2<em>...</em>.Script",
	"Qt2Cascades.StateMachine": "Qt2<em>...</em>.StateMachine",
	"Qt2Cascades.SQL": "Qt2<em>...</em>.SQL",
	"Qt2Cascades.Tools": "Qt2<em>...</em>.Tools",
	"Qt2Cascades.XML": "Qt2<em>...</em>.XML",
	"SampleBPSANE(AIR)": "SampleBPSANE<em>...</em>AIR",
	"SampleApplication(AIR)": "SampleApp<em>...</em>AIR",
	"SampleLibrary(AIR)": "SampleLib<em>...</em>AIR",
	"ScoreloopIntegrationSample": "Scoreloop<em>...</em>",
	"ScoreloopIntegrationSample(Cascades)": "Scoreloop<em>...</em>(Cascades)",
	"StarshipSettings(AIR-BB10)": "Starship<em>...</em>AIR-BB10",
	"WeatherGuesser(AIR-BB10)": "Weather<em>...</em>AIR-BB10",
	"WebWorks-Community-APIs": "WebWorks-<em>...</em>APIs"
    };
}

// Utility function to shorten those very long repo names
function shortName(name, tTable) {
    var back;
    if (back = tTable[name]) {
	return back;
    }
    return name;
}
// Companion annotation for hyperlinks
function explainShortName(name, tTable) {
    return " title='"+name+"' ";
}

// Combine the above to create a TD
function shortTD(name, url, table) {
    var back;
    back = '<td>' + 
	'<span style="white-space: nowrap;">' +
	( ' <a href="' + url + '"' +
	  explainShortName(name, table) + '>' +
	  shortName(name, table) + '</a>'
	) +
	'</span>' +
	'</td>';
    return back;
}

// Narrow the doc to a given tag

function narrowToTag(tag) {
    if (! tag ) {
	return
    }

    // to display the results of narrow
    narrowSampleCount = 0;
    narrowCurrentTag = tag;
    
    // hide all rows
    $('tr.samplerow, tr.repeated-header').hide();
    // hide enclosing DIVs
    $('div.dynContent').each(function() {
	$(this).hide();
    });

    // show rows with the tag
    $('tr.samplerow').each(function(){

	// TagList is ","-separated with an extra "," at front and another at end
	if ( $(this).attr("tags").indexOf(","+tag+",") >= 0 ) {

	    if ( $(this).attr("collection") ) {
		narrowSampleCount += parseInt($(this).attr("collection"));
	    } else {
		narrowSampleCount += 1;
	    }
	    $(this).show(); // the row...
	    $(this).parents("div.dynContent").each(function(){
		$(this).show(); // ... and the DIV it belongs to
	    });
	}
    });

    // Inject narrow data
    $("#narrow-samplecount").html(narrowSampleCount);
    $("#narrow-currenttag").html(narrowCurrentTag);

    // remove zebra striping because non-hidden rows may not alternate properly
    $('tr.odd').each(function(){ $(this).removeClass("odd").addClass("oddX");  });
    $('tr.even').each(function(){ $(this).removeClass("even").addClass("evenX"); });

}


// add new widget called repeatHeaders 
$.tablesorter.addWidget({ 
    // give the widget a id 
    id: "repeatHeaders", 
    // format is called when the on init and when a sorting has finished 
    format: function(table) { 

	// This should be changed to cache the headers based on the table object
	// because we are sorting multiple tables.
	// Invalidating the cache will work for now

	// invalidate the cache
	this.headers = null;
	
	// cache and collect all TH headers 
	if(!this.headers) { 
	    var h = this.headers = [];  
	    $("thead th",table).each(function() { 
		h.push( 
		    "<th>" + $(this).text() + "</th>" 
		); 
		
	    }); 
	} 
	
	// remove appended headers by classname. 
	$("tr.repeated-header",table).remove(); 
	
	// loop all tr elements and insert a copy of the "headers"     
	for(var i=0; i < table.tBodies[0].rows.length; i++) { 
	    // insert a copy of the table head every 10th row 
	    if((i%10) == 9) { 
		$("tbody tr:eq(" + i + ")",table).before( 
		    $("<tr></tr>").addClass("repeated-header").html(this.headers.join(""))
		    
		);     
	    } 
	} 
    } 
}); 

/*
 * parseRepoData()
 *
 * data - from JASON parse
 *
 * showTypeColumn - platform type
 * showBB10Column - tested / ported to bb10 
 * showNativeColumn - BB10, PlayBook, Cascades
 * showTagsData
 *      -- only one of showNativeColumn and showBB10Column can be true
 *
 * typeTag - "html5", "native", "air", "java", "otherclient", "app", "other",
 * extensionTag - true/false
 *
 * return - items
 *
 * Note: Should rewrite with callback funtions on columns and tags
 */

function parseRepoData(data,
		       showTypeColumn,
		       showBB10Column, showNativeColumn,
		       showTagsData,
		       typeTag, extensionTag) {

    // Validate parameters
    if ( showBB10Column && showNativeColumn ) {
	alert ("argh!"); // remove and leave below
	showBB10Column = false; // force it
    }

    var items = [];
    var tTable = initializeTranslateTable();
    
    /* total hack on the overlap; need to fix */
    items.push('<thead>' +
	       '<tr>' +
	       '<th>Sample</th>' +
	       '<th>Description</th>' +
	       '<th>Repository</th>' + 
	       ( showBB10Column ? '<th>BB10</th>' : '' ) +
	       ( showNativeColumn ? '<th>Native</th>' : '' ) +
	       ( showTypeColumn ? '<th>Type</th>' : '' ) +
	       '</tr>' +
	       '</thead>')

    $.each(data, function(key, val) {
	/* The "_comment_" record is used to document the JSON format */
	if ( key === "_comment_" ) {
	    return true; /* skip this item */
	}

	/* special tags */

	var isExtension = ($.inArray("extension", val.tags) >= 0);
	var isClient    = ($.inArray("client", val.tags) >= 0);

	var isHtml5     = ($.inArray("html5", val.tags) >= 0);
	var isNative    = ($.inArray("native", val.tags) >= 0);
	var isJava      = ($.inArray("java", val.tags) >= 0);
	var isAir       = ($.inArray("air", val.tags) >= 0);
	var isCascades  = ($.inArray("cascades", val.tags) >= 0);

	var isApp       = ($.inArray("app", val.tags) >= 0);
	var isNotRIM    = ($.inArray("notrim", val.tags) >= 0);

	var isBB10      = ($.inArray("bb10", val.tags) >= 0);
	var isPlayBook  = ($.inArray("playbook", val.tags) >= 0);

	// Extensions
	if ( (extensionTag) && (! isExtension) ) {
	    return true; // skip
	}
	if ( (!extensionTag) && (isExtension) ) {
	    return true; // skip
	}

	// Client types
	if ( (typeTag === "html5") && (! isHtml5) ) {
	    return true; // skip
	}
	if ( (typeTag === "native") && (! isNative) ) {
	    return true; // skip
	}
	if ( (typeTag === "java") && (! isJava) ) {
	    return true; // skip
	}
	if ( (typeTag === "air") && (! isAir) ) {
	    return true; // skip
	}
	if ( (typeTag == "otherclient") &&
	     ((! isClient) || isHtml5 || isNative || isJava || isAir )) {
	    return true; // skip
	}

	// Other, non-client, samples
	if ( (typeTag === "other") &&
	     (isClient || isExtension || isHtml5 || isNative || isJava || isAir || isApp )) {
	    return true; // skip
	}

	// Special Categories
	if ( (typeTag === "app") && (! isApp) ) {
	    return true; // skip
	}


	// list of tags is ","-separated with additional "," at front and back
	items.push('<tr class="samplerow" '+
		   'tags=",'+val.tags.join(",")+'," '+
		   ( val.collection ? 'collection="'+val.collection+'" ' : '') +
		   '>' +

		   /* Start Row */

		   /* Repository */
		   shortTD(key, val.url, tTable) +


		   /* Description */
		   '<td>' + val.desc +
		   ( showTagsData
		     ? ' <span class="question" left="yes" tip="' + val.tags.join(", ") + '">T</span>'
		     : ''
		   ) +
		   ( ( val.note )
		     ? ' <span class="question" tip="' + val.note + '">?</span>'
		     : ''
		   ) +
		   ( ( val.collection )
		     ? ' <span class="question" tip="This entry stands for a collection of ' + parseInt(val.collection) + ' samples">C</span>'
		     : ''
		   ) +
		   ( ( val.warning )
		     ? ' <span class="warning" tip="' + val.warning + '">!</span>'
		     : ''
		   ) +

		   '</td>' +

		   /* Repository */
		   shortTD(val.repo, val.repourl, tTable) +


		   /* Type */
		   ( showTypeColumn
		     ? '<td class="centered">' + val.type + '</td>'
		     : '' ) +

		   /* BB10 */
		   ( showBB10Column
		     ? ( '<td class="centered">' +
			 ( isBB10
			     ? '&check;'
			     :  ( isPlayBook
				  ? '<span class="question" left="yes" tip="Tested on PlayBook, not yet on BB10">?</span>'
				  : '')) +
			 '</td>')
		     : '' ) +

		   /* Native */
		   ( showNativeColumn
		     ? ( '<td class="centered">' + 
			 ( isCascades ? 'cascades'
			   : ( isBB10 ? 'bb10'
			       : ( isPlayBook ? 'pb'
				   : '' ))) +
			 '</td>' )
		     : '' ) +

		   '</tr>');
    });
    return items;
}
    


// Main Ready Action
$(document).ready(function(){

    // Process the hide/expand sections

    function collapse(o) {
	o.removeClass("expanded");
	o.next().hide();
	o.addClass("collapsed");
	o.html("<strong>+" + o.attr("label") + "</strong>");
    }
    function expand(o) {
	o.removeClass("collapsed");
	o.next().show();
	o.addClass("expanded");
	o.html("<strong>-" + o.attr("label") + "</strong>");
    }

    $('div.collapsable').each(function() {
	collapse($(this));
    });

    $('div.collapsable').click(function() {
	if ($(this).hasClass("collapsed")) {
	    expand($(this));
	} else {
	    collapse($(this));
	}
    });

    // process the Samples JSON and generate dynamic content

    var narrowSampleCount = 0;
    var narrowCurrentTag = "any tag";

    function plainText(text) {
	return $.trim($('<div>').html(text).text());
    }

    $.getJSON('/Community/All_Samples.json', function(data) {

	/* =========================== */
	/* Stats */

	var tagCount = 0;    // embedded in collecting of tags
	var sampleCount = 0; // embedded in collecting of tags
	var repoCount = 0;   // embedded in collecting of repos

	/* =========================== */
	/* Collect and present tags and repos  */

	var allTags = new Object();
	var allRepos = new Object();

	/* Collect tags and repos */
	$.each(data, function(key, val) {
	    /* The "_comment_" record is used to document the JSON format */
	    if ( key === "_comment_" ) {
		return true; /* skip this item */
	    }
	    
	    /* add all val.tags to allTags */
	    $.each(val.tags, function(key,data) {
		allTags[data] = true;
	    });

	    /* add repos to allRepos */
	    allRepos[val.repo] = val.repourl;

	    /* count but treat "collections" differently */
	    if (val.collection) {
		sampleCount += parseInt(val.collection);
	    } else {
		sampleCount += 1;
	    }
	});

	/* Insert, sort and inject tags */
	items = [];
	$.each(allTags, function (key, val) {
	    items.push('<span class="tagfilter"><em>' + key + '</em></span>');
	});

	tagCount = items.length;
	items.sort();

	$('#tagList').append($('<p/>', {
	    html: items.join(', ')
	})).addClass("taglist"); /* TODO: add style for taglist */

	$('span.tagfilter').click(function() {
	    // TODO - that "em" is brittle like...!
	    var tag = ($(this).children("em").text()); // beats me if this is good code!

	    narrowToTag(tag);
	    // TODO?  Adjust the page location to allow correct bookmarking
	    // The next line forces a reload.
	    // We could work after the anchor, or maybe use history.js or the such.
	    //
	    // window.location = $.url().attr('path') + "?tag=" + tag; -- not doing 
	});

	// Restore
	$('#showAllSamples').click(function() {
	    $('tr.samplerow, tr.repeated-header').show();
	    $('div.dynContent').show();

	    $('tr.oddX').each(function(){ $(this).removeClass("oddX").addClass("odd");  });
	    $('tr.evenX').each(function(){ $(this).removeClass("evenX").addClass("even"); });

	    narrowCurrentTag = "any tag";
	    narrowSampleCount = sampleCount;

	    // Adjust narrow data
	    $("#narrow-samplecount").html(narrowSampleCount);
	    $("#narrow-currenttag").html(narrowCurrentTag);
	});

	/* Insert, sort and inject repos */
	items = [];
	var tTable = initializeTranslateTable(); // TODO: fix the scoping issues

	$.each(allRepos, function (key, val) {
	    items.push('<a href="' + val + '" title="shown in tables as '+
		       ( "'" + plainText(shortName(key, tTable)) + "'" ) +
		       '">' + key + '</a>');
	});

	repoCount = items.length;
	items.sort();

	$('#repoList').append($('<span/>', {
	    html: items.join(', ') + "."
	})).addClass("repolist"); /* TODO: add style for repolist */


	/* ===================== */

	$("#stats-samplecount").html(sampleCount);
	$("#stats-tagcount").html(tagCount);
	$("#stats-repocount").html(repoCount);
	narrowSampleCount = sampleCount;
	$("#narrow-samplecount").html(narrowSampleCount);
	$("#narrow-currenttag").html(narrowCurrentTag);

	/* ====================== */

	function injectAndSort(items, name) {
	    if (items.length > 1) {
		// Inject into page
		$('<table/>', {  
		    'id': name+'Table',
		    html: items.join('')
		}).appendTo('#'+name).addClass("tablesorter");
		
		$("#"+name+"Table").tablesorter({
		    widgets: ['zebra', 'repeatHeaders']     // Stripping looking
		});
	    }
	}

	/* HTML5 */

	injectAndSort(parseRepoData(data, false, true, false, true, "html5", false),
		      // showTypeColumn, showBB10Column, showNativeColumn, showTagsData, typeTag
		      "samplesHtml5");

	injectAndSort(parseRepoData(data, false, true, false, true, "html5", true),
		      // showTypeColumn, showBB10Column, showNativeColumn, showTagsData, typeTag
		      "extensionsHtml5");

	/* Native */

	injectAndSort(parseRepoData(data, false, false, true, true, "native", false),
		      // showTypeColumn, showBB10Column, showNativeColumn, showTagsData, typeTag
		      "samplesNative");

	/* AIR */

	injectAndSort(parseRepoData(data, false, false, false, true, "air", false),
		      // showTypeColumn, showBB10Column, showNativeColumn, showTagsData, typeTag
		      "samplesAir");

	injectAndSort(parseRepoData(data, false, false, false, true, "air", true),
		      // showTypeColumn, showBB10Column, showNativeColumn, showTagsData, typeTag
		      "extensionsAir");

	/* Java */

	injectAndSort(parseRepoData(data, false, false, false, true, "java", false),
		      // showTypeColumn, showBB10Column, showNativeColumn, showTagsData, typeTag
		      "samplesJava");

	/* Other Client */

	injectAndSort(parseRepoData(data, false, true, false, true, "otherclient", false),
		      // showTypeColumn, showBB10Column, showNativeColumn, showTagsData, typeTag
		      "samplesOtherClient");

	/* Other */

	injectAndSort(parseRepoData(data, false, false, false, true, "other", false),
		      // showTypeColumn, showBB10Column, showNativeColumn, showTagsData, typeTag
		      "samplesOther");

	/* Applications */

	injectAndSort(parseRepoData(data, false, false, false, true, "app", false),
		      // showTypeColumn, showBB10Column, showNativeColumn, showTagsData, typeTag
		      "allApps");

	/* ========= */

	/* Add the tooltips */
	$("span.question, span.warning").hover(function() {
	    if ($(this).attr("left")=="yes") {
		$(this).append('<div class="tooltipLeft"><p>' +
			       $(this).attr("tip") +
			       '</p></div>');
	    } else {
		$(this).append('<div class="tooltip"><p>' +
			       $(this).attr("tip") +
			       '</p></div>');
	    }
	}, function () {
	    $("div.tooltip").remove();
	    $("div.tooltipLeft").remove();
	});


	// Narrow if there is a tag
	narrowToTag($.url().param('tag'));  // Handle narrows in URLs
    });

    // That's all!

});
