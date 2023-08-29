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
    // Add other properties as needed
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
