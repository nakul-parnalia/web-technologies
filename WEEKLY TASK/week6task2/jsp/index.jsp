<html>
<body>
    <h2>Hello from JSP!</h2>
    <%
        String name = "Nakul";
        out.println("Welcome, " + name + "!");
        out.println("<br>Current Time: " + new java.util.Date());
    %>
</body>
</html>
