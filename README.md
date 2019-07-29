## Employee Database

- Requirement:
  - You will be creating a simple Employee database using Node, Express and MongoDB. 
  You should be able to save a new employee and display all saved employees.
### How to run:
  Ensure you have a working installation of Node.js, and a MongoDB. Use the `.env.example` file to setup
  the MongoDB database to use. If running locally, leave the `CONNECTION_URL` as-is, else change to your 
  remote connection url

 - Install dependencies: `npm install`
 - Run app: `npm start`

 - To add an employee, using Postman. Sample is shown below:
  POST request - `/api/v1/createUser`
  ```
{
	"firstName": "john",
	"lastName": "doe",
	"department": "engineering"
}
  ```

 - To view all employees:
  GET request - `/api/v1/getAllUsers`
