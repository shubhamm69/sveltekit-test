<script lang="ts">
  import { updateContact, deleteContact } from "../services/storage";

  export let contact: Contact;

  interface Contact {
    id: number;
    created_at: string;
    name: string;
    address: string;
    country: string;
    phone: number;
  }

  let isEditing = false;
  let editedData: Contact = { ...contact };

  function toggleEdit() {
    isEditing = !isEditing;
    editedData = { ...contact };
  }

  async function saveChanges() {
    updateContact(contact.id, editedData);
    toggleEdit();
  }

  function deleteThisContact() {
    if (confirm("Are you sure you want to delete this contact?")) {
      deleteContact(contact.id);
    }
  }
</script>

<div class="contact-details">
  <h2>{contact.name}</h2>
  <p>Address: {contact.address}</p>
  <p>Country: {contact.country}</p>
  <p>Phone: {contact.phone}</p>
</div>
