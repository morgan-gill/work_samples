/*********************************************************************************
* Project: < PEER_CONNECT >
* Assignment: < Assignment 1 >
* Author(s): < Jerome Ching, Morgan Gill >
* Student Number: < 100530184, 100566959 >
* Date: < October 27th, 2018 >
* Description: < A simple servlet that handles registration of the user by taking >
* 			   < supplied input information and submitting it to a database       >
*********************************************************************************/

package register;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import utils.DatabaseAccess;
import utils.RegistrationValidation;


@WebServlet("/Register")
public class Register extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
 
    public Register() {
        super();
        
    }


	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		response.sendRedirect("InvalidRegistration.html");
	}


	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		// gathering all of the parameters from the Registration form.
		String firstName = request.getParameter("firstname");
		String lastName = request.getParameter("lastname");
		String email = request.getParameter("email");
		String passwd = request.getParameter("password");
		String confirmPasswd = request.getParameter("confirmedpassword");
		
		// Validate form data.  If failed, redirect to invalid registration.
		if(!RegistrationValidation.validateRegistration(firstName, lastName, email, passwd, confirmPasswd)
				&& !DatabaseAccess.emailValidation(email)) {
			System.out.println("Invalid form data!!");
			response.sendRedirect("InvalidRegistration.html");
		}
		else {
			//On Success, print message and wait 5 seconds before redirecting.
			try 
			{
				int result = DatabaseAccess.registerUser(firstName, lastName, email, confirmPasswd);
				System.out.println("Registration result: "+result);
				EmailHandler.sendEmail(firstName, lastName, email);
				response.sendRedirect("emailConfirmation.html");
			}
			catch(Exception e) {
				e.printStackTrace();
			}
		}
	}
	
}
