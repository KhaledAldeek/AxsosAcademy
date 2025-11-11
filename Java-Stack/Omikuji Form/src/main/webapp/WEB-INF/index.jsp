<%--
  Created by IntelliJ IDEA.
  User: KhaledAldeek
  Date: 11/10/2025
  Time: 9:40 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
    <title>Omikuji Form</title>
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
</head>
<body class="w-full h-[95vh] ">
    <h1 class="text-4xl text-center mt-7">Send an Omikuji!</h1>
    <form action="/omikuji" method="post" class="w-full h-[90%] flex flex-col justify-start items-center">
        <div class="w-[30%] h-[94%] mt-10 border-3 border-black flex flex-col justify-start items-center">
            <div class="flex flex-col w-full h-[13%] justify-evenly pl-5">
                <label class="text-xl">Pick any number between 5 to 25</label>
                <input type="number" name="years" class="w-[15%] border-3 border-black text-center" value="5" min="5" max="25">
            </div>
            <div class="flex flex-col w-full h-[13%] justify-evenly pl-5">
                <label class="text-xl">Enter the name of any city.</label>
                <input type="text" name="city" class="w-[60%] border-3 border-black pl-2" value="Nairobi">
            </div>
            <div class="flex flex-col w-full h-[13%] justify-evenly pl-5">
                <label class="text-xl">Enter the name of any real person</label>
                <input type="text" name="person" class="w-[60%] border-3 border-black pl-2" value="Bob Dylan">
            </div>
            <div class="flex flex-col w-full h-[13%] justify-evenly pl-5">
                <label class="text-xl">Enter professional endeavor or hobby:</label>
                <input type="text" name="hobby" class="w-[60%] border-3 border-black pl-2" value="selling origamis">
            </div>
            <div class="flex flex-col w-full h-[13%] justify-evenly pl-5">
                <label class="text-xl">Enter any type of living thing.</label>
                <input type="text" name="livingThing" class="w-[60%] border-3 border-black pl-2" value="ferret">
            </div>
            <div class="flex flex-col w-full h-[25%] justify-evenly pl-5">
                <label class="text-xl">Say something nice to someone:</label>
                <textarea class="w-[60%] h-[50%] border-3 border-black pl-2" name="message" >you don't realize how happy you make others.</textarea>
            </div>
            <h2 class="text-lg mr-55">send and show a friend</h2>
            <button type="submit" class="border-2 border-black bg-[rgb(89_126_170)] text-white ml-70 w-[20%]">Send</button>
        </div>
    </form>
</body>
</html>
