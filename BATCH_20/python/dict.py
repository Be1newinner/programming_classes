ds: dict[str, str | int] = {"name": "Vijay", "marks": 10}

print(ds)

# Add key: value in bulk
ds.update({"marks": 50, "age": 48})

# Add iteupdatem in dict
# ds["age"] = 25

# Retrieve item in dict
# print(ds.get("marks"))

# Search Item in dict
# print("marks" in ds)

# Delete item in dict
# del ds["age"]

print(ds)
