from Item import Item

class DVD(Item):
    def __init__(self, title, author, price, year, rating, director):
        super().__init__(title, author, price, year)
        self.rating = rating
        self.director = director

    def __str__(self):
        return "(((DVD))))"+super().__str__()+f"Rating : {self.rating} | Director : {self.director}"

    def borrow(self):
        self.is_available = False
        print(f"DVD with a title {self.title} was borrowed.")

    def return_item(self):
        self.is_available = True
        print(f"DVD with a title {self.title} was unborrowed.")


