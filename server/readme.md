# API server

RESTful API based on Expressjs.

WARNING: This is for exercice purposes. You should not run this in production (no unit tests, db...).

## Features

- Create, update, delete, read configuration
- List readings

## Call the API

As best practice, use these headers to make requests to the API:

```
Accept:application/json
```

## API response

The response code will never be in the response.

**Make operations** (create, update, delete and put)

### endpoint "configs"

#### create body:

```json
{ 
    "name": string, 
    "code": numeric, 
    "active": boolean, 
    "type": string, 
    "description": string
} 

```

**Getting objects** (read)

```json
{
  "id": 1,
  "name": "Gráfica 1",
  "code": 32,
  "active": true,
  "type": "Type1",
  "description": "Esto es una descripción 1"
}
```

### endpoint "cards"

**Getting objects** (read)

```json
{
    "id": 1,
    "name": "Gráfica 1",
    "description": "Esto es una descripción 1",
    "active": true,
    "data": [
        {
            "id": 0,
            "value": 21
        },
        {
            "id": 1,
            "value": 33
        },
        ...
        ]
}
```

## Installation

#### Requirements

- npm
- node >= 12

```
npm install
```

Run application

```
node app.js
```

Hello world!

```
http://localhost:5000
```
