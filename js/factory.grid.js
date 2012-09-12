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
			Grid.elements.grid = $('#grid');
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
			Grid.addGrid();
			Grid.elements.body.addClass('show-grid');
				
			// Store state
			Factory.storeSetting('grid', true);
		},
		
		hideGrid: function() {
			Grid.elements.body.removeClass('show-grid');
				
			// Store state
			Factory.storeSetting('grid', false);
		},
		
		addGrid: function() {
			if(Grid.elements.grid.length == 0) {
				var module = $('<div class="module" />');
			
				// Create grid
				Grid.elements.grid = $('<div />', {
					id: 'grid',
					class: 'centered'
				}).appendTo(Grid.elements.body);
				
				// Add columns
				module.clone().addClass('double').appendTo(Grid.elements.grid);
				module.clone().appendTo(Grid.elements.grid);
				module.clone().appendTo(Grid.elements.grid);
				module.clone().appendTo(Grid.elements.grid);
				module.clone().appendTo(Grid.elements.grid);
				module.clone().appendTo(Grid.elements.grid);
				module.clone().appendTo(Grid.elements.grid);
				module.clone().appendTo(Grid.elements.grid);
				module.clone().appendTo(Grid.elements.grid);
			}
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

/*-----------------------------------------------------------------------------
	Initialisation
-----------------------------------------------------------------------------*/

	$(document).on('ready.factory', function ready() {
		Grid.init();
		
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
	
		// Toggle grid via URL
		if(location.search == '?grid') {
			Grid.showGrid();		
		}
	
		// Restore grid, if it was loaded before
		if(Factory.loadSetting('grid') === true) {
			Grid.showGrid();		
		}
	});
	
})(jQuery.noConflict());
