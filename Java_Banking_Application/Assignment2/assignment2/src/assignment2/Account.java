package assignment2;


// Morgan Gill: 100566959

public class Account { // Morgan Gill: 100566959
    
    protected long accountNum;
    protected double balance;
    protected String owner;
    
    public Account(long aNum, double bal, String oInf){
        accountNum = aNum;
        balance = bal;
        owner = oInf; 
    }
    
    public boolean withdraw(double amount){
        if (balance >= amount){
            balance = balance - amount;
            return true;
        }
        System.out.println("Error: no deposit done or insufficient balance.");
        return false; 
    }
    
    public void deposit(double amount){
        balance = balance + amount; 
    }
    
    public boolean transfer(Account object, double amount){
        
        double otherAccountBalance = object.getBalance();
        double returnedOtherAccountBalance;
        if (otherAccountBalance >= amount){
            balance = balance + amount;
            returnedOtherAccountBalance = otherAccountBalance - amount;
            object.setBalance(returnedOtherAccountBalance);
            return true;
        }
        System.out.println("Error: no deposit done");
        return false;
    }
    
    public String toString(){
        String s = "";
        s = s + "Account: " + accountNum + "\nBalance: " + balance + "\nName of Owner: " + owner;
        return s;  
    }
    
    public long getAccountNumber(){
        return accountNum;
    }
    
    public double getBalance(){
        return balance;
    }
    
    public void setBalance(double bal){
        this.balance = bal;
    }
    
    public String getOwner(){
        return owner;
    }
    
}
