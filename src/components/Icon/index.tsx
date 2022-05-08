import {defineComponent, ref, watch} from 'vue'
import './index.css'

export default defineComponent({
  props: {
    name: String,
  },
  setup(props, ctx) {
    const id = ref(`#${props.name}`)
    return () => (
      <>
        <svg class="icon-my">
          <use href={id.value} />
        </svg>

      </>
    )
  },
})
