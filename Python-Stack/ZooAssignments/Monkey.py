from Animal import Animal

class Monkey(Animal):
    def __init__(self, name, happiness_level, tall):
        super().__init__(name,happiness_level)
        self.tall = tall

    def display_info(self):
        # super().display_info()
        print(f"Monkey(name : {self.name} | happiness_level  {self.happiness_level} | tall : {self.tall}) | health {self.health}")

    def feed(self):
        self.health += 7
        self.happiness_level += 3
