# Connect Mongoose to expressjs

## Step 1.

`npm init -y`

## Step 2.

- Create Index Js File!

## Step 3.

- Install followings

`npm install express nodemon mongoose`

## Step 4.

- Create src folder
- src -> index.js
- src -> config
- src -> config -> db.js file

## Step 5.

- connect mongoose to mongodb in db.js file

`await mongoose.connect()`

## Step 6.

- in index.js file connect db.js file

# Connect dotenv to express

## Step 1.

`npm install dotenv`

## Step 2.

add `require('dotenv').config()` in index.js at the very top

# Step 3

add `MONGODB_URL=url` in .env

# Step 4.

add `.env` in the `.gitignore` file

# Step 5.

Access an value inside `.env` using `process.env.MONGODB_URL`
