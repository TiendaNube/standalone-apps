# Standalone App Template

This is a template for creating apps for Nuvemshop/Tiendanube ecosystem using Nimbus Design System and the Nuvemshop API. It works as a monorepo as it includes all the code necessary to start and maintain the frontend and backend of the application.

This template includes a starter project for building standalone apps using:
 - React for the frontend, with Vite as a framework
 - Node.js for backend, with Typescript

## 


## Steps to config project

### First Step
  - To install all the dependencies for both `app-template-vite` and `app-template-node` package subdirectories.

  ```bash
  $ yarn install
  ```

### Second Step
  - To configure the necessary variables for `app-template-node` package subdirectory.
  ```bash
  $ cd packages/app-template-node
  ```
  - Then rename `.env-example` file to `.env` and return to the Partner Portal on the details page of the created app to copy the values of the App Id and Client Secret and configure:
    - PORT= Port of your application will be run
    - CLIENT_ID= App id;
    - CLIENT_SECRET= Client Secret
    - USER_EMAIL= The email of your partner account
    - APP_NAME= Name of app

###  Third Step
  - To configure the necessary variables for `app-template-vite` package subdirectory.
  ```bash
  $ cd ../app-template-vite
  ```
  - Then go to `.env` file and make sure that the port is the same as the backend's PORT:
    - VITE_APP_TEMPLATE_API=http://localhost:<backend's PORT> 


### Fourth Step
  - To start the development server:
  ```bash
  $ cd ../..
  ```
  - Then run `dev` will start both the frontend and the backend:
  ```bash
  $ yarn dev
  ```

Happy editing!
