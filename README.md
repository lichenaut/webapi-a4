Note: Render's rate limiting and available memory on the free plan will make visiting my websites and making my Postman requests very unreliable.

https://webapi-class.postman.co/workspace/My-Workspace~edc9a8ac-3fb0-4264-8986-1549a3452f8a/collection/34573647-f85c3a6e-6c75-481e-8c22-71b9fb81dafe?action=share&creator=34573647&active-environment=34573647-a7e7e217-fe6c-4902-ae68-37a737b2f31d

# Assignment Three

## Purpose

The purpose of this assignment is to get comfortable working with a NoSQL database (MongoDB).

For this assignment you will create a Users collection to store users for your signup and signin methods. You will pass Username, Name and Password as part of signup. To get a token you will call SingIn with username and password only. The token should include the Name and UserName (not password)

You will also create Movies collection to store information about movies. All endpoints will be protected with the JWT token received by a signin call.

## Requirements

Create a collection in MongoDB to hold information about movies

- Each entry should contain the following
  - title (string, required, index)
  - releaseDate
  - genre (Action, Adventure, Comedy, Drama, Fantasy, Horror, Mystery, Thriller, Western, Science Fiction)
  - Array of three actors that were in the film
    - actorName
    - characterName
  - The movie collection should have at least five movies
- Create a NodeJS Web API to interact with your database
  - Follow best practices (e.g. /movies collection)
  - Your API should support all CRUD operations (through HTTP POST, PUT, DELETE, GET)
  - Ensure incoming entities contain the necessary information. For example if the movie does not contain actors, the entity should not be created and an error should be returned
- All endpoints should be protected with a JWT token (implement signup, and signin)
  - For this assignment you must implement a User database in Mongo
    - name
    - username
    - password (should be hashed)
  - If username exists the endpoint should return an error that the user already exists
  - JWT secret needs to be stored in an environment variable
- Update the Pre-React CSC3916_REACT placeholder project to support /signup and /signin methods. The React Single Page App should use your Assignment 3 API to support those two operations.

## Submissions

- All source code should be stored on github (remember .gitignore for node_modules)
- API needs to be deployed to heroku or render
- React Website that allows user to signup and singin (we did this in class)
- PostMan test collection that

  - Signs Up a user (create a random user name and random password in your pre-test)
  - SignIn a User – parse token and store in postman environment variable
  - A separate call for each endpoint (save a movie, update a movie, delete a movie and get a movie)
  - Test error conditions (user already exists)
    - SignUp (user already exist)
    - Save Movie (missing information like actors (must be at least three), title, year or Genre)

- Create a readme.md at the root of your github repository with the embedded (markdown) to your test collection
  - Within the collection click the (…), share collection -> Embed
  - Static Button
  - Click update link
  - Include your environment settings
  - Copy to clipboard
- Submit the Url to canvas with the REPO CSC_3916
- Note: All tests should be testing against your Heroku or Render endpoint

| Route                  | GET                                                  | POST                | PUT                                                                                | DELETE                                                                          |
| ---------------------- | ---------------------------------------------------- | ------------------- | ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | --- |
| movies                 | Return all movies                                    | save a single movie | FAIL                                                                               | FAIL                                                                            |
| movies/:movieparameter | Return a specific movie based on the :movieparameter | FAIL                | Update the specific movie based on the :movieparameter in your case it’s the title | Delete the specific movie based on the :movieparamters your case it’s the title | \*  |

- If Query String (Later Homework) reviews=true aggregate in reviews |

## Rubic

- -5 for missing REACT site (-2 if you are not able to signup or signin on the react site) that is all we implemented
- -1 for MovieSchema missing any of the attributes (array of actors, genre, year released or title)
- -2 for missing routes for /movies (POST/PUT/DELETE/GET)
- -1 for missing authentication on routes
- -2 for not deployed on Heroku/Render
- -1 missing Test error conditions
- -1 missing PostMan tests (signup, signin, separate call for each route)

## Resources

- https://www.mongodb.com/cloud/atlas
- Create a Free Subscription \*Amazon
- https://render.com/docs/deploy-create-react-app \*\*important: Environment Variable for https://github.com/AliceNN-ucdenver/CSC3916_REACT env.REACT_APP_API_URL, this weekend I will look at changes (I believe only 1 change in the actions)
