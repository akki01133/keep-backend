## Keep-Backend
--- 
An api built using Express.js and MongoDB. 
deployed using [Vercel](https://vercel.com/) at [keep-backend](https://keep-backend-khaki.vercel.app/)

### Features :
- the server utilizes express_jwt package for authorizing user via JWT tokens. 
- the project is built upon the MVC architecute keeping in mind its small and compact domain.
- used url_parser package to except www-url-encoded data in request body and respond in JSON format. 

### api-endpoints

- /auth
    - post /register
    - post /login
    - post /resetPassword

- /user
    - get /profile
    - patch /profile

- /api
    - get /notes
    - get /notes/:id
    - delete /notes/:id
    - patch /notes/:id

```
💡 documented with 💖 by Ajeet | kr 
```
