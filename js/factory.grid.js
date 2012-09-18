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
-----------------------------------------------------------------------------*/

	var Grid = {
	
		elements: {},
		
		settings: {
			module: 82,
			moduleUnit: 'px',
			gutter: 20,
			gutterUnit: 'px',
			opticalAlignment: 10,
			opticalAlignmentUnit: 'px',
			grid: [],
			baseline: 2.4,
			baselineUnit: 'rem',
			baselineContext: '#site',
			baselineFullWidth: true
		},
		
		init: function(options) {
			
			// Apply settings
			$.extend(Grid.settings, options);
		
			// Cache elements
			Grid.elements.body = $('body');
			Grid.elements.grid = $('#grid');
			Grid.elements.baseline = $(Grid.settings.baselineContext);
			
			// Create grid
			Grid.loadAssets();
			Grid.createGrid();
			Grid.visualiseGrid();
			Grid.setBaselines();
		},
		
		createGrid: function(options) {
		
			// Clear existing grid
			Grid.clear();
		
			// Create grid
			Grid.elements.grid = $('<div />', {
				id: 'grid',
				class: 'centered'
			}).appendTo(Grid.elements.body);
		},
		
		visualiseGrid: function() {
			var module = $('<div class="module" />'),
				gutter = $('<div class="gutter" />'),
				alignment = $('<div class="alignment" />');
			
			// Add columns and gutter
			$.each(Grid.settings.grid, function addColumn(index, element) {
				var count = parseInt(element.match(/[0-9]+/g)[0]),
					column, width;
				
				// Add column
				if(element.indexOf('c') == 0) {
					width = Grid.settings.module * count + Grid.settings.gutter * (count - 1);
					column = module.clone().css({
						width: width + Grid.settings.moduleUnit
					}).attr('data-width', width).appendTo(Grid.elements.grid);
					
					// Add left optical alignment
					if(element.indexOf('l') > -1) {
						alignment.clone().css({
							width: Grid.settings.opticalAlignment + Grid.settings.opticalAlignmentUnit,
							left: (-Grid.settings.opticalAlignment - 1) + Grid.settings.opticalAlignmentUnit
						}).addClass('left').prependTo(column);
					}
					
					// Add right optical alignment
					if(element.indexOf('r') > -1) {
						alignment.clone().css({
							width: Grid.settings.opticalAlignment + Grid.settings.opticalAlignmentUnit,
							right: (-Grid.settings.opticalAlignment - 1) + Grid.settings.opticalAlignmentUnit
						}).addClass('right').appendTo(column);
					}
				}
				
				// Add gutter
				if(element.indexOf('g') == 0) {
					width = Grid.settings.gutter * count;
					gutter.clone().css({
						width: width + Grid.settings.gutterUnit
					}).attr('data-width', width).appendTo(Grid.elements.grid);
				}
			});
		},
		
		setBaselines: function() {
			Grid.elements.baseline.css({			
				'background-position': '0 0, 0 ' + (Grid.settings.baseline / 2) + Grid.settings.baselineUnit,
				'background-size': '100% ' + Grid.settings.baseline + Grid.settings.baselineUnit
			});
			
			// Set wide mode – note that this will set the context element to `position: relative`
			if(Grid.settings.baselineFullWidth === true) {
				Grid.elements.baseline.addClass('full-width');
			}
		},
		
		clear: function() {
			Grid.elements.grid.remove();
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
			Grid.elements.baseline.toggleClass('show-baselines');
			Factory.storeSetting('baselines', Grid.elements.baseline.is('.show-baselines'));
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
		
		// Create grid
		Grid.init({
			grid: ['g1', 'c2l', 'g1', 'c1l', 'g1', 'c1', 'g1', 'c1', 'g1', 'c1', 'g1', 'c1', 'g1', 'c1', 'g1', 'c1', 'g1', 'c1r', 'g1']
		});
	
		// Toggle grid
		$(document).on('keydown.factory', function toggle(event) {
			var grid;
			
			// Make sure that no additional keys are pressed
			if(event.metaKey !== true && event.altKey !== true && event.shiftKey !== true && event.ctrlKey !== true) {
			
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
