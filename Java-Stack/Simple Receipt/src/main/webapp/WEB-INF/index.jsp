<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
    <title>Title</title>
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
</head>
<body>
    <div class="w-full h-screen flex flex-col items-start justify-center ml-100">
        <h1 class="text-5xl">Customer Name: <c:out value="${name}"></c:out> </h1>
        <h2 class="text-4xl">item name: <c:out value="${itemName}"></c:out></h2>
        <h2 class="text-4xl">price: <c:out value="${price}"></c:out></h2>
        <h2 class="text-4xl">desc: <c:out value="${description}"></c:out></h2>
        <h2 class="text-4xl">vendor: <c:out value="${vendor}"></c:out></h2>
    </div>
</body>
</html>
