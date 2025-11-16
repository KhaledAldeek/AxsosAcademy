<%@ page import="com.example.burgertracker1.models.Burger" %>
<%@ page import="java.util.List" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<html>
<head>
    <title>Mat3amAls3adeh</title>
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
</head>
<body class="min-h-screen w-full">
<div class="w-[60%] mx-auto mt-10">
    <h1 class="text-4xl text-[#085394] font-bold ">Burger Tracker</h1>
    <div class="overflow-y-auto max-h-73 mt-5 border-2 border-black">
        <table class="w-full border-collapse text-lg  border-2 border-black">
            <thead class="bg-gray-100 sticky top-0">
            <tr>
                <th class="h-12 border-2 border-black">Burger Name</th>
                <th class="h-12 border-2 border-black">Restaurant Name</th>
                <th class="h-12 border-2 border-black">Rating(out of 5)</th>
            </tr>
            </thead>

            <tbody>
            <c:forEach var="burger" items="${burgers}">
                <tr>
                    <td class="h-12 border-2 border-black text-center">${burger.burgerName}</td>
                    <td class="h-12 border-2 border-black text-center">${burger.restaurantName}</td>
                    <td class="h-12 border-2 border-black text-center">${burger.rating}</td>
                </tr>
            </c:forEach>
            </tbody>
        </table>
    </div>
    <h1 class="text-4xl text-[#085394] font-bold mx-[15%] mt-5">Add Burger:</h1>
    <form:form action="addBurger" method="post" modelAttribute="burger"
               class="mx-[15%] mt-5 flex flex-col gap-5">
        <div><form:errors path="burgerName" cssClass="text-xl text-red-500"/></div>
        <div class="flex">
            <label class="text-2xl w-[30%]">Burger Name :</label>
            <form:input path="burgerName" placeholder="Burger Name:"
                        cssClass="border-2 p-2 w-[70%]"/>
        </div>
        <div><form:errors path="restaurantName" cssClass="text-xl text-red-500"/></div>
        <div class="flex">
            <label class="text-2xl w-[30%]">Restaurant Name :</label>
            <form:input path="restaurantName" placeholder="Restaurant Name:"
                        cssClass="border-2 p-2 w-[70%]"/>
        </div>
        <div><form:errors path="rating" cssClass="text-xl text-red-500"/></div>
        <div class="flex">
            <label class="text-2xl w-[30%]">Rating :</label>
            <form:input path="rating" type="number"
                        placeholder="1 - 5" cssClass="border-2 p-2 w-[70%]"/>
        </div>
        <div><form:errors path="notes" cssClass="text-xl text-red-500"/></div>
        <div class="flex">
            <label class="text-2xl w-[30%]">Notes :</label>
            <form:textarea path="notes" rows="4" placeholder="Write your notes..."
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
