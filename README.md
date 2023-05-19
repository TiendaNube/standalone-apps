# Standalone App Template

This is a template for creating apps for Nuvemshop/Tiendanube ecosystem using Nimbus Design System and the Nuvemshop API. It works as a monorepo as it includes all the code necessary to start and maintain the frontend and backend of the application.

This template includes a starter project for building standalone apps using:
 - React for the frontend, with Vite as a framework
 - Node.js for backend, with Typescript


## Flowchart for using the app template.
[App Template Flow](https://miro.com/app/board/uXjVMGmp9Zs=/?share_link_id=535177540410)

## Partners Portal to create app
### First Step
  - If you don't have an account, create one on the Partner Portal. If you already have an account, login to your account.

### Second Step
  - If you don't have an app, create one

### Third Step
  - Then you can follow the steps below
## Clone this repository
  ```bash
  $ git clone git@github.com:TiendaNube/nimbus-app-template-react.git
  ```

## Steps to config project
### 1th step
  - Go to the folder where the repository was cloned and open the terminal.

### 2th step
  - To install all the dependencies for both `app-template-vite` and `app-template-node` package subdirectories.
  ```bash
  $ yarn install
  ```

### 3th step
  - To configure the necessary variables for `app-template-node` package subdirectory.
  ```bash
  $ cd packages/app-template-node
  ```
  - Then rename `.env-example` file to `.env` and return to the Partners Portal on the details page of the created app to copy the values of the App Id and Client Secret and configure:
    - PORT= Port of your application will be run
    - CLIENT_ID= App id;
    - CLIENT_SECRET= Client Secret
    - USER_EMAIL= The email of your partner account
    - APP_NAME= Name of app

###  4th step
  - To configure the necessary variables for `app-template-vite` package subdirectory.
  ```bash
  $ cd ../app-template-vite
  ```
  - Then go to `.env` file and make sure that the port is the same as the backend's PORT:
    - VITE_APP_TEMPLATE_API=http://localhost:<backend's PORT> 


### 5th step
  - To start the development server:
  ```bash
  $ cd ../..
  ```
  - Then run `dev` will start both the `app-template-vite` and `app-template-node`:
  ```bash
  $ yarn dev
  ```

Happy editing!
