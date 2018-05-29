<template>
  <div>
    <JSON :content="code" />
  </div>
</template>

<script>
import JSON from './JSON.js'

export default {
  name: 'app',
  components: {
    JSON
  },
  data () {
    return {
      code: `{
  "type": "record",
  "name": "events",
  "namespace": "com.sysco",
  "doc": "This is a sample Avro schema to get you started. Please edit",
  "fields": [
    {
      "name": "name",
      "type": "string"
    },
    {
      "name": "number1",
      "type": "int"
    },
    {
      "name": "number2",
      "type": "float"
    }
  ]
}`
    }
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
