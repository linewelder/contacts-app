import { useEffect, useState } from "react";
import { fetchContact } from "../data/contacts";
import Contact from "../models/Contact";
import './Contact.css';
import { useParams } from "react-router-dom";

export default function ContactView() {
    const { contactId } = useParams();

    const [contact, setContact] = useState<Contact | null>(null);
    useEffect(() => {
        (async () => {
            setContact(null);
            const id = parseInt(contactId!);
            setContact(await fetchContact(id));
        })();
    }, [contactId]);

    return (
        <div className="contact-view">
            {contact ?
                <>
                    <h1>{contact.firstName} {contact.lastName}</h1>
                    {contact.phoneNumber &&
                        <p><span className="field-name">Phone Number:</span> {contact.phoneNumber}</p>
                    }
                    {contact.emailAddress &&
                        <p><span className="field-name">E-mail Address:</span> {contact.emailAddress}</p>
                    }
                </>
            :
                <h1>Loading...</h1>
            }
        </div>
    );
}
