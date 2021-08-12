import React, { Component } from "react";
import Section from "./components/Section/Section";
import Form from "./components/Fomr/Form";
import ContactList from "./components/ContactList/ContactList";

import { v4 as uuidv4 } from "uuid";

export default class App extends Component {
  state = {
    contacts: [],
    name: "",
  };

  addName = (text) => {
    let listName = {
      id: uuidv4(),
      name: text,
    };
    this.setState((prevState) => {
      return {
        contacts: [...prevState.contacts, listName],
      };
    });
  };

  render() {
    let { contacts } = this.state;
    console.log(contacts);
    return (
      <div>
        <Section title="Phonebook">
          <Form onAddName={this.addName} />
          <ContactList onContacts={contacts} />
        </Section>
      </div>
    );
  }
}
