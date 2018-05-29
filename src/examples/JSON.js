import Ace from '../'
import 'ace-builds/src-min-noconflict/mode-json'

export default {
  extends: Ace,
  mounted () {
    this.createEditor()
    this.setMode('ace/mode/json')
  }
}
