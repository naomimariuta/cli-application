# Contact Management CLI application

A simple CLI application to manage contacts. You can list, get, add, and remove contacts using commands.

## Setup

1. Clone the repository or download the project files.
2. Install dependencies:
   ```bash
   npm install
   ```

````

3. Install `nodemon` for development:
   ```bash
   npm install --save-dev nodemon
   ```

## Scripts

- **Start app normally**:

  ```bash
  npm start
  ```

- **Start app with nodemon** (auto-restart on changes):
  ```bash
  npm run start:dev
  ```

## Commands

- **List all contacts**:

  ```bash
  node index.js --action list
  ```

- **Get contact by ID**:

  ```bash
  node index.js --action get --id <contact_id>
  ```

- **Add a new contact**:

  ```bash
  node index.js --action add --name <name> --email <email> --phone <phone>
  ```

- **Remove a contact by ID**:
  ```bash
  node index.js --action remove --id <contact_id>
  ```

## Screenshots

- **List Contacts**: ![List Contacts](https://ibb.co/2SPjS9Y)
- **Get Contact by ID**: ![Get Contact](https://ibb.co/z75bJ6D)
- **Add Contact**: ![Add Contact](https://ibb.co/6XcN3rN)
- **Remove Contact**: ![Remove Contact](https://ibb.co/k63Jpd1)

```

### Key Points:
- **Setup**: Instructions are kept brief with only the essential steps (installing dependencies).
- **Commands**: Directly shows the commands for `list`, `get`, `add`, and `remove`.
- **Screenshots**: Only includes essential screenshots of the commands in action.

This version keeps things simple and focused on the most critical information for running the app and understanding its functionality.
```
````
