import React, { Component } from "react";
import PropTypes from "prop-types";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import { nanoid } from "nanoid";
import styles from "./App.module.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [
        { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
        { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
        { id: "id-3", name: "Eden Clements", number: "645-17-79" },
        { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
      ],
      filter: "",
    };
  }

  addContact = (contact) => {
    const { contacts } = this.state;
    if (
      contacts.find((c) => c.name.toLowerCase() === contact.name.toLowerCase())
    ) {
      alert("Contact with this name already exists!");
      return;
    }
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, { ...contact, id: nanoid() }],
    }));
  };

  deleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div className={styles.phonebookContainer}>
        <h1 className={styles.title}>Phonebook</h1>
        <ContactForm
          addContact={this.addContact}
          className={styles.formContainer}
        />

        <h2 className={styles.title}>Contacts</h2>
        <Filter
          filter={filter}
          setFilter={(value) => this.setState({ filter: value })}
        />
        <ContactList
          contacts={filteredContacts}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

App.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string,
};

export default App;
