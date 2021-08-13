import React from "react";

export default function ContactList({ onContacts }) {
  console.log("on", onContacts);
  return (
    <ol>
      {onContacts.map((contact) => (
        <li key={contact.id}>
          {contact.name} {contact.number}
        </li>
      ))}
    </ol>
  );
}
