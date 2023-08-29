<script lang="ts">
  import { onMount } from "svelte";
  import { getContacts } from "../services/storage";
  import ContactDetails from "../components/ContactDetails.svelte";

  interface Contact {
    id: number;
    created_at: string;
    name: string;
    address: string;
    country: string;
    phone: number;
  }

  let contactId: number;
  let contact: Contact | undefined;

  onMount(() => {
    const contacts: Contact[] = getContacts();
    contact = contacts.find((c) => c.id === contactId);
  });
</script>

<h1>Contact Details</h1>

{#if contact}
  <ContactDetails {contact} />
{:else}
  <p>Contact not found.</p>
{/if}
