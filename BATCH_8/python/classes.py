class UserService:
    name: str

    def __init__(self, uname: str):
        self.name = uname

    def get_name(self) -> str:
        return self.name

    def set_name(self, uname: str):
        self.name = uname


# class UserService2:
#     name: str

#     def __init__(self, uname: str):
#         self.name = uname

#     def get_name(self) -> str:
#         return self.name

#     def set_name(self, uname: str):
#         self.name = uname


class AuthService:
    user: UserService

    def __init__(self, user: UserService):
        self.user = user

    def greet(self):
        print(f"Hello {self.user.get_name()}")


user = UserService("John")
auth = AuthService(user)

auth.greet()
