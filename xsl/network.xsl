<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template name="network">
	<aside id="network" class="network-wrapper action-open">
	
		<!-- Main navigation -->
		<header class="network-toolbar field collapsed">
			<div class="centered">
				<h1 class="network-logo column one">
					<a href="{$config/root}/docs/about.xml">Symphony Network</a>
				</h1>
				<nav class="network-nav column">
					<a href="community.htm">Community</a>
					<a href="documentation.htm">Documentation</a>
					<a href="extensions.htm">Extensions</a>
					<a href="ninjas.htm">Ninjas</a>
					<a href="xpathr.htm">xPathr</a>
				</nav>
				<div id="user" class="network-user">
					<a href="http://getsymphony.com/get-involved/member/Allen/">
						<img src="{$config/root}/img/user.png" width="35" height="35" alt="Allen Chang" />
					</a>
					<p>
						<a href="http://getsymphony.com/get-involved/currently-online/" class="network-visitors">15</a>
						<xsl:text> + </xsl:text>
						<a href="http://getsymphony.com/get-involved/member/Allen/" class="network-username">Allen Chang</a>
					</p>
				</div>
			</div>
		</header>
		
		<!-- User profile -->
		<div class="field network-profile">
			<form class="centered">
				
				<!-- Gravatar -->
				<div class="column one">
					<img src="{$config/root}/img/user.png" width="176" height="176" alt="Allen Chang" />
					<p>Change at <a href="http://gravatar.com">Gravatar</a>.</p>
				</div>
				
				<!-- Information -->
				<fieldset class="column one large-two">
					<label for="form-name">Name</label>
					<input id="form-name" type="text" name="fields[name]" value="Allen Chang" />
					<label for="form-email-address">Email (Private)</label>
					<input id="form-email-address" type="text" name="fields[email-address]" value="team@getsymphony.com" />
					<label for="form-city">Location</label>
					<input id="form-city" type="text" name="fields[location]" value="Symphony Land" />
					<label for="form-website">Website</label>
					<input id="form-website" type="text" name="fields[website]" value="http://getsymphony.com" />
				</fieldset>
				<fieldset class="column two small-one">
					<label for="form-bio">Bio</label>
					<textarea rows="9" name="fields[bio]">Cras mattis consectetur purus sit amet fermentum.</textarea>
				</fieldset>
				<div id="submission">
					<input id="submit" type="submit" name="action[members-edit]" value="Submit Changes" />
					<a id="cancel" href="../../member/Nils/">Cancel and go back</a>
				</div>
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