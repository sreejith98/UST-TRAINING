<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
    <%@page isELIgnored="false" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>All Vendors List</title>
<link rel=“stylesheet” href="style.css" type=“text/css” media=“print”>
</head>
<body>
	<h2>Vendors : </h2>
	<table class="table" border='1'>
	<tr>
		<th>id</th>
		<th>code</th>
		<th>Name</th>
		<th>Type</th>
		<th>Email</th>
		<th>Phone</th>
		<th>Address</th>
		<th>Edit</th>
		<th>Delete</th>
	<tr>
	<c:forEach items="${vendors}" var= "vendor">
		<tr>
			<td>${vendor.id}</td>
			<td>${vendor.code}</td>
			<td>${vendor.name}</td>
			<td>${vendor.type}</td>
			<td>${vendor.email}</td>
			<td>${vendor.phone}</td>
			<td>${vendor.address}</td>
			<td><a href="showUpdate?id=${vendor.id}">Edit</a></td>
			<td><a href="deleteVendor?id=${vendor.id}">delete</a></td>
		</tr>
	</c:forEach>
	</table>
	<a href="showAdd">Add a Vendor</a>
</body>
</html>