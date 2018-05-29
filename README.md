# vue-ace

vue-ace is a wrapper for [Ace](https://ace.c9.io/) in vue. You have to seperately install Ace in your project.

# Install

- `npm i --save @sysco-middleware/vue-ace ace-builds`

# Getting started

Create a new component and extend it with the vue-ace module.

```javascript
// CodeEditor.js
import Ace from '@sysco-middleware/vue-ace'

export default {
  extends: Ace,
  mounted () {
    // Initialize a new ACE editor
    this.createEditor({
      // Options
    })
  }
}
```
