<%-- 
    Document   : acP
    Created on : 20/06/2016, 08:56:11 PM
    Author     : RICHARD
--%>

<%@page import="com.panamahitek.PanamaHitek_Arduino"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        <%!PanamaHitek_Arduino arduino = new PanamaHitek_Arduino();
        %>
        <%  //activa el puerto
            try {
                if (request.getParameter("btnP") != null) {
                    String puertoLibre = request.getParameter("caja8");
                    arduino.arduinoTX(puertoLibre, 9600);
                    response.sendRedirect("EA.html");
                }
            } catch (Exception ex) {
                out.write(ex + "");
                response.sendRedirect("EA.html");
            }
        %>
    </body>
</html>
