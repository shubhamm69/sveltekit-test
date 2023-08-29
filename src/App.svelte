<script>
  import { Router, Route } from "svelte-routing";
  import DisplayPage from "./pages/DisplayPage.svelte";
</script>

<Router>
  <Route path="/" component={DisplayPage} />
</Router>
