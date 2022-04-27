import { defineComponent, onMounted, PropType, Ref, watch } from 'vue'
import { ITips } from '@/types/tips'
import './index.css'

export default defineComponent({
  emits: ['tipsData', 'selectTips'],
  props: {
    tips: {
      type: Array as PropType<ITips[]>,
      required: true,
    },
    tipsShow: {
      type: Object as PropType<Ref<boolean>>,
      required: true,
    },
    inputValue: {
      type: Object as PropType<Ref<string>>,
      required: true,
    },
  },
  setup(props, { emit }) {
    const { tips, tipsShow, inputValue } = props
    let selectLi = -1

    const enter = (tip: ITips) => {
      document
        .getElementsByTagName('li')
        [Number(tip.sa.substring(tip.sa.indexOf('_') + 1)) - 1].classList.add(
          'bg-gray-300',
        )
      document
        .getElementsByTagName('li')
        [Number(tip.sa.substring(tip.sa.indexOf('_') + 1)) - 1].classList.add(
          '-translate-x-1',
        )
    }

    const leave = (tip: ITips) => {
      document
        .getElementsByTagName('li')
        [
          Number(tip.sa.substring(tip.sa.indexOf('_') + 1)) - 1
        ].classList.remove('bg-gray-300')
      document
        .getElementsByTagName('li')
        [
          Number(tip.sa.substring(tip.sa.indexOf('_') + 1)) - 1
        ].classList.remove('-translate-x-1')
    }

    const deleteOld = () => {
      const tipsLi = document.getElementsByTagName('li')
      for (let i = 0; i < tipsLi.length; i++) {
        tipsLi[i].id = ''
        document.getElementsByTagName('li')[i].classList.remove('bg-gray-300')
        document
          .getElementsByTagName('li')
          [i].classList.remove('-translate-x-1')
      }
      return tipsLi
    }

    watch(tipsShow, () => {
      selectLi = -1
    })

    onMounted(() => {
      document.onkeydown = (e) => {
        if (e.code === 'ArrowUp') {
          const tipsLi = deleteOld()
          if (selectLi <= 0) {
            selectLi = tipsLi.length - 1
            tipsLi[selectLi].id = 'keySelect'
          } else {
            selectLi--
            tipsLi[selectLi].id = 'keySelect'
          }
          emit('selectTips', tipsLi[selectLi].innerText)
        } else if (e.code === 'ArrowDown') {
          const tipsLi = deleteOld()
          if (selectLi === tipsLi.length - 1) {
            selectLi = -1
          }
          selectLi++
          tipsLi[selectLi].id = 'keySelect'
          emit('selectTips', tipsLi[selectLi].innerText)
        }
      }
    })
    return () => (
      <>
        {tips.length > 0 && tipsShow.value ? (
          <div
            class={
              'bg-gray-500 w-full rounded-2xl bg-opacity-50 text-white  shadow-2xl absolute top-12 transition duration-1000 ease-in-out'
            }
          >
            <ul>
              {tips.map((tip) => {
                return (
                  <li
                    class={
                      'font-sans text-lg  p-2 transition duration-200 ease-in-out'
                    }
                    onMouseenter={() => enter(tip)}
                    onMouseleave={() => leave(tip)}
                    key={tip.sa}
                    onClick={() => emit('tipsData', tip.q)}
                  >
                    {tip.q}
                  </li>
                )
              })}
            </ul>
          </div>
        ) : null}
      </>
    )
  },
})
