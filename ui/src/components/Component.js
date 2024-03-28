import { h } from 'vue'
import { QBadge } from 'quasar'

export default {
  name: 'FQUI',

  setup () {
    return () => h(QBadge, {
      class: 'FQUI',
      label: 'FQUI'
    })
  }
}
