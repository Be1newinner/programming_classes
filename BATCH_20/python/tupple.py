# Tupple is immutable by nature
names_tupple = (5, 9)

ls2 = list(names_tupple)
ls2.append(5)

names_tupple = tuple(ls2)

# print(names_tupple.count(2))
# print(names_tupple.index(2))
# print(names_tupple)

# nms = (5,)
# print(nms)

# a, b, c = names_tupple

a = 5
b = 6

# print(a, b)

a, b = b, a
print(a, b)