Node JS CRUD API
===

An node js crud api based on mongoDB. Database name is `agrifuture`.

## Start the Service
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
You can browse the apis at http://localhost:3000

If you use Homebrew to install mongoDB, you can run it by:
```
brew services start mongodb-community@4.2
```
But please remember to stop it.
```
brew services stop mongodb-community@4.2
```
If you find the port `27017` occupied, please get the process of previous mongo process and kill it.
```
$ ps -ef | grep mongo
  root     17573 14213  0 05:10 pts/1    00:00:00 su - mongo
  mongo    17574 17573  0 05:10 pts/1    00:00:00 -bash
  mongo    18288     1  0 06:12 ?        00:00:00 mongod -f /database/mongodb/data/mongodb_27017.conf
  mongo    18300 17574  6 06:13 pts/1    00:00:00 ps -ef
  mongo    18301 17574  0 06:13 pts/1    00:00:00 grep mongo

$ kill -2 18288 # Kill mongo process
```
## Current Document Model
| fieldID | title |  content | nitrogen |
| --- | --- | --- | --- |
| Number | String | String | Number |

## How to test it
``` shell
# Try to post a new json data to database
node request.js
```
If there is a message like this in your terminal, then you make it :)
``` shell
----info------ {
  _id: '5d98be3d39f31588199e2034',
  fieldID: 2,
  title: 'Field B',
  content: 'Plant Moon',
  nitrogen: 0.89,
  createdAt: '2019-10-05T16:01:01.721Z',
  updatedAt: '2019-10-05T16:01:01.721Z',
  __v: 0
}
```
Then you can use [postman](https://www.getpostman.com/) to test all CRUD operations.