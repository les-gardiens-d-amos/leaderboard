<template>
  <div>

  </div>
</template>

<script>
export default {
  props: {
    amosStats: {
      type: Object,
      required: true
    },
  },
  mounted() {
    console.log(this.amosStats);
  }
}
</script>

<style>

</style>
