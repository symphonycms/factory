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
			Factory.elements.networkToolbar = Factory.elements.network.find('.network-toolbar');
			Factory.elements.networkLogo = Factory.elements.networkToolbar.find('.network-logo');
			Factory.elements.networkNav = Factory.elements.network.find('.network-nav');			
			Factory.elements.networkUser = Factory.elements.network.find('.network-user');			
			Factory.elements.networkUserImg = Factory.elements.networkUser.find('img');			
			Factory.elements.drawer = Factory.elements.network.find('.network-drawer');
			Factory.elements.site = $('#site');
			Factory.elements.siteHeader = Factory.elements.site.find('> header');
			Factory.elements.siteTitle = Factory.elements.siteHeader.find('h1');
			Factory.elements.siteNav = Factory.elements.siteHeader.find('nav');
			Factory.elements.siteNavItem = Factory.elements.siteNav.find('a');
		},

	/*-------------------------------------------------------------------------
		Network user
	-------------------------------------------------------------------------*/
	
		userWidth: 0,
	
		adjustNetworkUser: function(event) {
					
			// Store user profile width
			if(Factory.userWidth == 0) {
				Factory.userWidth = Factory.elements.networkUser.find('p').outerWidth() + Factory.elements.networkUserImg.width();
			}
		
			var space = Factory.elements.network.innerWidth() - Factory.elements.networkLogo.width() - Factory.userWidth;
						
			// Substract navigation width, if it's not wrapping
			if(Factory.elements.networkToolbar.height() <= Factory.elements.networkUserImg.height()) {
				space = space - Factory.elements.networkNav.width();
			}
			
			// Collapse user details
			if(space < Factory.userWidth) {
				Factory.elements.networkUser.addClass('collapsed');
			}
			
			// Expand user details
			else {
				Factory.elements.networkUser.removeClass('collapsed');
			}
		},
		
	/*-------------------------------------------------------------------------
		Site navigation
	-------------------------------------------------------------------------*/
	
		navWidth: 0,
		
		adjustNavigation: function(event) {
			
			// Store navigation width
			if(Factory.navWidth == 0) {
				Factory.elements.siteNavItem.each(function() {
					Factory.navWidth += $(this).outerWidth();
				});
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

		$(window).on('resize.factory', Factory.adjustNetworkUser).trigger('resize.factory');
	
		// Site navigation
		$(window).on('resize.factory', Factory.adjustNavigation).trigger('resize.factory');
		Factory.elements.siteNav.on('click.factory', Factory.toggleNavigation);
			
		// Set relative time
		$('time.relative').each(Factory.getRelativeTime);
		
		// Users
		$('.content p').each(Factory.linkUsers);
	});
	
})(jQuery.noConflict());
