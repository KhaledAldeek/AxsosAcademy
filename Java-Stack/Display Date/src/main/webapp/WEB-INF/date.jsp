<%@ page import="java.util.Date" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
    <title>Title</title>
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
    <script type="text/javascript" src="app.js"></script>
</head>
<body onload="alert('this is the date template')">
<% Date date = new Date(); %>
<div class="h-screen w-full flex items-center justify-center">
    <h1 class="text-center text-blue-500 text-5xl"><%=date%>
    </h1>
</div>
</body>
</html>