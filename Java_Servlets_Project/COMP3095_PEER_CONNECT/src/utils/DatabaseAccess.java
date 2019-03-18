/*********************************************************************************
* Project: < PEER_CONNECT >
* Assignment: < Assignment 1 >
* Author(s): < Jerome Ching, Morgan Gill, Ankur Aggarwal>
* Student Number: < 100530184, 100566959, 101095272 >
* Date: < October 27th, 2018 >
* Description: < DatabaseAccess - Example provides access to database. >
*********************************************************************************/

package utils;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;


public class DatabaseAccess {
	  private static Connection connect = null;
	  
	  private static String username = "admin_pc";
	  private static String password = "P@ssword1";
	  private static String database = "comp3095";

	  
	  public static Connection connectDataBase() throws Exception {
	    try {
	      // This will load the MySQL driver, each DB has its own driver
	      Class.forName("com.mysql.jdbc.Driver");
	      // Setup the connection with the DB
	      connect = DriverManager.getConnection("jdbc:mysql://localhost:3306/"+database+"?"
	              + "user="+username+"&password="+password);
	      return connect;
	    } catch (Exception e) {
	      throw e;
	    } 
	  }
	  
	  public static int registerUser(String fname, String lname, String email, String passwd) throws Exception{
		  try {
			  System.out.println("attempting to register");
			  //connect to db
			  Class.forName("com.mysql.jdbc.Driver");
			  Connection con = connectDataBase();
			  //setting up statements
			  Statement statement = con.createStatement();
			  String userInfo = 
					  "INSERT INTO `users` (`firstname`, `lastname`, `email`, `PASSWORD`) "
					  + "VALUES ('"+fname+"','"+lname+"', '"+email+"', '"+passwd+"');";
			  String userRoleUpdate="INSERT INTO `userroles` values (null,(select max(id) from users), 3)";
			  System.out.println("Entering Query: "+userInfo);
			  int result = statement.executeUpdate(userInfo);
			  System.out.println("Result of userInfo insert: "+result);
			  if(result<1)
				  return result;
			  System.out.println("Entering Query: "+userRoleUpdate);
			  result = statement.executeUpdate(userRoleUpdate);
			  System.out.println("Final Result: "+result);
			  return result;
		  }
		  catch(Exception e) {
			  throw e;
		  }
	  }
	  public static boolean loginUser(String user, String passwd) throws Exception{
		  try {
			  //connect to db
			  Class.forName("com.mysql.jdbc.Driver");
			  Connection con = connectDataBase();
			  //prep sql statements
			  Statement statement = con.createStatement();
			  String query = "select * from users where users.email='"+user+"' and users.password='"+passwd+"'";
			  //execute query and store into a set.
			  //if set is not null and a row with user's info exists, return true
			  ResultSet rset = statement.executeQuery(query);
			  if (rset!=null) {
				  return true;
			  }
		  }
		  catch(Exception e) {
			  e.printStackTrace();
		  }
		  return false;
	  }
	  
	  public static boolean emailValidation(String email) {
		  try{
			  Class.forName("com.mysql.jdbc.Driver");
			  Connection con = connectDataBase();
			  
			  Statement statement = con.createStatement();
			  String query = "select * from users where users.email='"+email+"'";
			  ResultSet rset = statement.executeQuery(query);
			  if(rset==null) return true;
		  }
		  catch(Exception e) {
			  e.printStackTrace();
		  }
		  return false;
	  }
}
