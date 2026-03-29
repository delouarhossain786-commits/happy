import React from 'react';
import './ContactsScreen.css';

const ContactsScreen = () => {
    const [contacts, setContacts] = React.useState([]);

    const fetchContacts = async () => {
        // Logic to fetch contacts from an API or database
    };

    const addContact = (contact) => {
        setContacts([...contacts, contact]);
        // Logic to save contact to API or database
    };

    const deleteContact = (contactId) => {
        setContacts(contacts.filter(contact => contact.id !== contactId));
        // Logic to delete contact from API or database
    };

    React.useEffect(() => {
        fetchContacts();
    }, []);

    return (
        <div className="contacts-screen">
            <h1>Contacts</h1>
            <ul>
                {contacts.map(contact => (
                    <li key={contact.id}>
                        {contact.name}
                        <button onClick={() => deleteContact(contact.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            <button onClick={() => addContact({id: new Date().getTime(), name: 'New Contact'})}>Add Contact</button>
        </div>
    );
};

export default ContactsScreen;