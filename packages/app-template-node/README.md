# Nimbus App Template > Node - Store Product Control API

## Introduction

This API serves as an example and provides a solution for app authentication and efficient product management within a Nuvemshop/Tiendanube store.

With this API, developers can authenticate their applications and securely store credentials in the `config.json` file. It enables various operations, such as inserting 5 new products randomly, deleting existing products, and retrieving the total product count. This API exemplifies seamless integration and robust product management capabilities.

By using this Product Management API, developers gain insights into Nuvemshop/Tiendanube e-commerce solutions, empowering them to build scalable custom applications for the platform.

Explore the provided features, endpoints, and usage examples in this README to unlock the full potential of the Product Management API for effective product management in Nuvemshop/Tiendanube stores.


## Prerequisites

Before getting started, make sure you have the following dependencies installed in your development environment:

- Node.js (version 14 or higher)
- NPM (Node Package Manager) or Yarn (Yarn Package Manager)

## Installation

To start the application, follow the steps below:

1. In the terminal, install the project dependencies using the following command:
  ```bash
    $ yarn
  ```

2. Configure the environment variables by renaming the `.env-example` file to `.env` at root.
  - PORT=3400 (Port where the backend will run)
  - CLIENT_ID= App id
  - CLIENT_SECRET= the app Client Secret
  - USER_EMAIL= Your Partners Portal account email
  - APP_NAME= Your app name

3. Run application using the following command:
  ```bash
    $ yarn dev
  ```

4. After starting the application, go back to the Partners Portal on the page (https://partners.nuvemshop.com.br/applications/update/:app-id) and change the 'Redirect URL after installation' to `http://localhost:3400`.

5. After the redirect URL has been changed, install the app in a store using the URL (:store-url/admin/apps/:app-id/authorize) and confirm the installation.

6. Now, your app is already to used.


## Project Structure

The backend project is divided into two main folders: "authentication" and "product". Each folder contains a "controllers" and a "services" subfolder.

- **authentication**
  - **controllers**
    - authenticationController.ts
  - **services**
    - authenticationService.ts

- **product**
  - **controllers**
    - productController.ts
  - **services**
    - deleteProductsService.ts
    - getTotalProductsService.ts
    - insertFiveProductsService.ts
    - listAllProductsService.ts

The `controllers` folder contains files responsible for handling the incoming requests to the API. For example, the "authenticationController.ts" file within the `authentication/controllers` folder handles authentication-related requests.

The `services` folder contains files that implement the business logic of the API. These files, such as `authenticationService.ts` and `*ProductService.ts`, contain functions and methods that perform the necessary operations, such as user authentication or product data manipulation.

The `routes.ts` file defines the API routes by mapping the URLs to their corresponding controllers. For example, it can define that the route `/auth` should be handled by the "authenticationController.ts".

Finally, the `index.ts` file serves as the main entry point of the application. It is where the server is started and where routers and other configurations are set up.

This folder structure helps maintain a clear separation of responsibilities and keeps the source code organized, making it easier to understand and work with different parts of the API.


## Endpoints

The API provides the following endpoints:

### Authentication Endpoint

- **GET /auth**
  - Description: Retrieves app access credentials.
  - Parameters:
    - None
  - Example Response:
    ```json
    {
      "access_token": "db70f8b523274bdd9b0df15d998fb4978ca74750AEDOH",
      "token_type": "bearer",
      "scope": "write_products",
      "user_id": 00001123
    }
    ```
### Product Endpoints

- **GET /products**
  - Description: Retrieves a list of all products
  - Parameters:
    - None
  - Example Response:
    - An array of product objects
    ```json
    [
      {
          "id": 169311292,
          "name": {
              "es": "Intelligent Steel Chair"
          },
          "images": [
              {
                  "id": 475446544,
                  "product_id": 169311292,
                  "src": "https://d2r9epyceweg5n.cloudfront.net/stores/003/031/781/products/abstractlock99937-c2aaff2c5b271d86a416841576099461-1024-1024.",
                  "position": 1,
                  "alt": [],
                  "created_at": "2023-05-15T13:33:33+0000",
                  "updated_at": "2023-05-15T13:33:33+0000"
              }
          ]
      }
    ]
    ```

- **POST /products**
  - Description: Creates 5 new products randomly
  - Parameters:
    - None

  - Example body:
    - The request body is created by the file (src/product/utils/generateProduct.function.ts) that randomly generates the product
    ```json

  - Example Response:
    - An array with the created product IDs
    ```json
    [
      1,
      2,
      3,
      4,
      5
    ]
    ```

- **DELETE /products/{id}**
  - Description: Retrieves the details of a specific product.
  - Parameters:
    - `id` (integer, required): The ID of the product.
  - Example Response:
    ```json
    1234
    ```

## Authentication

### Authentication API
  - To authenticate the app, you need to modify its redirect URL in the Partners Portal to the API URL and install it in a store. This will ensure that when the authentication process is triggered, the app will be redirected to the designated URL, including the necessary 'code' query string. The 'code' parameter is essential for constructing the body of the POST request to the `https://www.tiendanube.com/apps/authorize/token` authentication API. Upon successful authentication, the API will respond with an object that should be securely stored within the 'credentials' property of the config.json file.

### Products API
- To access the Product API, you need to include the `Authentication: bearer access_token` header in the request. The provided access_token will be compared against the access_token stored within the 'credentials' property in the config.json file to verify authorization for accessing the API.

## Limitations and Considerations
- It is necessary to rename the `.env-example` file to `.env` in `../../.env-example` and configure the environment variables with the requested values; otherwise, it will not work.
- If you don't change the redirect URL in the Partners Portal to the port where the project is running, it won't be possible to authenticate the app or access the Product API.
- For the Product API to work, the app must have `Write products` permission. (<a href="https://tiendanube.github.io/api-documentation/authentication#scopes" target="_blank">Learn more about permissions</a>)
![image](https://github.com/TiendaNube/nimbus-app-template-react/assets/68255205/9c8095f6-d563-4a70-a8ed-c25905ec99d0)

- If you install the app in a demo store, it will only be possible to add a maximum of 10 products.

## References and Additional Resources
- [Nuvemshop/Tiendanube API - Authentication](https://tiendanube.github.io/api-documentation/authentication)
- [Nuvemshop/Tiendanube API - Product](https://tiendanube.github.io/api-documentation/resources/product)
- If you have any questions or need further assistance, please don't hesitate to reach out to us through the Help section of the Partners Portal.
