<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
    <title>Title</title>
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
</head>
<body>
<div class="h-screen w-full flex flex-col items-center justify-start gap-20">
    <h1 class="mt-10 text-5xl text-red-300">Fruit Store</h1>
    <table class="w-[40%] h-[40%] border-24 border-red-300">
        <thead>
        <tr class="border-2 border-red-300">
            <th class="pr-40 h-12">Name</th>
            <th class="pr-40 h-12">Price</th>
        </tr>
        </thead>
        <tbody>
        <c:forEach var="fruit" items="${fruits}">
            <tr class="border-2 border-red-300">
                <td class="pl-11"><c:out value="${fruit.name}"></c:out></td>
                <td class="pl-11"><c:out value="${fruit.price}"></c:out></td>
            </tr>
        </c:forEach>
        </tbody>
    </table>
</div>
</body>
</html>
