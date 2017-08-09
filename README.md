# Plaudit! by TEAM ALL CAPS

[See it live on Heroku!](https://plauditapp.herokuapp.com)

Guests can enter the site using the following credentials

Username: plauditapp@gmail.com | Password: guest

## Description

Plaudit! is a workplace application that lets you publically applaud the achievements of your peers and employees. We believe workplace culture should not only encourage positive feedback, but celebrate it!

Note: Styling can be customized based on client preference or corporate branding.

### Core Features

Plaudit allows users to publically recognize their co-workers' achievements via an awards system. The most recent awards are displayed in an activity feed on the home page. Awards given to (or by) a user will also be visible on their profile page. 

When a user receives a badge, they are notified via email. Their direct supervisor is also notified of the award.

Use the autocompleting search bar to find members and see their profile pages, which also include a user's photo and contact information. 

The app is designed to be simple and easy to use, and is fully responsive.

Customization: We recognize that each organization is unique, so we designed Plaudit to be highly customizable. The information on each user's profile page can be tailored for your needs, and the color scheme can be altered to match your brand. In addition, an organization can choose to use different award icons (i.e., a Plaudit Badge) and/or declare meanings for each type of award. For example, you may choose to include awards at different tiers (a small award for cleaning a supply closet, a giant award for working 36 hours straight to finish a massive product launch), or simply categorize the awards to fit their your unique style (a "great idea" award, an "extra effort" award, a "helpfulness" award, etc).  

### Web App Outline

Plaudit users may only register for the site once they exist in the organization/company database - this will seed basic information about each user, including their name, email, work phone number, position and supervisor. A new user registers by creating a password and including any extra information that will be displayed on their profile page (currently we incorporate a "fun fact" about the user). The encrypted password and extra information is then stored in a second database table.

Once a user logs in, they see a feed of all the awards recently given to other members of their organization. From here, they can access their own profile page, search for the profile page of another user, or give a badge to another user.

When giving a badge, a user can choose to give a co-worker a number of different awards (currently represented by a crown, a trophy, a star and a lightbulb) and include a message to accompany the award. The activity will be visible on the home page and profile pages of those involved. A notification email is also sent to both the user and their direct supervisor so that the recognition does not go unnoticed. 

## Technologies Used

### Database Management
* mySQL

### Deployment
* Heroku
* JawsDB MySQL

### NPM Packages
* bcrypt
* body-parser
* connect-ensure-login
* cookie-parser
* express-session
* nodemailer
* passport
* random-string
* sequelize
* session-store

### Languages and Libraries
* CSS
* Handlebars
* HTML
* GreenSock
* Google Fonts
* Javascript
* jQuery
* Materialize
* Sequelize

## Getting Started and Prerequisites

Clone or download the repository to your desktop.

Users will need Google Chrome web browser for testing the application and Sublime (or another tool) for viewing/editing the code.  Users will also need to install the npm packages (provided in the package.json and listed above under "Technologies Used") via the terminal and use MySQL Workbench in order to establish a database.

## Testing

Download or clone the repository to your desktop.  Create a database in MySQL Workbench entitled "star_power."  Use said database and seed it with the seeds from the document SQL_credit or add your own seeds into SQL_credit and enter them into the MySQL database.  Add your MySQL Workbench password to the config.json.

Navigate to the file folder that holds the Plaudit! files in the terminal.  Type "npm i --s".  Then run the server: "node server.js" 

From there, navigate to localhost:8080 in your browser to open up the landing page of the website. Create an account based on one of the established seeds and log in.  Once logged in, you will be taken to the index.handlebars page were the main activity feed is located.  You will also see a nav bar at the top of the page which includes both a search bar in the right hand corner and a hamburger menu in the left. 

One can search for other users using the search bar.  It will take the user to that person's profile page.  The hamburger menu, once clicked, will trigger a side nav to slide out from the left side of the page.  Users can navigate to the main activity feed, their profile page, the give a badge page, or the frequently asked questions page.  Users can also log out from the side nav.

Profile pages display the profile owner's name, headshot, work role, phone number, email address, and LinkedIn profile link.  Below this is an activity feed specific to the profile owner

The Give a Badge page offers a brief form in which the user can enter the name of a recipient, select one of four colorful badges, and enter a message for their recipient.  Clicking the submit button will push the badge to the activity feed, the recipient and the user's activity feeds, and take the user to main activity feed.

The FAQ page lists commonly asked questions and their corresponding answers in a collapsible format.

The log out function in the side nav returns the user to the landing page.


## Application and Features Visual Tour

### Landing Page Login (Returning & New User)
![](http://i.imgur.com/AzRdz81.png)  

### Main Page (Activity Feed)
![](http://i.imgur.com/L4c2ypI.png)

### Side Navigation
![](http://i.imgur.com/6a6Ob6M.png)

### Profile Page (with user specific activity feed) - Also highlighting header searchbar autocomplete
![](http://i.imgur.com/OCxPxs7.png) 

### Give a Badge Page 
![](http://i.imgur.com/bgjwy1q.png) 

### Email Notifications
![](http://i.imgur.com/Ar1ZS6b.png)) 

### Mobile
![](http://i.imgur.com/FXdy6iv.png)![](http://i.imgur.com/YGVDg1p.png)

## Code Walkthrough
Please refer to the repository files for coding samples; The sections are commented to indicate their functionality.

If you have any questions about how or why something works, feel free to contact a member of the [Project Team](https://github.com/SusanArend/TeamAllCaps) for details!

## Authors
* **Michelle Didier** [meeshyd](https://github.com/meeshyd)
* **Susan Heiniger** [SusanArend](https://github.com/SusanArend)
* **Adam McNerney** [NorthNern](https://github.com/NorthNern)
* **Rebecca Palmore** [rpalmore](https://github.com/rpalmore)
* **Yilin Xu** [yilinxu](https://github.com/yilinxu)

## Acknowledgments
Hat tip for help, inspiration, and patience to:

* Steven Daoud
* Nate Johnson
* Ethan Romba
* Chris Mendoza
* Liz Wylie
* Kurt Schlueter