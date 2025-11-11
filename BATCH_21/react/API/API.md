## Types of API

1. REST = 90%
2. Graphql
3. GRPC
4. TRPC
5. Socket
6. RTC

## Defination

API = Application Programming Interface ( REST API )
This is an intermediary between frontend and backend. It takes request from frontned sends to backend then backend sends the 'Response' to API and API sends back the response to frontend.

## Components of API:

1. Request Method

   - GET METHOD
   - POST METHOD
   - PUT METHOD
   - PATCH METHOD
   - DELETE METHOD
   - HEAD
   - OPTION
   - TRACE

2. Request Path
   api ka url kya hai e.g. https://api.shipsar.in/posts

3. Request Input
   means frontend se data kese loge!
   - Body as JSON
   - Body as XML
   - Path Parameters
   - Query Parameters
   - Cookies
   - Authorization ( as TOKEN )

### Response Types:

    means backend ka response kese milega

- JSON (ARRAY, OBJECT)
- XML (ARRAY, OBJECT)
- Primitive Type ( String, Number, boolean )
- Cookies

## PROMISE

**what is promise?**
This referes to a situation where a function can not returns the data immidiately but it will return some time in the future! then the function returns a Promsie.

### Stages of a Promise

- PENDING STAGE
- SUCCESS STAGE ( RESPONSE )
- FAIL STAGE ( REJECT )
