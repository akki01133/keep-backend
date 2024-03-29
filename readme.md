## Description
--- 
An api built using Express.js and MongoDB. 
deployed using [Vercel](https://vercel.com/) at [keep-backend](https://keep-backend-khaki.vercel.app/)

## Features :
- the server utilizes `jsonwebtoken` package for authorizing user via JWT tokens. 
- the project is built upon the `MVC architecute` keeping in mind its small and compact domain.
- used `body_parser` package to except `x-www-form-urlencoded data` in request body and respond in JSON format. 

## api-endpoints

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
## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev
```
## License

Keep-Backend is [MIT licensed](LICENSE).

```
💡 documented with 💖 by Ajeet | kr 
```
