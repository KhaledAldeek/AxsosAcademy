<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
    <title>Table</title>
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
</head>
<body class="w-full h-screen">
<h1 class="text-6xl w-full mx-auto text-center mt-20">Burbank Location Ninjas</h1>
<table class="w-[80%] mt-40 mx-auto border-collapse text-lg  border-2 border-black">
    <thead class="bg-gray-100 sticky top-0">
    <tr>
        <th class="h-12 border-2 border-black">First Name</th>
        <th class="h-12 border-2 border-black">Last Name</th>
        <th class="h-12 border-2 border-black">Age</th>
    </tr>
    </thead>

    <tbody>
    <c:forEach var="ninja" items="${ninjas}">
        <tr>
            <td class="h-12 border-2 border-black text-center">${ninja.firstName}</td>
            <td class="h-12 border-2 border-black text-center">${ninja.lastName}</td>
            <td class="h-12 border-2 border-black text-center">${ninja.dob}</td>
        </tr>
    </c:forEach>
    </tbody>
</table>
</body>
</html>
