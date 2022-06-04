<script>
  import {createEventDispatcher, getContext, onMount} from "svelte";
  import Coordinates from "./Coordinates.svelte";

  const dispatch = createEventDispatcher();

  const doseService = getContext("DoseService");

  let amount = 0;

  let productList = [];
  let selectedProduct = "";

  let paymentMethods = ["drum", "bottle"];
  let selectedMethod = "";

  let lat = 52.160858;
  let lng = -7.152420;

  let message = "Please input dose ammount in litres";

  onMount(async () => {
    productList = await doseService.getProducts()
  });

  async function dose() {
    if (selectedProduct && amount && selectedMethod) {
      const productNames = selectedProduct.split(',')
      const product = productList.find(product => product.brandName == productNames[0] && product.typeName == productNames[1]);
      const dose = {
        amount: amount,
        method: selectedMethod,
        product: product._id,
        lat: lat,
        lng: lng
      };
      const success = await doseService.dose(dose);
      if (!success) {
        message = "Dose entry not completed - some error occurred";
        return;
      }
      message = `Thanks! You dose rate updated ${amount} for ${product.brandName} ${product.typeName}`;
      dispatch("message", {
        dose: dose,
      });
    } else {
      message = "Please select volume, packaging method and product";
    }
  }
</script>

<form on:submit|preventDefault={dose}>
  <div class="field">
    <label class="label" for="amount">Enter Volume Usage in Litres</label> <input bind:value={amount} class="input" id="amount"
                                                                  name="amount" placeholder="Litres" type="number">
  </div>
  <div class="field">
    <div class="control">
      {#each paymentMethods as method}
        <input bind:group={selectedMethod} class="radio" type="radio" value="{method}"> {method}
      {/each}
    </div>
  </div>
  <div class="field">
    <div class="select">
      <select bind:value={selectedProduct}>
        {#each productList as product}
          <option>{product.brandName},{product.typeName}</option>
        {/each}
      </select>
    </div>
  </div>
  <Coordinates bind:lat={lat} bind:lng={lng}/>
  <div class="field">
    <div class="control">
      <button class="button is-link is-light">Dose</button>
    </div>
  </div>
  <div class="section">
    {message}
  </div>
</form>

