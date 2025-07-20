### Defining the function
# def printing():
#     age1 = 5
#     age2 = 6
#     age = age1 + age2
#     print("Hello", age)
#     print("bye")
#     print("GOod")
#     print("Morning")
#     print("Hello")
#     print("bye")
#     print("GOod")

### calling / invoking a function
# printing()
# printing()
# printing()
# printing()
# printing()
# printing()

# function with arguments and parameter
def summ(age1, age2):
    result = int(age1) + age2
    print(result)
    
# inp1 = input("dasd")
# summ(inp1, 30)
# summ(2, 3)


# function with return and argument
def summ2(age1, age2):
    result = int(age1) + int(age2)
    return result

rst = summ2(2, 3)
print(rst)