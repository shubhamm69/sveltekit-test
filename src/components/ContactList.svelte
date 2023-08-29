<script lang="ts">
  import { fetchContacts } from "../services/api";
  import { saveContacts } from "../services/storage";
  import Card from "./Card.svelte";

  let contacts: Contact[] = [];
  let searchInput = '';
  let filteredContacts: Contact[] = [];

  interface Contact {
    id: number;
    created_at: string;
    name: string;
    address: string;
    country: string;
    phone: number;
  }

  fetchContacts().then((data) => {
    contacts = data;
    filteredContacts = contacts;
    saveContacts(contacts);
  });

  function updateFilteredContacts() {
    filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(searchInput.toLowerCase())
    );
  }
</script>

<style>
  :global(body) {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
  }

  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }

  .search-bar {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }

  .search-bar input {
    flex: 1;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  .contact-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
  }
  
</style>

<div class="container">
  <div class="search-bar">
    <input type="text" placeholder="Search contacts..." bind:value={searchInput} on:input={updateFilteredContacts} />
  </div>

  <div class="contact-list">
    {#if filteredContacts.length > 0}
      {#each filteredContacts as contact (contact.id)}
        <div class="card">
          <Card {contact} />
        </div>
      {/each}
    {:else}
      <p>No contacts found.</p>
    {/if}
  </div>
</div>
