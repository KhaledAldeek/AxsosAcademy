<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="firm" uri="http://www.springframework.org/tags/form" %>
<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome - Registration & Login</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-50 min-h-screen flex items-center justify-center p-4">
<div class="w-full max-w-5xl">

    <div class="text-center mb-8">
        <h1 class="text-4xl font-bold text-gray-800 mb-2">Welcome!</h1>
        <p class="text-lg text-gray-600">Join our growing community.</p>
    </div>


    <div class="flex flex-col md:flex-row gap-6 justify-center">

        <div class="bg-blue-100 rounded-lg p-6 w-full md:w-96 shadow-md">
            <h2 class="text-2xl font-semibold text-gray-800 mb-6 text-center">Register</h2>
            <form:form class="space-y-4" method="post" action="/createUser" modelAttribute="user">
                <form:errors path="userName"/>
                <div>
                    <form:label for="reg-username" class="block text-sm font-medium text-gray-700 mb-1"
                                path="userName">Username:</form:label>
                    <form:input type="text" path="userName" id="reg-username"
                                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"/>
                </div>
                <form:errors path="email"/>
                <div>
                    <form:label for="reg-email" path="email"
                                class="block text-sm font-medium text-gray-700 mb-1">Email:</form:label>
                    <form:input path="email" type="email" id="reg-email"
                                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"/>
                </div>
                <form:errors path="password"/>
                <div>
                    <form:label path="password" for="reg-password"
                                class="block text-sm font-medium text-gray-700 mb-1">Password:</form:label>
                    <form:input path="password" type="password" id="reg-password"
                                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"/>
                </div>
                <form:errors path="confirmPassword"/>
                <div>
                    <form:label path="confirmPassword" for="reg-confirm"
                                class="block text-sm font-medium text-gray-700 mb-1">Confirm PW:</form:label>
                    <form:input path="confirmPassword" type="password" id="reg-confirm"
                                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"/>
                </div>
                <button type="submit"
                        class="w-full bg-gray-400 text-white font-medium py-2 px-4 rounded-md hover:bg-gray-500 transition duration-200">
                    Submit
                </button>
            </form:form>
        </div>

        <!-- Login Form -->
        <div class="bg-blue-100 rounded-lg p-6 w-full md:w-96 shadow-md">
            <h2 class="text-2xl font-semibold text-gray-800 mb-6 text-center">Log In</h2>
            <form:form class="space-y-4" action="/login" method="post" modelAttribute="loginUser">
                <form:errors path="loginEmail"/>
                <div>
                    <form:label path="loginEmail" for="login-email"
                                class="block text-sm font-medium text-gray-700 mb-1">Email:</form:label>
                    <form:input path="loginEmail" type="email" id="login-email"
                                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"/>

                </div>
                <form:errors path="loginPassword"/>
                <div>
                    <form:label path="loginPassword" for="login-password"
                                class="block text-sm font-medium text-gray-700 mb-1">Password:</form:label>
                    <form:input path="loginPassword" type="password" id="login-password"
                                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"/>

                </div>
                <button type="submit"
                        class="w-full bg-gray-400 text-white font-medium py-2 px-4 rounded-md hover:bg-gray-500 transition duration-200">
                    Submit
                </button>
            </form:form>
        </div>
    </div>
</div>
</body>
</html>
