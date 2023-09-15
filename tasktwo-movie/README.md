# MovieBox Web Application

MovieBox is a web application that allows users to explore top-rated movies, search for movies, and view movie details. This README provides clear instructions on how to run the MovieBox project locally on your machine.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js: Make sure you have Node.js installed. You can download it from [https://nodejs.org](https://nodejs.org).

## Getting Started

To get MovieBox up and running on your local machine, follow these steps:

- ### Clone the Repository:

  Clone the MovieBox repository to your local machine using Git:
  `git clone https://github.com/your-username/MovieBox.git`

- ### Navigate to the Project Directory:

  Change your current directory to the cloned repository:
  `cd MovieBox`

- ### Install Dependencies:

  Install the project's dependencies using npm (Node Package Manager):
  `npm install`

- ### API Key Configuration:

  You need to obtain an API key from `The Movie Database (TMDb)` to fetch movie data. Once you have your API key, open the api.js file located in the src/api directory and replace the apiKey variable with your API key.

- ### Run the Application:
  Start the development server: `npm start`

## Usage

- Home Page: The home page displays top-rated movies, a search bar, and movie details when clicked.

- Search: Use the search bar at the top to search for movies. The search results will be displayed below the search bar.

- Movie Details: Click on a movie poster or title to view detailed information about that movie, including its overview, genre, and more.

## Features

- View top-rated movies.
- Search for movies by title.
- View detailed information about each movie.
- Mark movies as favorites (favorites are stored in local storage).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
