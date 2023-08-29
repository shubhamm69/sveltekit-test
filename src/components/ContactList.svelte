<script lang="ts">
  import { fetchContacts } from "../services/api";
  import { saveContacts } from "../services/storage";
  import Card from "./Card.svelte";

  let contacts: Contact[] = [];

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
    saveContacts(contacts);
  });
</script>

<div class="contact-list">
  {#each contacts as contact (contact.id)}
    <Card {contact} />
  {/each}
</div>

<style>
  .contact-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    padding: 20px;
  }
</style>
