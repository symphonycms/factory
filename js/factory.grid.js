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
			
			// Prepare grid
			Grid.loadAssets();
			Grid.addGrid();
		},
		
		addGrid: function() {
			if(Grid.elements.grid.length == 0) {
				var module = $('<div class="module" />');
				var gutter = $('<div class="gutter" />');
			
				// Create grid
				Grid.elements.grid = $('<div />', {
					id: 'grid',
					class: 'centered'
				}).appendTo(Grid.elements.body);
				
				// Add columns
				gutter.clone().appendTo(Grid.elements.grid);
				module.clone().addClass('double left-alignment').appendTo(Grid.elements.grid);
				gutter.clone().appendTo(Grid.elements.grid);
				module.clone().addClass('left-alignment').appendTo(Grid.elements.grid);
				gutter.clone().appendTo(Grid.elements.grid);
				module.clone().appendTo(Grid.elements.grid);
				gutter.clone().appendTo(Grid.elements.grid);
				module.clone().appendTo(Grid.elements.grid);
				gutter.clone().appendTo(Grid.elements.grid);
				module.clone().appendTo(Grid.elements.grid);
				gutter.clone().appendTo(Grid.elements.grid);
				module.clone().appendTo(Grid.elements.grid);
				gutter.clone().appendTo(Grid.elements.grid);
				module.clone().appendTo(Grid.elements.grid);
				gutter.clone().appendTo(Grid.elements.grid);
				module.clone().appendTo(Grid.elements.grid);
				gutter.clone().appendTo(Grid.elements.grid);
				module.clone().addClass('right-alignment').appendTo(Grid.elements.grid);
				gutter.clone().appendTo(Grid.elements.grid);
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
		},
	
		toggleGrid: function(show) {
			Grid.elements.body.toggleClass('show-grid', show);
			
			// Status
			var status = Grid.elements.body.is('.show-grid');
			Factory.storeSetting('grid', status);
			
			// Hide labels and columns, if grid is hidden
			if(status === false) {
				Grid.toggleLabels(false);
				Grid.toggleColumns(false);
			}
		},
		
		toggleBaselines: function() {
			Grid.elements.body.toggleClass('show-baselines');
			Factory.storeSetting('baselines', Grid.elements.body.is('.show-baselines'));
		},

		toggleLabels: function(show) {
			Grid.elements.body.toggleClass('show-labels', show);
			Factory.storeSetting('labels', Grid.elements.body.is('.show-labels'));
		},

		toggleColumns: function(show) {
			Grid.elements.body.toggleClass('show-columns', show);
			Factory.storeSetting('columns', Grid.elements.body.is('.show-columns'));
		}
				
	};

/*-----------------------------------------------------------------------------
	Initialisation
-----------------------------------------------------------------------------*/

	$(document).on('ready.factory', function ready() {
		Grid.init();
	
		// Toggle grid
		$(document).on('keydown.factory', function toggle(event) {
			var grid;
		
			// Show/hide labels, shortcut = l
			if(event.which == 76) {
				grid = true;
				Grid.toggleLabels();	
			}
		
			// Show/hide columns, shortcut = c
			if(event.which == 67) {
				grid = true;
				Grid.toggleColumns();	
			}
		
			// Show/hide baselines, shortcut = b
			if(event.which == 66) {
				Grid.toggleBaselines();	
			}
		
			// Show/hide grid, shortcut = g
			if(event.which == 71 || grid === true) {
				Grid.toggleGrid(grid);	
			}
		});
		
		// Restore grid, if it was loaded before
		var restore;
	
		// Labels
		if(Factory.loadSetting('labels') === true) {
			restore = true;
			Grid.toggleLabels();		
		}
	
		// Columns
		if(Factory.loadSetting('columns') === true) {
			restore = true;
			Grid.toggleColumns();		
		}
	
		// Baselines
		if(Factory.loadSetting('baselines') === true) {
			Grid.toggleBaselines();		
		}
	
		// Restore grid, if it was loaded before
		if(Factory.loadSetting('grid') === true || restore === true) {
			Grid.toggleGrid(restore);		
		}
	});
	
})(jQuery.noConflict());
