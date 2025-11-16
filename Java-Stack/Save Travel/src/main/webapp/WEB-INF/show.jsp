<%@ page import="com.example.savetravel.models.Expense" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
    <title>Expense Details</title>
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
</head>
<body class="bg-white text-black antialiased">

<div class="max-w-3xl mx-auto p-6 mt-10">

    <div class="flex justify-between">
        <h1 class="text-4xl font-semibold mb-5 text-[rgb(8,83,148)]text-4xl font-semibold mb-5 text-[rgb(8,83,148)]">Expense Details</h1>
        <a class="text-blue-500 underline text-3xl" href="/">Go Back</a>
    </div>
    <p class="mb-5 mt-5 text-3xl">
        <span class="font-bold">Expense Name:</span> ${expense.expenseName}
    </p>
    <p class="text-3xl mb-5 ">
        <span class="font-bold">Vendor:</span> ${expense.vendor}
    </p>
    <p class="text-3xl mb-5">
        <span class="font-bold">Amount Spent:</span> $${expense.amount}
    </p>
    <p class="text-3xl mb-5">
        <span class="font-bold">Description:</span> ${expense.description}
    </p>


</div>

</body>
</html>
