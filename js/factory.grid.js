/**
 * SYMPHONY FACTORY
 * A design framework for the Symphony Network
 * 
 * @link http://symphonycms.github.com/factory/
 */

(function($) {
	$(document).on('ready.factory', function ready() {
	
		// Show grid
		if(location.search == '?grid') {
	
			// Load styles
			$('<link />', {
				rel: 'stylesheet',
				type: 'text/css',
				href: 'css/factory.grid.css'
			}).appendTo('head');
			
			// Initialise grid
			$('body').addClass('show-grid');
		}
	});
})(jQuery.noConflict());
