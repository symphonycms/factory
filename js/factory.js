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
			Factory.elements.site = $('#site');
			Factory.elements.siteHeader = Factory.elements.site.find('> header');
			Factory.elements.siteTitle = Factory.elements.siteHeader.find('h1');
			Factory.elements.siteNav = Factory.elements.siteHeader.find('nav');
			Factory.elements.siteNavItem = Factory.elements.siteNav.find('a');
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
		Site navigation
	-------------------------------------------------------------------------*/
	
		navWidth: null,
		
		adjustNavigation: function(event) {
			
			// Store navigation width
			if(Factory.navWidth === null) {
				Factory.navWidth = Factory.elements.siteNav.width();
			}

			// Get available space		
			var space = Factory.elements.siteHeader.width() - Factory.elements.siteTitle.width() - Factory.navWidth;
			
			// Collapse navigation
			if(space < 10) {
				Factory.elements.siteHeader.addClass('collapsed');
			}
			
			// Expand navigation
			else {
				Factory.elements.siteHeader.removeClass('collapsed');
				Factory.elements.siteNav.removeClass('open');
			}
		},
		
		toggleNavigation: function(event) {
			Factory.elements.siteNav.toggleClass('open');
		},

	/*-------------------------------------------------------------------------
		Users
	-------------------------------------------------------------------------*/
		
		linkUsers: function() {
			var context = $(this);
			
			context.html(context.html().replace(/@([A-Za-z0-9-_]+)/g, function(username, name) {
				return '<a href="http://getsymphony.com/get-involved/member/' + name + '" class="user">' + username + '</a>';
			}));
		},
		
	/*-------------------------------------------------------------------------
		Date and Time
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
		Factory.elements.network.on('mouseenter.factory', Factory.showNetwork);
		Factory.elements.network.on('mouseleave.factory', Factory.hideNetwork);
	
		// Site navigation
		$(window).on('resize.factory', Factory.adjustNavigation).trigger('resize.factory');
		Factory.elements.siteNav.on('click.factory', Factory.toggleNavigation);
			
		// Set relative time
		$('time.relative').each(Factory.getRelativeTime);
		
		// Users
		$('.content p').each(Factory.linkUsers);
	});
	
})(jQuery.noConflict());
