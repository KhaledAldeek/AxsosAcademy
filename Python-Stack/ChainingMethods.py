class User:
    def __init__(self, name, balance):
        self.name = name
        self.balance = balance

    def make_withdrawal(self, amount):
        self.balance -= amount
        return self

    def display_user_balance(self):
        print(self.balance)
        return self

    def transfer_money(self, other_user, amount):
        self.make_withdrawal(amount)
        other_user.balance += amount
        return self

Amro = User("Amro", 10000)
Amro.display_user_balance().make_withdrawal(100).display_user_balance()

Christine = User("Christine", 300)
Christine.display_user_balance().transfer_money(Amro, 100).display_user_balance()


