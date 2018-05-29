import Ace from 'brace'

export default {
  render: function (createElement) {
    return createElement(
      'div', {
        class: this.cssClasses
      },
      [
        createElement(
          'div', {
            attrs: {
              id: this.editorId
            },
            ref: 'editor'
          }
        )
      ]
    )
  },
  props: {
    editorId: {
      default: 'ace',
      type: String
    },
    cssClasses: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      theme: '',
      mode: '',
      editor: null
    }
  },
  watch: {
    content () {
      if (!this.editor) {
        return
      }

      this.setValue(this.content)
    }
  },
  methods: {
    setTheme (theme) {
      if (!this.editor) {
        return
      }

      this.theme = theme
      this.editor.setTheme(theme)
    },
    setMode (mode) {
      if (!this.editor) {
        return
      }

      this.mode = mode
      this.editor.session.setMode(mode)
    },
    setValue (code) {
      if (!this.$data.editor) {
        return
      }

      this.editor.session.setValue(code)
    },
    createEditor (options) {
      this.editor = Ace.edit(this.editorId)
      this.editor.setOptions(options || {})
      this.setValue(this.content)

      // TODO: listen to all events
    }
  },
  beforeDestroy () {
    if (this.$data.editor) {
      this.$data.editor.destroy()
    }
  }
}
