<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    
     <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
    <%@page isELIgnored="false" %>
    
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Update Vendor</title>
</head>
<body>
	
		<form action="updateVendor" method='post'>
		<pre>
			ID :    <input type='text' name='id' value="${vendor.id}" readonly/>
			Code:	<input type='text' name='code' value="${vendor.code}"/>
			Name:	<input type='text' name='name' value="${vendor.name}"/>
			Type: 	Urban :	<input type='checkbox' name='type' value='wholesale' ${vendor.type == 'urban' ? 'checked':''} />
					Rural : <input type='checkbox' name='type' value='retail' ${vendor.type == 'rural' ? 'checked':''}/>
			Email:  <input type='text' name='email' value="${vendor.email}"/>
			Phone: <input type='text' name='phone' value="${vendor.phone}"/>
			Address: <textarea name='address'>${vendor.address}</textarea>
					<input type='submit' value='save'/> 
		</pre>
		</form>
		
		<pre>
			${msg}
		</pre>
	<a href="displayVendors">Show All Locations</a>
</body>
</html>