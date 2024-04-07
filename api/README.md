# Requirement

-   Node: v20.12.1
-   NPM: 10.5.0

# Installation

#### Create database:

Create MySql database and set charset to utf8_general_ci

#### App:

Before running the app remember to modify the .env file.

Go to the root directory and run the following commands:

1. npm i
2. npm run deployDB (to create tables)
3. npm run start (to start the development server) or npm run start:nodemon (to start the development server with nodemon) or npm run start:prod (to start the production server)

# Setup

Go to file ".env" located in the root directory. Modify values if you need.

API_PORT=3001
DB_NAME=""
DB_LOGIN=""
DB_PASSWORD=""
DB_HOST=""
