# TDD-example
This web service was created to demonstrate test-driven development practice.

## Features

### Summary:
A small web service API provides a mechanism to register users accounts, save the date in NoSQL database and activate them on demand.

### Problem:
Implementing a web API comes with a potential developments errors such as wrong resposes and real time craches.

### Our Solution:
We followed test-driven development practice by using an automated testing framework in order to convert the requirement specification into a unit test-cases.
After That, the actual implementation code was written to pass those test-cases.

## Project Specification
The main objective of this API is to store users records and apply basic CRUD actions on them.
The functional requirements of this API is divided into five separate functions reached from five endpoints as follows:

### /user/all 
GetUsers: request all users from the database then respond with an array of objects contains all accounts' details.

### /user/add
Post User: send request contains new account data, it should store it the database then respond with confirmation status and user object.

### /user/remove/:id
DeleteUser: send request to delete specific account bases on the user's account, it should delete the user and respond with confirmation status and message. status and message.

### /user/changename/:id
UpdateUserName: send request to update username field in the database based on the user's ID, it should update the record and respond with confirmation status alongside with the updated user's object. 

### /user/activate/:id
ActivateAccount: send a request to activate a user account based on its ID, it should update the needed record and respond with confirmation status and the updated user object.



## Requirements
- NodeJS 8.9.4
- mongoDB 3.6.2

## Development

### Tech Stack

#### Backend
* Nodejs
* Express
* Mongoose
* Mocha

### Installing Dependencies
From within the root directory:
```sh
npm install
```

### Running Tests
Within the root directory:
```sh
npm test
```

### Running the web servie locally
Within the root directory:
```sh
npm start
```
## Testing process

### Two test-cases were written without actual implementation. Test should fail
![alt text](https://raw.githubusercontent.com/semo94/TDD-example/master/Doc%20imgs/Two%20faild.png)
***

### Two functions were written to satisfy the previous test-cases. Both tests should pass
![alt text](https://raw.githubusercontent.com/semo94/TDD-example/master/Doc%20imgs/Two%20passed.png)
***

### Three new test-cases were added without any further implementation. Two should pass and three should fail
![alt text](https://raw.githubusercontent.com/semo94/TDD-example/master/Doc%20imgs/Three%20faild.png)
***

### Three Aditional functions were written to satisfy the previous test cases, All five tests should pass
![alt text](https://raw.githubusercontent.com/semo94/TDD-example/master/Doc%20imgs/Five%20passed.png)

