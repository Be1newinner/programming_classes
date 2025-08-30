# List

# Empty List
arr = []

# filled list
# in5t list
arr = [15, 12, 16, 13]
arr = [15.4, 12.2, 16.1, 13.2]
arr = ["as", "dsa", "asd"]
arr2 = ["aas", "adsa", "sasd"]
persons = [
    {"name": "Vijay", "age": 27, "id": 0},
    {"name": "Ajay", "age": 31, "id": 1},
    {"name": "Sanjay", "age": 38, "id": 2},
]

# get data from list
# print(arr[0])
# arr[0] = "VIJ"

arr.append("VIJA")  # Last me add
arr.extend(arr2)  # concat other list
# arr.pop() # remove from any index by default last
# arr.pop(2)
arr.insert(2, "AJA")  # add at any position
arr.insert(2, "AJA")  # add at any position
arr.remove("sasd")  # Remove item based on value
# print(arr.index("aas"))

#### CLONING AN ARRAY
# arr_2 = arr
# arr_2 = arr.copy()
# arr.append("SOEMTHING")
# print(arr)
# print(arr_2)
# print(arr.count("AJA"))
# persons.sort(key=None)
persons2 = persons.copy()
persons2.reverse()
print(persons2)


######################## dictionary
# empty dictionary
car = {}
person = {"name": "Vijay", "age": 27, "id": 0}
