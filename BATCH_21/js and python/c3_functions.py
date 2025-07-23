# defining a function
def greet():
    print("Hello 1")
    print("Hello 2")
    print("Hello 3")
    print("Hello 4")
    print("Hello 5")
    print("Hello 6")


# greet()

# def fullname(fname, lname):
#     result = fname + " " + lname
#     return result

fullname = lambda fname, lname: fname + " " + lname

fname = input("Your first name\n=> ")
lname = input("Your last name\n=> ")

full = fullname(fname, lname)

print(full)
