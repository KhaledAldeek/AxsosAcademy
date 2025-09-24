class User:
    def __init__(self, name, amount):
        self.name = name
        self.bankAccount = BankAccount(amount)

    def make_withdrawal(self, amount):
        self.bankAccount.withdraw(amount)

    def display_user_balance(self):
        print(self.name)
        self.bankAccount.display_account_info()

    def transfer_money(self, other_user, amount):
        self.make_withdrawal(amount)
        other_user.balance += amount

class BankAccount:
    def __init__(self, balance):
        self.int_rate = 15
        self.balance = balance
    def deposit(self, amount):
        self.balance += amount
    def withdraw(self, amount):
        self.balance -= amount
    def display_account_info(self):
        print("BankAccount : | "+str(self.balance))
    def yield_interest(self):
        interest = self.balance / self.int_rate
        self.withdraw(interest)


Christine = User("Christine", 300)
Christine.display_user_balance()
