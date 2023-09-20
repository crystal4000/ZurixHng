# Image Gallery Web App

This is a simple web application for browsing and sorting images from Unsplash. Users can search for images by tags and sort them by dragging and dropping. The drag and drop is implemented with `dnd-kit`

## Prerequisites

Before you begin, ensure you have met the following requirements:

- [Node.js](https://nodejs.org/) installed on your local machine.
- [Firebase](https://firebase.google.com/) project configured with Authentication enabled.
- A valid Unsplash API key for fetching images. You can obtain one by signing up on the [Unsplash Developer](https://unsplash.com/developers) portal.

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/image-gallery.git

   ```

2. Change into the project directory: `cd image-gallery`

3. Install project dependencies: `npm install`

## Authentication

This project uses Firebase Authentication for user authentication. Make sure you configure your Firebase project and set up authentication methods as needed. You will also need to replace the Firebase configuration in the code with your own credentials.

## Running the Application

To run the application locally, follow these steps:

1. Configure Firebase:

   - Create a Firebase project on the Firebase Console.
   - Enable Firebase Authentication and get the Firebase configuration (apiKey, authDomain, projectId, etc.).

2. Create a `**.env.local**` file in the project root and add your Firebase configuration:

`REACT_APP_FIREBASE_API_KEY=<Your-API-Key>`
`REACT_APP_FIREBASE_AUTH_DOMAIN=<Your-Auth-Domain>`
`REACT_APP_FIREBASE_PROJECT_ID=<Your-Project-ID>`

3. Obtain an Unsplash API key by signing up on the Unsplash Developer portal.

4. Add your Unsplash API key to the .env.local file:
   `REACT_APP_UNSPLASH_API_KEY=<Your-Unsplash-API-Key>`

5. Start the development server:` npm start`

6. Open your web browser and navigate to http://localhost:3000 to access the application.

## Usage

- Sign in with your credentials to browse and sort images.
- Use the search bar to filter images by tags.
- Drag and drop images to rearrange their order.
- Sign out to log out of the application.

## Deployment

To deploy this application to a hosting service, you can follow these general steps:

- Build the production-ready application: `npm run build`
- Deploy the contents of the build/ directory to your hosting service (e.g., Firebase Hosting, Netlify, or GitHub Pages).
- Set up environment variables for your production environment as needed.

## Contributing

Contributions are welcome! If you would like to contribute to this project, please open an issue or create a pull request.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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
