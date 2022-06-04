<script>
    import Chart from 'svelte-frappe-charts';
    import {getContext, onMount} from "svelte";
  
    const doseService = getContext("DoseService");
  
    let totalByMethod = {
      labels: ["drum", "bottle"],
      datasets: [
        {
          values: [0, 0]
        }
      ]
    };
  
    function populateByMethod(doseList) {
      doseList.forEach(dose => {
        if (dose.method == "drum") {
          totalByMethod.datasets[0].values[0] += dose.amount
        } else if (dose.method == "bottle") {
          totalByMethod.datasets[0].values[1] += dose.amount
        }
      });
    }
  
    onMount(async () => {
      let doseList = await doseService.getDosage();
      populateByMethod(doseList);
    });
  
  </script>
  
  <h1 class="title is-4">By Method</h1>

  <Chart data={totalByMethod} type="pie"/>