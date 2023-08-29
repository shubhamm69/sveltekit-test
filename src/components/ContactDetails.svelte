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

{#if isEditing}
  <div class="card">
    <input bind:value={editedData.name} />
    <input bind:value={editedData.country} />
    <button on:click={saveChanges}>Save</button>
    <button on:click={toggleEdit}>Cancel</button>
  </div>
{:else}
  <div class="card">
    <h3>{contact.name}</h3>
    <p>{contact.country}</p>
    <button on:click={toggleEdit}>Edit</button>
    <button on:click={deleteThisContact}>Delete</button>
  </div>
{/if}
