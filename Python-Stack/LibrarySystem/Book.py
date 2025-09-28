from Item import Item

class Book(Item):
    def __init__(self, title, author, price, year, isbn, pages, description):
        super().__init__(title, author, price, year)
        self.isbn = isbn
        self.pages = pages
        self.description = description

    def __str__(self):
        return "(((Book)))"+super().__str__()+f"Description : {self.description} | Isbn : {self.isbn} | Pages : {self.pages}"

    def borrow(self):
        self.is_available = False
        print(f"Book with a title {self.title} was borrowed.")

    def return_item(self):
        self.is_available = True
        print(f"Book with a title {self.title} was unborrowed.")





