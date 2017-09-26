Homework 1

First steps

Node:

1. Install Node.js (choose any option that suites your needs nvm, brew, apt, .exe, etc...)

2. Create a directory for the future project

3. Use npm -l to discover available npm commands and full usage info with

4. Set author name and email for npm config

5. Initialize package.json using npm command

6. Configure scripts section to include:

a. start section to run main application file

b. test section to run application tests that we will cover in future

7. Start structure your app. Create main application file. This file should be executed on npm start

8. Discover and install following npm packages.

a. Babel

b. Babel preset es2015

c. Babel preset stage 2

d. Babel register

After the installation all those packages should be listed in package.json

Modules

1. Create config directory inside your project

2. Create json module to store configs for our application. For now let’s put just a name of our app - ‘NodeMP HW App’

3. Create folder models

4. In model directory create user module. It should be js module and it should implement and export class User (use ECMAScript 2015) with a constructor where it should log ‘User module’ only

5. In model directory create product module. Use same flow as for the user module

6. In main application file import config module. Log application name to console.

7. In main application file import models. It should be one import command that should bring all our models to the app.

8. Create instance of user and product so they will log to the console.
