public class BankTest {
    public static void main(String[] args){
        // Create 3 bank accounts
        BankAccount nizarAccount = new BankAccount(200, 200);
        BankAccount khaledAccount = new BankAccount(300,300);
        BankAccount ibrahimAccount = new BankAccount(400,600);
        BankAccount nasriAccount = new BankAccount(400,600);
        BankAccount chrisAccount = new BankAccount(400,600);

        // Deposit Test
        // - deposit some money into each bank account's checking or savings account and display the balance each time
        // - each deposit should increase the amount of totalMoney
        nizarAccount.depositIntoChecking(500);
        System.out.println(nizarAccount.getCheckingBalance());
        System.out.println(BankAccount.getTotalMoney());
        nizarAccount.depositIntoSaving(1000);
        System.out.println(nizarAccount.getSavingsBalance());
        System.out.println(BankAccount.getTotalMoney());

        System.out.println("-------------------------------------------------------------");
        // Withdrawal Test
        // - withdraw some money from each bank account's checking or savings account and display the remaining balance
        // - each withdrawal should decrease the amount of totalMoney
        nizarAccount.withdrawFromChecking(300);
        System.out.println(nizarAccount.getCheckingBalance());
        System.out.println(BankAccount.getTotalMoney());
        nizarAccount.withdrawFromSaving(500);
        System.out.println(nizarAccount.getSavingsBalance());
        System.out.println(BankAccount.getTotalMoney());

        System.out.println("-------------------------------------------------------------");
        // Static Test (print the number of bank accounts and the totalMoney)  
        System.out.println(BankAccount.getAccounts());
        System.out.println(BankAccount.getTotalMoney());


    }
}