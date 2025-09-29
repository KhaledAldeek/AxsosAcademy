class Animal:
    def __init__(self, name, happiness_level):
        self.name = name
        self.health = 0
        self.happiness_level = happiness_level

    def feed(self):
        pass

    def display_info(self):
        return f"Animal ({self.name} |happiness_level : {self.happiness_level} | health : {self.health})"



