class Library:
    def __init__(self, name):
        self.name = name
        self.items = []

    def __str__(self):
        return f"{self.name}'s Library"

    def add_item(self, item):
        self.items.append(item)

    def remove_item(self, item):
        self.items.remove(item)

    def display_items(self):
        for item in self.items:
            print(item)

    def borrow_item(self, title):
        for item in self.items:
            if item.title.lower() == title.lower():
                if item.is_available:
                    item.borrow()
                    return f"{title} has been borrowed."
                else:
                    return f"{title} is already borrowed."
        return f"{title} not found in library."

    def return_item(self, item):
        if item in self.items:
            self.return_item(item)
        else:
            print(f"{item.title} does not belong to this library.")