$(document).ready(function(){
    $.getJSON('/Community/All_Repos.json', function(data) {
	var items = [];
	
	items.push('<thead>' +
		   '<tr>' +
		   '<th>Repository</th>' + 
		   '<th>Description</th>' +
		   '<th>Platform</th>' +
		   '<th>BB10</th>' +
		   '<th>Sample</th>' +
		   '<th>Port</th>' +
		   '<th>Tags</th>' +
		   '</tr>' +
		   '</thead>')

	$.each(data, function(key, val) {
	    items.push('<tr>' +

		       /* Repository */
		       '<td><a href="' + val.url + '" target="_blank">' + key + '</a>' +
		       ( ( val.branches && val.branches.length > 1 )
			 ? ' <span class="question" tip="' +

			 val.branches +

			 ( ( val.branchinfo )
			   ? "<p>" + val.branchinfo + "</p>"
			   : ''
			 ) +

			 '">B</span>'
			 : ''
		       ) +
		       '</td>' +

		       /* Description */
		       '<td>' + val.desc +
		          ( ( val.note )
			    ? ' <span class="question" tip="' + val.note + '">?</span>'
			    : ''
			  ) +
		       '</td>' +

		       /* Platform */
		       '<td>' + val.type + '</td>' +

		       /* BB10 */
		       '<td>' + ( ($.inArray("bb10", val.tags) >= 0) ? "&check;" : "") + '</td>' +

		       /* Samples */
		       '<td>' + ( ($.inArray("samples", val.tags) >= 0) ? "&check;" : "") + '</td>' +

		       /* Ports */
		       '<td>' + ( ($.inArray("port", val.tags) >= 0) ? "&check;" : "") +
		       ( ( val.portinfo)
			 ? '<span class="question" left="yes" tip="' + val.portinfo + '">P</span>'
			 : '' ) +
		       '</td>' +

		       /* Tags */
		       '<td>' +
		       ( ( val.tags )
			 ? '<a href="' + val.url + '#readme"><span class="question" left="yes" tip="' + val.tags + '">T</span></a>'
			 : '' ) +
		       '</td>' +

		       '</tr>');
	});
    
	$('<table/>', {
	    'id': 'allrepos',
	    html: items.join('')
	}).appendTo('#contentbody').addClass("tablesorter");

	/* Sort the table */
	$("#allrepos").tablesorter({
	    // Stripping looking
	    widgets: ['zebra']
	});

	/* Add the tooltips */
	$("span.question").hover(function() {
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

