<script lang="ts">
  interface Contact {
    id: number;
    created_at: string;
    name: string;
    address: string;
    country: string;
    phone: number;
  }
  import { Link } from "svelte-routing";
  export let contact: Contact;
  const redirectToDetails = () => {
    // Pass the contact ID as a parameter
    window.location.href = `/details/${contact.id}`;
  };
</script>

<!-- <div class="card" on:click={redirectToDetails}> -->
<div class="card">
  <h3>{contact.name}</h3>
  <p>{contact.country}</p>
  <p>Phone: {contact.phone}</p>
</div>

<style>
  .card {
    cursor: pointer;
    margin: 10px;
    padding: 15px;
    border: 1px solid #ccc;
    background-color: #f5f5f5;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s, box-shadow 0.3s;
  }

  h3 {
    margin: 0;
    font-size: 1.2rem;
    color: #333;
  }

  p {
    margin: 10px 0;
    color: #666;
  }

  .card:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
</style>
