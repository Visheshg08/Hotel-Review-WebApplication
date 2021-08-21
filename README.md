# Hotel-Review-WebApplication

Tech Stack :-
•	Node JS for Backend
•	Mongo Db for Database
•	HTML and CSS for Frontend
•	Cloudify for storing Images.
•	Map box for Maps
•	Passport for Authentication
•	Both Client Side and server side validation

How it Works?
User can register their hotel and other users can login and share their experience about their stay at the property. Users need to login first to write their review. The owner of the property can get an idea of the service they are providing with the reviews they get.
The app allows users to know about the place they are going to visit in advance on the basis of reviews by other people for that place
The users can login to the app and share their reviews  and rate a particular property
Also Hotels can list themselves on this platform so that they can know how is their customer genuinely feeling about the property.

Cloudify:
As we cannot store the images uploaded by people on browser side we are using cloudify to store all the images that the user uploads. 
Map box: 
API for displaying the location of the place on the map. It reads the location provided and searched for the coordinates and place a pointer on that location and displays it.
Controllers:
All the functions are regarding the functionality on different clicks are defined here
Models:
The models directory includes all the models of the web app. Basically three models are used namely Review, Hotel and User
Public:
In this directory functionality for maps and basic css for maps ,home page and stars is provided.
Seeds: The initial data is incorporated from the seeds file. Usually there should be no data in sedds as the data should be provided from user. But to show example. Some initial data is used.


Views: In this directory all the frontend part and the html is provided. The index page, edit page, new page, homepage.
App.js:  Main file for starting the app.
Middleware: Middleware for validation.
![image](https://user-images.githubusercontent.com/58374984/130333878-d3b3aa6c-446d-4424-93a9-9af8f58c8ec8.png)
 
Home Page: This page allows the user to navigate around the whole webapp
![image](https://user-images.githubusercontent.com/58374984/130333896-246dc91e-47ed-4176-a82a-9bd566273245.png)




 
Index Page: Shows all the hotels that have been uploaded till now.
![image](https://user-images.githubusercontent.com/58374984/130333904-4932c8cb-f3cf-42e8-8c4d-e50c743121a6.png)

 
Hotel Edit Page:
Only users who have uploaded that property can upload new or delete pages which they have uploaded before.
![image](https://user-images.githubusercontent.com/58374984/130333909-f4c705c7-d08b-4eca-8662-8438fea09ce3.png)

 
Show Page: This page displays details about the hotel , Location, prices and reviews. Only users who have uploaded the review can edit or delete it

 
New Hotel: Users who want to upload about their own property can upload the hotel. This send the request to add the hotel and lands the user on the index page.
![image](https://user-images.githubusercontent.com/58374984/130333921-98fec736-418c-480a-b851-4e0ca3ad6f37.png)




 

