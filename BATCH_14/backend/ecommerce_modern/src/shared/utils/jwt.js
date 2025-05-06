// Tokens
// login token / refresh token
// access token

// Auth Flow
// 1. Register => USER Details => DB Stored
// 2. Login => notifiaciotn 
//                  1. user id logged in // error invalid user => return { true, token }  / false
//                  2. cookies stores => store token = asd5s41we19a84dsad4949
//                  3. e.g. frontend redirect dashboard => if isLoggedIn == true ? dashboard : login page
//                  4. user data fetch krne api call through email id!
// 
// 
// Scenario 2
//      1. token 2 parts => a. refresh token / login token => long lived token { 1 week : 1 month }
//                                 -> this will be httpOnly
//                                  -> new access token generate
//                          b. access token 
//                                  -> short lived => 15 minutes
//                                  -> API Call
// 
// 
// 