## Steps for creating a Todo List app
* Install necessary dependencies such as nodemon, express, and to set type to module in ```package.json file```
* Installation of Postman
* Create an Object with different list of items in an array
* A ```GET REQUEST``` to access home and initialized objects in an array

## The Basic CRUD operation
The data has been created, so it is necessary to read, update, and delete the content of this object
### GET METHOD
-----
* The array already created can be accessed using the ```id ``` as a key
> * ```    let data = list.filter((data) => data.id == req.params.id)```

### POST METHOD
* The object id is always updated whenever there's an input, and a conditional statement is used to handle the request body when it is empty.
### PUT METHOD
* The ```PUT METHOD``` updates the todo list as it has the ability to replace an existing object.
### DELETE METHOD
* The ```findIndex and splice``` method is used to get the index, and to also drop the chosen object.


# Todo List API

This is a simple **Todo List API** built with **Express.js** that allows users to manage their tasks. The API provides operations to **create, read, update, and delete** tasks.

## **Base URL**

```
http://localhost:3050
```

## **Endpoints**

### **1. Get API Info**

- **Method:** `GET`
- **Endpoint:** `/`
- **Description:** Returns a simple message confirming the API is running.
- **Response:**
  ```json
  "Todo list"
  ```

---

### **2. Retrieve All Todos**

- **Method:** `GET`
- **Endpoint:** `/list`
- **Description:** Retrieves all existing todos in the list.
- **Response:**
  ```json
  [
    {
      "id": 1,
      "title": "Education",
      "description": "University undergraduate",
      "status": true
    },
    {
      "id": 2,
      "title": "Work",
      "description": "Software Engineer",
      "status": false
    }
  ]
  ```

---

### **3. Retrieve a Specific Todo**

- **Method:** `GET`
- **Endpoint:** `/list/:id`
- **Description:** Retrieves a specific todo based on the given `id`.
- **Example Request:** `/list/1`
- **Response:**
  ```json
  [
    {
      "id": 1,
      "title": "Education",
      "description": "University undergraduate",
      "status": true
    }
  ]
  ```

---

### **4. Create a New Todo**

- **Method:** `POST`
- **Endpoint:** `/list`
- **Description:** Adds a new todo to the list.
- **Expected Request Body:**
  ```json
  {
    "title": "New Task",
    "description": "Description of the task",
    "status": false
  }
  ```
- **Response:**
  ```json
  [
    {
      "id": 1,
      "title": "Education",
      "description": "University undergraduate",
      "status": true
    },
    {
      "id": 2,
      "title": "Work",
      "description": "Software Engineer",
      "status": false
    },
    {
      "id": 3,
      "title": "New Task",
      "description": "Description of the task",
      "status": false
    }
  ]
  ```

---

### **5. Update an Existing Todo**

- **Method:** `PUT`
- **Endpoint:** `/list/:id`
- **Description:** Updates the description and status of a specific todo by `id`.
- **Example Request:** `/list/1`
- **Expected Request Body:**
  ```json
  {
    "description": "Updated description",
    "status": true
  }
  ```
- **Response:**
  ```json
  [
    {
      "id": 1,
      "title": "Education",
      "description": "Updated description",
      "status": true
    },
    {
      "id": 2,
      "title": "Work",
      "description": "Software Engineer",
      "status": false
    }
  ]
  ```

---

### **6. Delete a Todo**

- **Method:** `DELETE`
- **Endpoint:** `/list/:id`
- **Description:** Removes a specific todo from the list by `id`.
- **Example Request:** `/list/1`
- **Response:**
  ```json
  [
    {
      "id": 2,
      "title": "Work",
      "description": "Software Engineer",
      "status": false
    }
  ]
  ```

---

## **Error Handling**

### **1. Empty Request Body**

- If the request body is empty when creating a todo:
  ```json
  {
    "error": "Request body cannot be empty"
  }
  ```

### **2. Todo Not Found**

- If the requested `id` does not exist:
  ```json
  {
    "error": "Todo not found"
  }
  ```

---

## **How to Run the API**

1. Install dependencies:
   ```sh
   npm install
   ```
2. Start the server:
   ```sh
   node index.js
   ```
   Or use nodemon for automatic restarts:
   ```sh
   nodemon index.js
   ```
3. The server will run at `http://localhost:3050/`.

---

