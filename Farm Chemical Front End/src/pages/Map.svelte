<script>
  import TitleBar from "../components/TitleBar.svelte";
  import MainNavigator from "../components/MainNavigator.svelte";
  import DoseMap from "../components/DoseMap.svelte";
</script>

<div class="columns is-vcentered">
  <div class="column is-two-thirds">
    <TitleBar subTitle={"Map of Dose sold Locations"} title={"Curran Farm Chemicals Ltd."}/>
  </div>
  <div class="column">
    <MainNavigator/>
  </div>
</div>

<DoseMap/>
