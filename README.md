# Standalone App Template

This is a template for creating apps for Nuvemshop/Tiendanube ecosystem using Nimbus Design System and the Nuvemshop API. It functions as a monorepo, as it includes all the necessary code to start and maintain the frontend and backend of the application.

This template provides a starter project for building standalone apps using the follwing technologies:
 - [React for the frontend, with Vite as a framework](https://github.com/TiendaNube/nimbus-app-template-react/blob/main/packages/app-template-vite/README.md)
 - [Node.js for backend, with Typescript](https://github.com/TiendaNube/nimbus-app-template-react/blob/main/packages/app-template-node/README.md)

## Flowchart for using the app template:
To help you better understand the process, refer to the following [App Template Flow](https://miro.com/app/board/uXjVMGmp9Zs=/?share_link_id=535177540410).

## Steps to use the App Template
### 1. Create a partner's account
- If you don't have a partner's account, create a new account on the Partners Portal. If you already have an account, log in to your existing account.

### 2. Create an app
- If you haven't created an app on the Partners Portal yet, create one.

### 3. Clone this repository
- Clone this repository:
  ```bash
  git clone git@github.com:TiendaNube/nimbus-app-template-react.git
  ```
- Open the project in your code editor (e.g., Visual Studio Code, Eclipse, etc.).

### 4. Install dependencies
- In the terminal, install the project dependencies using the following command:
  ```bash
  yarn install
  ```
### 5. Get credentials from the Partners Portal
- Go back to the Partners Portal and navigate to the details page of your app (https://partners.nuvemshop.com.br/applications/details/:app-id).
- Copy the values of the `App Id` and `Client Secret`.

### 6. Rename .env-example to .env and set environment variables
- Go back to your code editor:
  - Rename the `.env-example` file to `.env`.
  - Paste the credentials copied in the previous step into the `.env` file:
    - PORT=3400 (Port where the backend will run)
    - CLIENT_ID= App id
    - CLIENT_SECRET= Client Secret
    - USER_EMAIL= Your Partners Portal account email
    - APP_NAME= Your app name
    - VITE_APP_TEMPLATE_API= http://localhost:3400

### 7. Run applications
- To start both `app-template-vite` and `app-template-node`, run the following command:
  ```bash
  yarn dev
  ```

### 8. Change redirect URL at the Partners Portal
- After starting the application, go back to the Partner Portal and navigate to the basic data editing page (https://partners.nuvemshop.com.br/applications/update/:app-id).
- Change the `Redirect URL after installation` to `http://localhost:8000`.

### 9. Access the store and install the app
- Log in to your store (if you're not already logged in).
- Install the app by adding `/admin/apps/:app-id/authorize` to your store's URL and confirm the installation.

### 10. Test the app
- Now, your app is ready to be used.

If you have any questions or need further assistance, please don't hesitate to reach out to us through the Help section of the Partners Portal.
