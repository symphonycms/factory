<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    
<xsl:import href="../../xsl/network.xsl" />

<xsl:output method="html"
    omit-xml-declaration="yes"
    media-type="text/html"
    encoding="utf-8"
    doctype-system="about:legacy-compat" />
    
<!-- Configuration -->
<xsl:variable name="config" select="document('config.xml')/config"/>

<!-- Factory documentation -->
<xsl:template match="/">
	<html>
		<head>
			<title>Symphony Factory – <xsl:value-of select="data/title" /></title>
			<link href="http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800" rel="stylesheet" type="text/css" />
			<link media="screen" href="{$config/root}/css/prism.css" type="text/css" rel="stylesheet" />
			<link media="screen" href="{$config/root}/css/factory.css" type="text/css" rel="stylesheet" />
			<script type="text/javascript" src="{$config/root}/js/jquery.js"></script>
			<script type="text/javascript" src="{$config/root}/js/modernizr.js"></script>
			<script type="text/javascript" src="{$config/root}/js/prism.js"></script>
			<script type="text/javascript" src="{$config/root}/js/factory.js"></script>
			<script type="text/javascript" src="{$config/root}/js/factory.grid.js"></script>
		</head>
		<body>
		
			<!-- Symphony Network -->
			<xsl:call-template name="network" />
		
			<!-- Current page -->
			<div id="site" class="centered">
				<xsl:attribute name="class">
					<xsl:choose>
						<xsl:when test="data/content/@mode = 'wide'">wide</xsl:when>
						<xsl:otherwise>centered</xsl:otherwise>
					</xsl:choose>
				</xsl:attribute>
				
				<!-- Current header -->
				<header class="site">
					<h1>
						<span>Symphony</span>
						<xsl:text> </xsl:text>
						<xsl:choose>
							<xsl:when test="data/title/@mode = 'push'">
								<xsl:value-of select="data/title" />
							</xsl:when>
							<xsl:when test="data/title/@mode = 'empty'"></xsl:when>
							<xsl:otherwise>Factory</xsl:otherwise>
						</xsl:choose>
					</h1>
					<nav>
						<xsl:apply-templates select="document('navigation.xml')/data/nav">
							<xsl:with-param name="title" select="data/title/@id | data/title" />
						</xsl:apply-templates>
					</nav>
				</header>

				<!-- Content -->
				<xsl:copy-of select="data/content/*" />
			</div>
			
			<!-- Footer -->
			<footer id="footer">
				<div class="field centered">
					<p><strong>Symphony</strong> is your personally tailored content management framework <br /><a href="http://getsymphony.com">International Site</a> · <a href="">Requirements</a> · <a href="">MIT Licence</a></p>
					<p class="footer-links">
						<a href="http://github.com/symphonycms" class="logo-github">Github</a> <a href="http://twitter.com/symphonycms" class="logo-twitter">Twitter</a></p>
				</div>
			</footer>
		</body>
	</html>
</xsl:template>

<!-- Navigation -->
<xsl:template match="nav">
	<xsl:param name="title" />
	<a href="{$config/root}/docs/{@href}">
		<xsl:if test=". = $title">
			<xsl:attribute name="class">active</xsl:attribute>
		</xsl:if>
		<xsl:value-of select="." />
	</a>
</xsl:template>

</xsl:stylesheet>