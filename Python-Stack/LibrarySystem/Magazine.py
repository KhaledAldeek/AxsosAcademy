from Item import Item

class Magazine(Item):
    def __init__(self, title, author, price, year, publisher, issn, pages):
        super().__init__(title, author, price, year)
        self.publisher = publisher
        self.issn = issn
        self.pages = pages

    def __str__(self):
        return "(Magazine)"+super().__str__()+f"Publisher : {self.publisher} | Issn : {self.issn} | # of pages : {self.pages}"

    def borrow(self):
        self.is_available = False
        print(f"Magazine with a title {self.title} was borrowed.")

    def return_item(self):
        self.is_available = True
        print(f"Magazine with a title {self.title} was unborrowed.")
