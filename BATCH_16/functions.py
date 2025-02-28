### functions = def

''' 
Simple type of function
def xyz():
   print("Vijay")
   print("Vijay2")
   print("Vijay3")
   print("Vijay4")
   print("Vijay5")
   print("Vijay6")
'''


'''
function with arguments / dynamic functions

def fullname(fname, lname, age):
    name = fname + " " + lname
    print("I am" , name)
    print("My age is ", age)



fullname("Vijay","Kumar", 25)
fullname("Ajay","Kumar", 24)
fullname("Karan","Kumar", 21)

'''


''' 
Optional Arguments
def fullname(fname, lname, age=25):
    name = fname + " " + lname
    print("I am" , name)
    print("My age is ", age)

fullname("Vijay","Kumar", 25)
fullname("Ajay","Kumar")
fullname("Karan","Kumar", 21)
'''

''' 
Return Values

def sum(a,b):
    total = a + b
    return total

# result = sum(7,6)
# result = 13

print(sum(7,6))
#print(13)


# lambda arguments : expression

def sum(a,b):
   return a + b
   
result = sum(5,6)

print(result)

sum = lambda a,b : a + b

result = sum(5,6)

print(result)

# Recursive function

# Find factorial of a number
# e.g. 5 => 5 * 4 * 3 * 2 * 1

def fact(n):
    if( n > 0 ):
        return n * fact( n - 1)
    else: 
        return 1
    
result = fact(5)
print(result)

# return 5 * 4 * 3 * 2 * 1 * 0 * -1

# Decorators
def repeater(n):
   def my_decorator(func):
    def wrapper(a,b):
        print("Let's Start Sum Function", n)
        return str(func(a,b)) + "\n" + "Function End"
    return wrapper
   return my_decorator
   
@repeater(5)
def sum(a,b):
    return a + b
    
print(sum(5,6))

# Higher Order Function
def sum(a,b):
    return a + b


def multi(a,b):
    return a * b
    

def result(func, a, b):
    return func(a,b) + 2 
    

print(result(sum, 5, 7))

# Simple Decorator

def my_decorator(func):
  def wrapper():
    print("Let's Start Sum Function")
    func()
    print("Sum Function End")
  return wrapper
  
@my_decorator
def sum():
    print("Hello")
    
print(sum())


# Decorator with function Argumnets

def my_decorator(func):
  def wrapper(a,b):
    print("Let's Start Sum Function")
    func(a,b)
    print("Sum Function End")
  return wrapper
  
@my_decorator
def sum( a , b ):
    print(a + b)
    
sum(7,8)

# Decorator with function Argumnets and return
def my_decorator(func):
  def wrapper(a,b):
    print("Let's Start Sum Function")
    return str(func(a,b)) + "\nSum Function End"
  return wrapper
  
@my_decorator
def sum( a , b ):
    return a + b
    
print(sum(7,8))
'''
