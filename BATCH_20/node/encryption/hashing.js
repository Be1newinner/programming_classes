// VIJAY_ALGORITHM

function hashing(data){
    let result = 0;
    for(const i of data){
        result += i.charCodeAt(0)
    }
    console.log(result)
}


hashing("VIJAY_KUMAR")


// Algorithm

/*
 REGISTRATION FLOW
    1. INPUT (EMAIL, PASSWORD)
    2. VALIDATE(EMAIL, PASSWORD)
    3. PASSWORD => HASH => OUTPUT e.g. 866
    4. MONGODB SAVE => ( EMAIL, HASH )
    5. RETURN USER EMAIL , SUCCESS RESPONSE


 LOGIN FLOW
    1. INPUT (EMAIL, PASSWORD)
    2. VALIDATE(EMAIL, PASSWORD)
    3. EMAIL SEARCH => DOC 
    4. PLAIN PASSWORD KO HASH KROGE
    5. HASHED PASSWORD KO DB KE PASSWORD MATCH KRENGE AGR WO VERIFIED HAI
    6. RETURN ACCESS TOKENS
 */