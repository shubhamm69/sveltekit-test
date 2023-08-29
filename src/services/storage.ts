const CONTACTS_KEY = 'contacts';

export function saveContacts(contacts: any[]) {
    localStorage.setItem(CONTACTS_KEY, JSON.stringify(contacts));
}

export function getContacts(): any[] {
    const contactsJson = localStorage.getItem(CONTACTS_KEY);
    return contactsJson ? JSON.parse(contactsJson) : [];
}

export function updateContact(contactId: number, updatedData: any) {
    const contacts = getContacts();
    const updatedContacts = contacts.map(contact =>
        contact.id === contactId ? { ...contact, ...updatedData } : contact
    );
    saveContacts(updatedContacts);
}

export function deleteContact(contactId: number) {
    const contacts = getContacts();
    const updatedContacts = contacts.filter(contact => contact.id !== contactId);
    saveContacts(updatedContacts);
}
