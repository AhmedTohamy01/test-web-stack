
<h1 align="center">
  <div>
  <img title="TypeScript" alt="TypeScript" height=150
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png">
  </div>
  <img title="Books Library" src="https://github.com/AhmedTohamy01/Books-Library-GraphQL/blob/main/public/img1.jpg" alt="React + GraphQL + Apollo" width="1000" />
  <br>
    Typescript Version Of SuperFormula Users List Built Using React.JS, GraphQL, Apollo Client, Styled-Components, Node.JS, Express and MongoDB.
</h1>

<p><font size="3">
  This is a Full Stack Project built using <strong><em>Typescript</em></strong>, <strong><em>React</em></strong>, <strong><em>Apollo-Client</em></strong>,<strong><em>Styled-Components</em></strong>, <strong><em>Styled-Icons</em></strong> in frontend and using <strong><em>GraphQL</em></strong>, <strong><em>Express</em></strong> & <strong><em>MongoDB</em></strong> in backend.
  <br><br> 
The project is a Users List where you can explore available users cards and know a detailed information about each user and filter them by name. You can also add a new user, update existing user or delete existing user.
  <br><br> 
	   <strong><em>Take a look at the live version here:</em></strong> https://superformula-react-graphql.vercel.app/ :octocat: :heart_eyes:
  <br><br> 

</p>


## Table of Contents

