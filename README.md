# node-express-REST-API

How to use NodeJS with Express and MongoDB.

## Install

git clone https://github.com/BrianNdwiga/RESTAPI-blogs-expressJS

cd RESTAPI-blogs-expressJS

Configure .env from .env_

Initialize database:

npm install

## Running the App

nodemon app

# Go to postman
Enter the request URL 
View All Blogs - GET - http://127.0.0.1:3000/

REGISTER Blogs - POST - http://127.0.0.1:3000/register
<!-- ENTER EMAIL AND PASSWORD IN THE BODY(RAW,JSON FORMAT) -->

LOGIN - POST - http://127.0.0.1:3000/login
<!-- ENTER EMAIL AND PASSWORD IN THE BODY(RAW,JSON FORMAT) -->

VIEW ALL USERS - GET - http://127.0.0.1:3000/users

NB: THE FOLLOWING ROUTES REQUIRE YOU TO BE LOGGED, LOG IN FIRST IN ORDER TO CONTINUE.

CREATE A BLOG - POST - http://127.0.0.1:3000/create

VIEW SPECIFIC BLOG -GET - http://127.0.0.1:3000/blog/60d78aaddf608512504771cf
<!-- ATTACH ID AT THE END 3000/blog/:id here -->

EDIT SPECIFIC BLOG - POST - http://127.0.0.1:3000/edit/60d78aaddf608512504771cf
<!-- ATTACH ID AT THE END 3000/edit/:id here -->

DELETE SPECIFIC BLOG - DELETE - http://127.0.0.1:3000/delete/60d7884dc58855257caa621f
<!-- ATTACH ID AT THE END 3000/delete/:id here -->

To stop the server running type `CTRL+C`
