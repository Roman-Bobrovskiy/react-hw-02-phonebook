import React, { Component } from "react";
import Section from "./components/Section/Section";
import Form from "./components/Fomr/Form";
import ContactList from "./components/ContactList/ContactList";
import Search from "./components/Search/Search";

import { v4 as uuidv4 } from "uuid";

export default class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
      { id: "id-5", name: "Roman", number: "227-91-27" },
    ],
    filter: "",
  };

  addName = (name, inputNumer) => {
    let listName = {
      id: uuidv4(),
      name: name,
      number: inputNumer,
    };

    let contacts = this.state.contacts;
    let namesList = contacts
      .map((contact) => contact.name)
      .includes(listName.name);

    // console.log(namesList);

    if (!namesList) {
      this.setState((prevState) => {
        return {
          contacts: [...prevState.contacts, listName],
        };
      });
    } else {
      alert(`${listName.name} already in contacts`);
    }
  };

  getFilter = () => {
    let { contacts, filter } = this.state;
    // console.log(contacts.filter((contact) => contact.name.includes(filter)));
    return contacts.filter((contact) => contact.name.includes(filter));
  };

  handleSearch = (event) => {
    this.setState({ filter: event.target.value });
    this.getFilter();
  };

  removeContact = (id) => {
    // console.log(id);
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter((contact) => contact.id !== id),
      };
    });
  };

  render() {
    let { contacts, filter } = this.state;
    let filterredList = this.getFilter();

    return (
      <div>
        <Section title="Phonebook">
          <Form onAddName={this.addName} />
          <Section title="Contacts">
            <Search onHandleSearch={this.handleSearch} value={filter} />

            {filterredList.length === 0 ? (
              <ContactList
                onRemoveContact={this.removeContact}
                contacts={contacts}
              />
            ) : (
              <ContactList
                onRemoveContact={this.removeContact}
                contacts={filterredList}
              />
            )}
          </Section>
        </Section>
      </div>
    );
  }
}
