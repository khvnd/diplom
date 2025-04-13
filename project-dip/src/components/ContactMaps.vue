<template>
    <GMapMap class="maps"
      :center="{ lat: -0.033928, lng: 109.356297 }"
      :zoom="15"
      :options="mapOptions"
      
    >
      <GMapMarker :position="{ lat: -0.033928, lng: 109.356297 }" />
    </GMapMap>
  </template>
  
  <script>
  import { defineComponent } from "vue";
  
  export default defineComponent({
    data() {
      return {
        mapOptions: {
            backgroundColor: "transparent",
          disableDefaultUI: true, 
          draggable: true, 
          zoomControl: false, 
          scrollwheel: true, 
          disableDoubleClickZoom: true, 
          styles: [
          { elementType: "geometry", stylers: [{ color: "#2c2c2c" }] }, 
          { elementType: "labels.text.fill", stylers: [{ color: "#757575" }] },
          { elementType: "labels.text.stroke", stylers: [{ color: "#212121" }] },
          { featureType: "road", elementType: "geometry", stylers: [{ color: "#383838" }] },
          { featureType: "water", elementType: "geometry", stylers: [{ color: "#1b1b1b" }] } 
    
          ]
        }
      };
    }
  });
  </script>
  
  <style>
    .maps {
        margin-bottom: 77px;
        width: 1198px; 
        height: 473px;
    }

    @media (max-width: 1024px) {
      .maps {
        width: 923px;
      }
    }

    @media (max-width: 768px) {
      .maps {
        width: 727px;
        height: 338px;
      }
    }

    @media (max-width: 425px) {
      .maps {
        width: 398px;
        height: 157px;
      }
    }
</style>