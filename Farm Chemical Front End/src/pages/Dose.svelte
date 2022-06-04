<script>
  import DoseForm from "../components/DoseForm.svelte";
  import TitleBar from "../components/TitleBar.svelte";
  import MainNavigator from "../components/MainNavigator.svelte";
  import DoseMap from "../components/DoseMap.svelte";

  let doseMap = null;

  function doseMade(event) {
    doseMap.addDoseMarker(event.detail.dose);
  }

  
</script>

<div class="columns is-vcentered">
  <div class="column is-two-thirds">
    <TitleBar subTitle={"Please add volume of product used per dosage at location"} title={"Curran Farm Chemicals Ltd. "}/>
  </div>
  <div class="column">
    <MainNavigator/>
  </div>
</div>

<div class="columns is-vcentered">
  <div class="column has-text-centered">
    <DoseMap bind:this={doseMap}/>
  </div>
  <div class="column box has-text-centered">
    <h1 class="title is-4">Record usage here at location</h1>
    <DoseForm on:message={doseMade}/>
  </div>
</div>
