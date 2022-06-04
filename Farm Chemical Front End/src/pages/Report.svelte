<script>
  import homer2 from "/src/assets/homer2.png";
  import DoseList from "../components/DoseList.svelte";
  import TitleBar from "../components/TitleBar.svelte";
  import MainNavigator from "../components/MainNavigator.svelte";
</script>

<div class="columns is-vcentered">
  <div class="column is-two-thirds">
    <TitleBar subTitle={"Dosage so far..."} title={"Curran Farm Chemicals Ltd"}/>
  </div>
  <div class="column">
    <MainNavigator/>
  </div>
</div>

<div class="columns">
  <div class="column has-text-centered">
    <img alt="Homer" src={homer2} width="300"/>
  </div>
  <div class="column box has-text-centered">
    <h1 class="title is-4">Dosage to date</h1>
    <DoseList/>
  </div>
</div>
