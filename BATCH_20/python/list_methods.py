ls = ["a", "b", "a", "c", "e", "f"]

# Count occurence of item in list
# print(ls.count("a")) # output = 2
# print(ls.count("z")) # output = 0

# Find Index of item
# print(ls.index("a"))  # output = 0

# print(ls.count("z") > 0 and ls.index("z"))  # raise error


# Copying of Array
# Shallow Copy
ls2 = ls

# Deep Copy
ls3 = ls.copy()

# Sorting
# ls.sort()
# ls.sort(reverse=True)

# ls: list[dict[str, int]] = [{"age": 24}, {"age": 20}, {"age": 25}]

# def sorting(a):
# return a.get("age")

# ls.sort(key=sorting)

# print(ls)

# Clear a Databse
# ls.clear()

print(ls[0:4:-1])
