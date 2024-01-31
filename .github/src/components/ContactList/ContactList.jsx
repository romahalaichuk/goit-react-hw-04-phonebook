import React, { Component } from "react";
import PropTypes from "prop-types";
import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";

class ContactList extends Component {
  render() {
    const { contacts, deleteContact } = this.props;
    return (
      <ul className={styles.listContainer}>
        {contacts.map((contact) => (
          <Contact
            key={contact.id}
            contact={contact}
            deleteContact={deleteContact}
          />
        ))}
      </ul>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;
