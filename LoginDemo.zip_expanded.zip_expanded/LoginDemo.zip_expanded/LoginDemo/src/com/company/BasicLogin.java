package com.company;

import java.io.*;
import javax.servlet.*;

import javax.servlet.ServletException;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class BasicLogin extends HttpServlet {


	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.setContentType("text/html");
		PrintWriter out = response.getWriter();
		
		String username = request.getParameter("username");
		String password = request.getParameter("password");
		
		if(username.equals("Sreejith"))
		{
			if(password.equals("12345"))
			{
				//out.println("Login Success");
				RequestDispatcher rs = request.getRequestDispatcher("profile.html");
	            rs.forward(request, response);
			}
			else {
				out.println("Wrong Password");
			}
		}
		else {
			out.println("Wrong Username");
		}
		
	}
}
