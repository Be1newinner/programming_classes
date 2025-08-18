'''
# print 0 to 9
for i in range(10):
    print(i)

#  print even numbers from 0 to 20
for i in range(0,20,2):
    print(i)

# print table of 2
for i in range(10):
    print("2 x " , i , " = " , i * 2)
'''

# Print prime number
num = 45
isPrime = True
for i in range(2,num): 
    if (num % i == 0):
        isPrime = False

if (isPrime == False):
    print("Not Prime!")
else:
    print("Prime!")