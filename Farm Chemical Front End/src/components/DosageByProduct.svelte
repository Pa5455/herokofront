<script>
    import Chart from 'svelte-frappe-charts';
    import {getContext, onMount} from "svelte";
    const doseService = getContext("DoseService");
  
    let totalByProduct = {
      labels: [],
      datasets: [
        {
          values: []
        }
      ]
    }
  
    function populateByProduct(doseList, products) {
      totalByProduct.labels = [];
      products.forEach(product => {
        totalByProduct.labels.push(`${product.brandName}, ${product.typeName}`)
        totalByProduct.datasets[0].values.push(0);
      })
      products.forEach((product, i) => {
        doseList.forEach(dose => {
          if (dose.product._id == product._id) {
            totalByProduct.datasets[0].values[i] += dose.amount;
          }
        });
      });
    }
  
    onMount(async () => {
      let doseList = await doseService.getDosage();
      let products = await doseService.getProducts()
      populateByProduct(doseList, products);
    });
  
  </script>
  
  <h1 class="title is-4">By Product</h1>
  <Chart data={totalByProduct} type="bar"/>