<script lang="ts">
  import ContactList from "../components/ContactList.svelte";
  import { Route, Router } from "svelte-routing";
  import DetailsPage from "./DetailsPage.svelte";
</script>

<h1>Contact List</h1>

<Router>
  <Route path="/">
    <ContactList />
  </Route>
  <Route path="/details/:id" let:params>
    <DetailsPage contactId={Number(params.id)} />
  </Route>
</Router>
