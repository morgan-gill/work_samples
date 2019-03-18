/*********************************************************************************
* Project: < PEER_CONNECT >
* Assignment: < Assignment 1 >
* Author(s): < Jerome Ching, Morgan Gill, Ankur Aggarwal>
* Student Number: < 100530184, 100566959, 101095272 >
* Date: < October 27th, 2018 >
* Description: < A simple servlet that attempts authenticate the user >
* 			   < and the information that they've provided. >
*********************************************************************************/

package login;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import utils.DatabaseAccess;
import utils.VerifyRecaptcha;


@WebServlet("/authentication")
public class Authentication extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public Authentication() {
        super();
    }

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		String user = request.getParameter("user");
		String passwd = request.getParameter("passwd");
		String recaptchaResponse = request.getParameter("g-recaptcha-response");
		
		//attempt to login.  If errors are thrown, redirect to invalid login
		try {
			if (DatabaseAccess.loginUser(user, passwd) && VerifyRecaptcha.verify(recaptchaResponse)) {
				response.sendRedirect("Dashboard.html");
			}
			else {
				response.sendRedirect("InvalidLogin.html");
			}
		}
		catch(Exception e) {
			e.printStackTrace();
			response.sendRedirect("InvalidLogin.html");
		}
			
	}

}
