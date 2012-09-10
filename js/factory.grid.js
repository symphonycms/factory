/**
 * SYMPHONY FACTORY
 * A design framework for the Symphony Network
 * 
 * @link http://symphonycms.github.com/factory/
 */

(function($) {

/*-----------------------------------------------------------------------------
	The Grid:

	This object bundles functions to show and hide the grid used for 
	Symphony Factory. To enable the grid display, include this file into your
	project – all needed stylesheets will be loaded automatically.
	
	The grid can be toggled by appending `?grid` to the URL, 
	by clicking `a.show-grid` or by using the keyboard shortcut `ctrl + ,`.
-----------------------------------------------------------------------------*/

	var Grid = {
	
		elements: {},
		
		init: function() {
			Grid.elements.body = $('body');
		},
	
		toggleGrid: function() {
			if(Grid.elements.body.is('.show-grid')) {
				Grid.hideGrid();		
			}
			else {
				Grid.showGrid();		
			}
		},
		
		showGrid: function() {
			Grid.loadAssets();
			Grid.elements.body.addClass('show-grid');
		},
		
		hideGrid: function() {
			Grid.elements.body.removeClass('show-grid');
		},
		
		loadAssets: function() {
			var stylesheet = $('link[href="css/factory.grid.css"]');

			// Load missing grid styles
			if(stylesheet.length == 0) {
				$('<link />', {
					rel: 'stylesheet',
					type: 'text/css',
					href: 'css/factory.grid.css'
				}).appendTo('head');			
			}
		}
				
	};

	/* Initialisation */
	$(document).on('ready.factory', function ready() {

		Grid.init();
	
		// Toggle grid via URL
		if(location.search == '?grid') {
			Grid.showGrid();		
		}
		
		// Toggle grid from network navigation
		$('a.toggle-grid').on('click.factory', function toggleGridWithButton(event) {
			Grid.toggleGrid();
		});
	
		// Toggle grid with keyboard shortcut (using "ctrl + ,")
		$(document).on('keypress.factory', function toggleGridWithKeyboard(event) {
			console.log(event);
			if(event.which == 44 && event.ctrlKey == true) {
				Grid.toggleGrid();	
			}
		});
	});
	
})(jQuery.noConflict());
