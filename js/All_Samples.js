$(document).ready(function(){
    $.getJSON('/Community/All_Samples.json', function(data) {
	var items = [];
	
	items.push('<thead>' +
		   '<tr>' +
		   '<th>Sample</th> <th>Description</th> <th>Repository</th> <th>URL</th> <th>Platform</th>' +
		   '</tr>' +
		   '</thead>')

	$.each(data, function(key, val) {
	    items.push('<tr>' +
		       '<td>' + key + '</td>' +
		       '<td>' + val.desc + '</td>' +
		       '<td>' + val.repo + '</td>' +
		       '<td>' + val.url + '</td>' +
		       '<td>' + val.type + '</td>' +
		       '</tr>');
	});
    
	$('<table/>', {
	    'id': 'allsamples',
	    html: items.join('')
	}).appendTo('#contentbody');

    $("#allsamples").tablesorter();
    });
});

