class Item:
    def __init__(self, title, author, price, year):
        self.title = title
        self.author = author
        self.price = price
        self.year = year
        self.is_available = True

    def __str__(self):
        return f"Title: {self.title} | Author: {self.author} | Price: {self.price} | Year: {self.year} "

    def borrow(self):
        pass

    def return_item(self):
        pass

    def is_available(self):
        return self.is_available

    def calculate_late_fee(self):
        pass

    def overdue(self):
        pass

    # def print_details(self):
    #         if isinstance(self, Book):
    #             return f"(Book)Title: {self.title} | Author: {self.author} | Price: {self.price} | Year: {self.year} "
    #         elif isinstance(self, DVD):
    #             return f"(DVD)Title: {self.title} | Author: {self.author} | Price: {self.price} | Year: {self.year} "
    #         else:
    #             return f"(Magazine)Title: {self.title} | Author: {self.author} | Price: {self.price} | Year: {self.year} "