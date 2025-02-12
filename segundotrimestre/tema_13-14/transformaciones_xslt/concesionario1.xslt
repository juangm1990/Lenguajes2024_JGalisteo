<?xml version="1.0" encoding="UTF-8"?>
<!-- © Juan Galisteo | Todos los derechos reservados -->
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="xml" omit-xml-declaration="no" indent="yes"/> 

    <xsl:template match="/concesionario">
        <Vehiculos>
            <xsl:for-each select="coche">
                <coche>
                    <modelo><xsl:value-of select="marca" /></modelo>
                    <matricula><xsl:value-of select="@matricula" /></matricula>
                    <metalizado color="{color/@metalizado}"><xsl:value-of select="color" /></metalizado>
                </coche>
            </xsl:for-each>
        </Vehiculos>
    </xsl:template>

</xsl:stylesheet>
