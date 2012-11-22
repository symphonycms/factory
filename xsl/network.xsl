<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template name="network">
	<aside id="network">
	
		<!-- Main navigation -->
		<header class="network-toolbar field collapsed">
			<div class="centered">
				<h1 class="column one">
					<a href="{$config/root}/docs/about.xml">Symphony Network</a>
				</h1>
				<nav class="network-nav column">
					<a href="community.htm">Community</a>
					<a href="documentation.htm">Documentation</a>
					<a href="extensions.htm">Extensions</a>
					<a href="ninjas.htm">Ninjas</a>
					<a href="xpathr.htm">xPathr</a>
				</nav>
				<div id="user" class="network-profile">
					<img src="{$config/root}/img/user.png" width="36" height="36" alt="Allen Chang" />
					<p>Allen Chang <strong>+15</strong></p>
				</div>
			</div>
		</header>
		
		<!-- Site switcher -->
		<div class="field centered network-drawer">
		
			<!-- Symphony ressources -->
			<div class="column two">
				<h2>About Symphony</h2>
				<p>Symphony is an open source content management system for your websites and webapps. It makes complex things simple.</p>
				<div class="get-symphony">
					<a href="#">Get Symphony 2.3.0</a>
					<a href="#" class="icon fork">Git</a>
					<a href="#" class="icon download">Download</a>
				</div>
			</div>
			
			<!-- Symphony in other languages -->
			<div class="column one">
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
			
			<!-- Symphony user panel -->
			<div class="column one user">
				<h2>Hi there!</h2>
				<ul>
					 <li>
		                <a href="#">Your profile</a>
		              </li>
		              <li>
		                <a href="#">Change Password</a>
		              </li>
		              <li>
		                <a class="button" href="#">Logout</a>
		              </li>
		          </ul>
			</div>
		</div>
	</aside>
</xsl:template>

</xsl:stylesheet>