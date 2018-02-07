# Backend-condor
Getting Started
There are two methods for getting started with this repo.

Familiar with Git?
Checkout this repo, install dependencies, then start the gulp process with the following:

> git clone https://github.com/jkzasori/Backend-condor.git
> cd Backend-condor
> npm install
> npm start
Host: localhost
Port: 3002
Not Familiar with Git?
Then download the .zip file. Extract the contents of the zip file, then open your terminal, change to the project directory, and:

> npm install
> npm start
______________________________________________

```
HTTP Method: POST
Endpoint: /provider
body
{
	"firstName": "Jose",
	"lastName": "Tamara",
	"middleName": "A",
	"email": "jotafu@live.com",
	"specialtyId": "59b84f14cab3a5b9d262979d",
	"employerId": 123456,
	"providerType": "DO",
	"status": "APPROVED"
}
```
_______________________________________________
```
HTTP Method: GET
Endpoint: /provider
http://localhost:3002/provider
```
_____________________________________________
```
HTTP Method: PUT
Endpoint: /provider/{providerId}
body 
{
	"status": "DENIED"
}
```
________________________________________________
```
HTTP Method: DELETE
Endpoint: /provider/{providerId}
Param: http://localhost:3002/provider/59b84f14cab3a5b9d262979d
```


