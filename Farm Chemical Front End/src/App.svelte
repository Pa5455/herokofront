<script>
  import {setContext} from "svelte";
  import {DoseService} from "./services/dose-service";
  import Main from "./pages/Main.svelte"
  import Login from "./pages/Login.svelte"
  import Signup from "./pages/Signup.svelte"
  import Report from "./pages/Report.svelte";
  import Dose from "./pages/Dose.svelte";
  import Map from "./pages/Map.svelte";
  import Router from "svelte-spa-router";
  import Charts from "./pages/Charts.svelte";


  setContext("DoseService", new DoseService("https://stormy-falls-57017.herokuapp.com"));

  let routes = {
    "/": Main,
    "/login": Login,
    "/signup": Signup,
    "/dose": Dose,
    "/report": Report,
    "/map": Map,
    "/charts": Charts,
    "/logout": Main
  }
</script>

<div class="container">
  <Router {routes}/>
</div>
