$(document).ready(function(){
    $.getJSON('/Community/All_Repos.json', function(data) {
	var items = [];
	
	items.push('<thead>' +
		   '<tr>' +
		   '<th>Repository</th> <th>Description</th> <th>URL</th> <th>Platform</th>' +
		   '</tr>' +
		   '</thead>')

	$.each(data, function(key, val) {
	    items.push('<tr>' +
		       '<td>' + key + '</td>' +
		       '<td>' + val.desc + '</td>' +
		       '<td>' + val.url + '</td>' +
		       '<td>' + val.type + '</td>' +
		       '</tr>');
	});
    
	$('<table/>', {
	    'id': 'allrepos',
	    html: items.join('')
	}).appendTo('#contentbody');

    $("#allrepos").tablesorter();
    });
});

