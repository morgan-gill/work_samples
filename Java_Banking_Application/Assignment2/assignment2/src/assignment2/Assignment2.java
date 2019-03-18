
// Morgan Gill: 100566959

package assignment2;
import javafx.application.Application;
import javafx.geometry.Pos;
import javafx.event.ActionEvent;
import javafx.event.EventHandler;
import javafx.scene.Scene;
import javafx.stage.Stage;
import javafx.scene.control.*;
import javafx.scene.layout.*;

public class Assignment2 extends Application implements EventHandler<ActionEvent>{ // Morgan Gill: 100566959
    
    private  Scene home,addScene,depositScene,withdrawScene,listScene,transferScene;
    Stage window;  // represents main Stage globally
    Button btnAddMenu,btnDepositMenu,btnWithdrawMenu,btnTransferMenu,btnListMenu,btnAdd,btnHome,btnListHome,btnDSDeposit,
            btnDSHome,btnWithdrawAmount,btnWithdrawHome,btnTransferAmount,btnTransferHome;
    TextField custName,custAccNum,custBalance,accountList,txtDSAccountNumber,txtDSDepositAmount,txtWithdrawAccountNumber,
            txtWithdrawAmount,txtTransferToAccountNumber,txtTransferFromAccountNumber,txtTransferAmount;
    
    // Declaring this within "init()" didn't seem to be working...
    Bank trustybank;
    
    
    public void init(){
        System.out.println("Running first.");
        trustybank = new Bank(10);
        trustybank.addAccount(123456789, 500.00, "Morgan Gill");
        trustybank.addAccount(987654321, 500.00, "Kevin Bacon");
    }
    
    public void start(Stage primaryStage){ // Morgan Gill: 100566959
        
        window = primaryStage;
        // setting up Home Scene
        Label lblHomeMenu = new Label("Welcome to Trusty Bank. Please select an option from below");
        btnAddMenu = new Button("Add");btnAddMenu.setOnAction(this);btnAddMenu.setMaxWidth(Double.MAX_VALUE);
        btnDepositMenu = new Button("Deposit");btnDepositMenu.setOnAction(this);btnDepositMenu.setMaxWidth(Double.MAX_VALUE);
        btnWithdrawMenu = new Button("Withdraw");btnWithdrawMenu.setOnAction(this);btnWithdrawMenu.setMaxWidth(Double.MAX_VALUE);
        btnTransferMenu = new Button("Transfer");btnTransferMenu.setOnAction(this);btnTransferMenu.setMaxWidth(Double.MAX_VALUE);
        btnListMenu = new Button("List");btnListMenu.setOnAction(this);btnListMenu.setMaxWidth(Double.MAX_VALUE);
        VBox homeLayout = new VBox();
        homeLayout.setAlignment(Pos.CENTER);
        homeLayout.getChildren().addAll(lblHomeMenu,btnAddMenu,btnDepositMenu,btnWithdrawMenu,btnTransferMenu,btnListMenu);
        home = new Scene(homeLayout,500,500);
        
        // setting up Add Scene
        Label lblName = new Label("Name:");
        custName = new TextField();
        Label lblAccNum = new Label("Account#:");
        custAccNum = new TextField();
        Label lblBalance = new Label("Balance:");
        custBalance = new TextField();
        btnAdd = new Button("Add Account");btnAdd.setOnAction(this);
        btnHome = new Button("Back");btnHome.setOnAction(this);
        VBox addLayout = new VBox();
        addLayout.getChildren().addAll(lblName,custName,lblAccNum,custAccNum,lblBalance,custBalance,btnAdd,btnHome);
        addScene = new Scene(addLayout,500,500);
        
        // setting up Desposit Scene
        // Deposit has two labels, two text boxes, and two buttons
        Label lblDSAccountNumber = new Label("Account#:");
        txtDSAccountNumber = new TextField();
        Label lblDSDepositAmount = new Label("Deposit Amount:");
        txtDSDepositAmount = new TextField();
        btnDSDeposit = new Button("Deposit");btnDSDeposit.setOnAction(this);
        btnDSHome = new Button("Back");btnDSHome.setOnAction(this);
        VBox depositLayout = new VBox();
        depositLayout.getChildren().addAll(lblDSAccountNumber,txtDSAccountNumber,lblDSDepositAmount,txtDSDepositAmount,
                                           btnDSDeposit,btnDSHome);
        depositScene = new Scene(depositLayout,500,500);
        
        
        // setting up Withdraw Scene
        // Withdraw has two labels, two text boxes, and two buttons
        Label lblWithdrawAccountNumber = new Label("Account#:");
        txtWithdrawAccountNumber = new TextField();
        Label lblWithdrawAmount = new Label("Withdraw Amount:");
        txtWithdrawAmount = new TextField();
        btnWithdrawAmount = new Button("Withdraw");btnWithdrawAmount.setOnAction(this);
        btnWithdrawHome = new Button("Back");btnWithdrawHome.setOnAction(this);
        VBox withdrawLayout = new VBox();
        withdrawLayout.getChildren().addAll(lblWithdrawAccountNumber,txtWithdrawAccountNumber,lblWithdrawAmount,txtWithdrawAmount,
                                           btnWithdrawAmount,btnWithdrawHome);
        withdrawScene = new Scene(withdrawLayout,500,500);
        
        // setting up Transfer Scene
        // Transfer has three labels, three text boxes, and three buttons
        Label lblTransferFromAccountNumber = new Label("From Account#:");
        txtTransferToAccountNumber = new TextField();
        Label lblTransferToAccountNumber = new Label("To Account#:");
        txtTransferFromAccountNumber = new TextField();
        Label lblTransferAmount = new Label("Transfer Amount:");
        txtTransferAmount = new TextField();
        btnTransferAmount = new Button("Transfer");btnTransferAmount.setOnAction(this);
        btnTransferHome = new Button("Back");btnTransferHome.setOnAction(this);
        VBox transferLayout = new VBox();
        transferLayout.getChildren().addAll(lblTransferFromAccountNumber,txtTransferToAccountNumber,lblTransferToAccountNumber,
                txtTransferFromAccountNumber,lblTransferAmount,txtTransferAmount,btnTransferAmount,btnTransferHome);
        transferScene = new Scene(transferLayout,500,500);
        
        // setting up List Scene
        Label lblShow = new Label("List of accounts...");
        accountList = new TextField();
        btnListHome = new Button("Back");btnListHome.setOnAction(this);btnListHome.setMaxWidth(Double.MAX_VALUE);
        VBox listLayout = new VBox();
        listLayout.getChildren().addAll(lblShow,accountList,btnListHome);
        listScene = new Scene (listLayout,500,500);
         
        window.setScene(home);
        window.show();
    }
    
