# Objects: Everything around us except God and Ghost is an Object.
# An Object has some functions, behavior or property.

# Classes: This is a blueprint of an Object.

# class Animal:
#     category: str
#     name: str
#     size: int
#     age: int

# Creating Objects from Classes
# Creating instance of Classes
#
# dog = Animal()
# dog.category = "Herbivores"
# dog.name = "Maggie"
# dog.size = 1
# dog.age = 4

# cat = Animal()

# print(dog.category)
# print(dog.name)
# print(dog.size)
# print(dog.age)


class Animal:
    category: str
    name: str
    size: float | int
    age: int
    vaccinated: bool

    # Constructor
    def __init__(
        self,
        _category: str,
        _name: str,
        _size: float | int,
        _age: int,
        _vaccinated: bool = False,
    ):
        self.category = _category
        self.name = _name
        self.size = _size
        self.age = _age
        self.vaccinated = _vaccinated


dog = Animal("Herbivores", "Pup", 1, 4)
cat = Animal("omnivores", "kitty", 0.5, 5)

# horse = Animal()

print(dog.name)
print(dog.vaccinated)
print(cat.name)




# Inheritance and polymorphism

class Animal:
    name: str
    category: str
    
    def speak(self):
        print("ANIMAL SPEAKING")

# Inheritance
class Dog(Animal):
    category: str = "DOG" 

    # Polymorphism 
    def speak(self):
        super().speak()
        print("DOG SPEAKING")
        
anim = Animal()
# print(anim.category)

dogg = Dog()

print(dogg.category)
# anim.speak()
dogg.speak()


