# node-express-REST-API

How to use NodeJS with Express and MongoDB.

## Install

git clone https://github.com/BrianNdwiga/RESTAPI-blogs-expressJS

cd RESTAPI-blogs-expressJS Or open with Visual Studio Code Editor

Configure .env from .env_

Initialize database:

npm install

## Running the App

nodemon app

# Go to postman
Enter the request URL 
View All Blogs - GET - http://127.0.0.1:3000/
![Get All Blogs](https://user-images.githubusercontent.com/67043559/123595217-53577080-d7f9-11eb-8f5b-66aff69e52a4.png)

REGISTER Blogs - POST - http://127.0.0.1:3000/register
<!-- ENTER EMAIL AND PASSWORD IN THE BODY(RAW,JSON FORMAT) -->
![Register](https://user-images.githubusercontent.com/67043559/123595416-90bbfe00-d7f9-11eb-92db-bb52da76a384.png)

LOGIN - POST - http://127.0.0.1:3000/login
<!-- ENTER EMAIL AND PASSWORD IN THE BODY(RAW,JSON FORMAT) -->
![Logged in](https://user-images.githubusercontent.com/67043559/123595483-a16c7400-d7f9-11eb-95af-8f31ca1f504d.png)

VIEW ALL USERS - GET - http://127.0.0.1:3000/users
![All Users](https://user-images.githubusercontent.com/67043559/123595520-adf0cc80-d7f9-11eb-84f7-7c5beabfcac0.png)

NB: THE FOLLOWING ROUTES REQUIRE YOU TO BE LOGGED,i.e. create blog, edit blog, get specific blog and delete blog.LOG IN FIRST IN ORDER TO CONTINUE.
![Must Login](https://user-images.githubusercontent.com/67043559/123595573-bd701580-d7f9-11eb-9739-e7b408e051e9.png)

CREATE A BLOG - POST - http://127.0.0.1:3000/create
![CreateBlog](https://user-images.githubusercontent.com/67043559/123595614-c8c34100-d7f9-11eb-8202-5de6dca220ff.png)

AFTER CREATING BLOG-GET ALL BLOGS
![afterCreate](https://user-images.githubusercontent.com/67043559/123595635-cf51b880-d7f9-11eb-8c46-2bcfa4f5a86e.png)

VIEW SPECIFIC BLOG -GET - http://127.0.0.1:3000/blog/60d78aaddf608512504771cf
<!-- COPY AND ATTACH ID AT THE END 3000/blog/:id here -->
![Get Specific Blog](https://user-images.githubusercontent.com/67043559/123595674-d973b700-d7f9-11eb-83c6-d1f993048779.png)

EDIT SPECIFIC BLOG - POST - http://127.0.0.1:3000/edit/60d78aaddf608512504771cf
<!-- ATTACH ID AT THE END 3000/edit/:id here -->
![Edit Blog](https://user-images.githubusercontent.com/67043559/123596881-5eab9b80-d7fb-11eb-982f-17f160871bb0.png)

AFTER EDITING BLOG-GET ALL BLOGS
![afterEdit](https://user-images.githubusercontent.com/67043559/123596922-68350380-d7fb-11eb-8ec6-6cfc932e36eb.png)

DELETE SPECIFIC BLOG - DELETE - http://127.0.0.1:3000/delete/60d7884dc58855257caa621f
<!-- ATTACH ID AT THE END 3000/delete/:id here -->
![delete](https://user-images.githubusercontent.com/67043559/123595767-f7d9b280-d7f9-11eb-985d-e29a44c3a29a.png)

AFTER DELETING BLOG-GET ALL BLOGS
![afterDelete](https://user-images.githubusercontent.com/67043559/123595790-fe682a00-d7f9-11eb-98b6-0421a4787789.png)

To stop the server running type `CTRL+C`
