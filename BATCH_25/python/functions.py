"""
def call_me():
    print("SOMETHING")


call_me()
"""


def sum(a, b):
    return a + b


def sub(a, b):
    return a - b


# Wrapper Function with a callback function
def compl_3(a, b, c, func):
    return func(func(a, b), c)


# print(compl_3(5, 4, 3, sub))


# Wrapper Function
def sum_3(a, b, c):
    return sum(sum(a, b), c)


# lamba functions
sum_sum = lambda a, b, c, d: sum(sum(a, b), sum(c, d))


# Decorator function
def before_decorator(func):
    def wrapper(*args):
        print("function is started")
        abc = func(*args)
        print("function is ended")
        return abc

    return wrapper


@before_decorator
def sum2(a, b, c=5):
    print(a + b + c)


sum2(5, 10)
