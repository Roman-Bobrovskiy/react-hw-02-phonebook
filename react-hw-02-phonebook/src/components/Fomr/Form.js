import React, { Component } from "react";
// import PropTypes from "prop-types";

export default class Form extends Component {
  state = {
    text: "",
  };

  handleChange = (event) => {
    this.setState({
      text: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onAddName(this.state.text);
    this.setState({
      text: "",
    });
  };

  render() {
    let { text } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={text}
            onChange={this.handleChange}
          />
          <button type="submit">Add contact</button>
        </label>
      </form>
    );
  }
}

// Form.propTypes = {};
