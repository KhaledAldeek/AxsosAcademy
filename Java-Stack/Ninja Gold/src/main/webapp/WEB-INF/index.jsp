<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page import="java.util.*" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ninja Gold</title>
    <!-- Tailwind -->
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
</head>

<body class=" w-[100%] h-[100vh] flex flex-col">
<div class="flex gap-5 mt-6 ml-12">
    <p class="text-xl font-bold">Your Gold:</p>
    <input type="text" readonly class="border-2 border-black text-center w-20"
           value="${yourGold}">
</div>
<div class=" w-[94%] h-[40%] mt-10 ml-12 flex justify-between items-center">
    <div class="flex flex-col bg-white w-[23%] h-[100%] border-3 border-black justify-around items-center">
        <form action="" method="post" class="width-full h-full flex flex-col justify-around items-center">
            <h3 class="text-3xl">Farm</h3>
            <p class="text-2xl">(earns 10-20 gold)</p>
            <input type="submit" value="Find Gold!" class="border-3 shadow-lg w-24 h-10 text-l font-bold">
            <input name="hidden" type="hidden" value="farm">
        </form>
    </div>
    <div class="flex flex-col bg-white w-[23%] h-[100%] border-3 border-black justify-around items-center">
        <form action="" method="post" class="width-full h-full flex flex-col justify-around items-center">
            <h3 class="text-3xl">Cave</h3>
            <p class="text-2xl">(earns 10-20 gold)</p>
            <input type="submit" value="Find Gold!" class="border-3 shadow-lg w-24 h-10 text-l font-bold">
            <input name="hidden" type="hidden" value="cave">
        </form>
    </div>
    <div class="flex flex-col bg-white w-[23%] h-[100%] border-3 border-black justify-around items-center">
        <form action="" method="post" class="width-full h-full flex flex-col justify-around items-center">
            <h3 class="text-3xl">House</h3>
            <p class="text-2xl">(earns 10-20 gold)</p>
            <input type="submit" value="Find Gold!" class="border-3 shadow-lg w-24 h-10 text-l font-bold">
            <input name="hidden" type="hidden" value="house">
        </form>
    </div>
    <div class="flex flex-col bg-white w-[23%] h-[100%] border-3 border-black justify-around items-center">
        <form action="" method="post" class="width-full h-full flex flex-col justify-around items-center">
            <h3 class="text-3xl">Quest</h3>
            <p class="text-2xl">(earns/takes 0-50 gold)</p>
            <input type="submit" value="Find Gold!" class="border-3 shadow-lg w-24 h-10 text-l font-bold">
            <input name="hidden" type="hidden" value="quest">
        </form>
    </div>
</div>

<p class="text-xl font-bold mt-5 ml-12">Activities:</p>
<div class="w-[94%] h-[30%] border-3 ml-12 mt-5 border-black overflow-y-auto">
    <%
        List<String> activities = (List<String>) session.getAttribute("activities");
        if (activities != null) {
            for (String activity : activities) {
    %>
    <% if (activity.toLowerCase().contains("lost")) { %>
    <p style="color: red; margin-left: 20px;"><%= activity %>
    </p>
    <% } else { %>
    <p style="color: green; margin-left: 20px;"><%= activity %>
    </p>
    <% } %>
    <%
            }
        }
    %>
    <%--    {% for activity in request.session.activities %}--%>
    <%--    {% if "Lost" in activity %}--%>
    <%--    <p class="text-red-500 ml-5">{{ activity }}</p>--%>
    <%--    {% else %}--%>
    <%--    <p class="text-green-500 ml-5">{{ activity }}</p>--%>
    <%--    {% endif %}--%>
    <%--    {% endfor %}--%>
</div>

</body>

</html>
