/*
    Full Stack Web Development
    
    - There are 3 main components to a full stack web application
        1. Frontend: the user interface which the user interacts with (HTML5, CSS3, JS6, React.js)
            - HTML: the structure of the webpage
            - CSS: the styling of the webpage
            - JS: the logic of the webpage
            - React.js: a JS library for building user interfaces
                - modules:
                    a. Redux: a predictable state container for JS apps. centralized state management.
                    b. React Router: a collection of navigational components that compose declaratively with your application
                    c. axios: a promise based HTTP client for the browser and node.js
        2. Backend: the server which handles the requests and responses (Node.js, Express.js)
            - Restful API: a set of rules that developers follow when they create their API
            - Node.js: a JS runtime environment that executes JS code outside of a browser
            - Express.js: a web application framework for Node.js
                - modules:
                    a. body-parser: a middleware that parses incoming request bodies in a middleware before handlers (express.json())
                    b. cors: a middleware that can be used to enable CORS with various options (cross origin resource sharing)
                    c. dotenv: a zero-dependency module that loads environment variables from a .env file into process.env
                    d. mongoose: an Object Data Modeling (ODM) library for MongoDB and Node.js
                    e. nodemon: a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected
                    f. jsonwebtoken: an implementation of JSON Web Tokens
                    g. bcryptjs: a library to help hash passwords
        3. Database
            - MongoDB: a NoSQL database
            - Mongoose: an Object Data Modeling (ODM) library for MongoDB and Node.js

    cors: a middleware that can be used to enable CORS with various options (cross origin resource sharing). It is to allow the server to accept requests from a different origin.

    JWT Process:

    1. User signs in with username and password
    2. Server checks if the username exists in the database
    3. Server checks if the password is correct
    4. Server generates a token and returns it to the user
    5. all the subsequent requests from the user will contain the token in the header
    6. using the token, the server can identify the user and send the appropriate response

*/

/*
    User Story for the Social Media App

    1. As a user, I want to be able to sign up for an account
    2. As a user, I want to be able to sign in to my account
    3. As a user, from the dashboard page, I want to be able to create a new post
*/