/**
 * SYMPHONY FACTORY
 * A design framework for the Symphony Network
 * 
 * @link http://symphonycms.github.com/factory/
 */

(function($) {

/*-----------------------------------------------------------------------------
	Symphony Factory:

	This object bundles all functions for Symphony Factory.
-----------------------------------------------------------------------------*/

	var Factory = {
	
		elements: {},
		
		init: function() {
		
			// Cache elements
			Factory.elements.body = $('body');
			Factory.elements.network = $('#network');
			Factory.elements.networkToggle = Factory.elements.network.find('header h1');
			Factory.elements.drawer = Factory.elements.network.find('div.drawer');
		},
	
		toggleNetwork: function() {
			Factory.elements.drawer.slideToggle('fast', function() {
			
				// Store state
				Factory.storeNetworkState();	
			});
		},
		
		storeNetworkState: function(value) {
			if(Modernizr.localstorage) {
				localStorage.setItem('symphony.network.opened', Factory.elements.drawer.is(':visible'));
			}
		},
		
		restoreNetworkState: function() {
			if(Modernizr.localstorage) {
			
				// If network drawer has been open last time, reopen it
				if(localStorage.getItem('symphony.network.opened') == 'true'){
					Factory.elements.drawer.show();
					
					// Store state
					Factory.storeNetworkState();
				}
			}
		}
		
	};

	/* Initialisation */
	$(document).on('ready.factory', function ready() {
		Factory.init();
	
		// Toggle network
		$('#network h1 a, #user').on('click.factory', function toggleNetwork(event) {
			event.preventDefault();
			Factory.toggleNetwork();
		});
		
		// Get network state
		Factory.restoreNetworkState();
	});
	
})(jQuery.noConflict());
