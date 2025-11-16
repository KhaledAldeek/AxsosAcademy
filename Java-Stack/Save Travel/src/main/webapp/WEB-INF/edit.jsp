<%@ page import="com.example.savetravel.models.Expense" %>
<%@ page import="java.util.List" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<html>
<head>
    <title>Edit Expense</title>
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
</head>
<body class="min-h-screen w-full">
<div class="w-[60%] mx-auto mt-10">

    <div class="flex justify-between">
        <h1 class="text-4xl text-[#085394] font-bold ml-41">Edit Expense</h1>
        <a class="text-4xl underline text-blue-500 mr-41" href="/expenses">Go Back</a>
    </div>

    <form:form modelAttribute="expense" action="/edit/${expense.id}" method="post"
               class="mx-[15%] mt-5 flex flex-col gap-5">

        <div><form:errors path="expenseName" cssClass="text-xl text-red-500"/></div>
        <div class="flex">
            <label class="text-2xl w-[30%]">Expense Name :</label>
            <form:input path="expenseName" placeholder="Expense Name"
                        cssClass="border-2 p-2 w-[70%]"/>
        </div>

        <div><form:errors path="vendor" cssClass="text-xl text-red-500"/></div>
        <div class="flex">
            <label class="text-2xl w-[30%]">Vendor :</label>
            <form:input path="vendor" placeholder="Vendor"
                        cssClass="border-2 p-2 w-[70%]"/>
        </div>

        <div><form:errors path="amount" cssClass="text-xl text-red-500"/></div>
        <div class="flex">
            <label class="text-2xl w-[30%]">Amount :</label>
            <form:input path="amount" type="number" placeholder="Amount"
                        cssClass="border-2 p-2 w-[70%]"/>
        </div>

        <div><form:errors path="description" cssClass="text-xl text-red-500"/></div>
        <div class="flex">
            <label class="text-2xl w-[30%]">Description :</label>
            <form:textarea path="description" rows="4" placeholder="Write description..."
                           cssClass="border-2 p-2 w-[70%]"></form:textarea>
        </div>

        <div class="flex">
            <div class="w-[90%]"></div>
            <button type="submit" class="border px-4 py-2 mt-3">Submit</button>
        </div>

    </form:form>
</div>
</body>
</html>
