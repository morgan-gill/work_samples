
// Morgan Gill: 100566959

package assignment2;

public class Bank { // Morgan Gill: 100566959
    
    // "accountList - an array of type Account of size ten(1000)."
    // That line was taken from the assignment document that was given to us.
    // The "ten(1000)" portion of the quote makes things a little bit confsusing.
    // Are we supposed to have a limit of 10, 1000, or 10000?
    
    protected Account[] accountList; // = new Account[1000];
    protected int numAccounts;
    protected int maxAccounts;
    
    public Bank(int maximum){
        maxAccounts = maximum;
        accountList = new Account[maxAccounts];
        numAccounts = 0;
    }
    
    public boolean addAccount(long accNum, double bal, String own){
        // addAccount – creates and adds an account to the array (accountList)
        
        Account acc = new Account(accNum, bal, own);
        
        if (numAccounts < maxAccounts){
            accountList[numAccounts] = acc;
            numAccounts++;
            return true;
        }        
        return false;
    }
    
    public String printAccounts(){
        // printAccounts – returns a string with all the account information for each account in the array.
        
        System.out.println("******* Begin report *******");
        
        for(int i = 0; i <= maxAccounts; i++){
            String s;
            s = accountList[i].toString();
            System.out.println(s);
            System.out.println(" ");
        }
        
        String end = "******* End Report *******";
        return end;
    }
    
    public int findAccount(long accNum){
        // findAccount – returns the location(index) of the account where the accountNumber equals accNum. 
        // It returns -1 if the object does not exist.
        
        long locatedAccountNum;
        
        for (int i = 0; i < accountList.length; i++){
                /* if (accountList[i] == null){
                    continue;
                } */ 
                locatedAccountNum = accountList[i].getAccountNumber();
                if (locatedAccountNum == accNum){
                    
                    return i;
                } 
            }
        
        int failure = -1;
        System.out.println("Unable to find any account with that number.");
        return failure;
    }
    
    public void depositAccount(long accNum, double amount){
        // depositAccount – finds the account with the matching account number in accountList and if it exists,
        // adds the amount to the balance.
        
        for (int i = 0; i < accountList.length; i++){
                if (accountList[i] == null){
                    continue;
                }
                if (accountList[i].getAccountNumber() == accNum){
                    accountList[i].deposit(amount);
                    System.out.println("Deposit Successful.");
                } 
            }
    }
    
    public boolean withdrawAccount(long accNum, double amount){
        // withdrawAccount – finds the account with the matching account number in accountList and if it exists,
        // withdraws the amount from the balance if possible.
        
        for (int i = 0; i < accountList.length; i++){
                if (accountList[i] == null){
                    continue;
                }
                if (accountList[i].getAccountNumber() == accNum){
                    accountList[i].withdraw(amount);
                    System.out.println("Withdraw Successful.");
                    return true;
                } 
            }
        System.out.println("Withdraw Failed.");
        return false;
    }
    
    public boolean transfer(long accNumFrom, long accNumTo, double amount){
        // transfer – finds both of the accounts with the matching account numbers in accountList and if they exist,
        // attempts to perform the transfer.
        
        // long sourceAccount = maxAccounts + 2;
        // long destinationAccount = maxAccounts + 2;
        int sourceAccountIndex = 0, destinationAccountIndex = 0;
        
        for (int i = 0; i < accountList.length; i++){
                if (accountList[i] == null){
                    continue;
                } 
                if (accountList[i].getAccountNumber() == accNumFrom){
                    // sourceAccount = accNumFrom;
                    sourceAccountIndex = i;
                } 
            }
        if (sourceAccountIndex > maxAccounts){
            System.out.println("Could not find account to withdraw from.");
            return false;
        }
        for (int i = 0; i < accountList.length; i++){
                if (accountList[i] == null){
                    continue;
                } 
                if (accountList[i].getAccountNumber() == accNumTo){
                    // destinationAccount = accNumTo;
                    destinationAccountIndex = i;
                } 
            }
        if (destinationAccountIndex > maxAccounts){
            System.out.println("Could not find account to deposit to.");
            return false;
        }
        
        accountList[destinationAccountIndex].transfer(accountList[sourceAccountIndex], amount);
        
        return false;
    }
    
}
