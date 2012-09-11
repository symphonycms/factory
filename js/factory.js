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
		
			// Hide network
			if(Factory.elements.drawer.height() > 0) {
				Factory.hideNetwork();		
			}
			
			// Show network
			else {
				Factory.showNetwork();		
			}
		},
		
		showNetwork: function() {
			var height = Factory.elements.drawer[0].scrollHeight;
			Factory.elements.drawer.height(height);

			// Allow network hiding with transition
			Factory.elements.network.removeClass('open');
			
			// Store status
			Factory.storeNetworkState('opened');
		},
		
		hideNetwork: function() {
			Factory.elements.drawer.height(0);
			
			// Store status
			Factory.storeNetworkState('closed');
		},
		
		storeNetworkState: function(value) {
			if(Modernizr.localstorage) {
				localStorage.setItem("symphony.network.status", value);
			}
		},
		
		restoreNetworkState: function() {
			if(Modernizr.localstorage) {
			
				// If network drawer has been open last time, reopen it
				if(localStorage.getItem("symphony.network.status") == 'opened'){
					
					// Open drawer without transition
					Factory.elements.network.addClass('open');
					Factory.showNetwork();
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
