import {computed, defineComponent, reactive, ref, watch} from 'vue'

import { SearchOutline } from '@vicons/ionicons5'
import { Icon } from '@vicons/utils'
import { getBaiduTip } from '@/api'
import TipsBox from "@/components/TipsBox";
import {ITips} from "@/types/tips";

export default defineComponent({
  setup(props, ctx) {
      const inputValue = ref<string>('')
      const tips = reactive<ITips[]>([])
      watch(inputValue,async ()=>{

          const res = await getBaiduTip({
              ie: 'utf-8',
              json: 1,
              prod: 'pc',
              wd: inputValue.value,
          })
        tips.length = 0

          Object.assign(tips,res.g)

      })
        return () => (
          <>
              <div class={'absolute top-1/3 left-1/2 w-200 transform -translate-x-1/2 -translate-y-1/2'}>
                  <form class={'flex relative'}>
                      <Icon color="#312C80" size="38" class={'z-10 box-border p-1 ml-1'}>
                          <SearchOutline/>
                      </Icon>
                      <input
                          type="text"
                          v-model={inputValue.value}
                          placeholder={'请输入内容'}
                          class={
                              'placeholder-white pl-12 w-full absolute border-2 bg-gray-500 border-opacity-80 bg-opacity-50 backdrop-blur-md text-2xl font-sans font-extralight text-white rounded-2xl box-border p-1 border-white border-opacity-90 focus:shadow-2xl focus:outline-none'
                          }
                      />
                  </form>
                  <TipsBox tips={tips}/>
              </div>


          </>
        )
  },
})


