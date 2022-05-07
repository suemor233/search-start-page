import { defineComponent, ref } from 'vue'
import './index.css'

export default defineComponent({
  props: {
    name: String,
  },
  setup(props, ctx) {
    const id = ref(`#${props.name}`)
    return () => (
      <>
        <svg class="icon">
          <use href={id.value} />
        </svg>

      </>
    )
  },
})
