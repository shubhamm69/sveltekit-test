<script lang="ts">
  import ContactList from "../components/ContactList.svelte";
  import { Route, Router } from "svelte-routing";
  import DetailsPage from "./DetailsPage.svelte";
</script>

<style>
  :global(body) {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f8f8f8;
  }
  h1 {
    background-color: #333;
    color: white;
    padding: 15px;
    margin: 0;
  }
  .content {
    max-width: 1200px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
</style>

<h1>Contact List</h1>

<div class="content">
  <Router>
    <Route path="/">
      <ContactList />
    </Route>
    <Route path="/details/:id" let:params>
      <DetailsPage contactId={Number(params.id)} />
    </Route>
  </Router>
</div>
