set_names = {"vijay", "ajay"}
set_names2 = {"vijay", "rohit"}

ls = [5, 4, 8, 2, 2]

# Adding data in set
# set_names.add("ajay")
# set_names.add("sanjay")

# pop method removes data randomly becuause set do not have fixed order
# set_names.pop()
#
# set_names.update(["Vijay", "ajay", "priya"])


# print(set_names.intersection(set_names2))
# print(set_names.difference(set_names2))
# print(set_names.union(set_names2))
# print(len(set_names))

# print(list(set(ls)))

# print(set_names)

set_names.remove("vijay")

print(list(set_names).count("vijay"))
