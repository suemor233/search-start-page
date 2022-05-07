import { defineComponent } from 'vue'

export default defineComponent({
  emits: ['search'],
  setup(props, { emit }) {
    const selectData = ['谷歌', 'DuckDuckGo', '必应', '百度']
    return () => (
      <>
        <div
          class={
            'flex flex-col rounded-md bg-gray-500 bg-opacity-80 shadow-2xl'
          }
        >
          {selectData.map((item: string) => (
            <i
              key={item}
              class={
                'p-2 text-white font-mono not-italic hover:bg-gray-400 hover:rounded-md transition duration-100 cursor-pointer'
              }
              onClick={() => emit('search', item)}
            >
              {item}
            </i>
          ))}
        </div>
      </>
    )
  },
})
