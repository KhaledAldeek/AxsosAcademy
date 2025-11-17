<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<html>
<head>
    <title>Title</title>
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
</head>
<body>
<div class="w-full h-screen flex justify-center items-start pt-20">
    <div class="w-[80%] max-w-xl">
        <h1 class="text-4xl mb-10">New Dojo</h1>

        <form:form action="/create_dojo" method="post" class="flex flex-col gap-5" modelAttribute="dojo">
            <div class="flex items-center gap-3">
                <form:label class="text-xl" path="name" >Name:</form:label>
                <input type="text" name="name" class="border border-black px-2 py-1">
            </div>

            <button class="border border-black px-4 py-1 w-fit">
                Create
            </button>
        </form:form>
    </div>
</div>
</body>
</html>
