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
			Factory.elements.body = $('body');
			Factory.elements.network = $('#network');
			Factory.elements.networkToggle = Factory.elements.network.find('header h1');
			Factory.elements.drawer = Factory.elements.network.find('div.drawer');
		},
	
		toggleNetwork: function() {
			console.log(Factory.elements.drawer.height());
			if(Factory.elements.drawer.height() > 0) {
				Factory.hideNetwork();		
			}
			else {
				Factory.showNetwork();		
			}
		},
		
		showNetwork: function() {
			var height = Factory.elements.drawer[0].scrollHeight;
			Factory.elements.drawer.height(height);
		},
		
		hideNetwork: function() {
			Factory.elements.drawer.height(0);
		}
		
	};

	/* Initialisation */
	$(document).on('ready.factory', function ready() {
		Factory.init();
	
		// Toggle network
		$('#network h1 a').on('click.factory', function toggleNetwork(event) {
			event.preventDefault();
			Factory.toggleNetwork();
		});
	
	});
	
})(jQuery.noConflict());
