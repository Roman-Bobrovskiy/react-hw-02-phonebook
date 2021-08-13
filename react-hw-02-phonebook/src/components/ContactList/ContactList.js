import React from "react";

export default function ContactList({ contacts }) {
  return (
    <ol>
      {contacts.map((contact) => (
        <li key={contact.id}>
          {contact.name} {contact.number}
        </li>
      ))}
    </ol>
  );
}
