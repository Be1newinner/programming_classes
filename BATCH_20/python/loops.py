sq = range(10)  # returns a sequence not list
sq_list = list(sq)
print(sq_list)
# print(sq_list[2:5])  # Slicing an array using index numbers
# print(sq_list[0:5])  # Slicing an array using index numbers
# print(sq_list[:5])  # Slicing an array using index numbers
# print(sq_list[3:10])  # Slicing an array using index numbers
# print(sq_list[3:])  # Slicing an array using index numbers
# print(sq_list[:])  # Slicing an array using index numbers
# print(sq_list[::3])  # Slicing an array using index numbers


# print(list(range(2, 10, 3))) # arguemnts = start, end, step difference


for i in range(0, 11, 2):
    if i < 5:
        print(i)
    else:
        print("X", i)

i = 0
while i < 10:
    print(i)
    i += 1
