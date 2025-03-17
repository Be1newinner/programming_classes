
# 1st method

# import assets.string_utils

# assets.string_utils.add(2,15)

# 2nd method

# import assets.module.string_utils as su

# su.add(2,15)

# 3rd method => from

# from assets.module import string_utils, add

# string_utils.add(15,12)
# add.add(14,2)


# 4th method => from 

from assets.module.string_utils import add, name
add(12,1)