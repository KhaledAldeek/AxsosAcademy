<%@ page import="java.time.LocalTime" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
    <title>Title</title>
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
    <script type="text/javascript" src="app.js"></script>
</head>
<body onload="alert('this is the time template')">
<% LocalTime currentTime = LocalTime.now(); %>
<div class="h-screen w-full flex items-center justify-center">
    <h1 class="text-center text-blue-500 text-5xl"><%=currentTime%>
    </h1>
</div>
</body>
</html>
