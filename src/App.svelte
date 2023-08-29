<script>
  import { Router, Route } from "svelte-routing";
  import DisplayPage from "./pages/DisplayPage.svelte";
  import DetailsPage from "./pages/DetailsPage.svelte";
</script>

<Router>
  <Route path="/" component={DisplayPage} />
  <Route path="/details/:id" component={DetailsPage} />
</Router>
