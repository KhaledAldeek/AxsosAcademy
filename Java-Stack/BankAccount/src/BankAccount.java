public class BankAccount {
    // MEMBER VARIABLES
    private double checkingBalance;
    private double savingsBalance;

    private static int accounts;
    private static double totalMoney;

    // CONSTRUCTOR
    // Be sure to increment the number of accounts
    public BankAccount(double checkingBalance, double savingsBalance){
        setCheckingBalance(checkingBalance);
        setSavingsBalance(savingsBalance);
        accounts++;
        totalMoney += checkingBalance+savingsBalance;
    }

    // GETTERS
    // for checking, savings, accounts, and totalMoney
    public double getCheckingBalance() {
        return checkingBalance;
    }

    private void setCheckingBalance(double checkingBalance) {
        this.checkingBalance = checkingBalance;
    }

    public double getSavingsBalance() {
        return savingsBalance;
    }

    private void setSavingsBalance(double savingsBalance) {
        this.savingsBalance = savingsBalance;
    }

    public static int getAccounts() {
        return accounts;
    }

    // METHODS
    // deposit
    // - users should be able to deposit money into their checking or savings account
    public void depositIntoChecking(double amount){
        this.checkingBalance += amount;
        totalMoney += amount;
    }
    public void depositIntoSaving(double amount){
        this.savingsBalance += amount;
        totalMoney += amount;
    }

    // withdraw
    // - users should be able to withdraw money from their checking or savings account
    // - do not allow them to withdraw money if there are insufficient funds
    // - all deposits and withdrawals should affect totalMoney
    public void withdrawFromChecking(double amount){
        if(this.checkingBalance < amount){
            System.out.println("You have No enough Money");
            return;
        }
        this.checkingBalance -= amount;
        totalMoney -= amount;
        System.out.println(amount+"$ سحبوا منك ه القد");
    }
    public void withdrawFromSaving(double amount){
        if(this.savingsBalance < amount){
            System.out.println("You have No enough Money");
            return;
        }
        this.savingsBalance -= amount;
        totalMoney -= amount;
        System.out.println(amount+"$ سحبوا منك ه القد");
    }


    // getBalance
    // - display total balance for checking and savings of a particular bank account

    public static double getTotalMoney(){
        return totalMoney;
    }
}
