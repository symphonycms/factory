<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    
<xsl:import href="ninja.xsl" />
<xsl:import href="../../xsl/network.xsl" />
<xsl:import href="../../xsl/footer.xsl" />

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
			<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
			<title>Symphony Factory – <xsl:value-of select="data/title" /></title>
			<link href="http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800" rel="stylesheet" type="text/css" />
			<link media="screen" href="{$config/root}/css/codemirror.css" type="text/css" rel="stylesheet" />
			<link media="screen" href="{$config/root}/css/factory.css" type="text/css" rel="stylesheet" />
			<link media="screen" href="{$config/root}/docs/css/factory.docs.css" type="text/css" rel="stylesheet" />
			<script type="text/javascript" src="{$config/root}/js/jquery.js"></script>
			<script type="text/javascript" src="{$config/root}/js/modernizr.js"></script>
			<script type="text/javascript" src="{$config/root}/js/codemirror.js"></script>
			<script type="text/javascript" src="{$config/root}/js/factory.js"></script>
			<script type="text/javascript" src="{$config/root}/js/factory.grid.js"></script>
		</head>
		<body>
		
			<!-- Symphony Network -->
			<xsl:call-template name="network" />
		
			<!-- Current page -->
			<div id="site">
				
				<!-- Current header -->
				<xsl:choose>
					<xsl:when test="data/title = 'xPathr'">
						<header class="site-header wide">
							<div class="centered">
								<xsl:call-template name="site-header" />
							</div>
						</header>
					</xsl:when>
					<xsl:otherwise>
						<header class="site-header centered">
							<xsl:call-template name="site-header" />
						</header>
					</xsl:otherwise>
				</xsl:choose>

				<!-- Content -->
				<xsl:apply-templates select="data/content/*" mode="ninja" />
			</div>
			
			<!-- Footer -->
			<xsl:call-template name="footer" />
		</body>
	</html>
</xsl:template>

<!-- Images -->
<xsl:template match="img[not(starts-with(@src, 'http'))]" mode="ninja" priority="1">
	<img src="{$config/root}{@src}" width="{@width}" height="{@height}" alt="{@alt}" />
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

<!-- Site header -->
<xsl:template name="site-header">
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
</xsl:template>

</xsl:stylesheet>