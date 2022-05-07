import { defineComponent, onMounted, PropType, Ref, watch } from 'vue'
import { ITips } from '@/types/tips'
import './index.css'

export default defineComponent({
  emits: ['tipsData', 'selectTips', 'isFocus'],
  props: {
    tips: {
      type: Array as PropType<ITips[]>,
      required: true,
    },
    tipsShow: {
      type: Object as PropType<Ref<boolean>>,
      required: true,
    },
  },
  setup(props, { emit }) {
    const { tips, tipsShow } = props
    let selectLi = -1

    const enter = (tip: ITips) => {
      selectLi = Number(tip.sa.substring(tip.sa.indexOf('_') + 1)) - 1
      document
        .getElementsByTagName('li')
        [Number(tip.sa.substring(tip.sa.indexOf('_') + 1)) - 1].classList.add(
          'bg-gray-300','rounded-lg','bg-opacity-50','transition'
        )
    }

    const leave = (tip: ITips) => {
      document
        .getElementsByTagName('li')
        [
          Number(tip.sa.substring(tip.sa.indexOf('_') + 1)) - 1
        ].classList.remove('bg-gray-300','transition','bg-opacity-50','rounded-lg')
    }

    const deleteOld = () => {
      const tipsLi = document.getElementsByTagName('li')
      for (let i = 0; i < tipsLi.length; i++) {
        tipsLi[i].id = ''
        document.getElementsByTagName('li')[i].classList.remove('bg-gray-300','transition','bg-opacity-50','rounded-lg')
      }
      return tipsLi
    }

    watch(tipsShow, () => {
      selectLi = -1
    })

    onMounted(() => {
      document.onkeydown = (e) => {
        if (e.code === 'ArrowUp') {
          e.preventDefault()
          const tipsLi = deleteOld()
          if (selectLi <= 0) {
            selectLi = tipsLi.length - 1
          } else {
            selectLi--
          }
          tipsLi[selectLi].id = 'keySelect'
          emit('selectTips', tipsLi[selectLi].innerText)
        } else if (e.code === 'ArrowDown') {
          e.preventDefault()

          const tipsLi = deleteOld()
          if (selectLi === tipsLi.length - 1) {
            selectLi = -1
          }
          selectLi++
          tipsLi[selectLi].id = 'keySelect'
          emit('selectTips', tipsLi[selectLi].innerText)
        } else if (e.code === 'Escape') {
          setTimeout(() => {
            tipsShow.value = false
            emit('isFocus', false)
          }, 150)
        }
      }
    })
    return () => (
      <>
        {tips.length > 0 && tipsShow.value ? (
          <div
            class={
              'p-1.5 bg-gray-500 w-full rounded-2xl bg-opacity-50 text-white shadow-2xl absolute top-12 animate__animated animate__fadeIn'
            }
          >
            <ul>
              {tips.map((tip) => {
                return (
                  <li
                    class={
                      'font-sans text-lg  p-2 transition duration-200 ease-in-out cursor-pointer'
                    }
                    onMouseenter={() => {
                      deleteOld()
                      enter(tip)
                    }}
                    onMouseleave={() => leave(tip)}
                    onClick={() => {
                      emit('tipsData', tip.q)
                      tipsShow.value = false
                    }}
                    key={tip.sa}
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
