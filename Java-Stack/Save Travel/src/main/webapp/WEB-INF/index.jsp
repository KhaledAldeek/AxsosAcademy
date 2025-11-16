<%@ page import="com.example.savetravel.models.Expense" %>
<%@ page import="java.util.List" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<html>
<head>
    <title>Save Travels</title>
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
</head>
<body class="min-h-screen w-full">
<div class="w-[60%] mx-auto mt-10">
    <h1 class="text-4xl text-[#085394] font-bold ">Save Travels</h1>

    <div class="overflow-y-auto max-h-73 mt-5 border-2 border-black">
        <table class="w-full border-collapse text-lg border-2 border-black">
            <thead class="bg-gray-100 sticky top-0">
            <tr>
                <th class="h-12 border-2 border-black">Expense Name</th>
                <th class="h-12 border-2 border-black">Vendor</th>
                <th class="h-12 border-2 border-black">Amount</th>
                <th class="h-12 border-2 border-black">Description</th>
                <th class="h-12 border-2 border-black">Action</th>
            </tr>
            </thead>
            <tbody>
            <c:forEach var="expense" items="${expenses}">
                <tr>
                    <td class="h-12 border-2 border-black text-center"><a href="/expenses/${expense.id}"
                                                                          class="underline text-blue-500">${expense.expenseName}</a>
                    </td>
                    <td class="h-12 border-2 border-black text-center">${expense.vendor}</td>
                    <td class="h-12 border-2 border-black text-center">$${expense.amount}</td>
                    <td class="h-12 border-2 border-black text-center">${expense.description}</td>
                    <td class="h-12 border-1 border-black text-center flex justify-center items-center">
                        <a href="/edit/${expense.id}" class="underline text-blue-500 ">edit</a>
                        &nbsp;
                        <span class="text-2xl">|</span>
                        &nbsp;
                        <form:form action="/delete/${expense.id}" method="post">
                            <button type="submit"
                                    class="bg-red-800 text-white px-2 py-1 text-sm">Delete</button>
                        </form:form>
                    </td>
                </tr>
            </c:forEach>
            </tbody>
        </table>
    </div>

    <h1 class="text-4xl text-[#085394] font-bold mx-[15%] mt-5">Add Expense:</h1>
    <form:form action="addExpense" method="post" modelAttribute="expense"
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
