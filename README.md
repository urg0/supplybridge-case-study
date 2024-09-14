<img src="https://media.licdn.com/dms/image/v2/D560BAQGbxa8dKu5OcA/company-logo_200_200/company-logo_200_200/0/1721902867410/supply_bridge_logo?e=2147483647&v=beta&t=VarxL6NJP9fxVLfkoo5yJMz6Scxd60LhOQ7OYkWBrCc" width="160" height="160">

# supplybridge-case-study

### author: Ulaş Rotinda Güler

## [ulasrotindaguler.com](https://www.ulasrotindaguler.com/)

This project is a demo application for SupplyBridge, where users can create, edit, delete posts, and manage authors. Additionally, users can mark posts as favorites, enhancing the functionality of the application. The project is designed to be clean and easy to navigate, maintaining a functional UI for comprehensive post management.


## Setting Up the Development Environment

To run this project, you need to have `Node.js` and `npm` installed on your computer. If not installed, you can download and install from [Node.js](https://nodejs.org/).

After downloading the project files, open the terminal in the directory where the project is located and run the following command:

```bash
yarn install
```

Then you can run the following command to bring up the project:

```bash
yarn start
```

After bringing up the project, you can see the project by going to [http://localhost:3000](http://localhost:3000) in your browser.

## Technologies Used

- [React](https://reactjs.org/)
- [React Router Dom](https://reactrouter.com/)
- [React Query](https://react-query.tanstack.com/)
- [Formik](https://formik.org/)
- [Yup](https://github.com/jquense/yup)
- [ESLint](https://eslint.org/)
- [React Hot Toast](https://react-hot-toast.com/)
- [Sass](https://sass-lang.com/)

## Project Structure

The project has the following structure:

- SUPPLYBRIDGE-CASE-STUDY/: The root folder of the project.

  - `public`/: Contains the static assets that will be used at runtime.
  - `src`/: The source directory where the main codebase is located.
  - - `assets`/: This directory holds all the resources like images, fonts, etc.
  - - `components`/: Folder where reusable UI components are stored.
  - - `constants`/: Contains files that define constant values for the application.
  - - `layouts`/: Holds the layout components that form the structure of the application views.
  - - `pages`/: Directory containing the components that represent full pages in the application.
  - - `utils`/: Utility functions and helpers for the application are within this folder.
  - - App.js: The main React component that acts as the root of your application.
  - - index.js: The entry file to the application, where the React app is initialized.
  - - index.scss: The primary stylesheet file for the application.
  - - routes.js: Defines the routes for the application.
  - config-overrides.js: Used to customize configurations without ejecting the create-react-app.
  - yarn.lock: Yarn lockfile to ensure consistent installations across machines.


The `React Query` library was used for server-side state management. All API requests were made in the files located in the `services` folder. When API requests are successful or return an error, a notification is shown to the user. A library like `Axios` was not used as there was no need for any interceptor.
