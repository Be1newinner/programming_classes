async function registerUserService({ name, email, password }) {
  const data = await UserModel.insertOne({
    name,
    email,
    password,
  });
  return data;
}

async function fetchUsersService() {
  const data = await UserModel.find(
    {},
    {
      password: false,
    }
  );
  return data;
}

module.exports = { registerUserService, fetchUsersService };
