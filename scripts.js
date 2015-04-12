for (var i=0; i<guardianHeroinData.length; i++) {
	var rowData = guardianHeroinData[i];
	
	var $template = $('<div class="quoteContainer">'+ // put $ in front of var template to signify it's JQuery-fied.
				'<div class="mainQuote">'+rowData.mainQuote+'</div>'+
				'<div class="readMore">Read More</div>'+
				'<div class="moreInfo">'+
					'<div class="wholeQuote">'+rowData.wholeQuote+'</div>'+
					'<div class="source">'+rowData.source+'</div>'+
					'<div class="yearsClean">'+rowData.yearsClean+'</div>'+
					'<div class="location">'+rowData.location+'</div>'+
				'</div>'+
			'</div>');
			
	$template.find(".readMore").on("click", toggleContent);
			
	$('#dataContainer').append($template);
			
}

	function toggleContent(e) {
		$quoteContainer = $(this).parent();
		
		if ($quoteContainer.hasClass("expanded")) { //if quoteContainer has class 'expanded' (you can see content), remove content
			$quoteContainer.removeClass("expanded");
		} else { //if quoteContainer doesn't have class expanded (you can't see content), show content
			$quoteContainer.addClass("expanded");
		}
	}