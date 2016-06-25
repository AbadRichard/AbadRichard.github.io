<%-- 
    Document   : EdA
    Created on : 20/06/2016, 09:06:28 PM
    Author     : RICHARD
--%>
<%--inportamos las librerias--%>
<%@page import="Metodos.Date_Time"%>
<%@page import="com.panamahitek.PanamaHitek_Arduino"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
     <%!PanamaHitek_Arduino arduino = new PanamaHitek_Arduino();
        %>
        
    <body>
        <%
        try {
            if (request.getParameter("btnE") != null) {
                String fechaEInicio = request.getParameter("caja1");
                String horaEInicio = request.getParameter("caja2");
                String segEInicio = request.getParameter("caja3");
                String fechaEFinal = request.getParameter("caja4");
                String horaEFinal = request.getParameter("caja5");
                String segEFinal = request.getParameter("caja6");

                Date_Time or = new Date_Time();
                String Enviar = or.OrderByDateStart(fechaEInicio) + or.OrderByTime(horaEInicio) + segEInicio
                        + or.OrderByDateStart(fechaEFinal) + or.OrderByTime(horaEFinal) + segEFinal;
                out.write(Enviar);
               arduino.sendData(Enviar);
               response.sendRedirect("EA.html");
            }
        } catch (Exception ex) {
            out.write(ex+"");
            response.sendRedirect("EA.html");
        }
    %>
    </body>
</html>
