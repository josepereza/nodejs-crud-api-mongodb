Node JS CRUD API
===

An node js crud api based on mongoDB. Database name is `agrifuture`.

## Execution
``` shell
# Initialize the node modules
npm init 
# Install dependencies
npm install
# Run mongoDB
mongod
# Run server.js
node server.js
```
## Current Data Model
| title |  content |
| --- | --- |
| string | string |

## How to test
``` shell
# Try to post a new json data to database
node request.js
```