const express = require("express");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

const app = express();
app.use(cookieParser());
const Password = "passwordpasswordpasswordpassword";
/*
This middleware is supposed to recieve a token as cookie or authroziation and output id and role as output

*/
const tokenParser = (req, res, next) => {
  //   console.log("headers => ", req.headers);
  //   console.log("path => ", req.path);
  //   console.log("body => ", req.body);
  //   console.log("query => ", req.query);

  // how will be accpet jwt token from user
  //  option 1. user sent jwt through cookie
  try {
    const token = req.cookies["access-token"];
    console.log(token);
    const data = jwt.verify(token, Password);
    console.log(data);
    const user = {
      id: data.sub,
      role: data.role,
    };
    req.user = user;

    //   console.log(token["swipx-token"]);

    next();
  } catch {
    res.json({
      message: "You are not authroized",
    });
  }
};

function isAdmin(req, res, next) {
  if (req.user.role === "ADMIN") {
    return next();
  } else {
    res.json({
      message: "You are not admin",
    });
  }
}

app.get("/", tokenParser, (req, res) => {
  res.json({ message: "hello world", user: req.user });
});

app.get("/login", (req, res) => {
  const token = jwt.sign(
    JSON.stringify({
      sub: "this-is-id",
      role: "admin",
      maxAge: 60_000 * 60,
    }),
    Password,
    {
      algorithm: "HS256",
    }
  );

  res.cookie("access-token", token).send("Successfully logged in!");
});

app.get("/logout", (req, res) => {
  res
    .cookie("access-token", "", {
      maxAge: -1,
    })
    .send("Successfully logged in!");
});

app.listen(3001, () => console.log("hee"));
