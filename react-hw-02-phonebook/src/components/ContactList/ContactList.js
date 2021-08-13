import React from "react";

export default function ContactList({ contacts, onRemoveContact }) {
  return (
    <ol>
      {contacts.map((contact) => (
        <li key={contact.id}>
          {`${contact.name} -`} {`tel: ${contact.number}   `}
          <button type="button" onClick={() => onRemoveContact(contact.id)}>
            delete
          </button>
        </li>
      ))}
    </ol>
  );
}
