import React from "react";

export default function ContactList({ onContacts }) {
  return (
    <ul>
      {onContacts.map((contact) => (
        <li key={contact.id}>{contact.name}</li>
      ))}
    </ul>
  );
}
