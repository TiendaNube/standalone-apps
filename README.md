# Nimbus App Template

## Introduction
This is a template for creating apps for Nuvemshop/Tiendanube ecosystem using Nimbus Design System and the Nuvemshop/Tiendanube API. It functions as a monorepo, as it includes all the necessary code to start and maintain the front-end and back-end of the application.

This template provides a starter project for building standalone apps using the follwing technologies:
 - [React for the frontend, with Vite as a framework](https://github.com/TiendaNube/nimbus-app-template-react/blob/main/packages/app-template-vite/README.md)
 - [Node.js for backend, with Typescript](https://github.com/TiendaNube/nimbus-app-template-react/blob/main/packages/app-template-node/README.md)

## Prerequisites
Before getting started, make sure you have the following dependencies installed in your development environment:

- Node.js (version 14 or higher)
- This project runs with <a href="https://classic.yarnpkg.com/lang/en/" target="_blank">yarn classic</a> (v1)
- The application on the Partner Portal is required to have `Write products` permission. (<a href="https://tiendanube.github.io/api-documentation/authentication#scopes" target="_blank">Learn more about permissions</a>)
![image](https://github.com/TiendaNube/nimbus-app-template-react/assets/68255205/80f0bf4e-c55e-4288-b64c-eafce5816cb1)


## App Template Flow
- To help you better understand the process, refer to the following <a href="https://miro.com/app/board/uXjVMGmp9Zs=/?share_link_id=535177540410" target="_blank">App Template Flow</a>.

## How to use the App Template
### 1. Create a partner's account
- Please visit <a href="https://partners.nuvemshop.com.br" target="_blank">Partners Portal - Portuguese</a> or <a href="https://partners.tiendanube.com" target="_blank">Partners Portal - Spanish</a>, access  to create an account in case you haven't done so already. (<a href="https://atendimento.nuvemshop.com.br/pt_BR/parceiros-tecnologicos/guia-detalhes-do-programa-de-parceiros-tecnologicos">Learn how to create an account - Portuguese</a> or <a href="https://ayuda.tiendanube.com/es_ES/socios-tecnologicos/en-que-consiste-el-programa-de-socios-tecnologicos-de-tiendanube">Learn how to create an account - Spanish</a>)
![image](https://github.com/TiendaNube/nimbus-app-template-react/assets/68255205/3f92d269-0209-4eba-ae9f-1d13d6d91644)


### 2. Create an app
- If you haven't created an app on the Partners Portal yet, create one. (<a href="https://atendimento.nuvemshop.com.br/pt_BR/parceiros-tecnologicos/como-fazer-um-aplicativo-para-a-loja-de-aplicativos-nuvemshop">Learn how to create an app - Portuguese</a> or <a href="https://ayuda.tiendanube.com/socios-tecnologicos/como-creo-una-aplicacion-para-tiendanube">Learn how to create an app - Spanish</a>)
![image](https://github.com/TiendaNube/nimbus-app-template-react/assets/68255205/e66dff16-f1de-4fcd-a467-78b2d82264b0)


### 3. Clone this repository
- Clone this repository:
  ```bash
  git clone git@github.com:TiendaNube/nimbus-app-template-react.git
  ```
- Open the project in your code editor (e.g., Visual Studio Code, Eclipse, etc.).

### 4. Install dependencies
- In the terminal, install the project dependencies using the following command:
  ```bash
  yarn
  ```
### 5. Get credentials from the Partners Portal
- Go back to the Partners Portal and navigate to the details page of your app.
![image](https://github.com/TiendaNube/nimbus-app-template-react/assets/68255205/1b383cb7-5b0d-4fe7-9303-6311df268f38)
- Then, copy the `App ID` and `Client Secret`, which are the authorization keys, in order to install your app on the stores.


### 6. Rename .env-example to .env and set environment variables
- Go back to your code editor:
  - Rename the `.env-example` file to `.env`.
  - Paste the credentials copied in the previous step into the `.env` file:
    - PORT=3400 (Port where the backend will run)
    - CLIENT_ID="App ID"
    - CLIENT_SECRET="Client Secret"
    - USER_EMAIL="Your Partners Portal account email"
    - APP_NAME="Your app name"
    - VITE_APP_TEMPLATE_API="http://localhost:3400"

### 7. Run applications
- To start both `app-template-vite` and `app-template-node`, run the following command:
  ```bash
  yarn dev
  ```

### 8. Change redirect URL at the Partners Portal
- After install app at store, go back to the Partner Portal and navigate to the update page of your app
![image](https://github.com/TiendaNube/nimbus-app-template-react/assets/68255205/b8e35f20-bb52-4067-9b79-3757b77a0d9c)
- Change the `Redirect URL` to `http://localhost:8000`.

### 9. Access the store and install the app
- Log in to your store (if you're not already logged in).
![image](https://github.com/TiendaNube/nimbus-app-template-react/assets/68255205/0cbee613-bfb0-40f1-82c1-df34ceed2e6c)
- Then install the app by adding `/apps/:app-id/authorize` to your store URL and confirm the installation.
![image](https://github.com/TiendaNube/nimbus-app-template-react/assets/68255205/48b6ad4c-b4da-4b3d-ac2f-6c7dc5732d5b)


### 10. Test the app
- Now, your app is ready to be used.

If you have any questions or need further assistance, please don't hesitate to reach out to us through the Help section of the Partners Portal.
