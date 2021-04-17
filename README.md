# Books App
This application does

1. Loads data from the API
1. Displays results to a user via a web browser
1. Allows the user to interact by filtering by article type or author

## Major features

1. Auto completes searches in the filtering
1. Used react pagination for skim through all the datasets given

## APIs used by this application

* Used to display the initial article result by specifying the page number
https://content-store.explore.bfi.digital/api/articles?page=1
* Used this api to filter based on author or article type:
    * https://content-store.explore.bfi.digital/api/articles?author={author-id}
    * https://content-store.explore.bfi.digital/api/articles?type={review-id}
    * https://content-store.explore.bfi.digital/api/articles?author={author-id}&type={review-id}
* Created filter based on these APIs
    https://content-store.explore.bfi.digital/api/types
    https://content-store.explore.bfi.digital/api/authors

## Application Tech stack
* React
* Styled Components
* Redux
* Redux Toolkit
* React Paginate
* React Select
* Classnames
---
## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
