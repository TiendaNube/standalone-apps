# App Template Standalone

This is a template for creating apps for Nuvemshop/Tiendanube ecosystem using Nimbus Design System and the Nuvemshop API. It works as a monorepo as it includes all the code necessary to start and maintain the frontend and backend of the application.

This template includes a starter project for building standalone apps using:
 - React for the frontend, with Vite as a framework
 - Node.js for backend, with Typescript

## Flowchart for using the app template.
[App Template Flow](https://miro.com/app/board/uXjVMGmp9Zs=/?share_link_id=535177540410)

## Steps to use app
### 1th - Create Account
- If you don't have an account on the Partners Portal, create one.

### 2th - Create app
- If you don't have an app created on the Partners Portal, create one.

### 3th - Clone repository
- Clone this repository:
  ```bash
  $ git clone git@github.com:TiendaNube/nimbus-app-template-react.git
  ```
- Open the project in your code editor (e.g., Visual Studio Code, Eclipse, ...)

### 4th - Install dependencies
- In the terminal, install the project dependencies using the following command:
  ```bash
  $ yarn install
  ```

### 5th - Rename .env-example to .env
- Configure the environment variables by renaming the .env-example file to .env.

### 6th - Get credentials at Partner Portal
Go back to the Partners Portal on your app details page (https://partners.nuvemshop.com.br/applications/details/<app-id>) and copy the values of the `App Id` and `Client Secret`.

### 7th - Set environment variables
- Go back to your code editor and paste the credentials copied in the previous step into the .env file:
  - PORT= Port where the backend will run
  - CLIENT_ID= App id
  - CLIENT_SECRET= Client Secret
  - USER_EMAIL= Your Partners Portal account email
  - APP_NAME= Your app name
  - VITE_APP_TEMPLATE_API= http://localhost:<PORT>

### 8th - Run applications
- To start both app-template-vite and app-template-node:
  ```bash
  $ yarn dev
  ```

### 9th - Change redirect URL at Partner Portal
- After starting the application, go back to the Partners Portal on the page (https://partners.nuvemshop.com.br/applications/update/<app-id>) and change the 'Redirect URL after installation' to `http://localhost:8000`.

### 10th - Install app at store
After the redirect URL has been changed, install the app in a store using the URL (<store-url>/admin/apps/<app-id>/authorize) and confirm the installation.

### 11th - Now tests app
Now, your app is ready to be used.