# signup-form
Sign up form demo 

Tools :
    Angular Version - 14.1.3
    Bootstrap : 5.2.0

Build and run project :

    - If the Angular CLI is not installed yet, install it using npm. Refer to the following command:
        - npm install -g @angular/cli
    - Checkout git project to local  : https://github.com/Ritesh1824/signup-form
        - Click on code Download zip and extract to local or
        - Install git bash in local from git downlaod page https://git-scm.com/downloads
        - open git bash Copy ssh  url and run git clone url in git bash 
    - Run project in local 
        - open Cmd and go to project location 
        - run ng serve command 
        - open project in http://localhost:4200/ 

Form Fields: 
    - First name :  All allowd , required
    - Last name :  All allowd , required
    - Password validation:
        - Should be a minimum of eight characters,
        - Should contain lower and uppercase letters, 
        - Should not contain user’s first or last name.
    - Email : Default Form email validation 
       - Disallow local-part (the part before the @ symbol) to begin or end with a period (.).
       - Disallow local-part to be longer than 64 characters.
       - Disallow the whole address to be longer than 254 characters.
    - Sign up Button 
        - Once click on sign up it will send form details to https://demo-api.vercel.app/users

