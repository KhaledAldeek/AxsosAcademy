class BankAccount:
    def __init__(self, int_rate, balance):
        self.int_rate = int_rate
        self.balance = balance
    def deposit(self, amount):
        self.balance += amount
    def withdraw(self, amount):
        self.balance -= amount
    def display_account_info(self):
        print("BankAccount : "+ str(self.int_rate) +" | "+str(self.balance))
    def yield_interest(self):
        interest = self.balance / self.int_rate
        self.withdraw(interest)

account_one = BankAccount(10, 1000)
account_one.display_account_info()
account_one.yield_interest()
account_one.display_account_info()

account_two = BankAccount(12, 1000)
account_two.display_account_info()
account_two.yield_interest()
account_two.display_account_info()



