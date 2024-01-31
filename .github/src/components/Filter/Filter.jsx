import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Filter.module.css";

class Filter extends Component {
  render() {
    const { filter, setFilter } = this.props;
    return (
      <label>
        Filter contacts:
        <input
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className={styles.filterInput}
        />
      </label>
    );
  }
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};

export default Filter;
