<template>
  <div>
    <JSON />
  </div>
</template>

<script>
import JSON from './JSON.js'

export default {
  name: 'app',
  components: {
    JSON
  }
}
</script>

<style>
.ace_editor {
  width: 700px;
  height: 200px;
  margin: 2rem auto;
}
</style>
