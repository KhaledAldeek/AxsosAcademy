<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<html>
<head>
    <title>Rendering Books</title>
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
</head>
<body class="bg-white text-black antialiased">
<div class="max-w-3xl mx-auto p-6">

    <h1 class="text-4xl font-semibold mb-5">
        ${book.title}
    </h1>
    <p class="text-lg">
        <span class="font-bold">Description:</span>
        ${book.description}
    </p>
    <p class="text-lg mt-2">
        <span class="font-bold">Language:</span>
        ${book.language}
    </p>
    <p class="text-lg mt-2">
        <span class="font-bold">Number of Pages:</span>
        ${book.numberOfPages}
    </p>

</div>
</body>
</html>
