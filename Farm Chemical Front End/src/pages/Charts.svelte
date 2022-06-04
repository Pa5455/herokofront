<script>
    import TitleBar from "../components/TitleBar.svelte";
    import MainNavigator from "../components/MainNavigator.svelte";
    import DosageByProduct from "../components/DosageByProduct.svelte";
    import DosageByMethod from "../components/DosageByMethod.svelte";
  </script>
  
  <div class="columns is-vcentered">
    <div class="column is-two-thirds">
      <TitleBar subTitle={"Dosage usage Analytics"} title={"Curran Farm Chemicals Ltd."}/>
    </div>
    <div class="column">
      <MainNavigator/>
    </div>
  </div>
  
  <div class="columns">
    <div class="column has-text-centered">
      <DosageByMethod/>
    </div>
    <div class="column has-text-centered">
      <DosageByProduct/>
    </div>
  </div>