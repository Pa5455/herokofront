<script>
  // import 'leaflet/dist/leaflet.css';
  import {LeafletMap} from '../services/leaflet-map';
  import {getContext, onMount} from "svelte";

  const doseService = getContext("DoseService");

  const mapConfig = {
    location: {lat: 52.160858, lng: -7.152420},
    zoom: 8,
    minZoom: 1,
  };
  let map = null;

  onMount(async () => {
    map = new LeafletMap("dose-map", mapConfig);
    map.showZoomControl();
    map.addLayerGroup('Dosage');
    map.showLayerControl();

    const dosage = await doseService.getDosage();
    dosage.forEach(dose => {
      addDoseMarker(dose);
    });

    
  });

  export function addDoseMarker(dose) {
    const doseStr = `${dose.product.brandName} ${dose.product.typeName} ${dose.amount.toString()} Ltr`;
    map.addMarker({lat: dose.lat, lng: dose.lng}, doseStr, "Dosage",);
    map.moveTo(11, {lat: dose.lat, lng: dose.lng});
  }
</script>

<div class="box" id="dose-map" style="height:800px"></div>

