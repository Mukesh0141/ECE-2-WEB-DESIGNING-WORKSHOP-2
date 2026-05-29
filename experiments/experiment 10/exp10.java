abstract class BankAccount {
    private int accountNumber;
    private String accountHolderName;
    private double balance;

    public BankAccount(int accountNumber, String accountHolderName, double balance) {
        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
        this.balance = balance;
    }

    public double getBalance() {
        return balance;
    }

    public void deposit(double amount) {
        System.out.println("Amount Deposited: " + amount);
        balance += amount;
    }

    public void display() {
        System.out.println("Account Number: " + accountNumber);
        System.out.println("Account Holder Name: " + accountHolderName);
        System.out.println("Balance: " + balance);
    }

    // Abstract method to be implemented by child classes
    abstract double calculateInterest();
}

// Savings Account implementation (Inferred 5% interest rate based on output: 600 / 12000 = 0.05)
class SavingsAccount extends BankAccount {
    public SavingsAccount(int accountNumber, String accountHolderName, double balance) {
        super(accountNumber, accountHolderName, balance);
    }

    @Override
    double calculateInterest() {
        return getBalance() * 0.05; 
    }
}

// Current Account implementation (Matches the code visible in your screenshot)
class CurrentAccount extends BankAccount {
    public CurrentAccount(int accountNumber, String accountHolderName, double balance) {
        super(accountNumber, accountHolderName, balance);
    }

    @Override
    double calculateInterest() {
        return getBalance() * 0.02; 
    }
}

// Main class
public class exp10 {
    public static void main(String[] args) {
        // Savings Account Execution
        System.out.println("----- Savings Account -----");
        // Initial balance is 10000.0, so depositing 2000.0 makes it 12000.0
        SavingsAccount sa = new SavingsAccount(101, "Rahul", 10000.0);
        sa.deposit(2000.0);
        sa.display();
        System.out.println("Savings Account Interest: " + sa.calculateInterest());

        System.out.println(); // Blank line for spacing

        // Current Account Execution
        System.out.println("----- Current Account -----");
        // Initial balance is 20000.0, so depositing 3000.0 makes it 23000.0
        CurrentAccount ca = new CurrentAccount(102, "Anita", 20000.0);
        ca.deposit(3000.0);
        ca.display();
        System.out.println("Current Account Interest: " + ca.calculateInterest());
    }
}