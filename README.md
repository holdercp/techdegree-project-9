In this project, you'll build an image gallery using React and the Flickr API. After creating the project with create-react-app, you will build the gallery components, add to the supplied CSS and set up routing. For this project, you'll use the very popular and in-demand React library to create an image gallery app. With the help of this powerful "MVC" (Model, View, Controller) library, the app will be built in the style of modern single page applications to keep it fast, modular, and in sync with current web development trends.

You'll learn about some of the best practices of working with React, like using JSX to write markup-like syntax directly in your JS files and managing state in a container component that passes data down to reusable stateless components. Additionally, you'll get practice working with React supportive tools like the Create React App and React Router modules.

Using the powerful Create React App tool, you'll set up the initial project.

Then you will:

- Use JavaScript and JSX to build out the gallery components in a modular fashion.
- Use React Router to set up routes for three default topic pages and a search page.
- Use the Fetch API or a tool like Axios to fetch data from the Flickr API and use it to display images in your app.
- Add logic to handle the search and various requirements of the project.
- Add to the supplied CSS to personalize the project.

---
## Getting Started
- Run `npm install` to install the project's dependencies. You can also run `npm install --only=production` if you don't want to install dev dependecies.
- You will need a Flickr API key, which you can apply for [here](https://www.flickr.com/services/apps/create/apply/).
- Create a `config.js` file in the `src/` directory. This file should export your Flikr API key, which will be imported by `app.js`. It will look something like this:
```javascript
const apiKey = '[your api key]';
export default apiKey;
```
- Run `npm start` to start the dev server.
---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
