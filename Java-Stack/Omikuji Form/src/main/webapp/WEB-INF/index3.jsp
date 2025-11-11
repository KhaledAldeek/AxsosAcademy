<%--
  Created by IntelliJ IDEA.
  User: KhaledAldeek
  Date: 11/10/2025
  Time: 10:24 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
<html>
<head>
    <title>Omikuji Form Show</title>
</head>
<body class="h-[95vh] w-full flex justify-center ">
    <div class="flex flex-col ">
        <h1 class="text-4xl text-center">Here's Your Omikuji!</h1>
        <h2 class="text-3xl text-center mt-10 border-2 w-[30%] bg-blue-200 mx-auto p-3 leading-[1.5]" >In ${years}, you will live in ${city} with ${person} as your roommate, ${hobby} for a living.
            The next time you see a ${livingThing}, you will have good luck. Also, ${message}</h2>
    </div>
</body>
</html>
