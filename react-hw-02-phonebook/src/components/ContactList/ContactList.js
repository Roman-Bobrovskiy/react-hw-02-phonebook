import React from "react";

export default function ContactList({ onContacts }) {
  return (
    <ol>
      {onContacts.map((contact) => (
        <li key={contact.id}>{contact.name}</li>
      ))}
    </ol>
  );
}
