<template>
  <v-card class="map-container">
    <l-map class="map" :zoom="zoom" :center="center" v-if="markerIsReady">
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <l-marker v-for="(mark, i) in markerLatLng" :key="i" :lat-lng="mark" :icon="markerIcon"></l-marker>
    </l-map>
  </v-card>
</template>

<script>
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";
import { icon } from "leaflet";
import geohash from "ngeohash";

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker
  },
  props: {
    location: {
      type: Array,
      required: true
    },
  },
  data () {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:'&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 15,
      center: [51.505, -0.159],
      markerLatLng: null,
      markerIcon: icon({
        iconUrl: require("../../../assets/amosIcons/pawIcon.png"),
        iconSize: [32, 37],
        iconAnchor: [16, 37]
      }),
      markerIsReady: false
    }
  },
  methods: {
    managerMarker() {
      for (let i = 0; i < this.location.length; i++) {
        let latlong = geohash.decode(this.location[i]);
        this.location[i] = [latlong.latitude, latlong.longitude]
      }
      this.markerLatLng = this.location;
      this.markerIsReady = true;
    }
  },
  mounted() {
    this.managerMarker();
  }
}
</script>

<style scoped>
.map-container {
  width: 75%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.map {
  width: 100%;
  height: 450px;
  overflow: hidden;
  float: right;
}
</style>