    public void stop(){ // Morgan Gill: 100566959
        System.out.println("Prints upon closing.");
    }
    
    
    public void handle(ActionEvent e){ // Morgan Gill: 100566959
        
        // Navigation Buttons Are Listed Here...
        if (e.getSource()==btnAddMenu){
            System.out.println("add Menu btn pressed (on menu scene)");
            window.setScene(addScene);
        }
        if (e.getSource()==btnDepositMenu){
            System.out.println("deposit Menu btn pressed (on menu scene)");
            window.setScene(depositScene);
        }
        if (e.getSource()==btnWithdrawMenu){
            System.out.println("withdraw Menu btn pressed (on menu scene)");
            window.setScene(withdrawScene);
        }
        if (e.getSource()==btnTransferMenu){
            System.out.println("transfer Menu btn pressed (on menu scene)");
            window.setScene(transferScene);
        }
        if (e.getSource()==btnListMenu){
            System.out.println("list accounts btn pressed (on menu scene)");
            window.setScene(listScene);
            trustybank.printAccounts();
            accountList.setText(trustybank.printAccounts());
        }
        
        // Add Account Button Functionality...
        if (e.getSource()==btnAdd){
        
        String s = String.valueOf(custName.getText());
        double d = Double.valueOf(custBalance.getText());
        long l = Long.valueOf(custAccNum.getText());
        
        trustybank.addAccount(l, d, s);
        }
        
        // Add Deposit Button Functionality...
        if (e.getSource()==btnDSDeposit){
        
        double d = Double.valueOf(txtDSDepositAmount.getText());
        long l = Long.valueOf(txtDSAccountNumber.getText());
        
        trustybank.depositAccount(l, d);
        }
        
        // Add Withdraw Button Functionality...
        if (e.getSource()==btnWithdrawAmount){
        
        double d = Double.valueOf(txtWithdrawAmount.getText());
        long l = Long.valueOf(txtWithdrawAccountNumber.getText());
        
        trustybank.depositAccount(l, d);
        }
        
        // Transfer Button Functionality...
        if (e.getSource()==btnTransferAmount){
        
        double d = Double.valueOf(txtTransferAmount.getText());
        long accNum1 = Long.valueOf(txtTransferToAccountNumber.getText());
        long accNum2 = Long.valueOf(txtTransferFromAccountNumber.getText());
        
        
        trustybank.transfer(accNum1, accNum2, d);
        }
        
        // List Button Functionality... (might bind this to the button that navigates to the "List Accounts" screen)
        
        // Back Buttons Are Listed Here...
        if (e.getSource()==btnHome||e.getSource()==btnDSHome||e.getSource()==btnWithdrawHome||e.getSource()==btnTransferHome||e.getSource()==btnListHome){
            System.out.println("Bsck Button Pressed (on AddScene or DepositScene or WithdrawScene or TransferScene or ListScene)");
            window.setScene(home);
        }
    }
    
    public static void main(String[] args){ // Morgan Gill: 100566959
        // init();
        // Bank trustybank = new Bank(10);
        launch(args);
    }
    
}