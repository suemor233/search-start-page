import { defineComponent, reactive, ref, watch } from 'vue'

import { Icon } from '@vicons/utils'
import { getBaiduTip } from '@/api'
import TipsBox from '@/components/TipsBox'
import { ITips } from '@/types/tips'
import './index.css'
import { Close } from '@vicons/ionicons5'
import Popselect from '@/components/Popselect'
import { useStorage } from '@vueuse/core'
import SearchIcon from '@/components/SearchIcon'
import {useInput} from "@/stores/inputState";

export default defineComponent({
  emits: ['isFocus'],
  setup(props, { emit }) {
    // TODO 太多flag了,来优化
    const inputState =  useInput()
    const inputValue = ref<string>('')
    const tips = reactive<ITips[]>([])
    const tipsShow = ref<boolean>(false)

    let firstFocus = false
    let watchStart = true

    const search = useStorage('MySearch', '谷歌')
    watch(inputValue, async () => {
      if (watchStart) {
        const res = await getBaiduTip({
          ie: 'utf-8',
          json: 1,
          prod: 'pc',
          wd: inputValue.value,
        })
        tips.length = 0
        Object.assign(tips, res.g)
        tipsShow.value = true
        emit('isFocus', true)
      }
      if (inputValue.value.length === 0) {
        tipsShow.value = false
      }
    })

    watch([inputValue,tipsShow], async () => {
      inputState.showAny = !(inputValue.value && tipsShow.value);
    })

    const switchSearch = () => {
      switch (search.value) {
        case '谷歌':
          window.open(
            `https://www.google.com/search?q=${inputValue.value}`,
            '_blank',
          )
          break
        case 'DuckDuckGo':
          window.open(`https://duckduckgo.com/?q=${inputValue.value}`, '_blank')
          break
        case '必应':
          window.open(
            `https://www.bing.com/search?q=${inputValue.value}`,
            '_blank',
          )
          break
        case '百度':
          window.open(
            `https://www.baidu.com/s?wd=${inputValue.value}`,
            '_blank',
          )
          break
      }
    }

    const keydown = (e: KeyboardEvent) => {
      if (e.code === 'Enter') {
        switchSearch()
      }
    }
    return () => (
      <>
        <div
          class={
            'flex justify-between items-center relative mt-10 w-full justify-start  animate__animated animate__bounceInDown'
          }
        >
          <div
            class={'z-10 box-border mt-2 ml-2 cursor-pointer'}
            onClick={() => (inputState.popSelectShow = !inputState.popSelectShow)}
          >
            <SearchIcon search={search} />
          </div>

          <input
            type="text"
            id={'myInput'}
            v-model={inputValue.value}
            onBlur={() =>
              setTimeout(() => {
                tipsShow.value = false
                emit('isFocus', false)
              }, 150)

            }
            onFocus={() => {
              tipsShow.value = true

              if (firstFocus) {
                emit('isFocus', true)
              }
              firstFocus = true
              inputState.popSelectShow = false
            }}
            autofocus
            onInput={() => (watchStart = true)}
            placeholder={'请输入内容'}
            onKeydown={(e) => keydown(e)}
            class={'my-input'}
          />
          {inputValue.value.length > 0 ? (
            <div
              class={'z-50 flex items-center mr-1 cursor-pointer '}
              onClick={() => {
                inputValue.value = ''
                document?.getElementById('myInput')?.focus()
              }}
            >
              <Icon color={'#70757A'} size="32">
                <Close />
              </Icon>
            </div>
          ) : (
            ''
          )}
          <div class={['search-selector', inputState.popSelectShow ? 'active' : '']}>
            <Popselect
              onSearch={(isSearch) => {
                search.value = isSearch
                inputState.popSelectShow = false
              }}
            />
          </div>

            <TipsBox
                tips={tips}
                tipsShow={tipsShow}
                onTipsData={(tips: string) => {
                  inputValue.value = tips
                  switchSearch()
                }}
                onSelectTips={(tips: string) => {
                  watchStart = false
                  inputValue.value = tips
                }}
                onIsFocus={() => emit('isFocus', false)}
            />
          </div>
      </>
    )
  },
})
