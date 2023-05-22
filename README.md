# <WhereToEat>

## Description

Where to eat is a restaurant randomizer application that allows users to get a lunch or dinner idea with just a click of a button.

- As I was sdutying or I was in office It was always hard to figure out where should I have my lunch, so I thought why there isn't an application that give me an idea for a lunch destination in a simple and easy way.
- I created this project to challenge my skills and to perhaps create something others can use and make their life a bit easier.
- My application definitely solves the problem of putting too mch time into searching lunch locations.
- During the development of the application I learned how to best connect front and backend, use new technologies like Redux.

## Installation

bundle install
npm install --prefix client

To launch the application in your terminal:
foreman start -f Procfile.dev (this allows both backend and frontend server to run in 1 window)
or
npm start
rails s

## Use

As a new user you can create an account or if you have an account you can log in. The website is secure as it is using Byrpt for securing password information.
![LoginPage](public/LoginPage.png)

Home page is simple easy to navigate
![HomePage](public/HomePage.png)

Just click on a button and the system will throw out a random restaurant based on you location.
![RandomizerPage](public/RandomizerPage.png)

If the user likes the restaurant they can click on details. Under details will take them to a new page where they can see the location of the restaurant with some details including type/ price range/ address etc.
The user can also check any reviews or the website of the restaurant for menu details.
The user can also add the restaurant to their favoruites for future reference with the appropriate button.
![MapPage](public/MapPage.png)

Under Profile page the user can see some details including how many times they used randomizer. How many badge they earned or even just uploading their picture or deleting their account if they no longer want to use it..
![ProfilePage](public/ProfilePage.png)

Under Favourite Page the user can view all the restaurants they liked before. They can also add/ remove notes if they like.
They can also check the picture of the restaurant or even just check the website of the place.
![Favouritepage](public/FavoritePage.png)

## Credits

NPM packages:
https://www.npmjs.com/package/googleapis
https://www.npmjs.com/package/google-map-react
https://react-redux.js.org/

Additional Gems:
https://rubygems.org/gems/foreman/versions/0.87.2

External API from
https://rapidapi.com/

## Technologies

Rails 7.0.4
React 18.2.0
Redux 4.2.0

![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Rails](https://img.shields.io/badge/rails-%23CC0000.svg?style=for-the-badge&logo=ruby-on-rails&logoColor=white)
![Visual Studio](https://img.shields.io/badge/Visual%20Studio-5C2D91.svg?style=for-the-badge&logo=visual-studio&logoColor=white)

## Features

- Restaurant Randomizer
- Favourite your most loked places
- Adding/ Deleting notes for your favourites
- Profile page
- Adding picture to profile page
- Maps API to locate the randomized restaurant
- A list of the restaurant details sourced from an external API (tripadvisor)
- You are able to view the menu of the restaurants by clicking on the menu icon and it will redirect to a different website
