import { useEffect, useState } from "react";
import Contact from "../models/Contact";
import { fetchContacts } from "../data/contacts";
import './Sidebar.css';
import { Link } from "react-router-dom";

export default function ContactList() {
    const [contacts, setContacts] = useState<Contact[] | null>(null);

    useEffect(() => {
        (async () => setContacts(await fetchContacts()))();
    }, []);

    return (
        <div className="contact-list">
            <div className="contact-list-header">
                <h1>Contacts:</h1>
            </div>
            {contacts?.map(contact =>
                <Link className="contact-list-contact" to={`/contacts/${contact.id}`}>
                    <h3>{contact.firstName} {contact.lastName}</h3>
                </Link>
            ) ?? <div className="contact-list-contact"><h3>Loading...</h3></div>}
        </div>
    );
}
