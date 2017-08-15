# Hacktivpress
Live Code Second Phase

## Installation :
    npm init
    npm i -S express
  
    npm install --save jsonwebtoken

    npm install dotenv --save

    
### Setting route

routes | HTTP | Description
-------|------|------------
/auth/register | POST | Register new account
/auth/login | POST | Login while get an access token based on credentials
/articles | POST | Posting at least an article or more (authenticated user only)
/articles | GET | Get all the articles
/articles/:id | GET | Get a single article
/articles/:id | PUT | Updating an article or more (authenticated user only)
/articles/:id | DELETE | Deleting an article or more (authenticated user only)


### For Running the application Step by Step:

**1st Step**

npm start
using postman go to url : (POST) http://localhost:3000/auth/register 
fill on x-www-form-urlencoded
key & value
username : your username (e.g : pdvega)
password : your password (e.g : pdvega)
Congratulation, you've got new user account!

**2nd Step**

You can access now.
Using postman go to url : (POST) http://localhost:3000/auth/login 
fill on x-www-form-urlencoded
key & value
username : your username (e.g : pdvega)
password : your password (e.g : pdvega)
Got the token.

**3rd Step**

Using postman go to url : (GET) http://localhost:3000/articles fill on Headers
key and value
token : your token when signin.
You can see all the articles inside.

**4th Step**

Using postman go to url : (POST)
http://localhost:3000/articles fill on Headers
key and value
token : your token when signin.
For Authenticated User Only.
Create an article on x-www-form-urlencoded with key and value:
title:  
content: 
category:
author: based on object id on User Collection 

**5th Step**

Using postman go to url : (GET)
http://localhost:3000/articles fill on Headers
key and value
token : your token when signin.
You can see all of articles inside.

**6th Step**

Using postman go to url : (GET)
http://localhost:3000/articles/:id fill on Headers
key and value
token : your token when signin.
You can see an article inside by its id.

**7th Step**

Using postman go to url : (PUT)
http://localhost:3000/articles/:id fill on Headers
key and value
token : your token when signin.
For Authenticated User Only.
Update an articles on x-www-form-urlencoded with key and value:
title:  
content: 
category:
author: based on object id on User Collection 


**8th Step**

Using postman go to url : (DELETE)
http://localhost:3000/articles/:id fill on Headers
key and value
token : your token when signin.
For Authenticated User Only.
Deleted article by its id.
