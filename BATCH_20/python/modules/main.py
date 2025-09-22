import httpx
import asyncio

"""
# API CALL REQUEST METHODS!

1. GET      =   TO RETRIVE Unsensitive DATA!, INPUT     =   Headers, Query Params, Path Params
2. POST     =   TO RETRIEVE Sensitive DATA!, INPUT      =   Headers, Query Params, Path Params, body
3. PUT      =   To Update BIG DATA OR REPLACE DATA      =   Headers, Query Params, Path Params, body
4. PATCH    =   TO UPDATE A KEY IN DATA                 =   Headers, Query Params, Path Params, body
5. DELETE   =   TO DELETE DATA                          =   Headers, Query Params, Path Params
6. HEAD     =
7. OPTIONS  =

"""

# response = httpx.get("https://api.asaanhaicoding.in/api/v1/courses")
# data = response.json()


async def callAPI():
    async with httpx.AsyncClient() as client:
        response = await client.get("http://localhost/")
        data = response.text
        print(data)

print("SOMETHING")
# response = httpx.put("http://jsonplaceholder.typicode.com/posts")
# data = response.json()

# response = httpx.patch("http://jsonplaceholder.typicode.com/posts")
# data = response.json()

# response = httpx.delete("http://jsonplaceholder.typicode.com/posts")
# data = response.json()
