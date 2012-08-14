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
	"BB10-WebWorks-Samples": "BB10<em>...</em>Samples",
	"Cascades-Community-Samples": "Cascades<em>...</em>Samples",
	"OpenGLES2-ProgrammingGuide": "OpenGLES<em>...</em>Guide",
	"ScoreloopIntegrationSample": "Scoreloop<em>...</em>",
	"jQuery-Mobile-Samples": "jQuery-Mobile<em>...</em>",
	"StarshipSettings(AIR-BB10)": "Starship<em>...</em>AIR-BB10",
	"WeatherGuesser(AIR-BB10)": "Weather<em>...</em>AIR-BB10",
	"PushSampleApp(AIR-BB10)": "PushSample<em>...</em>AIR-BB10",
	"SampleBPSANE(AIR)": "SampleBPSANE<em>...</em>AIR",
	"SampleApplication(AIR)": "SampleApp<em>...</em>AIR",
	"SampleLibrary(AIR)": "SampleLib<em>...</em>AIR"
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
 * typeTag - "html5", "native", "otherclient", "other"
 *
 * return - items
 *
 * Note: Should rewrite with callback funtions on columns and tags
 */

function parseRepoData(data,
		       showTypeColumn,
		       showBB10Column, showNativeColumn,
		       showTagsData,
		       typeTag) {

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

	var isHtml5    = ($.inArray("html5", val.tags) >= 0);
	var isNative   = ($.inArray("native", val.tags) >= 0);
	var isClient   = ($.inArray("client", val.tags) >= 0);
	var isCascades = ($.inArray("cascades", val.tags) >= 0);
	var isBB10     = ($.inArray("bb10", val.tags) >= 0);
	var isPlayBook = ($.inArray("playbook", val.tags) >= 0);

	if ( (typeTag === "html5") && (! isHtml5) ) {
	    return true; /* skip this item */
	}
	if ( (typeTag === "native") && (! isNative) ) {
	    return true; /* skip this item */
	}
	if ( (typeTag == "otherclient") &&
	     ((! isClient) || isHtml5 || isNative)) {
	    return true; /* skip this item */
	}
	if ( (typeTag === "other") &&
	     (isClient || isHtml5 || isNative)) {
	    return true; /* skip this item */
	}


	// list of tags is ","-separated with additional "," at front and back
	items.push('<tr class="samplerow" tags=",'+val.tags.join(",")+',">' +

		   /* Start Row */

		   /* Repository */
		   shortTD(key, val.url, tTable) +


		   /* Description */
		   '<td>' + val.desc +
		   ( showTagsData
		     ? ' <span class="question" left="yes" tip=",' + val.tags.join(", ") + ',">T</span>'
		     : ''
		   ) +
		   ( ( val.note )
		     ? ' <span class="question" tip="' + val.note + '">?</span>'
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
    


// process the Samples JSON and generate dynamic content
$(document).ready(function(){

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

	    sampleCount += 1; // count samples
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
	    var tag = ($(this).children("em").text()); // beats me if this is good code!

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
		    $(this).show(); // the row...
		    $(this).parents("div.dynContent").each(function(){
			$(this).show(); // ... and the DIV it belongs to
		    });
		}
	    });

	    // remove zebra striping because non-hidden rows may not alternate properly
	    $('tr.odd').each(function(){ $(this).removeClass("odd").addClass("oddX");  });
	    $('tr.even').each(function(){ $(this).removeClass("even").addClass("evenX"); });

	});

	// Restore
	$('#showAllSamples').click(function() {
	    $('tr.samplerow, tr.repeated-header').show();
	    $('div.dynContent').show();

	    $('tr.oddX').each(function(){ $(this).removeClass("oddX").addClass("odd");  });
	    $('tr.evenX').each(function(){ $(this).removeClass("evenX").addClass("even"); });

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

	/* ====================== */

	/* Table of HTML5 Samples */

	/* Parse JSON data into items
	 * showTypeColumn, showBB10Column, showNativeColumn, showTagsData, typeTag */
	items = parseRepoData(data, false, true, false, true, "html5");

	if (items.length > 1) {
	    /* Inject into page */
	    $('<table/>', {
		'id': 'samplesHtml5Table',
		html: items.join('')
	    }).appendTo('#samplesHtml5').addClass("tablesorter");

	    $("#samplesHtml5Table").tablesorter({
		widgets: ['zebra', 'repeatHeaders']     // Stripping looking

	    });
	}

	/* Table of Native Samples */

	/* Parse JSON data into items
	 * showTypeColumn, showBB10Column, showNativeColumn, showTagsData, typeTag */
	items = parseRepoData(data, false, false, true, true, "native");

	if (items.length > 1) {
	    /* Inject into page */
	    $('<table/>', {
		'id': 'samplesNativeTable',
		html: items.join('')
	    }).appendTo('#samplesNative').addClass("tablesorter");

	    $("#samplesNativeTable").tablesorter({
		widgets: ['zebra', 'repeatHeaders']     // Stripping looking

	    });
	}

	/* Table of Other Client Samples */

	/* Parse JSON data into items
	 * showTypeColumn, showBB10Column, showNativeColumn, showTagsData, typeTag */
	items = parseRepoData(data, false, true, false, true, "otherclient");

	if (items.length > 1) {
	    /* Inject into page */
	    $('<table/>', {
		'id': 'samplesOtherClientTable',
		html: items.join('')
	    }).appendTo('#samplesOtherClient').addClass("tablesorter");
	    
	    $("#samplesOtherClientTable").tablesorter({
		widgets: ['zebra', 'repeatHeaders']     // Stripping looking
		
	    });
	}

	/* Table of Other Samples */

	/* Parse JSON data into items
	 * showTypeColumn, showBB10Column, showNativeColumn, showTagsData, typeTag */
	items = parseRepoData(data, false, false, false, true, "other");

	if (items.length > 1) {
	    /* Inject into page */
	    $('<table/>', {
		'id': 'samplesOtherTable',
		html: items.join('')
	    }).appendTo('#samplesOther').addClass("tablesorter");
	    
	    $("#samplesOtherTable").tablesorter({
		widgets: ['zebra', 'repeatHeaders']     // Stripping looking
		
	    });
	}

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

    });
});

// Process the hide/expand sections
$(document).ready(function(){
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

});
