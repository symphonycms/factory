<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template name="network">
	<aside id="network">
	
		<!-- Main navigation -->
		<header class="network-toolbar field collapsed">
			<div class="centered">
				<h1 class="network-logo column one">
					<a href="{$config/root}/docs/about.xml">Symphony Network</a>
				</h1>
				<nav class="network-nav column">
					<a href="{$config/root}/docs/examples/community.xml">Community</a>
					<a href="{$config/root}/docs/examples/documentation.xml">Documentation</a>
					<a href="{$config/root}/docs/examples/extensions.xml">Extensions</a>
					<a href="{$config/root}/docs/examples/ninjas.xml">Ninjas</a>
					<a href="{$config/root}/docs/examples/xpathr.xml">xPathr</a>
				</nav>
				<div id="user" class="network-user">
					<a href="http://getsymphony.com/get-involved/member/Allen/">
						<img src="{$config/root}/img/user.png" width="35" height="35" alt="Allen Chang" />
					</a>
					<p>
						<a href="http://getsymphony.com/get-involved/currently-online/" class="network-visitors">15</a>
						<xsl:text> + </xsl:text>
						<a class="network-username">Allen Chang</a>
					</p>
				</div>
			</div>
		</header>
		
		<!-- User profile -->
		<div class="field network-profile">
			<form class="centered">
				
				<!-- Gravatar -->
				<div class="network-gravatar column one">
					<img src="{$config/root}/img/user.png" width="174" height="174" alt="Allen Chang" />
					<p>Change your avatar at <a href="http://gravatar.com">Gravatar</a>.</p>
				</div>
				
				<!-- Information -->
				<fieldset class="column one large-two">
					<label for="profile-username" class="restricted">Username</label>
					<input id="profile-username" type="text" name="fields[username]" value="Allen" readonly="readonly" />
					<label for="profile-name">Name</label>
					<input id="profile-name" type="text" name="fields[name]" value="Allen Chang" />
					<label for="profile-email-address">Email (Private)</label>
					<input id="profile-email-address" type="text" name="fields[email-address]" value="team@getsymphony.com" />
					<label for="profile-city">Location</label>
					<input id="profile-city" type="text" name="fields[location]" value="Symphony Land" />
				</fieldset>
				<fieldset class="column two small-one">
					<label for="profile-website">Website</label>
					<input id="profile-website" type="text" name="fields[website]" value="http://getsymphony.com" />
					<label for="profile-bio">Bio</label>
					<textarea rows="7" name="fields[bio]">Cras mattis consectetur purus sit amet fermentum.</textarea>
					<div class="profile-controls">
						<button id="submit-profile" class="button-save" type="submit" name="action[members-edit]">Save Profile</button>
						<a class="button-cancel" href="../../member/Nils/">Cancel</a>
					</div>
				</fieldset>
			</form>
		</div>
		
		<!-- Site switcher -->
		<div class="field centered network-drawer">
		
			<!-- Symphony ressources -->
			<div class="column three medium-two">
				<h2>About Symphony</h2>
				<p>Symphony is an open source content management system for your websites and webapps. It makes complex things simple.</p>
				<div class="get-symphony">
					<a href="https://github.com/symphonycms/symphony-2">Get Symphony 2.3.0</a>
					<a href="https://github.com/symphonycms/symphony-2" class="icon-fork">Fork<span class="medium-hide"> on Github</span></a>
					<a href="https://github.com/symphonycms/symphony-2/archive/master.zip" class="icon-download"><span class="medium-hide">Download </span>ZIP</a>
				</div>
			</div>
			
			<!-- Symphony in other languages -->
			<div class="column one small-two">
				<h2>Regions</h2>
				<ul>
					<li>
						<a href="#">Germany</a>
					</li>
					<li>
						<a href="#">Italy</a>
					</li>
					<li>
						<a href="#">Romania</a>
					</li>
					<li>
						<a href="#">United Kingdom</a>
					</li>
				</ul>
			</div>
		
			<!-- Symphony ressources -->
			<div class="column one">
				<h2>Services</h2>
				<ul>
					<li>
						<a href="#">Github</a>
					</li>
					<li>
						<a href="#">Twitter</a>
					</li>
					<li>
						<a href="#">Vimeo</a>
					</li>
					<li>
						<a href="#">Flickr</a>
					</li>
				</ul>
			</div>
		</div>
	</aside>
</xsl:template>

</xsl:stylesheet>