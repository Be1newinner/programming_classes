# Python installation
# https://www.python.org/downloads/release/python-3130/

# print("hello")


"""
Multi Line Comment 1
Multi Line Comment 2
"""

# Create a variable
# In Python we use snake_case

name = "Vijay"
age = 27
is_run = True  # in JS = true
is_walk = False  # in JS = false
PI = 2.17
CAR_TYPES = 4

# Update a Variable
CAR_TYPES = 48


print(CAR_TYPES)

"""
# Types of Variables: 1. Primitive 2. Non Primitive
# Primitive - Memory Size fixed!
    a. int - numbers without decimal
    b. float - numbers with decimal
    c. complex - things that can not be counted
    d. boolean
    e. None
    f. char

# NON Primitive Data Type
    a. List -> Array in JS
    b. dictionary -> Object in JS
    c. Set -> Set in JS
    d. Tupple
    e. string - array of characters
    
"""

name = "s"
name = "sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss"

age = 45
marks = 45.5
# print(type(age)) # Output int
# print(type(name)) # Output str
# print(type(marks)) # Output float

car = None

# j after number represents complex number.
# Complex numbers are things which can not be calculated such as quality, understanding
rohit_js_understanding = 5j
uday_js_understanding = 4.5j

"""
Operators
1. arithmetic operators
    +, -, *, /, %, //, **
"""

print(4 / 3)  # output 1.3333
print(4 // 3)  # output floor value of 1
print(4**3)  # Output 4 to the power 3 = 64

"""
2. Assignment Operators
+=, -=, *=, /=, %=, //=, **=

3. comparision Operators
>, <, ==, != ,<=, >=
"""

"""
4. conditional Operator
and ( && in JS ), not ( ! in js ), or ( || in JS )


# IMPORTANT!
in python we do not have ++, -- operator
instead we use!
age += 1
age -= 1 

"""


print(4 < 5 and 5 < 4)  # if both are True then Output True otherwise False
print(4 < 5 or 5 < 4)  # if any conditon is True then Output True otherwise False
print(not (4 < 5 or 5 < 4))  # It will reverse the output


# casting
data = int(input("some question"))
data = float(input("some question"))
data = str(input("some question"))
data = list(input("some question"))
