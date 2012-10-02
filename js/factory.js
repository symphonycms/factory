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
		
		showNetwork: function(event) {
			Factory.elements.drawer.stop(true).delay(500).slideDown('fast');
		},
		
		hideNetwork: function(event) {
			Factory.elements.drawer.stop(true).slideUp('fast');
		},
		
	/*-------------------------------------------------------------------------
		Network
	-------------------------------------------------------------------------*/
		
		getRelativeTime: function() {
			var time = $(this);
			
			// Get relative time distance
			time.text(Factory.parseTime(time.attr('datetime')));
		},

		parseTime: function(string) {
			var from = Date.parse(string),
				to = new Date().getTime(),
				distance = to - from;

			// Convert time to minutes
			time = Math.floor(distance / 60000);

			// Return relative time
			if(time < 1) {
				return 'just now';
			}
			if(time < 2) {
				return 'a minute ago';
			}
			if(time < 45) {
				return time + 'minutes ago';
			}
			if(time < 90) {
				return 'about 1 hour ago';
			}
			if(time < 1440) {
				return 'about' + Math.floor(time / 60) + ' hours ago';
			}
			if(time < 2880) {
				return '1 day about';
			}
			if(time < 43200) {
				return Math.floor(time / 1440) + ' days ago';
			}
			if(time < 86400) {
				return 'about a month ago';
			}
			if(time < 525960) {
				return Math.floor(time / 43200) + ' months ago';
			}
			if(time < 1051199) {
				return 'about a year ago';
			}
			else {
				return 'over ' + Math.floor(time / 525960) + ' years ago';
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
		$('#network')
			.on('mouseenter.factory', Factory.showNetwork)
			.on('mouseleave.factory', Factory.hideNetwork);
			
		// Set relative time
		$('time.relative').each(Factory.getRelativeTime);
	});
	
})(jQuery.noConflict());
