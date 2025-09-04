persons = [
    {"name": "Vijay", "age": 27, "id": 0},
    {"name": "Ajay", "age": 31, "id": 1},
    {"name": "Sanjay", "age": 38, "id": 2},
]


# Q1. list me 1st index me pin_code naam key add krni hai!
# Q2. list me sabhi items me marks naam key add krni hai!
# Q3. list me jaha pe age > 30 waha pe marks naam key add krni hai!


# Access krte time pe agr square bracket me number hai to mtlb wo list ko access kr rahe hain. Agr Square bracket me string hai to wo dictionary ko access kr raha hai

"""
Ans. 1
persons[1]["pin_code"] = 110062
print(persons[1])

"""

"""
Ans. 2
1st Method = for loop chalo and sabme update krdo
___

Loop throug the list
for i in persons:
    print(i)

for i in persons:
    i["marks"] = 45

2nd Method = 

for i in range(len(persons)):
    persons[i]["pin_code"] = 110062

3rd Method (map)



def mapper_person(item):
    item["marks"] = 45
    return item

# map returns map type object by default
persons2 = list(map(mapper_person, persons))

print(persons2)


# ans 3

def mapper_person(item):
    if item["age"] > 30:
        item["marks"] = 45
    return item

# map returns map type object by default
persons2 = list(map(mapper_person, persons))


print(persons2)
"""


print(persons)
