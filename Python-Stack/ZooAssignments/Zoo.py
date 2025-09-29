from Animal import Animal
from Lion import Lion
from Bear import Bear
from Monkey import Monkey
class Zoo:
    def __init__(self, zoo_name):
        self.animals = []
        self.name = zoo_name

    def add_lion(self,lion):
        self.animals.append(lion)

    def add_bear(self, bear):
        self.animals.append(bear)

    def add_monkey(self, monkey):
        self.animals.append(monkey)

    def print_all_info(self):
        print("-" * 35, self.name, "-" * 35)
        for animal in self.animals:
            animal.display_info()


zoo1 = Zoo("John's Zoo")

# Nala = Lion("Nala", 1, 2)
# zoo1.add_lion(Nala)
# Nala.feed()
# Nala.feed()
# Simba = Lion("Simba", 2, 5)
# zoo1.add_lion(Simba)
# Simba.feed()


Julia = Bear("Julia", 3, "Polar")
zoo1.add_bear(Julia)
Julia.feed()

Buddy = Bear("Buddy", 4, "Regular")
zoo1.add_bear(Buddy)
Buddy.feed()


# Julian = Monkey("Julian", 5, 1.5)
# zoo1.add_monkey(Julian)
# Julian.feed()




zoo1.print_all_info()

