import Ace from '../'
import 'ace-builds/src-min-noconflict/mode-json'

export default {
  extends: Ace,
  mounted () {
    this.createEditor()
    this.setValue(`{
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
}`)
    this.setMode('ace/mode/json')
  }
}
