from Animal import Animal

class Lion(Animal):
    def __init__(self, name, happiness_level, number_of_sleep_hours):
        super().__init__(name, happiness_level)
        self.number_of_sleep_hours = number_of_sleep_hours

    # def __str__(self):
    #     return f"Lion({self.name}, {self.happiness_level})"

    def display_info(self):
        print(f"Lion(name : {self.name} | happiness_level {self.happiness_level} | number_of_sleep_hours {self.number_of_sleep_hours} | health : {self.health}) ")

    def feed(self):
        self.health += 5
        self.happiness_level += 2
