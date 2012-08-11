/* Code here should be shared with All_Repos2.js */

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
 *
 * showPortColumn - true, false
 * showSamplesColumn - true, false
 * showTypeColumn - true, false
 *
 * portTag - "yes", "no", "any"
 * samplesTag - "yes", "no", "any"
 * typeTag - "html5", "native", "air", "other", "any"
 *
 * Should rewrite with callback funtions on columns and tags
 */

function parseRepoData(data,
		       showPortColumn, showSamplesColumn, showTypeColumn,
		       portTag, samplesTag, typeTag) {
    var items = [];
    
    /* total hack on the overlap; need to fix */
    items.push('<thead>' +
	       '<tr>' +
	       '<th>Repository</th>' + 
	       '<th>Description</th>' +
	       ( showTypeColumn ? '<th>Type</th>' : '' ) +
	       '<th>BB10</th>' +
	       ( showSamplesColumn ? '<th>Sample</th>' : '' ) +
	       ( showPortColumn  ? '<th>Port</th>' : '' ) +
	       '</tr>' +
	       '</thead>')

    $.each(data, function(key, val) {
	/* The "_comment_" record is used to document the JSON format */
	if ( key === "_comment_" ) {
	    return true; /* skip this item */
	}

	if ( ( $.inArray("port", val.tags) < 0) && ( portTag === "yes") ) {
	    return true; /* skip this item */
	}
	if ( ( $.inArray("port", val.tags) >= 0) && (portTag === "no") ) {
	    return true; /* skip this item */
	}

	if ( ( $.inArray("samples", val.tags) < 0) && ( samplesTag === "yes") ) {
	    return true; /* skip this item */
	}
	if ( ( $.inArray("samples", val.tags) >= 0) && (samplesTag === "no") ) {
	    return true; /* skip this item */
	}

	if ( ( $.inArray("html5", val.tags) < 0) && ( typeTag === "html5") ) {
	    return true; /* skip this item */
	}
	if ( ( $.inArray("native", val.tags) < 0) && (typeTag === "native") ) {
	    return true; /* skip this item */
	}
	if ( ( $.inArray("air", val.tags) < 0) && (typeTag === "air") ) {
	    return true; /* skip this item */
	}
	if ( ( ( $.inArray("air", val.tags) >= 0) ||
	       ( $.inArray("html5", val.tags) >= 0) ||
	       ( $.inArray("native", val.tags) >= 0) ) && (typeTag === "other") ) {
	    return true; /* skip this item */
	}

	items.push('<tr>' +
		   /* Start Row */

		   /* Repository */
		   '<td><span style="white-space: nowrap;"><a href="' + val.url + '" target="_blank">' + key + '</a></span>' +

		   ( ( (val.branches && val.branches.length > 1 ) || (val.branchinfo))
		     ? ' <span class="question" tip="' +  val.branches +
		     ( ( val.branchinfo )
		       ? val.branchinfo
		       : ''
		     ) +
		     '">B</span>'
		     : ''
		   ) +
		   ( ( $.inArray("wiki", val.tags) >= 0 )
		     ? ' <span class="question" tip="Repo has a Wiki">W</span>'
		     : ''
		   ) +
		   ( ( $.inArray("pages", val.tags) >= 0 )
		     ? ' <span class="question" tip="Repo has a Pages local site">P</span>'
		     : ''
		   ) +

		   '</td>' +

		   /* Description */
		   '<td>' + val.desc +
		   ( ( val.note )
		     ? ' <span class="question" tip="' + val.note + '">?</span>'
		     : ''
		   ) +
		   ( ( val.warning )
		     ? ' <span class="warning" tip="' + val.warning + '">!</span>'
		     : ''
		   ) +
		   '</td>' +

		   /* Type */
		   ( showTypeColumn
		     ? '<td class="centered">' + val.type + '</td>'
		     : '' ) +

		   /* BB10 */
		   '<td class="centered">' + (
		       ($.inArray("bb10", val.tags) >= 0)
			   ? '&check;'
			   :  ( ($.inArray("playbook", val.tags) >= 0)
				? '<span class="question" left="yes" tip="Tested on PlayBook, not yet on BB10">?</span>'
				: '')
		   ) +
		   '</td>' +

		   /* Samples */
		   ( showSamplesColumn
		     ? '<td class="centered">' + ( ($.inArray("samples", val.tags) >= 0) ? "&check;" : "") + '</td>'
		     : '' ) +
		   
		   /* Ports */
		   ( showPortColumn
		     ? ( '<td class="centered">' + ( ($.inArray("port", val.tags) >= 0) ? "&check;" : "") +
			 ( ( val.portinfo)
			   ? '<span class="question" left="yes" tip="' + val.portinfo + '">P</span>'
			   : '' ) +
			 '</td>')
		     : '' ) +

		   /* End of row */
		   '</tr>');
    });
    return items;
}
    

$(document).ready(function(){

    $.getJSON('/Community/All_Repos.json', function(data) {

	/* Table of Port Repos */

	/* Parse JSON data into items
	 * column: port, samples, type / tags: port, samples, type */
	items = parseRepoData(data, false, false, true, "yes", "any", "any");

	/* Inject into page */
	$('<table/>', {
	    'id': 'repoPortsTable',
	    html: items.join('')
	}).appendTo('#repoPorts').addClass("tablesorter");

	$("#repoPortsTable").tablesorter({
	    widgets: ['zebra', 'repeatHeaders']     // Stripping looking

	});

	/* Table of HTML5 Repos */

	/* Parse JSON data into items
	 * column: port, samples, type / tags: port, samples, type */
	items = parseRepoData(data, true, true, false, "any", "any", "html5");

	/* Inject into page */
	$('<table/>', {
	    'id': 'repoHtml5Table',
	    html: items.join('')
	}).appendTo('#repoHtml5').addClass("tablesorter");

	$("#repoHtml5Table").tablesorter({
	    widgets: ['zebra', 'repeatHeaders']     // Stripping looking
	});

	/* Table of Native Repos */

	/* Parse JSON data into items
	 * column: port, samples, type / tags: port, samples, type */
	items = parseRepoData(data, true, true, false, "any", "any", "native");

	/* Inject into page */
	$('<table/>', {
	    'id': 'repoNativeTable',
	    html: items.join('')
	}).appendTo('#repoNative').addClass("tablesorter");

	$("#repoNativeTable").tablesorter({
	    widgets: ['zebra', 'repeatHeaders']     // Stripping looking
	});

	/* Table of AIR Repos */

	/* Parse JSON data into items
	 * column: port, samples, type / tags: port, samples, type */
	items = parseRepoData(data, true, true, false, "any", "any", "air");

	/* Inject into page */
	$('<table/>', {
	    'id': 'repoAirTable',
	    html: items.join('')
	}).appendTo('#repoAir').addClass("tablesorter");

	$("#repoAirTable").tablesorter({
	    widgets: ['zebra', 'repeatHeaders']     // Stripping looking
	});

	/* Table of Other Repos */

	/* Parse JSON data into items
	 * column: port, samples, type / tags: port, samples, type */
	items = parseRepoData(data, true, true, true, "any", "any", "other");

	/* Inject into page */
	$('<table/>', {
	    'id': 'repoOtherTable',
	    html: items.join('')
	}).appendTo('#repoOther').addClass("tablesorter");

	/* Sort the tables */
	$("#repoOtherTable").tablesorter({
	    widgets: ['zebra', 'repeatHeaders']     // Stripping looking
	});

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

