'''

# How to create a class
class Laptop:
    pass

# HOw to create Object from class
acer_laptop = Laptop()

print(type(acer_laptop)) # output = <class '__main__.Laptop'>

'''

# dictory example

# acer_dict = {
#     "model": "Acer" 
# }

# print(acer_dict["model"])

'''
#  class with attributes/properties

class Laptop:
    model = "ACER"
    warranty = 5
    
acer_laptop = Laptop()
acer_laptop2 = Laptop()
acer_laptop3 = Laptop()

# print(acer_laptop.model)
print(acer_laptop.warranty)
print(acer_laptop2.warranty)
print(acer_laptop3.warranty)

'''

# class Laptop:    
#     model = ""
#     warranty = 0
    
#     def __init__(self, model_value, w): # Constructor
#     #    print("CONSTRUCTOR")
#         self.model = model_value
#         self.warranty = w

# acer_laptop = Laptop("ACER", 5)
# asus_laptop = Laptop("ASUS", 10)

# print(acer_laptop.model, acer_laptop.warranty)
# print(asus_laptop.model, asus_laptop.warranty)


# class Laptop:    
#     model = ""
#     warranty = 0
    
#     def __init__(self, model_value, w): # Constructor
#     #    print("CONSTRUCTOR")
#         self.model = model_value
#         self.warranty = w
        
#     def calc(self, yr):
#         self.warranty += yr
#         print(self.warranty)

# acer_laptop = Laptop("ACER", 5)
# acer_laptop.calc(5)


class Cat:
    name = ""
    
    def  __init__(self, pet_name):
        self.name = pet_name
    
    def speak(self):
        print("My pet name is",self.name)

# class Dog(Cat):
#     pass

# class Dog(Cat):
#     def speak(self):
#         print("My DOG NAME IS", self.name)

class Dog(Cat):
    def speak(self):
        return super().speak()

chilly = Cat("Chilly")
shiro = Dog("Shiro")

chilly.speak()
shiro.speak()