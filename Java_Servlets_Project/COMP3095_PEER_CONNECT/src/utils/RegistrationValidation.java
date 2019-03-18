/*********************************************************************************
* Project: < PEER_CONNECT >
* Assignment: < Assignment 1 >
* Author(s): < Jerome Ching, Morgan Gill, Ankur Aggarwal>
* Student Number: < 100530184, 100566959, 101095272 >
* Date: < October 27th, 2018 >*/
package utils;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class RegistrationValidation {
	
	public static boolean validateRegistration(String fname, String lname, String email, String passwd, String confirmPasswd) {
		return validateName(fname,lname)&&validatePasswd(passwd,confirmPasswd)&&validateEmail(email);
	}
	public static boolean validateName(String fname, String lname) {
		Pattern p = Pattern.compile("[a-zA-Z]([a-zA-Z]){0,50}");
		Matcher first = p.matcher(fname);
		Matcher last = p.matcher(lname);
		return first.find() && last.find();
	}
	public static boolean validatePasswd(String passwd, String confirmPasswd) {
		boolean result = passwd.length()>5 && passwd.length()<24;
		result = result && passwd.equals(confirmPasswd);
		return result;
	}
	public static boolean validateEmail(String email) {
		/*using a horrible email regex... */
		Pattern p = Pattern.compile("[a-zA-z0-9]([a-zA-Z0-9])*@[a-zA-Z0-9]([a-zA-Z0-9])*\\.[a-zA-Z0-9]([a-zA-Z0-9]){1,3}");
		Matcher m = p.matcher(email);
		return m.find();
	}
}
