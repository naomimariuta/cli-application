const { error } = require("console");
const fs = require("fs");
const path = require("path");
const contactsPath = path.join(__dirname, "db", "contacts.json");

function listContacts() {
  fs.readFile(contactsPath, "utf-8", (error, data) => {
    if (error) throw error;
    console.table(JSON.parse(data));
  });
}

function getContactById(contactId) {
  if (isNaN(contactId)) {
    console.error("Error: The contact ID must be a valid number.");
    process.exit(1);
  }
  fs.readFile(contactsPath, "utf-8", (error, data) => {
    if (error) throw error;
    const contacts = JSON.parse(data);
    const contact = contacts.find(
      (contact) => Number(contact.id) === contactId
    );
    if (contact === undefined) {
      console.warn("Contact does not exist in the list! ^_^");
    } else {
      console.log(contact);
    }
  });
}

function removeContact(contactId) {
  if (isNaN(contactId)) {
    console.error("Error: The contact ID must be a valid number.");
    process.exit(1);
  }
  fs.readFile(contactsPath, "utf-8", (error, data) => {
    if (error) throw error;
    const contacts = JSON.parse(data);
    const newContacts = contacts.filter(
      (contact) => Number(contact.id) !== contactId
    );
    if (newContacts.length === contacts.length) {
      console.warn("Contact does not exist in the list ^_^");
      return;
    }
    fs.writeFile(
      contactsPath,
      JSON.stringify(newContacts, null, 2),
      (error) => {
        if (error) throw error;
        console.log("Contact removed successfully ^_^");
        console.table(newContacts);
      }
    );
  });
}

function addContact(name, email, phone) {
  fs.readFile(contactsPath, "utf-8", (error, data) => {
    if (error) throw error;
    const contacts = JSON.parse(data);
    const newContact = {
      id: (contacts.length + 2).toString(),
      name,
      email,
      phone,
    };
    contacts.push(newContact);
    fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2), (error) => {
      if (error) throw error;
      console.log("Contact added successfully ^_^");
      console.table(contacts);
    });
  });
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
