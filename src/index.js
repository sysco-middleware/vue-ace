import Ace from 'ace-builds/src-min-noconflict/ace'

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
    }
  },
  data () {
    return {
      theme: '',
      mode: '',
      editor: null
    }
  },
  methods: {
    setTheme (theme) {
      if (!this.$data.editor) {
        return
      }

      this.$data.theme = theme
      this.$data.editor.setTheme(theme)
    },
    setMode (mode) {
      if (!this.$data.editor) {
        return
      }

      this.$data.mode = mode
      this.$data.editor.session.setMode(mode)
    },
    setValue (code) {
      if (!this.$data.editor) {
        return
      }

      this.$data.editor.session.setValue(code)
    },
    createEditor (options) {
      this.$data.editor = Ace.edit(this.editorId)
      this.$data.editor.setOptions(options || {})

      // TODO: listen to all events
    }
  },
  beforeDestroy () {
    if (this.$data.editor) {
      this.$data.editor.destroy()
    }
  }
}
