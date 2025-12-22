require('dotenv').config(); // Load environment variables from a .env file into process.env for secure configuration

const express = require('express') // Import the Express.js framework to build the web server

// express app // Comment: This section creates the Express application instance
const app = express() // Create an instance of Express, which will handle routing and middleware

app.use(express.json()) // Middleware to parse incoming JSON request bodies and make them available under req.body

const mongoose = require('mongoose') // Import Mongoose library to interact with MongoDB database
//connect to db // Comment: This section connects to the MongoDB database using Mongoose


const workoutRoutes = require('./routes/workouts') // Import workout-related routes from an external file

//Middleware // Comment: Middleware functions run on every request to process or log data
app.use((req, res, next) => { // Define a middleware function that executes for all incoming requests
  // console.log('new request made:'); // Log a message indicating a new request has been received
  // console.log('host:', req.hostname); // Log the hostname (e.g., localhost) from the request
  console.log('path:', req.path); // Log the URL path (e.g., /) from the request
  console.log('method:', req.method); // Log the HTTP method (e.g., GET) from the request
  next(); // Call next() to pass control to the next middleware or route handler
}) // End of middleware function

//routes // Comment: This section defines the API routes for handling specific URLs
// app.get('/', (req, res) => { // Define a GET route for the root URL (/); runs when someone visits the homepage
//   res.send('hello worlddd'); // Send a plain text response "hello worlddd" back to the client
// }) // End of route handler

app.use('/api/workouts', workoutRoutes) // Use the imported workout routes for any requests to /api/workouts

//connect to mongoDB
mongoose.connect(process.env.MONGODB_URI) // Connect to MongoDB using the connection string from environment variables
  .then(() => {
//listen for requests // Comment: This section starts the server to listen for incoming requests
app.listen(process.env.PORT, () => { // Start the server and listen on the port from environment variables (e.g., 3000)
  console.log('Connected to DB and listening for requests on port 3000 and 3001') // Log a message when the server starts successfully
}) // End of listen callback
  })
  .catch((err) => console.log(err)) // If the connection fails, log the error
