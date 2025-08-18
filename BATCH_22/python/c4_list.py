# ls = []
ls2 = ["Vijay", "Ajay", "Karan"]

# print(ls2)

# print(ls2[0])

ls2[0] = "Vijay Kumar"

# print(ls2[0])

# add item at last index
ls2.append("Arjun")

# remove item by index or last item by default
# ls2.pop(1)

# add item at specific index
ls2.insert(1,"SOMETHING")

# remove  by value
# ls2.remove("Ajay")

# print(ls2)

# Loop through a list

'''
for i in range(len(ls2)):
    print(ls2[i]) 
'''

# ls2.sort()
ls2.sort(reverse=True)
# print(ls2[0:3:4])
# print(ls2[:3])
print(ls2[0:3])
