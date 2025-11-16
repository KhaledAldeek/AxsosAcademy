<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--
  Created by IntelliJ IDEA.
  User: KhaledAldeek
  Date: 11/14/2025
  Time: 3:46 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>All Books</title>
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
</head>
<body class="bg-white text-black">

<div class="w-full flex justify-center mt-10">
    <div class="w-[80%]">
        <h1 class="text-4xl font-semibold mb-8 text-center">All Books</h1>
        <div class="flex justify-center">
            <div class="w-[90%] max-h-95 overflow-y-auto border-2 border-black">
                <table class="w-full border-collapse text-lg">
                    <thead class="bg-gray-100 sticky top-0">
                    <tr>
                        <th class="border-2 border-black px-4 py-3 text-left">ID</th>
                        <th class="border-2 border-black px-4 py-3 text-left">Title</th>
                        <th class="border-2 border-black px-4 py-3 text-left">Language</th>
                        <th class="border-2 border-black px-4 py-3 text-left"># Pages</th>
                    </tr>
                    </thead>

                    <tbody>
                        <c:forEach var="book" items="${books}">
                            <tr>
                                <td class="border-2 border-black px-4 py-3">${book.id}</td>
                                <td class="border-2 border-black px-4 py-3"><a class="underline text-blue-500" href="/books/${book.id}">${book.title}</a></td>
                                <td class="border-2 border-black px-4 py-3">${book.language}</td>
                                <td class="border-2 border-black px-4 py-3">${book.numberOfPages}</td>
                            </tr>
                        </c:forEach>
                    </tbody>
                </table>

            </div>
        </div>

    </div>
</div>

</body>
</html>
