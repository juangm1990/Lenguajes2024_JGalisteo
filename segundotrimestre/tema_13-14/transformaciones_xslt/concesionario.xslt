<?xml version="1.0" encoding="UTF-8"?>
<!-- © Juan Galisteo | Todos los derechos reservados -->
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="html" encoding="UTF-8" />

    <xsl:template match="/">
        <html>
            <head>
                <title>Estado del Concesionario</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        color: #004d00;
                        margin: 20px;
                    }
                    h1, h2 {
                        border-bottom: 1px solid #cccccc;
                        padding-bottom: 5px;
                    }
                    table {
                        width: 100%;
                        border-collapse: collapse;
                        margin-top: 20px;
                    }
                    th, td {
                        border: 1px solid #cccccc;
                        padding: 10px;
                        text-align: left;
                    }
                    th {
                        background-color: #f2f2f2;
                        font-weight: bold;
                    }
                    .summary {
                        margin: 20px 0;
                        font-weight: bold;
                    }
                </style>
            </head>
            <body>
                <h1>Estado del Concesionario</h1>
                
                <!-- Total de vehículos -->
                <div class="summary">
                    <p>Tenemos un total de <xsl:value-of select="count(concesionario/coche)" /> vehículos</p>
                    <p>Valorados en 
                        <xsl:value-of select="sum(concesionario/coche/precio)" /> Euros (sin IVA)
                    </p>
                </div>

                <!-- Listado ordenado -->
                <h2>Listado de vehículos ordenados por marca</h2>
                <table>
                    <tr>
                        <th>Marca</th>
                        <th>Matrícula</th>
                        <th>Metalizado</th>
                    </tr>
                    <!-- Ordenación por marca -->
                    <xsl:for-each select="concesionario/coche">
                        <xsl:sort select="marca" order="ascending" />
                        <tr>
                            <td><xsl:value-of select="marca" /></td>
                            <td><xsl:value-of select="@matricula" /></td>
                            <td>
                                <xsl:choose>
                                    <xsl:when test="color/@metalizado='S'">Metalizado</xsl:when>
                                    <xsl:otherwise>No metalizado</xsl:otherwise>
                                </xsl:choose>
                            </td>
                        </tr>
                    </xsl:for-each>
                </table>

                <p style="margin-top: 20px; font-size: 14px;">
                 
                </p>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>