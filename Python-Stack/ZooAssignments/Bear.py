from Animal import Animal

class Bear(Animal):
    def __init__(self, name, happiness_level, type_of_bear):
        super().__init__(name,happiness_level)
        self.type_of_bear = type_of_bear

    def display_info(self):
        print(super().display_info(), end=" ")
        print("type_of_bear : ", self.type_of_bear)
        # print(self.type_of_bear)

        # print(f"Bear(name : {self.name} | happiness_level {self.happiness_level} | type_of_bear {self.type_of_bear} | health {self.health})")

    def feed(self):
        self.health += 10
        self.happiness_level += .5
