/* Code here should be shared with All_Repos2.js and All_Repos.js */

// Utility function to shorten those very long repo names
function shortName(name) {
    if (name.length > 14) {
	return name.slice(0, 7) + '...' + name.slice(-7);
    }
    return name;
}
// Companion annotation for hyperlinks
function explainShortName(name) {
    if (name.length > 14) {
	return " title='"+name+"' ";
    }
    return '';
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
	    if((i%20) == 19) { 
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
 * tagSet - map of tags used in the samples, if null, skip
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
		       tagSet,
		       showTypeColumn,
		       showBB10Column, showNativeColumn,
		       showTagsData,
		       typeTag) {
    var items = [];
    
    if ( showBB10Column && showNativeColumn ) {
	alert ("argh!"); // remove and leave below
	showBB10Column = false; // force it
    }

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


	items.push('<tr>' +

		   /* Start Row */

		   /* Repository */
		   '<td>'+
		   '<span style="white-space: nowrap;">' +
		   '<a href="' + val.url + '" target="_blank">' + key + '</a>' +
		   '</span>' +
		    
		   '</td>' +


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
		   ( ( val.warning )
		     ? ' <span class="warning" tip="' + val.warning + '">!</span>'
		     : ''
		   ) +

		   '</td>' +

		   /* Repository */
		   '<td>' + 
		   '<span style="white-space: nowrap;">' +
		   ( ' <a href="' + val.repourl + '"' +
		     explainShortName(val.repo) + '>' +
		     shortName(val.repo) + '</a>'
		   ) +
		   '</span>' +
		   '</td>' +

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
    

$(document).ready(function(){

    $.getJSON('/Community/All_Samples.json', function(data) {

	/* ================= */
	/* Process the tags  */

	allTags = new Object();

	/* Collect tags */
	$.each(data, function(key, val) {
	    /* The "_comment_" record is used to document the JSON format */
	    if ( key === "_comment_" ) {
		return true; /* skip this item */
	    }
	    
	    /* add all val.tags to tagSet */
	    $.each(val.tags, function(key,data) {
		allTags[data] = true;
	    });
	});

	/* Insert tags */
	items = [];
	$.each(allTags, function (key, val) {
	    items.push('<em>' + key + '</em>');
	});

	/* Sort */
	items.sort();

	/* Inject */
	$('#tagsList').append($('<p/>', {
	    html: items.join(', ')
	})).addClass("taglist"); /* TODO: add style for taglist */


	/* ====================== */

	/* Table of HTML5 Samples */

	/* Parse JSON data into items
	 * showTypeColumn, showBB10Column, showNativeColumn, showTagsData, typeTag */
	items = parseRepoData(data, allTags, false, true, false, true, "html5");

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
	items = parseRepoData(data, allTags, false, false, true, true, "native");

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
	items = parseRepoData(data, allTags, false, true, false, true, "otherclient");

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
	items = parseRepoData(data, allTags, false, false, false, true, "other");

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

