def fullname(arg, arg2=10):
    return arg + arg2


# Two types of arguments
# 1. Positional Argument
# 2. Keyword arguments

# IMP: Default argument will come after non default argument

# print(fullname(20))
# print(fullname(20, 30))
# print(fullname(arg2=50, arg=90))

# Lambda Functions
# fullname2 = lambda a, b, c=5: a + b - c

# HOF = Higher Order Functions


def sum(a, b):
    return a + b


def diff(a, b):
    return a - b


# HOF function / wrapper function
def complex_sum(a, b, c):
    return sum(a, sum(b, c))


# print(complex_sum(5, 10, 15))


# HOF 2 (Callback function)
def complex_ao(a, b, c, function):
    return function(a, function(b, c))


# print(complex_ao(5, 10, 15, diff))


# DECORATORS


# def print_vars(func):
#     print("THIS IS CALLED BEFORE")
#     print(func)

# print_vars(complex_ao(4,5,9, sum))


def print_vars(func):
    def print_vars(*args):
        print("THIS IS CALLED BEFORE")
        return func(*args)

    return print_vars


@print_vars
def sum_ab(a, b):
    print("ME", a + b)


sum_ab(5, 7)


# DECORATORS Without argument
def simple_decorator(func):
    def wrapper():
        print("Before")
        result = func()
        print("After")
        return result

    return wrapper


# @simple_decorator
# def greet():
#     print("Hello")


# greet()
# Before
# Hello
# After


# def repeat(num: int = 2):
#     def decorator(func):
#         def wrapper(*args, **kwargs):
#             result = None
#             for _ in range(num):
#                 result = func(*args, **kwargs)
#             return result

#         return wrapper

#     return decorator


# @repeat(3)
# def say(msg):
#     print(msg)


# say("Hello")  # prints 3 times
