import Contact from "../models/Contact";

function sleep(ms: number): Promise<undefined> {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export async function fetchContacts(): Promise<Contact[]> {
    await sleep(1000);

    return [
        {
            id: 1,
            firstName: "John",
            lastName: "Doe",
            phoneNumber: "+1978654321",
            emailAddress: "john@doe.com",
        },
        {
            id: 2,
            firstName: "Marta",
            lastName: "Nowak",
            phoneNumber: "+48123456789",
            emailAddress: null,
        },
        {
            id: 3,
            firstName: "Bartosz",
            lastName: "Kowalski",
            phoneNumber: null,
            emailAddress: "bartosz.kowalski@mail.pl",
        },
    ];
}

export async function fetchContact(id: number): Promise<Contact | null> {
    return (await fetchContacts()).find(contact => contact.id === id) ?? null;
}
