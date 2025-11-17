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

        <form:form action="/create_ninja" method="post" class="flex flex-col gap-5" modelAttribute="ninja">

            <form:select class="border-2 border-black px-2 py-1 w-[55%]" path = "dojo">
                <form:options items="${dojos}" itemLabel="name" itemValue="id"/>
            </form:select>


            <form:errors path="firstName"/>
            <div class="flex items-center gap-3">
                <form:label class="text-xl" path="firstName" >First Name:</form:label>
                <form:input type="text" class="border border-black px-2 py-1" path="firstName"/>
            </div>
            <form:errors path="lastName"/>
            <div class="flex items-center gap-3">
                <form:label class="text-xl" path="lastName" >Last Name:</form:label>
                <form:input type="text" class="border border-black px-2 py-1" path="lastName"/>
            </div>
            <form:errors path="dob"/>
            <div class="flex items-center gap-3">
                <form:label class="text-xl" path="dob" >DOB</form:label>
                <form:input type="date" class="border border-black px-2 py-1" path="dob"/>
            </div>

            <button class="border border-black px-4 py-1 w-fit">
                Create
            </button>
        </form:form>
    </div>
</div>
</body>
</html>
