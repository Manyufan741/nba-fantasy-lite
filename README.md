# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## To setup the database, please check the https://github.com/Manyufan741/nba-fantasy-lite-backend repository

## Available Scripts

### Frontend React APP can be deployed using Surge

To define the environment variable for our frontend app. YOUR_HEROKU_BACKEND_URL should be something like https://YOUR_BACKEND_APP_NAME.herokuapp.com .

### The following steps can be used to connect this APP to backend API server and deploy it:
1. $ REACT_APP_BASE_URL=https://nba-fantasy-lite-backend.herokuapp.com npm run build

2. After the build folder is created:
$ cp build/index.html build/200.html

3. Then use Surge to deploy the APP:
$ surge build nba-fantasy-lite.surge.sh

4. The deployed APP url:
http://nba-fantasy-lite.surge.sh


## nba-fantasy-lite APP features

### In the Home page:

#### Users can select a date and go to see the NBA games list of that date
#### The APP will show the lineups of the selected date. Users can edit or remove these lineups.
#### If there are lineups shown, users can click the "Calculate" button to update the players' performance based on their real-time performance in NBA games.

### In the Gamelist page:

#### Users can see the game list of a selected date

### In the PlayerList page:

#### Users are given a budget of 200 dollars. It can be used to select players to form a lineup. Each player cost differently based on his seasonal average performance.
#### Users can form a lineup of up to 10 players as well as within the given budget. The lineup can be submitted after the users have finalized it. Once a lineup is submitted, it'd be shown in the homepage when you select the corresponding date.

## In this project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

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