- [Project Walk-Through](#project-walk-through)
  - [Main Page](#main-page)
  - [User Card](#user-card)
  - [Search Box](#search-box)
  - [Add Button](#add-button)
  - [Add Modal](#add-modal)
  - [Edit Modal](#edit-modal)
  - [Delete Modal](#edit-modal)
  - [Custom Error Message](#custom-error-message)

- [Technology Used](#technology-used)
- [How To Use](#how-to-use)
- [Author](#author)


# Project Walk-Through

 # Main Page
 
  <div align="center"><a name="menu"></a>
  
  ![image](https://user-images.githubusercontent.com/54721194/147231961-0b0db912-be92-4279-a776-39ca02b6f07d.png)

</div>

On this page you can see all available users in the system, each user on a separate card. The page will show only 6 users by default and you can show more users by clicking on the "Load More" button, this will add more another 6 users so you can see a total of 12 users on the page. If you click again it will add another 6 and show a total of 18 users. (if there are 18 users or more in the database).

You can see the users' limit of the page in the page URL (for example something like "limit=6"), this number will tell you how many users will appear on this page. Every time you click on the "Load More" button this number will increase by "6".

If there are no more users to show in the database and the limit is greater than the users count, the "Load More" button will disappear from the screen.

If you refresh the page while you are showing 12 users for example , it will still show 12 users after the refresh and will not reset the limit to the default limit (which is 6).
  
  
 # User Card
 
<div align="center"><a name="menu"></a>
  
![image](https://user-images.githubusercontent.com/54721194/147233677-5316c935-1bc7-4bb5-a09a-6a8bc7bc8377.png)

</div>

Each user card shows the user name and description, it also shows the user avatar which is a random image coming from public random images API (so every time you refresh the page you will get a new image).

The user card also has Edit Icon at the top of the card, if you clicked on this icon it will open Edit Modal to edit the user information.

The user card also has Delete Icon at the top of the card, if you clicked on this icon it will open Delete Modal to delete the user from the system.


</div>


 # Search Box
 
 <div align="center"><a name="menu"></a>


![image](https://user-images.githubusercontent.com/54721194/147235635-34afc89c-82cf-4969-89a5-7425493c3a67.png)

</div>

You can use the search box at the top of the page to search for any user (by name), it's a near real-time search, you don't need to press any button or click anywhere to start the search, the search will start automatically after you stop typing (smart search:) ).

The search logic is case-insensitive, so whatever you write the search term in capital or small or mixed letters it will work fine.

Once you start typing in the search box you will find a small Close Icon appears at the most right side of the search box, if you click on this Close Icon it will clear the value of the search box.

The search results will appear in the place where the users cards appear and it will show all user cards that have the search term. 

While you are still in the search process you can edit the card or delete the card and the changes will reflect automatically on the search results.

For example, if you edited the user name to something that is not related to the search term, the card will disappear from search results automatically. If you deleted a card it will disappear from search results automatically.

 <div align="center"><a name="menu"></a>


![image](https://user-images.githubusercontent.com/54721194/147243618-06b4566b-857d-42c6-8ad2-f8da27a49ad2.png)
  
  </div>


If the search term didn't match any of the users cards in the system, the system will show a custom error message to tell you that there is no data for this record.


 # Add Button
 
 <div align="center"><a name="menu"></a>

![image](https://user-images.githubusercontent.com/54721194/147238208-539b8059-dfa0-4002-a697-6dad74325968.png)

</div>

You can use the Add Button (The big Plus Icon) at the top of the page to add a new user to the system, this will add a user in the database and will remain permanently until someone deletes it.

When you click on Add Button this will open the Add Modal which will allow you to enter user information and save it in the database.



 # Add Modal
 
 <div align="center"><a name="menu"></a>

![image](https://user-images.githubusercontent.com/54721194/147238695-04bcc458-6c88-4247-a08a-2de18efae63c.png)

  
</div>

When the Add Modal is open it opens with a Modal Overlay behind it which prevents the user from interacting with the main page until he closes the modal. 

The left side of the Add Modal has a map dummy image, it doesn't do anything right now, just a static image.

The right side of the Add Modal has name, address and description fields which you should fill before you can save the user to the database.

Each field has a limit of 50 characters to prevent the user from defacing the design by entering too many characters. (I pay attention to details).

The save button will be disabled if any of the 3 fields is empty. and you can close the modal anytime by clicking on Cancel Button. 

Once you filled the 3 fields and saved the user, the modal will close automatically and the user will appear automatically in the users cards area. 


Note: The user will be added by default at the end of the list, so you may not see it until you click the "Load More" button if the users count in the database higher than the page limit. But if you have for example 10 users in the database and the page limit is 12, so you will see the new user appear automatically in the page (without doing manual page refresh).


 # Edit Modal

<div align="center"><a name="menu"></a>

![image](https://user-images.githubusercontent.com/54721194/147240327-113e1f3d-31c3-4d94-a4eb-738f14000e2e.png)

</div>

As said before, we can edit the user's information by clicking on the Edit icon at the top of the user card, this will open the Edit Modal and when the Edit Modal is open it opens with a modal overlay behind it which prevents the user from interacting with the main page until he closes the modal.

It has everything the Add Modal has but it opens with default values of the user information in the 3 fields. You will be able to edit it to whatever you want.

Also, The save button will be disabled if any of the 3 fields are empty. and you can close the modal anytime by clicking on Cancel Button. 

Once you edited the 3 fields and saved the user, the modal will close automatically and the updated user will appear automatically in the same place in the users cards area. 

Note: The user card will be updated immediately and the changes will appear automatically on the page. 


 # Delete Modal

<div align="center"><a name="menu"></a>

![image](https://user-images.githubusercontent.com/54721194/147243003-d61cd2a4-0b4c-4e7f-806c-24dfead84a07.png)

</div>

As said , we can delete the user permanently from the database by clicking on the Delete icon at the top of the user card, this will open the Delete Modal and when the Delete Modal is open it opens with a modal overlay behind it which prevents the user from interacting with the main page until he closes the modal.

It's a very simple modal, if you want to delete the user permanently click Save Button. Or you can close the modal anytime by clicking on Cancel Button.

Once you deleted the user the modal will close automatically and the updated user will disappear automatically from the users cards area.

 # Custom Error Message

 <div align="center"><a name="menu"></a>

![image](https://user-images.githubusercontent.com/54721194/147244424-b5f46e74-ed84-4e7c-b6a3-766a938eb23c.png)
  
  </div>

In case we couldn't contact the server to get the data the system will show a custom error message to let you know what is happening!


# Technology Used

I have built this project using the following technologies :
- React
- Typescript.
- Apollo Client.
- Styled-Components.
- Styled-Icons.
- GraphQL.
- Node.JS.
- Express.
- MongoDB.
- Cypress.
- Vercel.
- Heroku.



# How To Use

To be able to use this react app locally in a development environment you will need the following:

1) You will need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) installed on your computer.

2) You will need to register (for free) in [MongoDB Online](https://mongodb.com), then create a cluster and get a username & password to connect to any DB in your cluster, then create a databse in your cluster. (usually takes 5 min.) 
Note: if this 5 min. is too long you can contact me and i will send you the DB_URL privately. 

2) Run the Backend Express GraphQL server, you should do the following:


```cmd

# Clone the repository

# Go into the server folder in the repository
cd test-web-stack/server

# Install dependencies
npm install 

# Add dev.env in server folder
You should create a file named "dev.env" in the root of server folder, in this file you should add the following:
PORT=5000
DB_URL=mongodb+srv://{your_DB_username_here}:{your_DB_password_here}@cluster0.dvqs8.mongodb.net/{database_name_here}?retryWrites=true&w=majority


# Run the app (and keep it running) 
npm run dev

# You should see the following messages in the console if the server run sucessfully, 
and was able to connect to the database.
Server connected on port 5000 !
Connected to database !

```

3) Run the Frontend React server, you should do the following:

```cmd

# You already cloned the whole repository in the previuos step

# Open a new terminal.

# Go into the root folder of the repository
cd test-web-stack

# Install dependencies
npm install 

# Run the frontend app
npm start


```

4) Now you can see the project in your browser http://localhost:3000/. 

5) To run cypress tests you should do the following:

```cmd

# Open a new terminal.

# Go into the root folder of the repository
cd test-web-stack

# Start cypress
npx cypress open

# Run the tests
Cypress will open a new window has all tests, in order to run any of the tests just click on it
and cypress will open the test in a new browser window.


```

# Author

👤 **Ahmed Tohamy**
- Github: https://github.com/AhmedTohamy01
- Linkedin: https://www.linkedin.com/in/ATohamy
- Email: Ahmed-Tohamy@outlook.com
