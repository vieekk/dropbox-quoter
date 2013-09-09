jQuery(document).ready(function ($) {
	$.get('sample.md', function (data) {
		$('#markdown').append(markdown.toHTML(data));
	});
});