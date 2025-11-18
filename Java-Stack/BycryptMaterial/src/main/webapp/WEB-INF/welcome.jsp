<%--
  Created by IntelliJ IDEA.
  User: KhaledAldeek
  Date: 11/18/2025
  Time: 1:43 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Welcoming Page</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="h-[94vh] w-full flex items-center justify-center">
    <div class="text-5xl">
        <h1 class="mt-5 font-bold">Welcome,${currentUser.userName}</h1>
        <p class="mt-5">this is your dashboard. Nothing to see here yet.</p>
        <p class="mt-5"><a href="/welcome/logout" class="text-blue-500 underline text-3xl">logout</a></p>
    </div>
</body>
</html>
