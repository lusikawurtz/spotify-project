// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify({
  defaults: {
    VBtn: {
      color: 'green-accent-3',
      variant: 'flat',
      rounded: 'xs'
    },
  },
})