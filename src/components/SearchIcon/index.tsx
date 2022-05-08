import { defineComponent, PropType, Ref } from 'vue'
import { Icon } from '@vicons/utils'

export default defineComponent({
  name: 'index',
  props: {
    search: {
      type: Object as PropType<Ref<string>>,
      required: true,
    },
  },
  setup(props, ctx) {
    const { search } = props
    return () => (
      <>
        <Icon size="28">
          {search.value === '谷歌' ? (
              <svg>
                <use href={'#icon-guge'}/>
              </svg>
          ) : search.value === 'DuckDuckGo' ? (
              <svg>
                <use href={'#icon-a-DuckDuckGo1'}/>
              </svg>
          ) : search.value === '必应' ? (
              <svg>
                <use href={'#icon-Bing'}/>
              </svg>
          ) : search.value === '百度' ? (
              <svg>
                <use href={'#icon-baidu'}/>
              </svg>
          ) : (
            ''
          )}
        </Icon>
      </>
    )
  },
})
