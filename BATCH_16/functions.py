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

'''

def sum(a,b):
    total = a + b
    return total

# result = sum(7,6)
# result = 13

print(sum(7,6))
#print(13)

