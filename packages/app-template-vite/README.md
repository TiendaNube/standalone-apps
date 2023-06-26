# Nimbus App Template > Vite

## Introduction
This front-end project was developed using Vite and TypeScript and includes our pre-installed Design System. Its purpose is to provide a practical template for creating a web application in the Partners Portal, targeting store owners.

The example application not only demonstrates how to call Nuvemshop/Tiendanube APIs but also automates the authentication process using the information provided in the `.env` file at the project's root.

This allows you to focus on implementing the specific functionalities of your application without worrying about the complexity of other processes.

## Prerequisites

Before getting started, make sure you have the following dependencies installed in your development environment:
- Node.js (version 14 or higher)
- This project runs with <a href="https://yarnpkg.com/getting-started/migration#step-by-step" target="_blank">yarn modern</a> (v3+)

## Installation

To start the application, follow the steps below:

1. Clone this repository to your local machine.
2. Navigate to the project directory using the terminal.
3. Check yarn version
  ```bash
  yarn --version
  ```
![image](https://github.com/TiendaNube/nimbus-app-template-react/assets/68255205/92bd3803-d6af-4c95-9997-70d840f4c88b)

4. Run the command `yarn` to install the necessary dependencies.
5. Rename the `.env.example` file to `.env` and fill in the authentication information provided by the partner portal.

## Running the Application

After completing the installation, you can run the application with the following command:

```
yarn dev
```

This will initiate the development server, allowing you to access the application in your browser at `http://localhost:8000`.

## Project Structure

The project has the following directory structure:

- `src`: Contains the application source code.
  - `assets`: Files such as images, logos, and fonts.
  - `commons`: Libraries used for general project functionality.
  - `components`: Reusable components used in the user interface.
  - `hooks`: Reusable hooks used for API calls and state management of certain data.
  - `pages`: Application pages.
  - `router`: File that connects pages to their respective routes.
  - `types`: Types that can be used throughout the project.
  - `utils`: Useful project functions.
- `public`: Public directory containing static files such as images and CSS files.

Feel free to explore and adapt the project structure according to your application's needs.

## Limitations and Considerations

- It is necessary to rename the `.env-example` file to `.env` in `../../.env-example` and configure the environment variables with the requested values; otherwise, it will not work.
- Make sure you set up the variable `COUNTRY` to apply the translation in project for you current language
- If you don't update the redirect URL in the Partners Portal to the port where the project is running, it won't be possible to authenticate the app or access the Product API.
- For the Product API to work, the app must have the `Write products` permission. (<a href="https://tiendanube.github.io/api-documentation/authentication#scopes" target="_blank">Learn more about permissions</a>)
![image](https://github.com/TiendaNube/nimbus-app-template-react/assets/68255205/9c8095f6-d563-4a70-a8ed-c25905ec99d0)

- If you install the app in a demo store, it will only be possible to add a maximum of 10 products.
- We recommend running the `yarn install dev` command in the project's root folder. Otherwise, if both projects are not running simultaneously, a connection error may occur.

## References and Additional Resources
- [Nimbus Design System - Documentation](https://nimbus.tiendanube.com/documentation/overview/getting-started)
- If you have any questions or need further assistance, please don't hesitate to reach out to us through the Help section of the Partners Portal.
