/**
 * SYMPHONY FACTORY
 * A design framework for the Symphony Network
 * 
 * @link http://symphonycms.github.com/factory/
 */
 
// Publicly declare Factory object
var Factory;

(function($) {

/*-----------------------------------------------------------------------------
	Symphony Factory:

	This object bundles all functions for Symphony Factory.
-----------------------------------------------------------------------------*/

	Factory = {
	
		elements: {},
		
		init: function() {
		
			// Cache elements
			Factory.elements.body = $('body');
			Factory.elements.network = $('#network');
			Factory.elements.networkToggle = Factory.elements.network.find('header h1');
			Factory.elements.drawer = Factory.elements.network.find('div.drawer');
		},
		
	/*-------------------------------------------------------------------------
		Network
	-------------------------------------------------------------------------*/
	
		toggleNetwork: function() {
			Factory.elements.drawer.slideToggle('fast', function() {
			
				// Store state
				Factory.storeSetting('network.opened', Factory.elements.drawer.is(':visible'));
			});
		},
		
		// If network drawer has been open last time, reopen it
		restoreNetworkState: function() {
			if(Factory.loadSetting('network.opened') === true){
				Factory.elements.drawer.show();
				
				// Store state
				Factory.storeSetting('network.opened', true);
			}
		},
		
	/*-------------------------------------------------------------------------
		Storage
	-------------------------------------------------------------------------*/
	
		storeSetting: function(name, value) {
			if(Modernizr.localstorage) {
				localStorage.setItem('symphony.' + name, value);
			}
		},
		
		loadSetting: function(name) {
			var value;
			
			if(Modernizr.localstorage) {
				value = localStorage.getItem('symphony.' + name);
				
				// Browsers store boolean values as string, convert to boolean
				if(value == 'true') {
					value = true;
				}
				if(value == 'false') {
					value = false;
				}
			}
			
			return value;
		}
		
	};

/*-----------------------------------------------------------------------------
	Initialisation
-----------------------------------------------------------------------------*/

	$(document).on('ready.factory', function ready() {
		Factory.init();
	
		// Toggle network
		$('#network').on('click.factory', function toggleNetwork(event) {
			var target = $(event.target);
			
			if(!target.is('a')) {
				event.preventDefault();
				Factory.toggleNetwork();
			}
		});
		
		// Get network state
		Factory.restoreNetworkState();
	});
	
})(jQuery.noConflict());
