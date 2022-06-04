<script>
  import homer from "/src/assets/homer.png";
  import WelcomeNavigator from "../components/WelcomeNavigator.svelte";
  import TitleBar from "../components/TitleBar.svelte";
  import {getContext} from "svelte";

  const doseService = getContext("DoseService");
  doseService.logout();
</script>

<div class="columns is-vcentered">
  <div class="column is-two-thirds">
    <TitleBar subTitle={"Sign up or Log in"} title={"Curran Farm Chemicals Ltd"}/>
  </div>
  <div class="column">
    <WelcomeNavigator/>
  </div>
</div>

<div class="columns is-vcentered content">
  <div class="column has-text-centered">
    <img alt="homer" src="{homer}" width="300">
  </div>
  <div class="column">
    <h1 class="title">Track Chemical Usage per location on Map</h1>
    <p>Record Litres Used at each location</p>
  </div>
</div>

