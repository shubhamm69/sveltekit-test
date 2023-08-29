<script lang="ts">
  interface Contact {
    id: number;
    created_at: string;
    name: string;
    address: string;
    country: string;
    phone: number;
  }
  import { Link } from 'svelte-routing';
  export let contact: Contact;
</script>

<Link to={`/details/${contact.id}`}>
  <div class="card">
    <h3>{contact.name}</h3>
    <p>{contact.country}</p>
  </div>
</Link>

<style>
  .card {
    border: 1px solid #ccc;
    padding: 15px;
    background-color: #f5f5f5;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
</style>
