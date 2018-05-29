import Ace from '../'
import 'brace/mode/json'

export default {
  extends: Ace,
  mounted () {
    this.createEditor()
    this.setMode('ace/mode/json')
  }
}
