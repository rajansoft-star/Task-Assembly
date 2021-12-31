# Introduction 
The goal is to write a Simple Server in NodeJs that will have only one API.

Given:
A date in milliseconds.
(Optional) museum to ignore

It will return:
The month of the search
The year of the search
The total visitors for the month, not counting the ignored museum
The museum with the highest number of visitors, not counting the ignored museum
The museum with the lowest number of visitors, not counting the ignored museum
The ignored museum.


# Getting Started
TODO: Guide users through getting your code up and running on their own system. In this section you can talk about:
1.	Setup Node Environment
2.  Install Package Depedency 
3.	Written in API service in TypeScript
4.  Testing service Rest Client package

# Setup Node Environment
 1. Download and Install lastest Node js by using this link [Click here to download nodejs](https://nodejs.org/en/download/) 
 
# Install Package Depedency 
1.	After Initalsation open new project directory in the command windows/vscode
2.	Run  "npm init" command -> Initialize the project (create package.json file)
3.	Run  "npm i typescript" command -> this is used to create typescript Environment
4.	Run  "npm  i express" command -> this used for to create API service
5.	Run  "npm i axios" command -> this will act as http service client to get the data from api
6.	Run  "npm i jest" command -> this is used for to run the test case

# Sample input and ouput

  Input : GET /api/visitors?date=1404198000000
  OutPut:
  {
    "attendance": {
        “month”: “Jul”,
        “year”: “2014”,
        “highest”: {
          “museum”: “avila_adobe”,
          “visitors”: 32378,
        }
        “lowest”: {
          “museum”: “hellman_quon”,
          “visitors”: 120,
        },
       total: 60535
    }
}

  
   
# Testing service Rest Client package
TODO: To Test application with Postman/swagger/RestClient,Here explained RestClient Test 
1.	Install RestClient ![image](https://user-images.githubusercontent.com/24937459/146165270-d212b037-3db4-4b82-9f25-5e51db9f63b0.png)
2.  Create rest.http
3.	Add Method Type and endpoint 
      GET  http://localhost:7000/Get
4.	Add Content-Type
5.	Add Content boady
6.	Click Send Request 
 ![image](https://user-images.githubusercontent.com/24937459/146163621-85119889-fe99-4194-918b-e9118dd5ab44.png)

