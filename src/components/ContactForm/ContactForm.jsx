import React, { Component } from "react";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";
import styles from "./ContactForm.module.css";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      number: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    this.props.addContact({ id: nanoid(), name, number });
    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    return (
      <form className={styles.formContainer} onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces."
            required
            value={this.state.name}
            onChange={this.handleChange}
            className={styles.input}
          />
        </label>
        <label>
          Number:
          <input
            type="tel"
            name="number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.handleChange}
            className={styles.input}
          />
        </label>
        <button type="submit" className={styles.button}>
          Add Contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};

export default ContactForm;
