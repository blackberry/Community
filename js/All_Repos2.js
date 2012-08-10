/* Code here should be the same as All_Repos.js */

/* This version was actually first and then I fixed a couple of issues and generalized it for All_Repos.js */

$(document).ready(function(){
    $.getJSON('/Community/All_Repos.json', function(data) {
	var items = [];
	
	/* total hack on the overlap; need to fix */
	items.push('<thead>' +
		   '<tr>' +
		   '<th>Repository</th>' + 
		   '<th>Description</th>' +
		   '<th>Type</th>' +
		   '<th>BB10</th>' +
		   '<th>Sample</th>' +
		   '<th>Port</th>' +
/* REMOVED for now
		   '<th>Tags&nbsp;&nbsp;&nbsp;</th>' +
*/
		   '</tr>' +
		   '</thead>')

	$.each(data, function(key, val) {
	    items.push('<tr>' +

		       /* Repository */
		       '<td><span style="white-space: nowrap;"><a href="' + val.url + '" target="_blank">' + key + '</a></span>' +

		       ' <span style="white-space: nowrap;">'+
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
		          ( ( val.tags )
			    ? ' <a href="' + val.url + '#readme"><span class="question" tip="' + val.tags + '">T</span></a>'
			    : '' ) +
		       '</span>' +

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

		       /* Platform */
		       '<td class="centered">' + val.type + '</td>' +

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
		       '<td class="centered">' + ( ($.inArray("samples", val.tags) >= 0) ? "&check;" : "") + '</td>' +

		       /* Ports */
		       '<td class="centered">' + ( ($.inArray("port", val.tags) >= 0) ? "&check;" : "") +
		       ( ( val.portinfo)
			 ? '<span class="question" left="yes" tip="' + val.portinfo + '">P</span>'
			 : '' ) +
		       '</td>' +

		       /* Tags */
		       /* REMOVED for now
		       '<td class="centered">' +
		       ( ( val.tags )
			 ? '<a href="' + val.url + '#readme"><span class="question" left="yes" tip="' + val.tags + '">T</span></a>'
			 : '' ) +
		       '</td>' +
		       */

		       '</tr>');
	});
    
	$('<table/>', {
	    'id': 'allrepos',
	    html: items.join('')
	}).appendTo('#repoAll').addClass("tablesorter");


	// add new widget called repeatHeaders 
	$.tablesorter.addWidget({ 
	    // give the widget a id 
	    id: "repeatHeaders", 
	    // format is called when the on init and when a sorting has finished 
	    format: function(table) { 
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

	/* Sort the table */
	$("#allrepos").tablesorter({
	    // Stripping looking
	    widgets: ['zebra', 'repeatHeaders']
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

