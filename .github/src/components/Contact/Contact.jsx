import React from "react";
import PropTypes from "prop-types";
import styles from "./Contact.module.css";

class Contact extends React.Component {
  render() {
    const { contact, deleteContact } = this.props;
    return (
      <li className={styles.contactItem}>
        <span className={styles.contactInfo}>
          {contact.name}: {contact.number}
        </span>
        <button
          className={styles.deleteButton}
          onClick={() => deleteContact(contact.id)}
        >
          Delete
        </button>
      </li>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default Contact;
