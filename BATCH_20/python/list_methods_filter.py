persons = [
    {"name": "Vijay", "age": 27, "id": 0},
    {"name": "Ajay", "age": 31, "id": 1},
    {"name": "Sanjay", "age": 38, "id": 2},
]

#
"""
MOST IMPORTANT: 
****************** 
******************
****************** 
******************

1. FILTER METHOD ME HUMESA COMPARISION STATEMENT RETURN HOTI HAI JISME COMPARISON OPERATOR USE HOTA HAI AND OUPUT YA TO TRUE HO YA FALSE

2. MAP METHOD ME UPDATE DICT OF LIST RETURN HOTI HAI JO PEHLE DICT OF LIST KI JAGAH USE KRNI HAI

****************** 
******************
****************** 
******************
"""


def mapper_person(item):
    return item["age"] > 30


# filter returns map type object by default
persons2 = list(filter(mapper_person, persons))

print(persons2)
print(persons)
