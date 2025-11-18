## API /users/me
- GET Request
- This api will fetch user profile


1. /users/me/:id  -> Instagram (public)
    - for making this private user will pass a secret text (e.g. PASSOWRD) Auhtorization header me Bearer Token ki tarah


2. kyuki password har jagah use nahi krna chahiye esliye hum ek special password banenge jo sirf api ko call krne k liye use hoga.
eski madat se aap login nahi kr sakte.
- token kab generate hota hai - Jab user login krta hain

#### Q. token k andar kya kya daalaj jaega!
Ans. esa data jo humesa fixed rahega! and ho api k liye important hain! esko payload bolte hain
    e.g. payload = {
        user_id,
        role: "ADMIN" | "USER" | "VENDOR" | "STUDENT" | "SUPER_ADMIN"     /* esi ko bolte hain! ROLE BASED AUTHORIZATION CONTROL  */
        expiry: 7D
    }



```

e.g.
/users/me/uday_ki_id (PRIVATE)
AUTHORIZATION: UDAY_KA_TOKEN




```


```

TOKEN=
Any one can read the content inside token!
But only User with secret can create the right token!


```